import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { Router } from "@angular/router";
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

import { BoardService } from '../board/board.service';
import { HelperService } from '../core/helper.service';

@Component({
    selector: 'cmm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    goToBoardForm: FormGroup;

    constructor(
        private dataService: BoardService,
        private formBuilder: FormBuilder,
        private helperService: HelperService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.initForm();
    }

    onSubmit() {
        const url = this.goToBoardForm.value.url;
        this.dataService.getOrCreateBoard(url).subscribe(board => {
            this.router.navigate(['/board'], { queryParams: { url: url }});
        }, error => {
            this.router.navigate(['/board', 'not-found'], { queryParams: { url: url }});
        });
    }

    private initForm() {
        this.goToBoardForm = this.formBuilder.group({
            url: ['', [
                Validators.required,
                Validators.pattern(this.helperService.urlRegex)
            ]]
        });
    }
}
