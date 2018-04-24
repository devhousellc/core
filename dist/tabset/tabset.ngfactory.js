/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./tabset";
import * as i3 from "./tabset-config";
var styles_NgbTabset = [];
var RenderType_NgbTabset = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbTabset, data: {} });
export { RenderType_NgbTabset as RenderType_NgbTabset };
function View_NgbTabset_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgbTabset_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 4, "a", [["class", "nav-link"], ["href", ""], ["role", "tab"]], [[8, "id", 0], [2, "active", null], [2, "disabled", null], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (!!_co.select(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(3, null, ["\n          ", ""])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabset_2)), i0.ɵdid(5, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "]))], function (_ck, _v) { var currVal_8 = ((_v.context.$implicit.titleTpl == null) ? null : _v.context.$implicit.titleTpl.templateRef); _ck(_v, 5, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.id; var currVal_1 = (_v.context.$implicit.id === _co.activeId); var currVal_2 = _v.context.$implicit.disabled; var currVal_3 = (_v.context.$implicit.disabled ? "-1" : undefined); var currVal_4 = ((!_co.destroyOnHide || (_v.context.$implicit.id === _co.activeId)) ? (_v.context.$implicit.id + "-panel") : null); var currVal_5 = (_v.context.$implicit.id === _co.activeId); var currVal_6 = _v.context.$implicit.disabled; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_7); }); }
function View_NgbTabset_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgbTabset_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["role", "tabpanel"]], [[8, "className", 0], [1, "aria-labelledby", 0], [8, "id", 0], [1, "aria-expanded", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabset_5)), i0.ɵdid(3, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "]))], function (_ck, _v) { var currVal_4 = ((_v.parent.context.$implicit.contentTpl == null) ? null : _v.parent.context.$implicit.contentTpl.templateRef); _ck(_v, 3, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "tab-pane ", ((_v.parent.context.$implicit.id === _co.activeId) ? "active" : null), ""); var currVal_1 = _v.parent.context.$implicit.id; var currVal_2 = i0.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.id, "-panel"); var currVal_3 = (_v.parent.context.$implicit.id === _co.activeId); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_NgbTabset_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabset_4)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.destroyOnHide || (_v.context.$implicit.id === _co.activeId)); _ck(_v, 2, 0, currVal_0); }, null); }
export function View_NgbTabset_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(1, 0, null, null, 4, "ul", [["role", "tablist"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabset_1)), i0.ɵdid(4, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(7, 0, null, null, 4, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabset_3)), i0.ɵdid(10, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.tabs; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.tabs; _ck(_v, 10, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (("nav nav-" + _co.type) + ((_co.orientation == "horizontal") ? (" " + _co.justifyClass) : " flex-column")); _ck(_v, 1, 0, currVal_0); }); }
export function View_NgbTabset_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ngb-tabset", [], null, null, null, View_NgbTabset_0, RenderType_NgbTabset)), i0.ɵdid(1, 2146304, null, 1, i2.NgbTabset, [i3.NgbTabsetConfig], null, null), i0.ɵqud(603979776, 1, { tabs: 1 })], null, null); }
var NgbTabsetNgFactory = i0.ɵccf("ngb-tabset", i2.NgbTabset, View_NgbTabset_Host_0, { activeId: "activeId", destroyOnHide: "destroyOnHide", justify: "justify", orientation: "orientation", type: "type" }, { tabChange: "tabChange" }, []);
export { NgbTabsetNgFactory as NgbTabsetNgFactory };
//# sourceMappingURL=tabset.ngfactory.js.map