import { Directive, ElementRef, Input } from '@angular/core';
import { NgbInputDatepicker } from './datepicker-input';
var NgbDatepickerToggle = (function () {
    function NgbDatepickerToggle(_elementRef) {
        this._elementRef = _elementRef;
    }
    NgbDatepickerToggle.prototype.toggle = function () { this.ngbDatepickerToggle.toggle(); };
    NgbDatepickerToggle.prototype.closeOnOutsideEvent = function ($event) {
        if (!this.isTargettingToggleButton($event) && this.ngbDatepickerToggle.shouldCloseOnOutsideEvent($event)) {
            this.ngbDatepickerToggle.close();
        }
    };
    NgbDatepickerToggle.prototype.isTargettingToggleButton = function ($event) { return this._elementRef.nativeElement.contains($event.target); };
    NgbDatepickerToggle.decorators = [
        { type: Directive, args: [{
                    selector: '[ngbDatepickerToggle]',
                    host: { '(click)': 'toggle()', '(document:click)': 'closeOnOutsideEvent($event)' }
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerToggle.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    NgbDatepickerToggle.propDecorators = {
        "ngbDatepickerToggle": [{ type: Input },],
    };
    return NgbDatepickerToggle;
}());
export { NgbDatepickerToggle };
//# sourceMappingURL=datepicker-toggle.js.map