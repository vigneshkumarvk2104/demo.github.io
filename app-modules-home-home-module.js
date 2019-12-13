(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/modals/my-modal.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/modals/my-modal.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n<h4 class=\"modal-title\">My Modal</h4>\n<button type=\"button\" class=\"close\" aria-label=\"Close\" >\n    <span aria-hidden=\"true\">&times;</span>\n</button>\n</div>\n<div class=\"modal-body\">\n<p>Hello World!</p>\n</div>\n<div class=\"modal-footer\">\n<button type=\"button\" class=\"btn btn-outline-dark\" >Close</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/home.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/home.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"afterLoad\">\r\n    <div class=\"container-fluid from-top\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-2\">\r\n                <div class=\"row\">\r\n                    <ng-container *ngFor=\"let leadDash of values[0].leadDashboard | keyvalueWithOutSort\">\r\n                        <ng-container *ngIf=\"(leadDash.value.labelName) && (leadDash.value.isDisplay == 1)\">\r\n                            <div class=\"col-md-4 col-12 col-xl-12\">\r\n                                <div class=\"card-p\">\r\n                                    <p class=\"f-f text-center\">{{leadDash.value.labelName}}</p>\r\n                                    <p class=\"text-center\"><i class=\"fa\" [ngClass]=\"callIcon(leadDash.value.labelName)\"\r\n                                            aria-hidden=\"true\"></i> </p>\r\n                                    <p class=\"f-s text-center\">\r\n                                        <span>{{checkType(leadDash.value.value)}}</span>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xl-8\">\r\n                <div class=\"tab-d\">\r\n                    <div class=\"l-o-grids\">\r\n                        <div class=\"l-o-select\" (click)=\"tabChange('profileDetails')\"\r\n                            [ngClass]=\"selectedTab == 'profileDetails' ? 'active': ''\">\r\n                            <p>PROFILE</p>\r\n                        </div>\r\n                        <div class=\"l-o-select\" (click)=\"tabChange('assetFunding')\"\r\n                            [ngClass]=\"selectedTab == 'assetFunding' ? 'active': ''\">\r\n                            <p>ASSET</p>\r\n                        </div>\r\n                        <!-- <div class=\"l-o-select\" (click)=\"tabChange('DOCUMENTS')\"\r\n                            [ngClass]=\"selectedTab == 'DOCUMENTS' ? 'active': ''\">\r\n                            <p>DOCUMENTS</p>\r\n                        </div> -->\r\n                    </div>\r\n                    <div class=\"line\"></div>\r\n                    <div class=\"l-o-grid\">\r\n                        <ng-container *ngFor=\"let tabList of tabNameListSelected | keyvalueWithOutSort; let i = index;\">\r\n                            <ng-container *ngIf=\"(tabList.value.labelName) && (tabList.value.isDisplay == 1)\">\r\n                                <div class=\"l-o-select border-none\" (click)=\"tabChangeList(tabList.value.labelName,i)\">\r\n                                    <p>\r\n                                        <i class=\"fa fa-caret-right tri\"\r\n                                            [ngClass]=\"selectedTabList[tabList.value.labelName+i]  ? 'activeTri': 'inactiveTri'\"></i>\r\n                                        <span\r\n                                            [ngClass]=\"selectedTabList[tabList.value.labelName+i]  ? 'activeTri': 'inactiveTri'\">{{tabList.value.labelName | uppercase}}</span>\r\n                                    </p>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-12\">\r\n                        <div class=\"tab-inside\">\r\n                            <div class=\"row\">\r\n                                <ng-container *ngFor=\"let listValue of firstValue\">\r\n                                    <ng-container *ngIf=\"!listValue.value && listValue.value != ''\">\r\n                                        <div class=\"col-xl-6\">\r\n                                            <div class=\"tab-panel\">\r\n                                                <p>\r\n                                                    <span class=\"caret\">\r\n                                                        <i class=\"fa fa-asterisk\"></i>\r\n                                                    </span> {{listValue.labelName}}\r\n                                                </p>\r\n                                                <hr />\r\n                                                <div class=\"scroll-div\">\r\n                                                    <ng-container\r\n                                                        *ngFor=\"let listValueInside of listValue | keyvalueWithOutSort; let i = index;\">\r\n                                                        <ng-container\r\n                                                            *ngIf=\"(listValueInside.value.labelName) && (listValueInside.value.isDisplay == 1)\">\r\n                                                            <div class=\"detail-grid\">\r\n                                                                <p>{{listValueInside.value.labelName}}</p>\r\n                                                                <p class=\"colon\">:\r\n                                                                </p>\r\n                                                                <p *ngIf=\"listValueInside.value.value\">\r\n                                                                    {{listValueInside.value.value}}</p>\r\n                                                                <p *ngIf=\"!listValueInside.value.value\">-</p>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                    </ng-container>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"showCls\">\r\n                                    <div class=\"col-xl-6\">\r\n                                        <div class=\"tab-panel\">\r\n                                            <p>\r\n                                                <span class=\"caret\">\r\n                                                    <i class=\"fa fa-asterisk\"></i>\r\n                                                </span> {{iterateValueShow.labelName}}\r\n                                            </p>\r\n                                            <hr>\r\n                                            <div class=\"scroll-div\">\r\n                                                <ng-container *ngFor=\"let listDirectValue of secondValue\">\r\n                                                    <div class=\"detail-grid\">\r\n                                                        <p>{{listDirectValue.labelName}}</p>\r\n                                                        <p class=\"colon\">:</p>\r\n                                                        <p *ngIf=\"listDirectValue.value\">\r\n                                                            {{listDirectValue.value}}</p>\r\n                                                        <p *ngIf=\"!listDirectValue.value\">-</p>\r\n                                                    </div>\r\n                                                </ng-container>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xl-2\">\r\n                <div class=\"panel-conf\">\r\n                    <p class=\"head-text\">\r\n                        <span class=\"caret\">\r\n                            <i class=\"fa fa-asterisk\"></i>\r\n                        </span> Acknowledgement\r\n                    </p>\r\n                    <hr />\r\n                    <div class=\"btnMain\" *ngIf=\"status == 'pending' && showReject\">\r\n                        <div class=\"grid-button\">\r\n                            <div class=\"center\">\r\n                                <button type=\"button\" class=\"btn btn-success btn-sm comBtnCls\"\r\n                                    (click)=\"confirm('approve','APPROVED')\"><i class=\"fa fa-check\"\r\n                                        aria-hidden=\"true\"></i> Approve</button>\r\n                            </div>\r\n                            <div class=\"center\">\r\n                                <button type=\"button\" class=\"btn btn-danger btn-sm comBtnCls\"\r\n                                    (click)=\"showReject = false\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                                    Reject</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"showReject==false\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <label class=\"rsnColor\">Reason for rejection:</label>\r\n                            <textarea style=\"min-height: 100px\" [(ngModel)]=\"reason\"></textarea>\r\n                        </div>\r\n                        <div>\r\n                            <div class=\"grid-buttonRsn\">\r\n                                <div class=\"center\">\r\n                                    <button type=\"button\" class=\"btn btn-success btn-sm\"\r\n                                        (click)=\"submit('reject',reason)\">Submit</button>\r\n                                </div>\r\n                                <div class=\"center\">\r\n                                    <button type=\"button\" class=\"btn btn-secondary btn-sm\"\r\n                                        (click)=\"showReject = true\">Cancel</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"status != 'pending'\">\r\n                        <div class=\"row status\">\r\n                            <div class=\"col-lg-12\"> \r\n                                <div class=\"alert alert-success arrow fade show\" *ngIf=\"status == 'approved'\">\r\n                                    <strong><i class=\"fa fa-check\"></i></strong> {{status | uppercase}}\r\n                                </div>\r\n                                <div class=\"alert alert-danger arrowErrow fade show\" *ngIf=\"status == 'rejected'\">\r\n                                    <strong><i class=\"fa fa-times\"></i></strong> {{status | uppercase}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-conf\">\r\n                    <p class=\"head-text\">\r\n                        <span class=\"caret\">\r\n                            <i class=\"fa fa-asterisk\"></i>\r\n                        </span> Documents\r\n                    </p>\r\n                    <hr />\r\n                    <ng-container *ngFor=\"let document of documents | keyvalueWithOutSort; let ind = index;\">\r\n                        <ng-container *ngIf=\"document.value.labelName\">\r\n                            <p class=\"d-t minus\" [attr.href]=\"'#main'+ind\" data-toggle=\"collapse\" aria-expanded=\"true\">\r\n                                <span class=\"center-i\">\r\n                                    <i class=\"fa fa-plus-circle\"></i>\r\n                                    <i class=\"fa fa-minus-circle\"></i>\r\n                                </span>\r\n                                <span>\r\n                                    {{document.value.labelName}}\r\n                                </span> \r\n                            </p>\r\n                            <ng-container\r\n                                *ngFor=\"let documentInside of document.value | keyvalueWithOutSort; let i = index; let last = last;\">\r\n                                <div class=\"doc\" id=\"main{{ind}}\" class=\"collapse show\"> \r\n                                    <ng-container *ngIf=\"documentInside.value.value\">\r\n                                        <div class=\"doc-grid\">\r\n                                            <div class=\"doc-style\">\r\n                                                <p class=\"text-center\">\r\n                                                    {{documentInside.value.labelName}}\r\n                                                </p>\r\n                                                <p class=\"text-center\">\r\n                                                    <i class=\"fa fa-file-photo-o\" (click)=\"getpopup(documentInside.value.value)\"></i>\r\n                                                </p>\r\n                                                <p class=\"text-center\">\r\n                                                    {{documentInside.value.value.kycProofValue}}\r\n                                                </p>\r\n                                            </div>\r\n                                        </div> \r\n                                        <hr *ngIf=\"!last\" />\r\n                                    </ng-container> \r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modals_my_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/my-modal.component */ "./src/app/modules/home/modals/my-modal.component.ts");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/modules/home/pages/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.routing */ "./src/app/modules/home/home.routing.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipe/pipe.module */ "./src/app/modules/pipe/pipe.module.ts");







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _modals_my_modal_component__WEBPACK_IMPORTED_MODULE_2__["MyModalComponent"],
            ],
            imports: [
                _app_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _home_routing__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"]
            ],
            exports: [],
            providers: [],
            entryComponents: [_modals_my_modal_component__WEBPACK_IMPORTED_MODULE_2__["MyModalComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/modules/home/home.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/home/home.routing.ts ***!
  \**********************************************/
/*! exports provided: routes, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/modules/home/pages/home.component.ts");




var routes = [
    {
        path: '',
        component: _pages_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/home/modals/my-modal.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/modals/my-modal.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9tb2RhbHMvbXktbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/home/modals/my-modal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/home/modals/my-modal.component.ts ***!
  \***********************************************************/
/*! exports provided: MyModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModalComponent", function() { return MyModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyModalComponent = /** @class */ (function () {
    function MyModalComponent() {
    }
    MyModalComponent.prototype.ngOnInit = function () {
        console.log(this.id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MyModalComponent.prototype, "id", void 0);
    MyModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/modals/my-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-modal.component.scss */ "./src/app/modules/home/modals/my-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyModalComponent);
    return MyModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/pages/home.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/home/pages/home.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::-webkit-scrollbar {\n  width: 5px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #F0F1F3;\n  border-radius: 15px;\n}\n\n.card-p {\n  background: #fff;\n  padding: 5px;\n  border-radius: 6px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  margin-bottom: 15px;\n  min-height: 105px;\n  border-bottom: 1px solid var(--theme-color);\n}\n\n.card-p p {\n  padding: 0 !important;\n  margin: 0 !important;\n  margin-bottom: 5px !important;\n  margin-top: 5px !important;\n}\n\n.card-p .f-f {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.card-p .f-s {\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n\n.card-p i {\n  font-size: 25px;\n  color: var(--theme-color);\n}\n\n.card-p:hover i {\n  transition: 0.9s;\n  transform: rotateY(360deg);\n}\n\n.tab-d {\n  padding: 15px;\n  background: var(--text-color-primary);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 4px;\n  min-height: 105px;\n}\n\n.tab-inside {\n  margin-top: 20px;\n  border-radius: 4px;\n  min-height: 300px;\n}\n\n.panel-conf {\n  padding: 15px;\n  background: var(--text-color-primary);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 4px;\n  min-height: 105px;\n}\n\n.l-o-grids {\n  position: relative;\n  display: flex;\n  cursor: pointer;\n}\n\n.l-o-grid {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  cursor: pointer;\n}\n\n.l-o-select {\n  position: relative;\n  border-bottom: none !important;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  cursor: pointer;\n  border: 1px solid var(--theme-color);\n}\n\n.l-o-select p {\n  padding: 0 !important;\n  margin: 7px 20px 5px 20px !important;\n  font-size: 13px;\n}\n\n.active {\n  border-left: none;\n  border-right: none;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 5px 7px -5px var(--theme-color);\n  background-color: var(--theme-color);\n  border: 1px solid var(--theme-color);\n}\n\n.active p {\n  color: #fff;\n}\n\n.line {\n  height: 1px;\n  width: 100%;\n  margin-bottom: 10px;\n  background-color: var(--theme-color);\n}\n\n.border-none {\n  border: none;\n}\n\n.setting {\n  position: fixed;\n  height: 35px;\n  width: 35px;\n  top: 32%;\n  right: 107px;\n  color: var(--text-color-primary);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  cursor: pointer;\n  border-radius: 50%;\n  z-index: 1000;\n  background-color: var(--theme-color);\n}\n\n.setting-hide {\n  position: fixed;\n  height: 35px;\n  width: 35px;\n  top: 50%;\n  right: 0;\n  color: var(--text-color-primary);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 25px;\n  cursor: pointer;\n  border-radius: 50%;\n  z-index: 1000;\n  background-color: var(--theme-color);\n}\n\n.setting-panel {\n  position: fixed;\n  height: 150px;\n  width: 125px;\n  top: 35%;\n  right: 10px;\n  background: var(--text-color-primary);\n  padding: 15px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 4px;\n}\n\n.setting-panel-hide {\n  display: none;\n}\n\n.list-color {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 5px;\n}\n\n.circle {\n  height: 17px;\n  width: 17px;\n  border-radius: 50%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.circle:hover {\n  border: 2px solid #000;\n  cursor: pointer;\n}\n\n.center-circle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nhr {\n  margin-top: 8px !important;\n  margin-bottom: 8px !important;\n  border-top: 1px dotted var(--theme-color);\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.center-i {\n  display: flex;\n  justify-content: center;\n}\n\n.tab-inside p {\n  padding: 0 !important;\n  margin: 0 !important;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.tab-panel {\n  background-color: #fff;\n  padding: 17px;\n  margin-bottom: 17px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 4px;\n}\n\n.tab-panel p {\n  color: var(--theme-color) !important;\n}\n\n.head-text {\n  color: var(--theme-color);\n}\n\n.caret i {\n  font-size: 11px;\n}\n\n.detail-grid {\n  display: grid;\n  grid-template-columns: 48% 4% 48%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.detail-grid p {\n  font-weight: 500;\n  font-size: 13px;\n  color: var(--text-color) !important;\n}\n\n.panel-conf {\n  margin-bottom: 20px;\n}\n\n.panel-conf p {\n  padding: 0 !important;\n  margin: 0 !important;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n\n.grid-button {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  margin-top: 15px;\n}\n\n.grid-buttonRsn {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  margin-top: 15px;\n}\n\n.colon {\n  font-weight: 600;\n  color: var(--theme-color);\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #FF1744;\n  border-color: #FF1744;\n}\n\n.tri {\n  font-size: 22px;\n  position: absolute;\n  left: 5px;\n  top: 5px;\n}\n\n.subSelect-grid {\n  display: grid;\n  grid-template-columns: 10% 90%;\n}\n\n.scroll-div {\n  height: 200px;\n  overflow-y: auto;\n}\n\n.navbar-toggler-icon {\n  cursor: pointer;\n}\n\nbutton:focus {\n  outline: none !important;\n}\n\n.navbar-toggler-icon i {\n  color: var(--theme-color) !important;\n  font-size: 27px;\n}\n\n.d-t {\n  font-size: 13px !important;\n  font-weight: 600 !important;\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 10% 90%;\n}\n\n.d-t i {\n  color: var(--theme-color);\n  font-size: 8px !important;\n}\n\n.doc p {\n  font-size: 12px !important;\n  font-weight: 600 !important;\n  margin-bottom: 5px !important;\n}\n\n.doc-grid {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n  grid-gap: 2px;\n  margin-bottom: 5px !important;\n  margin-top: 5px !important;\n}\n\n.doc-style {\n  padding: 10px;\n  border: 1px dashed #afafaf;\n  cursor: pointer;\n  margin-top: 5px;\n}\n\n.doc-style p {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important;\n  font-size: 10px !important;\n  font-weight: 600 !important;\n}\n\n.val-docp {\n  font-size: 8px !important;\n  font-weight: 600 !important;\n}\n\n.doc-style i {\n  font-size: 28px !important;\n  color: var(--theme-color);\n}\n\n.doc-style:hover i {\n  transition: 0.9s;\n  transform: rotateY(360deg);\n}\n\n.doc-style:hover {\n  border: 1px dashed var(--theme-color);\n  transition: 0.9s;\n}\n\n.minus i {\n  color: var(--theme-color);\n  font-size: 15px !important;\n}\n\n.sub-t {\n  font-size: 13px !important;\n  cursor: pointer;\n}\n\n.sub-t i {\n  color: var(--text-color) !important;\n}\n\n[aria-expanded=true] .fa-plus-circle,\n[aria-expanded=false] .fa-minus-circle {\n  display: none;\n}\n\n.activeTri {\n  color: var(--theme-color) !important;\n}\n\n.inactiveTri {\n  color: var(--text-color) !important;\n}\n\n.marRig5 {\n  margin-right: 5px;\n}\n\n.rsnColor {\n  color: var(--theme-color);\n}\n\n.status {\n  color: var(--theme-color);\n  font-weight: bold;\n}\n\n.comBtnCls {\n  width: 100%;\n  margin: 5px;\n}\n\n.alert {\n  padding: 7px 10px !important;\n}\n\n.arrow, .arrowErrow {\n  margin-top: 5px;\n}\n\n.arrow::before {\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  left: 10px;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid #d4edda;\n}\n\n.arrowErrow::before {\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  left: 10px;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid #f8d7da;\n}\n\n@media screen and (max-width: 600px) {\n  .navbar-collapse {\n    background-color: #FFF;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n    position: relative;\n    padding: 10px;\n  }\n\n  .navbar-collapse::before {\n    content: \"\";\n    position: absolute;\n    height: 0;\n    width: 0;\n    right: 15px;\n    top: -8px;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid var(--theme-color);\n  }\n\n  .l-o-select p {\n    font-size: 12px;\n  }\n\n  .l-o-grid {\n    display: grid;\n    grid-template-columns: 50% 50%;\n  }\n}\n\n@media screen and (max-width: 1500px) {\n  .grid-button {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .l-o-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL0Q6XFxjb2xlbmRpbmdcXENvTGVuQ29yZVdlYl9WMS9zcmNcXGFwcFxcbW9kdWxlc1xcaG9tZVxccGFnZXNcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0VGOztBRE1BO0VBQ0Us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LGFBQUE7RUNISjs7RURLQTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxtQ0FBQTtJQUNBLG9DQUFBO0lBQ0EsNENBQUE7RUNGSjs7RURJQTtJQUNJLGVBQUE7RUNESjs7RURHQTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtFQ0FKO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxxQ0FBQTtFQ0FGOztFREVBO0lBQ0UscUNBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjRjBGMUYzOyBcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZC1wIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmOyAgICBcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsLjE0KTsgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtaW4taGVpZ2h0OiAxMDVweDsgICBcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xyXG59XHJcblxyXG4uY2FyZC1wIHAge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtcCAuZi1mIHtcclxuICBmb250LXNpemU6IDE0cHg7IFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDsgICBcclxufSBcclxuXHJcbi5jYXJkLXAgLmYtcyB7IFxyXG4gIGZvbnQtc2l6ZTogMjBweDsgICAgXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDsgICAgXHJcbn0gXHJcblxyXG4uY2FyZC1wIGkge1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgIFxyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbn1cclxuXHJcbi5jYXJkLXA6aG92ZXIgaSB7XHJcbiAgdHJhbnNpdGlvbjogMC45cztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxufVxyXG5cclxuLnRhYi1kIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQtY29sb3ItcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtaW4taGVpZ2h0OiAxMDVweDtcclxufVxyXG5cclxuLnRhYi1pbnNpZGUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7ICAgXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4ucGFuZWwtY29uZiB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsLjE0KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWluLWhlaWdodDogMTA1cHg7XHJcbn1cclxuLmwtby1ncmlkcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmwtby1ncmlkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LDFmcik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubC1vLXNlbGVjdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDsgXHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcclxufVxyXG5cclxuLy8gLmwtby1zZWxlY3Q6bnRoLWNoaWxkKGV2ZW4pIHtcclxuLy8gICBib3JkZXItbGVmdDpub25lO1xyXG4vLyAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuLy8gfVxyXG5cclxuLmwtby1zZWxlY3QgcHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiA3cHggMjBweCA1cHggMjBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTNweDsgIFxyXG59IFxyXG5cclxuLmFjdGl2ZSB7ICAgXHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgNXB4IDdweCAtNXB4IHZhcigtLXRoZW1lLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xyXG59XHJcblxyXG4uYWN0aXZlICBwe1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59IFxyXG5cclxuLmxpbmUge1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlOyBcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcclxufVxyXG5cclxuLmJvcmRlci1ub25lIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn0gXHJcblxyXG4uc2V0dGluZyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMzVweDsgXHJcbiAgdG9wOiAzMiU7XHJcbiAgcmlnaHQ6IDEwN3B4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpOyBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbn1cclxuXHJcbi5zZXR0aW5nLWhpZGUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7IFxyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpOyBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbn0gXHJcblxyXG4uc2V0dGluZy1wYW5lbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIHRvcDogMzUlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQtY29sb3ItcHJpbWFyeSk7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLC4xNCk7XHJcbiAgYm9yZGVyLXJhZGl1czo0cHg7IFxyXG59XHJcblxyXG4uc2V0dGluZy1wYW5lbC1oaWRlIHtcclxuIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuLmxpc3QtY29sb3Ige1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xyXG4gIGdyaWQtZ2FwOiA1cHg7IFxyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICBoZWlnaHQ6IDE3cHg7XHJcbiAgd2lkdGg6IDE3cHg7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tdG9wOiA1cHg7IFxyXG4gIG1hcmdpbi1ib3R0b206IDVweDsgXHJcbn1cclxuXHJcbi5jaXJjbGU6aG92ZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2VudGVyLWNpcmNsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5ociB7XHJcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7IFxyXG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgdmFyKC0tdGhlbWUtY29sb3IpO1xyXG59ICAgXHJcblxyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXItaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbn1cclxuXHJcbi50YWItaW5zaWRlIHAge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46MCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4OyAgIFxyXG59ICBcclxuXHJcbi50YWItcGFuZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweDtcclxuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsLjE0KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7IFxyXG59XHJcblxyXG4udGFiLXBhbmVsIHAge1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcikgIWltcG9ydGFudDtcclxufSBcclxuXHJcbi5oZWFkLXRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbn1cclxuXHJcbi5jYXJldCBpIHtcclxuICBmb250LXNpemU6IDExcHg7IFxyXG59XHJcblxyXG4uZGV0YWlsLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OCUgNCUgNDglO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmRldGFpbC1ncmlkIHAgeyBcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhbmVsLWNvbmYge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wYW5lbC1jb25mIHAge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46MCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7IFxyXG59ICBcclxuXHJcbi5ncmlkLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uZ3JpZC1idXR0b25Sc24ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jb2xvbiB7IFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjE3NDQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRkYxNzQ0O1xyXG59XHJcblxyXG4udHJpIHtcclxuICBmb250LXNpemU6IDIycHg7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1cHg7XHJcbiAgdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zdWJTZWxlY3QtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA5MCU7XHJcbn0gXHJcblxyXG4uc2Nyb2xsLWRpdiB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiB7IFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiBpIHtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyN3B4OyBcclxufSAgXHJcblxyXG4uZC10IHtcclxuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgOTAlOyAgXHJcbn1cclxuXHJcblxyXG4uZC10IGl7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcclxuICBmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZG9jIHAge1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRvYy1ncmlkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBncmlkLWdhcDogMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZG9jLXN0eWxlIHsgXHJcbiAgcGFkZGluZzogMTBweDsgXHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNhZmFmYWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmRvYy1zdHlsZSBwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZhbC1kb2NwIHtcclxuICBmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRvYy1zdHlsZSBpIHtcclxuICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xyXG59XHJcblxyXG4uZG9jLXN0eWxlOmhvdmVyIGkge1xyXG4gIHRyYW5zaXRpb246IDAuOXM7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7ICBcclxufVxyXG5cclxuLmRvYy1zdHlsZTpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLXRoZW1lLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiAwLjlzO1xyXG59XHJcblxyXG4ubWludXMgaXtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3ViLXQge1xyXG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN1Yi10IGkge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5bYXJpYS1leHBhbmRlZD1cInRydWVcIl0gLmZhLXBsdXMtY2lyY2xlLCBcclxuW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXSAuZmEtbWludXMtY2lyY2xlIHtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmVUcmkge1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluYWN0aXZlVHJpIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hclJpZzV7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5yc25Db2xvcntcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xyXG59XHJcblxyXG4uc3RhdHVze1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jb21CdG5DbHN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5hbGVydCB7IFxyXG4gIHBhZGRpbmc6IDdweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcnJvdywgLmFycm93RXJyb3cge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmFycm93OjpiZWZvcmV7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGhlaWdodDowO1xyXG4gIHdpZHRoOjA7ICAgIFxyXG4gIHRvcDogLTEwcHg7IFxyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNkNGVkZGE7IFxyXG59XHJcblxyXG4uYXJyb3dFcnJvdzo6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBoZWlnaHQ6MDtcclxuICB3aWR0aDowOyAgICBcclxuICB0b3A6IC0xMHB4OyBcclxuICBsZWZ0OiAxMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDsgXHJcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZjhkN2RhOyBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gIC5uYXZiYXItY29sbGFwc2UgeyBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gIH1cclxuICAubmF2YmFyLWNvbGxhcHNlOjpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIGhlaWdodDowO1xyXG4gICAgICB3aWR0aDowOyAgIFxyXG4gICAgICByaWdodDogMTVweDtcclxuICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XHJcbiAgfVxyXG4gIC5sLW8tc2VsZWN0IHAgeyBcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAubC1vLWdyaWQgeyBcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gIH1cclxufSAgXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCl7XHJcbiAgLmdyaWQtYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcclxuICB9XHJcbiAgLmwtby1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgfVxyXG59ICAiLCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNGMEYxRjM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jYXJkLXAge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWluLWhlaWdodDogMTA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5jYXJkLXAgcCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtcCAuZi1mIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uY2FyZC1wIC5mLXMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5jYXJkLXAgaSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuLmNhcmQtcDpob3ZlciBpIHtcbiAgdHJhbnNpdGlvbjogMC45cztcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG59XG5cbi50YWItZCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQtY29sb3ItcHJpbWFyeSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWluLWhlaWdodDogMTA1cHg7XG59XG5cbi50YWItaW5zaWRlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbn1cblxuLnBhbmVsLWNvbmYge1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDEwNXB4O1xufVxuXG4ubC1vLWdyaWRzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sLW8tZ3JpZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubC1vLXNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xufVxuXG4ubC1vLXNlbGVjdCBwIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDdweCAyMHB4IDVweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNXB4IDdweCAtNXB4IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5hY3RpdmUgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubGluZSB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xufVxuXG4uYm9yZGVyLW5vbmUge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zZXR0aW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICB0b3A6IDMyJTtcbiAgcmlnaHQ6IDEwN3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuLnNldHRpbmctaGlkZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuLnNldHRpbmctcGFuZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMjVweDtcbiAgdG9wOiAzNSU7XG4gIHJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zZXR0aW5nLXBhbmVsLWhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGlzdC1jb2xvciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtZ2FwOiA1cHg7XG59XG5cbi5jaXJjbGUge1xuICBoZWlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAxN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2lyY2xlOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VudGVyLWNpcmNsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRlci1pIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50YWItaW5zaWRlIHAge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi50YWItcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi50YWItcGFuZWwgcCB7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuLmhlYWQtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5jYXJldCBpIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZGV0YWlsLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4JSA0JSA0OCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5kZXRhaWwtZ3JpZCBwIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuLnBhbmVsLWNvbmYge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucGFuZWwtY29uZiBwIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uZ3JpZC1idXR0b24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5ncmlkLWJ1dHRvblJzbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmNvbG9uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuLmJ0bi1kYW5nZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMTc0NDtcbiAgYm9yZGVyLWNvbG9yOiAjRkYxNzQ0O1xufVxuXG4udHJpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG5cbi5zdWJTZWxlY3QtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDkwJTtcbn1cblxuLnNjcm9sbC1kaXYge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiBpIHtcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbi5kLXQge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDkwJTtcbn1cblxuLmQtdCBpIHtcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgZm9udC1zaXplOiA4cHggIWltcG9ydGFudDtcbn1cblxuLmRvYyBwIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kb2MtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtZ2FwOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmRvYy1zdHlsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjYWZhZmFmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmRvYy1zdHlsZSBwIHtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbi52YWwtZG9jcCB7XG4gIGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLmRvYy1zdHlsZSBpIHtcbiAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5kb2Mtc3R5bGU6aG92ZXIgaSB7XG4gIHRyYW5zaXRpb246IDAuOXM7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xufVxuXG4uZG9jLXN0eWxlOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogMC45cztcbn1cblxuLm1pbnVzIGkge1xuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnN1Yi10IHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1Yi10IGkge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuW2FyaWEtZXhwYW5kZWQ9dHJ1ZV0gLmZhLXBsdXMtY2lyY2xlLFxuW2FyaWEtZXhwYW5kZWQ9ZmFsc2VdIC5mYS1taW51cy1jaXJjbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYWN0aXZlVHJpIHtcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKSAhaW1wb3J0YW50O1xufVxuXG4uaW5hY3RpdmVUcmkge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuLm1hclJpZzUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnJzbkNvbG9yIHtcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuLnN0YXR1cyB7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tQnRuQ2xzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYWxlcnQge1xuICBwYWRkaW5nOiA3cHggMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYXJyb3csIC5hcnJvd0Vycm93IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYXJyb3c6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDRlZGRhO1xufVxuXG4uYXJyb3dFcnJvdzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmOGQ3ZGE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5uYXZiYXItY29sbGFwc2U6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHRvcDogLThweDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG4gIH1cblxuICAubC1vLXNlbGVjdCBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubC1vLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgLmdyaWQtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gIH1cblxuICAubC1vLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/home/pages/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/home/pages/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var app_shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services */ "./src/app/shared/services/index.ts");








var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiService, router, modalService, route, serviceDataTransfer) {
        var _this = this;
        this.apiService = apiService;
        this.router = router;
        this.modalService = modalService;
        this.route = route;
        this.serviceDataTransfer = serviceDataTransfer;
        this.isLoading = false;
        this.error = null;
        this.afterLoad = false;
        this.showReject = true;
        this.selectedTabList = {};
        this.temp = [];
        this.toggleValue = false;
        this.icons = { 'Name': 'fa-user', 'Loan Amount': 'fa-inr', 'Interest Rate': 'fa-percent', 'Tenure': 'fa-calendar-check-o', 'Credit Score': 'fa-star-half-full' };
        this.tabNames = ['profileDetails', 'assetFunding', 'DOCUMENTS'];
        this.iconShowplusMinus = {};
        this.firstValue = [];
        this.secondValue = [];
        this.showCls = false;
        this.imgShow = false;
        this.selectedTab = 'profileDetails';
        this.serviceDataTransfer.currentData.subscribe(function (res) {
            if (res == 'yes') {
                _this.acknowledgement(_this.parameterValue, _this.reasonForReject);
            }
        });
        this.route.queryParams.subscribe(function (params) {
            _this.leadID = params.LeadID;
            _this.status = params.approveStauts;
            _this.leadDetails = {
                bankname: 'KVB',
                type: 'coLenLead',
                leadid: params.LeadID
            };
            _this.apiService.get('/getColendingLeads', 'underwriting', _this.leadDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
                _this.values = res;
                _this.documents = res[0].documents;
                _this.afterLoad = true;
                _this.tabChange('profileDetails');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isLoading = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this.error = error); })).subscribe();
        });
    }
    HomeComponent.prototype.checkType = function (type) {
        if (typeof (type) == 'string') {
            return type.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
        else {
            return type;
        }
    };
    HomeComponent.prototype.callIcon = function (icon) {
        return this.icons[icon];
    };
    HomeComponent.prototype.tabChange = function (tabName) {
        var _this = this;
        this.temp = [];
        this.selectedTab = tabName;
        this.tabNameListSelected = this.values[0][tabName];
        if (this.tabNameListSelected) {
            Object.keys(this.tabNameListSelected).map(function (a, i) {
                if (typeof (_this.tabNameListSelected[a]) == 'object') {
                    _this.tabNameListSelected[a]['index'] = i;
                    _this.temp.push(_this.tabNameListSelected[a]);
                }
            });
            this.tabChangeList(this.temp[0].labelName, this.temp[0].index);
        }
        else {
            this.iterateValueShow = {};
        }
    };
    HomeComponent.prototype.tabChangeList = function (tabListName, index) {
        var _this = this;
        this.selectedTabList = {};
        this.selectedTabList[tabListName + index] = true;
        Object.keys(this.tabNameListSelected).map(function (a, i) {
            if (_this.tabNameListSelected[a].labelName == tabListName) {
                _this.iterateValueShow = _this.tabNameListSelected[a];
                _this.funcall(_this.iterateValueShow);
            }
        });
    };
    HomeComponent.prototype.plusOrminus = function (index) {
    };
    HomeComponent.prototype.funcall = function (val) {
        var _this = this;
        this.firstValue = [];
        this.secondValue = [];
        Object.values(val).map(function (typeVal) {
            if (typeof (typeVal.value) != undefined) {
                if (typeof (typeVal) == 'object') {
                    _this.firstValue.push(typeVal);
                    _this.showCls = false;
                    if (typeVal.value || typeVal.value == '') {
                        _this.showCls = true;
                        _this.secondValue.push(typeVal);
                    }
                }
            }
        });
    };
    HomeComponent.prototype.acknowledgement = function (status, rejectRemarks) {
        var _this = this;
        this.parameter = {
            "ackType": 'SANCTIONED',
            "ackStatus": status,
            "partnerID": this.leadID,
            "bankName": 'KVB',
            "remarks": rejectRemarks != undefined ? rejectRemarks : 'no'
        };
        this.apiService.put('/coLendingLeadStatusUpdate', 'underwriting', this.parameter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.openPopUp({
                title: 'Alert',
                msg: res.message
            });
            _this.status = status;
            _this.showReject = true;
            _this.router.navigate(['/dashboard']);
            rejectRemarks = '';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isLoading = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this.error = error); })).subscribe();
    };
    HomeComponent.prototype.confirm = function (status, paraValue) {
        this.openPopUp({
            title: 'Confirmation',
            msg: 'Are you sure to ' + status + ' the lead',
            confirmation: 'need',
            purpose: 'acknowledgment'
        });
        this.parameterValue = paraValue;
    };
    HomeComponent.prototype.openPopUp = function (obj) {
        this.modalService.setModalData(obj, 'infoModal', true);
        this.modalService.getModal('infoModal').open();
    };
    HomeComponent.prototype.submit = function (status, rejectVal) {
        if (rejectVal) {
            this.confirm(status, 'REJECTED');
            this.reasonForReject = rejectVal;
        }
        else {
            this.openPopUp({
                title: 'Validation error',
                msg: 'Please enter reason for rejection'
            });
        }
    };
    HomeComponent.prototype.getKYCimage = function (imageURL) {
        this.imgShow = true;
        var temp = imageURL.apiUrl;
        return temp;
        // this.apiService.get('/fetchKycDocs', 'underwriting', imageURL.imageUrl).pipe(
        //     tap((responseType: Response) => {
        //         console.log(responseType);
        //         this.img = responseType;
        //     }),
        //     finalize(() => this.isLoading = false),
        //     catchError(error => of(this.error = error))
        // ).subscribe(); 
    };
    HomeComponent.prototype.getpopup = function (val) {
        this.openPopUp({
            title: 'Image',
            imageUrl: val.imageUrl
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _app_core__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__["NgxSmartModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_shared_services__WEBPACK_IMPORTED_MODULE_7__["DataTrasferService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/pages/home.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__["NgxSmartModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_shared_services__WEBPACK_IMPORTED_MODULE_7__["DataTrasferService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-home-home-module.js.map