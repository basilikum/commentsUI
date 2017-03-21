import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { Router } from "@angular/router";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { HelperService } from '../core/helper.service';


@Component({
    selector: 'cmm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

    goToBoardForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private helperService: HelperService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.initForm();
    }

    onSubmit() {
        const url = this.goToBoardForm.value.url;
        this.router.navigate(['/board'], { queryParams: { url: url }});
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
