import { ElementRef } from '@angular/core';
import { NgbInputDatepicker } from './datepicker-input';
export declare class NgbDatepickerToggle {
    private _elementRef;
    ngbDatepickerToggle: NgbInputDatepicker;
    constructor(_elementRef: ElementRef);
    toggle(): void;
    closeOnOutsideEvent($event: any): void;
    private isTargettingToggleButton($event);
}
