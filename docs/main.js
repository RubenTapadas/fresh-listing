(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _components_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/entry-dialog/entry-dialog.component */ "./src/app/components/entry-dialog/entry-dialog.component.ts");
/* harmony import */ var _components_list_dialog_list_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list-dialog/list-dialog.component */ "./src/app/components/list-dialog/list-dialog.component.ts");
/* harmony import */ var _services_lists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/lists.service */ "./src/app/services/lists.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");














const _c0 = ["order"];
const _c1 = function (a0) { return { active: a0 }; };
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const list_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openList(list_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const list_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.editList(list_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r0.activeList$)) == null ? null : tmp_0_0.id) === list_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r3.name, " ");
} }
function AppComponent_form_18_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", field_r12.id === 1 ? "none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", field_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r12.label, " ");
} }
function AppComponent_form_18_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AppComponent_form_18_mat_form_field_11_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const field_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.changeFilter(field_r13, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", field_r13.id === 1 ? "none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r13.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", field_r13.label);
} }
function AppComponent_form_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_form_18_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeOrderDirection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order By");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AppComponent_form_18_Template_mat_select_selectionChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeOrder($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_form_18_mat_option_10_Template, 2, 4, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_form_18_mat_form_field_11_Template, 4, 4, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activeList_r7 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r1.orderDirection === "des" ? "rotate(180deg)" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", activeList_r7.fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", activeList_r7.fields);
} }
function AppComponent_div_20_div_1_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r22["2"]);
} }
function AppComponent_div_20_div_1_div_5_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entryField_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const activeList_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r27.findField(entryField_r26.key, activeList_r20), " ");
} }
function AppComponent_div_20_div_1_div_5_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entryField_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entryField_r26.value, " ");
} }
function AppComponent_div_20_div_1_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_20_div_1_div_5_div_10_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_20_div_1_div_5_div_10_div_2_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entryField_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entryField_r26.key !== "1" && entryField_r26.key !== "2" && entryField_r26.key !== "id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entryField_r26.key !== "1" && entryField_r26.key !== "2" && entryField_r26.key !== "id");
} }
function AppComponent_div_20_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_20_div_1_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const entry_r22 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.editEntry(entry_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_20_div_1_div_5_div_7_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_20_div_1_div_5_div_10_Template, 3, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", entry_r22["1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r22["2"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 3, entry_r22));
} }
function AppComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_20_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.createEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_20_div_1_div_5_Template, 12, 5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activeList_r20 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", activeList_r20.entries);
} }
function AppComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_20_div_1_Template, 6, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.filterActiveList);
} }
const _c2 = function (a0) { return { "grid-closed": a0 }; };
const _c3 = function (a0) { return { "nav-bar-expand-toggle-opened": a0 }; };
class AppComponent {
    constructor(listsService, dialog) {
        this.listsService = listsService;
        this.dialog = dialog;
        this.title = 'fresh-listing';
        this.lists$ = this.listsService.lists$;
        this.activeList$ = this.listsService.activeList$;
        this.orderDirection = 'asc';
        this.navExpanded = 'opened';
        this.filters = {};
    }
    ngOnInit() {
        const navExpanded = localStorage.getItem('navExpanded');
        this.navExpanded = navExpanded != null ? navExpanded : 'opened';
        const activeListId = localStorage.getItem('activeListId');
        if (activeListId) {
            this.listsService.initialSetActiveList(parseInt(activeListId));
        }
        this.activeList$.subscribe((l) => {
            console.log('sss');
            if (l) {
                this.filterActiveList = l;
                this.applyFilters();
            }
        });
    }
    createList() {
        this.dialog.open(_components_list_dialog_list_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ListDialogComponent"], {
            width: '500px',
            disableClose: true,
        });
    }
    editList(list) {
        this.dialog.open(_components_list_dialog_list_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ListDialogComponent"], {
            width: '500px',
            disableClose: true,
            data: list,
        });
    }
    openList(list) {
        if (this.orderInput) {
            this.orderInput.value = null;
        }
        this.filters = {};
        this.listsService.updateActiveList(list);
    }
    createEntry() {
        this.activeList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe((activeList) => this.dialog.open(_components_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EntryDialogComponent"], {
            width: '500px',
            disableClose: true,
            data: { list: activeList },
        }));
    }
    editEntry(entry) {
        this.activeList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe((activeList) => this.dialog.open(_components_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EntryDialogComponent"], {
            width: '500px',
            disableClose: true,
            data: { list: activeList, entry },
        }));
    }
    findField(fieldId, list) {
        var _a;
        return (_a = list.fields.find((e) => e.id === parseInt(fieldId))) === null || _a === void 0 ? void 0 : _a.label;
    }
    changeOrder(fieldId) {
        this.changeOrderValue = fieldId;
        this.applyFilters();
    }
    changeFilter(field, value) {
        this.filters = Object.assign(Object.assign({}, this.filters), { [field.id]: value === null || value === void 0 ? void 0 : value.toLowerCase() });
        this.applyFilters();
    }
    applyFilters() {
        const filters = this.filters;
        if (filters) {
            this.activeList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe((l) => {
                var _a;
                const list = Object.assign({}, l);
                const entries = l.entries
                    .map((entry) => {
                    let allPassed = true;
                    l.fields.forEach((field) => {
                        var _a;
                        const targetField = filters[field.id];
                        if (targetField && targetField !== '') {
                            const targetEntryField = (_a = entry[field.id]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                            if (!targetEntryField ||
                                !targetEntryField.includes(targetField.toLowerCase())) {
                                allPassed = false;
                            }
                        }
                    });
                    return allPassed ? entry : null;
                })
                    .filter((v) => v);
                list.entries = entries;
                const fieldId = (_a = this.changeOrderValue) !== null && _a !== void 0 ? _a : '2';
                const order = this.orderDirection;
                const sortedEntries = list.entries.sort((a, b) => {
                    if (parseInt(a[fieldId])) {
                        if (order === 'des') {
                            return parseInt(a[fieldId]) < parseInt(b[fieldId]) ? 1 : -1;
                        }
                        else {
                            return parseInt(a[fieldId]) > parseInt(b[fieldId]) ? 1 : -1;
                        }
                    }
                    else {
                        if (order === 'des') {
                            return a[fieldId] < b[fieldId] ? 1 : -1;
                        }
                        else {
                            return a[fieldId] > b[fieldId] ? 1 : -1;
                        }
                    }
                });
                this.filterActiveList = Object.assign(Object.assign({}, list), { sortedEntries });
            });
        }
    }
    changeOrderDirection() {
        if (this.orderDirection === 'asc') {
            this.orderDirection = 'des';
        }
        else {
            this.orderDirection = 'asc';
        }
        this.changeOrder(this.changeOrderValue);
    }
    toggleSideBar() {
        switch (this.navExpanded) {
            case 'opened':
                this.navExpanded = 'closed';
                localStorage.setItem('navExpanded', 'closed');
                break;
            default:
                this.navExpanded = 'opened';
                localStorage.setItem('navExpanded', 'opened');
                break;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lists_service__WEBPACK_IMPORTED_MODULE_4__["ListsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.orderInput = _t.first);
    } }, decls: 22, vars: 15, consts: [[1, "grid", 3, "ngClass"], [1, "side-nav"], [1, "entries"], [1, "create", 3, "click"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "buttons"], [1, "nav-bar-expand-toggle", "toggle-outside", 3, "ngClass", "click"], [1, "nav-bar-expand-toggle", "toggle-inside", 3, "click"], [1, "content"], [1, "filters"], ["class", "filters-inner", 4, "ngIf"], [4, "ngIf"], [3, "ngClass", "click"], [1, "config", 3, "click"], [1, "filters-inner"], ["filterForm", "ngForm"], [1, "has-order"], [1, "click", 3, "click"], ["appearance", "fill"], [3, "selectionChange"], ["order", ""], [3, "value", "display", 4, "ngFor", "ngForOf"], ["appearance", "fill", 3, "display", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", 3, "placeholder", "keyup"], ["class", "card-container", 4, "ngIf"], [1, "card-container"], [1, "card", "create-card", 3, "click"], [1, "plus-icon"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "entry-edit", 3, "click"], [3, "src"], [1, "card-from-list"], [1, "card-name-holder"], ["class", "card-name", 4, "ngIf"], [1, "card-info"], ["style", "display: contents", 4, "ngFor", "ngForOf"], [1, "card-name"], [2, "display", "contents"], ["style", "text-align: right", 4, "ngIf"], [2, "text-align", "right"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_3_listener() { return ctx.createList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Create List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 6, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_10_listener() { return ctx.toggleSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_13_listener() { return ctx.toggleSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_form_18_Template, 12, 4, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_div_20_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.navExpanded === "closed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx.lists$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx.navExpanded === "opened"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 7, ctx.activeList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 9, ctx.activeList$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]], styles: [".grid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  transition-duration: 0.2s;\n  grid-template-columns: 300px 1fr;\n}\n.grid.grid-closed[_ngcontent-%COMP%] {\n  width: calc(100% + 300px);\n  margin-left: -300px;\n}\n.side-nav[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  background-color: #121212;\n}\n.side-nav[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.side-nav[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 7px;\n  cursor: pointer;\n  padding: 9px;\n  text-align: center;\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.side-nav[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  transition-duration: 0.2s;\n}\n.side-nav[_ngcontent-%COMP%]   .entries[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.side-nav[_ngcontent-%COMP%]   .entries[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 50px;\n  margin: 10px;\n  cursor: pointer;\n  padding: 10px;\n  display: flex;\n  position: relative;\n  font-size: 1.3em;\n  font-weight: 0;\n  border-radius: 3px;\n  align-items: center;\n  justify-content: center;\n  background-color: #424242;\n  transition-duration: 0.2s;\n}\n.side-nav[_ngcontent-%COMP%]   .entries[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div.config[_ngcontent-%COMP%] {\n  top: 8px;\n  right: 5px;\n  width: 35px;\n  height: 35px;\n  opacity: 0;\n  position: absolute;\n  padding-top: 5px;\n  padding-left: 6px;\n  background-color: transparent;\n  transition-duration: 0.2s;\n}\n.side-nav[_ngcontent-%COMP%]   .entries[_ngcontent-%COMP%]    > div.create[_ngcontent-%COMP%] {\n  background-color: #388e3c;\n}\n.side-nav[_ngcontent-%COMP%]   .entries[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.side-nav[_ngcontent-%COMP%]   .entries[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover   div.config[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.side-nav[_ngcontent-%COMP%]   .entries[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: -20px;\n  margin-right: 3px;\n}\n.side-nav[_ngcontent-%COMP%]   .entries[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.content[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow-y: auto;\n  background-color: #212121;\n  grid-template-rows: auto 1fr;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 20px;\n  grid-gap: 10px;\n  overflow-y: auto;\n  justify-items: center;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n}\n.card-container[_ngcontent-%COMP%]   .create-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 300px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .plus-icon[_ngcontent-%COMP%] {\n  top: calc(50% - 50px);\n  left: calc(50% - 50px);\n  width: 95px;\n  height: 95px;\n  position: absolute;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .plus-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #212121;\n  font-size: 7em;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  transform: scale(1.02);\n  object-fit: cover;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .entry-edit[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  color: #fff;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 3;\n  padding: 6px;\n  position: absolute;\n  text-shadow: 0 0 5px #000;\n  transition-duration: 0.2s;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .entry-edit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.card-container[_ngcontent-%COMP%]   .card-from-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  z-index: 2;\n  position: relative;\n  grid-template-rows: 20px 1fr auto;\n}\n.card-container[_ngcontent-%COMP%]   .card-from-list[_ngcontent-%COMP%]   .card-name-holder[_ngcontent-%COMP%] {\n  position: relative;\n}\n.card-container[_ngcontent-%COMP%]   .card-from-list[_ngcontent-%COMP%]   .card-name[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  max-width: calc(100% - 5px);\n  display: inline;\n  padding: 2px 9px 2px 5px;\n  overflow: hidden;\n  position: absolute;\n  font-size: 1.3em;\n  font-weight: 800;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  border-radius: 0 0 11px 0;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.card-container[_ngcontent-%COMP%]   .card-from-list[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 5px;\n  padding-top: 100px;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), black);\n  grid-template-columns: 1fr 1fr;\n}\n.card-container[_ngcontent-%COMP%]   .card-from-list[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1px 5px;\n  font-weight: 800;\n}\n.card-container[_ngcontent-%COMP%]   .card-from-list[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.filters[_ngcontent-%COMP%] {\n  padding: 20px 20px 0 20px;\n}\n.filters-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  justify-items: center;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n}\n.filters-inner[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.has-order[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n.has-order[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 175px;\n}\n.has-order[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.no-mobile[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: none;\n  font-size: 3em;\n  font-weight: 700;\n  align-items: center;\n  justify-content: center;\n  background-color: #212121;\n}\n.toggle-inside[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.toggle-inside[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-top: -2px;\n  margin-left: -2px;\n}\n.toggle-outside[_ngcontent-%COMP%] {\n  z-index: 3;\n  opacity: 1;\n  position: absolute;\n  transform: rotate(0deg);\n  margin-right: -47px !important;\n  transition-duration: 0.2s;\n}\n.nav-bar-expand-toggle-opened[_ngcontent-%COMP%] {\n  opacity: 0;\n  margin-right: 0px !important;\n}\n@media only screen and (max-width: 800px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 100vw 100vw;\n  }\n  .grid.grid-closed[_ngcontent-%COMP%] {\n    grid-template-columns: 100vw 100vw;\n    margin-left: -100vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQUNGO0FBQ0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFHQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDTjtBQUFNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBRVI7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFETjtBQUdNO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBRFI7QUFJTTtFQUNFLHlCQUFBO0FBRlI7QUFLTTtFQUNFLFlBQUE7QUFIUjtBQUtRO0VBQ0UsVUFBQTtBQUhWO0FBT007RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBTFI7QUFTSTtFQUNFLDBDQUFBO0FBUE47QUFZQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFURjtBQVlBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDREQUFBO0FBVEY7QUFXRTtFQUNFLGVBQUE7QUFUSjtBQVlFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0VBQUE7RUFDQSxvQ0FBQTtBQVZKO0FBWUk7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVZOO0FBWU07RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQVZSO0FBY0k7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBWk47QUFlSTtFQUNFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFiTjtBQWdCSTtFQUNFLFVBQUE7QUFkTjtBQWtCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBaEJKO0FBa0JJO0VBQ0Usa0JBQUE7QUFoQk47QUFtQkk7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQWpCTjtBQW9CSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxRUFBQTtFQUtBLDhCQUFBO0FBdEJOO0FBd0JNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQXRCUjtBQXVCUTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQXJCVjtBQTRCQTtFQUNFLHlCQUFBO0FBekJGO0FBNEJBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDREQUFBO0FBekJGO0FBMkJFO0VBQ0UsWUFBQTtBQXpCSjtBQTZCQTtFQUNFLGVBQUE7QUExQkY7QUE2QkE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7QUExQkY7QUEyQkU7RUFDRSxZQUFBO0FBekJKO0FBMkJFO0VBQ0UsZ0JBQUE7QUF6Qko7QUE2QkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUExQkY7QUE2QkE7RUFDRSx5QkFBQTtBQTFCRjtBQTJCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUF6Qko7QUE2QkE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FBMUJGO0FBNkJBO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0FBMUJGO0FBNkJBO0VBQ0U7SUFDRSxrQ0FBQTtFQTFCRjtFQTRCRTtJQUNFLGtDQUFBO0lBQ0EsbUJBQUE7RUExQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xyXG5cclxuICAmLmdyaWQtY2xvc2VkIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMDBweCk7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGUtbmF2IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG5cclxuICAuYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgZGl2IHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbWFyZ2luOiA3cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZW50cmllcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuXHJcbiAgICAgIGRpdi5jb25maWcge1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jcmVhdGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODhlM2M7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuXHJcbiAgICAgICAgZGl2LmNvbmZpZyB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNyZWF0ZSBtYXQtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBncmlkLWdhcDogMTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcblxyXG4gIC5jcmVhdGUtY2FyZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuXHJcbiAgICAucGx1cy1pY29uIHtcclxuICAgICAgdG9wOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICB3aWR0aDogOTVweDtcclxuICAgICAgaGVpZ2h0OiA5NXB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgZm9udC1zaXplOiA3ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmVudHJ5LWVkaXQge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB6LWluZGV4OiAzO1xyXG4gICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzAwMDtcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIC5lbnRyeS1lZGl0IHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkLWZyb20tbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IDFmciBhdXRvO1xyXG5cclxuICAgIC5jYXJkLW5hbWUtaG9sZGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLW5hbWUge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICBwYWRkaW5nOiAycHggOXB4IDJweCA1cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMXB4IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1pbmZvIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byBib3R0b20sXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDEpXHJcbiAgICAgICk7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgcGFkZGluZzogMXB4IDVweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlcnMge1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXJzLWlubmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcblxyXG4gID4gKiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2xpY2sge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhhcy1vcmRlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICB9XHJcbiAgbWF0LWljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5uby1tb2JpbGUge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbn1cclxuXHJcbi50b2dnbGUtaW5zaWRlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIG1hdC1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICB9XHJcbn1cclxuXHJcbi50b2dnbGUtb3V0c2lkZSB7XHJcbiAgei1pbmRleDogMztcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICBtYXJnaW4tcmlnaHQ6IC00N3B4ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxufVxyXG5cclxuLm5hdi1iYXItZXhwYW5kLXRvZ2dsZS1vcGVuZWQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwdncgMTAwdnc7XHJcblxyXG4gICAgJi5ncmlkLWNsb3NlZCB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwdncgMTAwdnc7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTAwdnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _services_lists_service__WEBPACK_IMPORTED_MODULE_4__["ListsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, { orderInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['order']
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _components_list_dialog_list_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/list-dialog/list-dialog.component */ "./src/app/components/list-dialog/list-dialog.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/entry-dialog/entry-dialog.component */ "./src/app/components/entry-dialog/entry-dialog.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_list_dialog_list_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ListDialogComponent"], _components_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_10__["EntryDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_list_dialog_list_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ListDialogComponent"], _components_entry_dialog_entry_dialog_component__WEBPACK_IMPORTED_MODULE_10__["EntryDialogComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/entry-dialog/entry-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/entry-dialog/entry-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: EntryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryDialogComponent", function() { return EntryDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_lists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/lists.service */ "./src/app/services/lists.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");











function EntryDialogComponent_div_0_div_5_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function EntryDialogComponent_div_0_div_5_input_3_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r12.updateAuto($event.target.value); return ctx_r12.updateField(item_r5, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r10);
} }
function EntryDialogComponent_div_0_div_5_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EntryDialogComponent_div_0_div_5_input_4_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.updateField(item_r5, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EntryDialogComponent_div_0_div_5_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function EntryDialogComponent_div_0_div_5_input_5_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r18.updateAuto($event.target.value); return ctx_r18.updateField(item_r5, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r8.data.entry[item_r5.id] ? ctx_r8.data.entry[item_r5.id] : "")("matAutocomplete", _r10);
} }
function EntryDialogComponent_div_0_div_5_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EntryDialogComponent_div_0_div_5_input_6_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.updateField(item_r5, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r9.data.entry[item_r5.id] ? ctx_r9.data.entry[item_r5.id] : "");
} }
function EntryDialogComponent_div_0_div_5_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryDialogComponent_div_0_div_5_mat_option_9_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const v_r26 = ctx.$implicit; const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.updateField(item_r5, v_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r26, " ");
} }
function EntryDialogComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EntryDialogComponent_div_0_div_5_input_3_Template, 1, 1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EntryDialogComponent_div_0_div_5_input_4_Template, 1, 0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EntryDialogComponent_div_0_div_5_input_5_Template, 1, 2, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EntryDialogComponent_div_0_div_5_input_6_Template, 1, 1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EntryDialogComponent_div_0_div_5_mat_option_9_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mode === "create" && item_r5.id !== 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mode === "create" && item_r5.id === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mode === "edit" && item_r5.id !== 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mode === "edit" && item_r5.id === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, ctx_r1.autocompleteEntry$), 0, 3));
} }
function EntryDialogComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryDialogComponent_div_0_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EntryDialogComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryDialogComponent_div_0_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EntryDialogComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryDialogComponent_div_0_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.erase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EntryDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EntryDialogComponent_div_0_div_5_Template, 12, 12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EntryDialogComponent_div_0_div_7_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EntryDialogComponent_div_0_div_8_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EntryDialogComponent_div_0_div_9_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryDialogComponent_div_0_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data.list.fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mode === "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mode === "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mode === "edit");
} }
class EntryDialogComponent {
    constructor(dialogRef, data, listsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.listsService = listsService;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        if (!this.data.entry) {
            this.mode = 'create';
        }
        else {
            this.mode = 'edit';
        }
        console.log(this.mode, this.data.entry, this.data.list.fields);
        this.fieldvalues = this.data.list.entries
            .map((e) => [e[2], e[3], e[4], e[5], e[6], e[7], e[8]])
            .flat()
            .filter((v) => v);
    }
    _filter(value) {
        const filterValue = this._normalizeValue(value);
        return this.fieldvalues.filter((entry) => this._normalizeValue(entry).includes(filterValue));
    }
    _normalizeValue(value) {
        return value.toLowerCase().replace(/\s/g, '');
    }
    findEntry(label) {
        if (this.mode === 'edit') {
            this.data.entry;
        }
        else {
            return null;
        }
    }
    updateAuto(value) {
        this.autocompleteEntry$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([...new Set(this._filter(value))]);
    }
    updateField(field, value) {
        if (!this.data.entry) {
            this.data = Object.assign(Object.assign({}, this.data), { entry: {
                    id: this.data.list.entries.length !== 0
                        ? this.data.list.entries.sort((a, b) => (a.id < b.id ? 1 : -1))[0]
                            .id + 1
                        : 1,
                    [field.id]: value,
                } });
        }
        else {
            const biggestId = this.data.list.entries.length !== 0
                ? this.data.list.entries.sort((a, b) => (a.id < b.id ? 1 : -1))[0]
                    .id + 1
                : 1;
            this.data.entry = Object.assign(Object.assign({ id: biggestId }, this.data.entry), { [field.id]: value });
        }
    }
    create() {
        if (this.data.list.entries.find((e) => e['2'] === this.data.entry['2'])) {
            window.alert('An entry with the same name already exists');
        }
        else {
            if (this.data.entry) {
                this.listsService.addEntry(this.data.list, this.data.entry);
                this.dialogRef.close();
            }
        }
    }
    edit() {
        if (this.data.list.entries.find((e) => e['2'] === this.data.entry['2'] && e.id !== this.data.entry.id)) {
            window.alert('An entry with the same name already exists');
        }
        else {
            this.listsService.editEntry(this.data.list, this.data.entry);
            this.dialogRef.close();
        }
    }
    erase() {
        this.listsService.deleteEntry(this.data.list, this.data.entry);
        this.dialogRef.close();
    }
    cancel() {
        this.dialogRef.close();
    }
}
EntryDialogComponent.ɵfac = function EntryDialogComponent_Factory(t) { return new (t || EntryDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_lists_service__WEBPACK_IMPORTED_MODULE_4__["ListsService"])); };
EntryDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntryDialogComponent, selectors: [["app-entry-dialog"]], decls: 1, vars: 1, consts: [["class", "dialog", 4, "ngIf"], [1, "dialog"], [1, "title"], ["matInput", "", "value", "Edit Card", "disabled", ""], [1, "fields"], [1, "field-listing"], [4, "ngFor", "ngForOf"], [1, "actions"], ["class", "create", 3, "click", 4, "ngIf"], ["class", "edit", 3, "click", 4, "ngIf"], ["class", "delete", 3, "click", 4, "ngIf"], [1, "cancel", 3, "click"], ["matInput", "", 3, "matAutocomplete", "keyup", 4, "ngIf"], ["matInput", "", 3, "change", 4, "ngIf"], ["matInput", "", 3, "value", "matAutocomplete", "keyup", 4, "ngIf"], ["matInput", "", 3, "value", "change", 4, "ngIf"], ["auto", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "matAutocomplete", "keyup"], ["matInput", "", 3, "change"], ["matInput", "", 3, "value", "matAutocomplete", "keyup"], ["matInput", "", 3, "value", "change"], [3, "value", "click"], [1, "create", 3, "click"], [1, "edit", 3, "click"], [1, "delete", 3, "click"]], template: function EntryDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EntryDialogComponent_div_0_Template, 12, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".dialog[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-rows: auto 1fr 30px;\n}\n\n.title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 600;\n  background-color: transparent;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: #fff;\n  cursor: pointer;\n  padding: 5px 10px;\n  margin-left: 10px;\n  border-radius: 3px;\n  transition-duration: 0.2s;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type {\n  margin-left: 0;\n}\n\n.actions[_ngcontent-%COMP%]   div.cancel[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n}\n\n.actions[_ngcontent-%COMP%]   div.delete[_ngcontent-%COMP%] {\n  background-color: #e64a19;\n}\n\n.actions[_ngcontent-%COMP%]   div.create[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   div.edit[_ngcontent-%COMP%] {\n  background-color: #388e3c;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.fields[_ngcontent-%COMP%] {\n  padding: 10px 0 20px 0;\n}\n\n.fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #fff;\n  padding: 5px 10px;\n  border-radius: 3px;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.fields[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbnRyeS1kaWFsb2cvZW50cnktZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNJO0VBQ0UsY0FBQTtBQUNOOztBQUVJO0VBQ0UseUJBQUE7QUFBTjs7QUFHSTtFQUNFLHlCQUFBO0FBRE47O0FBSUk7RUFFRSx5QkFBQTtBQUhOOztBQU1JO0VBQ0UsWUFBQTtBQUpOOztBQVNBO0VBQ0Usc0JBQUE7QUFORjs7QUFRRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBTko7O0FBUUk7RUFDRSxvQ0FBQTtBQU5OIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbnRyeS1kaWFsb2cvZW50cnktZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAzMHB4O1xyXG59XHJcblxyXG4udGl0bGUgaW5wdXQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cclxuICBkaXYge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuXHJcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYuY2FuY2VsIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzllOWU5ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmRlbGV0ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjRhMTk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5jcmVhdGUsXHJcbiAgICAmLmVkaXQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4ZTNjO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmllbGRzIHtcclxuICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcblxyXG4gICAgJltkaXNhYmxlZF0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-entry-dialog',
                templateUrl: './entry-dialog.component.html',
                styleUrls: ['./entry-dialog.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_services_lists_service__WEBPACK_IMPORTED_MODULE_4__["ListsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/list-dialog/list-dialog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/list-dialog/list-dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDialogComponent", function() { return ListDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_lists_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/lists.service */ "./src/app/services/lists.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










function ListDialogComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ListDialogComponent_div_0_div_5_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.changeField(item_r9.id, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r9.label)("disabled", item_r9.disable);
} }
function ListDialogComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListDialogComponent_div_0_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.createField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New Field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListDialogComponent_div_0_input_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ListDialogComponent_div_0_input_9_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.handleFileInput($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListDialogComponent_div_0_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Import");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListDialogComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListDialogComponent_div_0_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.handleFileOutput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Export ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListDialogComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListDialogComponent_div_0_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListDialogComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListDialogComponent_div_0_div_14_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListDialogComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListDialogComponent_div_0_div_15_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.erase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListDialogComponent_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.data.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListDialogComponent_div_0_div_5_Template, 2, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListDialogComponent_div_0_div_6_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListDialogComponent_div_0_input_9_Template, 1, 0, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListDialogComponent_div_0_label_10_Template, 2, 0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListDialogComponent_div_0_div_11_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListDialogComponent_div_0_div_13_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListDialogComponent_div_0_div_14_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListDialogComponent_div_0_div_15_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListDialogComponent_div_0_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data.fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.fields.length < 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mode === "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mode === "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mode === "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mode === "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mode === "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mode === "edit");
} }
class ListDialogComponent {
    constructor(dialogRef, data, listsService, sanitizer) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.listsService = listsService;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.listsService.lists$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe((listsServiceLists) => {
            const length = listsServiceLists.length;
            const biggestId = length !== 0
                ? listsServiceLists.sort((a, b) => (a.id < b.id ? 1 : -1))[0].id + 1
                : null;
            listsServiceLists.sort((a, b) => (a.name > b.name ? 1 : -1));
            if (!this.data) {
                this.data = {
                    id: listsServiceLists.length !== 0 ? biggestId : 1,
                    name: '*New List*',
                    fields: [
                        { id: 1, label: 'Image', disable: true },
                        { id: 2, label: 'Name', disable: true },
                    ],
                    entries: [],
                };
                this.mode = 'create';
            }
            else {
                this.mode = 'edit';
            }
        });
    }
    createField() {
        this.data.fields = [
            ...this.data.fields,
            {
                id: this.data.fields[this.data.fields.length - 1].id + 1,
                label: '*New Field*',
            },
        ];
    }
    changeField(id, label) {
        this.data.fields.find((field) => field.id === id).label = label;
    }
    cancel() {
        this.dialogRef.close();
    }
    create() {
        this.listsService.lists$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe((listsServiceLists) => {
            if (listsServiceLists.find((list) => list.name === this.data.name)) {
                window.alert('A list with the same name already exists.');
            }
            else {
                this.listsService.newList(this.data);
                this.dialogRef.close();
            }
        });
    }
    edit() {
        this.listsService.lists$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe((listsServiceLists) => {
            if (listsServiceLists.find((list) => list.name === this.data.name && list.id !== this.data.id)) {
                window.alert('A list with the same name already exists.');
            }
            else {
                this.listsService.editList(this.data);
                this.dialogRef.close();
            }
        });
    }
    erase() {
        if (window.confirm('Are you sure you want to delete this list?')) {
            this.listsService.eraseList(this.data);
            this.dialogRef.close();
        }
    }
    noOverlapName(lists, name) {
        let i = 0;
        const names = lists.map((l) => l.name);
        let resultName;
        while (!resultName) {
            const comparer = i === 0 ? name : name + '(' + i + ')';
            console.log(resultName, names.includes(comparer), name);
            if (names.includes(comparer)) {
                name;
                i++;
            }
            else {
                resultName = comparer;
            }
        }
        return resultName;
    }
    handleFileInput(fileInput) {
        const file = fileInput.files[0];
        const filePath = fileInput.value;
        const allowedExtension = /(\.txt)$/i;
        if (allowedExtension.exec(filePath)) {
            const fileReader = new FileReader();
            fileReader.readAsText(file, 'UTF-8');
            fileReader.onload = () => {
                const result = JSON.parse(fileReader.result);
                const checkType = result.id &&
                    result.name &&
                    result.fields &&
                    result.entries &&
                    result.updateMoment;
                if (checkType) {
                    this.listsService.lists$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe((lists) => {
                        const id = this.data.id;
                        const name = this.noOverlapName(lists, result.name);
                        console.log({ id });
                        this.listsService.newList(Object.assign(Object.assign({}, result), { id, name }));
                        this.dialogRef.close();
                    });
                }
                else {
                    window.alert('Incorrect file data');
                }
            };
            fileReader.onerror = (error) => {
                console.log(error);
            };
        }
        else {
            window.alert('Incorrect file type');
        }
    }
    handleFileOutput() {
        let json = JSON.stringify(this.data);
        const stringJson = [json];
        var blob1 = new Blob(stringJson, { type: 'text/plain;charset=utf-8' });
        var url = window.URL || window.webkitURL;
        const link = url.createObjectURL(blob1);
        var a = document.createElement('a');
        a.download = this.data.name + '.txt';
        a.href = link;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
ListDialogComponent.ɵfac = function ListDialogComponent_Factory(t) { return new (t || ListDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_lists_service__WEBPACK_IMPORTED_MODULE_3__["ListsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"])); };
ListDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListDialogComponent, selectors: [["app-list-dialog"]], decls: 1, vars: 1, consts: [["class", "dialog", 4, "ngIf"], [1, "dialog"], [1, "title"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "fields"], [1, "field-listing"], [4, "ngFor", "ngForOf"], ["class", "field-create", 3, "click", 4, "ngIf"], [1, "actions"], [1, "left"], ["type", "file", "name", "file", "id", "file", "class", "inputfile", "accept", ".txt", 3, "change", 4, "ngIf"], ["for", "file", "style", "background-color: cadetblue", 4, "ngIf"], ["style", "background-color: cadetblue", 3, "click", 4, "ngIf"], [1, "right"], ["class", "create", 3, "click", 4, "ngIf"], ["class", "edit", 3, "click", 4, "ngIf"], ["class", "delete", 3, "click", 4, "ngIf"], [1, "cancel", 3, "click"], ["matInput", "", 3, "value", "disabled", "change"], [1, "field-create", 3, "click"], ["type", "file", "name", "file", "id", "file", "accept", ".txt", 1, "inputfile", 3, "change"], ["for", "file", 2, "background-color", "cadetblue"], [2, "background-color", "cadetblue", 3, "click"], [1, "create", 3, "click"], [1, "edit", 3, "click"], [1, "delete", 3, "click"]], template: function ListDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListDialogComponent_div_0_Template, 18, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".dialog[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-rows: auto 1fr 30px;\n}\n\n.title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 600;\n  background-color: transparent;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n\n.actions[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.actions[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: #fff;\n  cursor: pointer;\n  padding: 5px 10px;\n  margin-left: 10px;\n  border-radius: 3px;\n  transition-duration: 0.2s;\n}\n\n.actions[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type, .actions[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type {\n  margin-left: 0;\n}\n\n.actions[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div.cancel[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div.cancel[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n}\n\n.actions[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div.delete[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div.delete[_ngcontent-%COMP%] {\n  background-color: #e64a19;\n}\n\n.actions[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div.create[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div.edit[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div.create[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div.edit[_ngcontent-%COMP%] {\n  background-color: #388e3c;\n}\n\n.actions[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover, .actions[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.fields[_ngcontent-%COMP%] {\n  padding: 10px 0 20px 0;\n}\n\n.fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #fff;\n  padding: 5px 10px;\n  font-size: 2em;\n  border-radius: 3px;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.fields[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.field-create[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #fff;\n  cursor: pointer;\n  padding: 4px;\n  text-align: center;\n  border-radius: 3px;\n  background-color: #0288d1;\n}\n\n.field-create[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.field-listing[_ngcontent-%COMP%] {\n  height: 169px;\n  display: grid;\n  grid-gap: 10px;\n  overflow-y: auto;\n  margin-bottom: 10px;\n  grid-template-rows: 50px;\n  grid-template-columns: 1fr 1fr;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LWRpYWxvZy9saXN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFBRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQUVKOztBQUNFOztFQUVFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDSTs7RUFDRSxjQUFBO0FBRU47O0FBQ0k7O0VBQ0UseUJBQUE7QUFFTjs7QUFDSTs7RUFDRSx5QkFBQTtBQUVOOztBQUNJOzs7RUFFRSx5QkFBQTtBQUVOOztBQUNJOztFQUNFLFlBQUE7QUFFTjs7QUFHQTtFQUNFLHNCQUFBO0FBQUY7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFBSjs7QUFFSTtFQUNFLG9DQUFBO0FBQU47O0FBS0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBSUU7RUFDRSxZQUFBO0FBRko7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0LWRpYWxvZy9saXN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgMzBweDtcclxufVxyXG5cclxuLnRpdGxlIGlucHV0IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgfVxyXG5cclxuICAucmlnaHQgZGl2LFxyXG4gIC5sZWZ0IGRpdiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG5cclxuICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5jYW5jZWwge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5ZTllO1xyXG4gICAgfVxyXG5cclxuICAgICYuZGVsZXRlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2NGExOTtcclxuICAgIH1cclxuXHJcbiAgICAmLmNyZWF0ZSxcclxuICAgICYuZWRpdCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODhlM2M7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5maWVsZHMge1xyXG4gIHBhZGRpbmc6IDEwcHggMCAyMHB4IDA7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG5cclxuICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZpZWxkLWNyZWF0ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjg4ZDE7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxufVxyXG5cclxuLmZpZWxkLWxpc3Rpbmcge1xyXG4gIGhlaWdodDogMTY5cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufVxyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-dialog',
                templateUrl: './list-dialog.component.html',
                styleUrls: ['./list-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_services_lists_service__WEBPACK_IMPORTED_MODULE_3__["ListsService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/lists.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/lists.service.ts ***!
  \*******************************************/
/*! exports provided: ListsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsService", function() { return ListsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ListsService {
    constructor() {
        this.lists$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](localStorage.getItem('lists')
            ? JSON.parse(localStorage.getItem('lists')).sort((a, b) => a.name > b.name ? 1 : -1)
            : []);
        this.activeList$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    newList(list) {
        const newList = Object.assign(Object.assign({}, list), { updateMoment: new Date().getTime() });
        const lists = [...this.lists$.value, newList].sort((a, b) => a.name > b.name ? 1 : -1);
        localStorage.setItem('lists', JSON.stringify(lists));
        this.lists$.next(lists);
    }
    editList(list) {
        const newList = Object.assign(Object.assign({}, list), { updateMoment: new Date().getTime() });
        const lists = [
            ...this.lists$.value.filter((l) => l.id !== list.id),
            newList,
        ].sort((a, b) => (a.name > b.name ? 1 : -1));
        localStorage.setItem('lists', JSON.stringify(lists));
        this.lists$.next(lists);
    }
    eraseList(list, clearActiveList = true) {
        const lists = [...this.lists$.value.filter((l) => l.id !== list.id)];
        localStorage.setItem('lists', JSON.stringify(lists));
        this.lists$.next(lists);
        if (clearActiveList) {
            this.activeList$.next(null);
        }
    }
    updateActiveList(list) {
        localStorage.setItem('activeListId', list.id + '');
        console.log({ list });
        this.activeList$.next(list);
    }
    initialSetActiveList(listId) {
        const targetList = this.lists$.value.find((l) => l.id === listId);
        this.activeList$.next(targetList);
    }
    addEntry(list, entry) {
        var _a;
        const filterList = this.lists$.value.filter((l) => l.id !== list.id);
        list.entries = [...list.entries, entry];
        const newLists = [...filterList, list];
        localStorage.setItem('lists', JSON.stringify(newLists));
        this.lists$.next(newLists);
        if (((_a = this.activeList$.value) === null || _a === void 0 ? void 0 : _a.id) === list.id) {
            this.activeList$.next(list);
        }
    }
    editEntry(list, entry) {
        var _a;
        const filterList = this.lists$.value.filter((l) => l.id !== list.id);
        list.entries = [...list.entries.filter((e) => e.id !== entry.id), entry];
        const newLists = [...filterList, list];
        localStorage.setItem('lists', JSON.stringify(newLists));
        this.lists$.next(newLists);
        if (((_a = this.activeList$.value) === null || _a === void 0 ? void 0 : _a.id) === list.id) {
            this.activeList$.next(list);
        }
    }
    deleteEntry(list, entry) {
        var _a;
        const filterList = this.lists$.value.filter((l) => l.id !== list.id);
        list.entries = [...list.entries.filter((e) => e.id !== entry.id)];
        const newLists = [...filterList, list];
        localStorage.setItem('lists', JSON.stringify(newLists));
        this.lists$.next(newLists);
        if (((_a = this.activeList$.value) === null || _a === void 0 ? void 0 : _a.id) === list.id) {
            this.activeList$.next(list);
        }
    }
}
ListsService.ɵfac = function ListsService_Factory(t) { return new (t || ListsService)(); };
ListsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListsService, factory: ListsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ruben\Documents\GitHub\fresh-listing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map