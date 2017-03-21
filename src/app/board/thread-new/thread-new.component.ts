import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../board.service';
import { Board } from '../../shared/models/board.model';

@Component({
    selector: 'cmm-thread-new',
    templateUrl: './thread-new.component.html',
    styleUrls: ['./thread-new.component.less']
})
export class ThreadNewComponent implements OnInit {

    board: Board;

    threadCreateForm: FormGroup;

    constructor(
        private boardService: BoardService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.board = this.route.snapshot.parent.data['board'];
        this.initForm();
    }

    onSubmit() {
        this.boardService.createThread(
            this.board.url,
            this.threadCreateForm.value.title,
            this.threadCreateForm.value.message
        ).subscribe(thread => {
            this.board.id = thread.board;
            this.router.navigate(['/board', thread.id], { queryParamsHandling: 'preserve'});
        });
    }

    private initForm() {
        this.threadCreateForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.maxLength(100)]],
            message: ['', [Validators.required, Validators.maxLength(65536)]]
        });
    }
}
