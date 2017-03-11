import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { Router } from "@angular/router";
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

import { BoardService } from '../board/board.service';

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
        private router: Router,
    ) {}

    ngOnInit() {
        this.initForm();
    }

    onSubmit() {
        const url = this.goToBoardForm.value.url;
        this.dataService.getOrCreateBoard(url).subscribe(board => {
            console.log(board);
        });
    }

    private initForm() {
        this.goToBoardForm = this.formBuilder.group({
            url: ['', [
                Validators.required,
                Validators.pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
            ]]
        });
    }
}
