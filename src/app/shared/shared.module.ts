import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { DataService } from './data.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        DataService
    ],
    exports: [
        CommonModule
    ],
    declarations: []
})
export class SharedModule {}
