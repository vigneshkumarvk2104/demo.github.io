(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid from-top\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-12\">\r\n            <div class=\"row\">\r\n                <ng-container *ngFor=\"let count of countDetails | keyvalueWithOutSort;\">\r\n                    <div class=\"col-xl-2 col-md-6\">\r\n                        <div class=\"widget\" [ngClass]=\"{active: tabValue==count.key}\" (click)=\"tabChange(count.key)\">\r\n                            <div class=\"wid-grid\">\r\n                                <div class=\"val-div\">\r\n                                    <div class=\"count\">{{count.value}}</div>\r\n                                    <div class=\"value\">{{count.key | uppercase}}</div>\r\n                                </div> \r\n                            </div> \r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div> \r\n    <div class=\"title\" *ngIf=\"countDetails\">\r\n        <h5>{{tabValue | titlecase}} Case <em class=\"fa fa fa-angle-double-right\" aria-hidden=\"true\"></em></h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-12\">\r\n            <div class=\"row\">\r\n                <ng-container *ngFor=\"let obj of dashboardLead | paginate: { itemsPerPage: 8, currentPage: p }\">\r\n                    <div class=\"col-xl-3 col-md-6\">\r\n                        <div class=\"panel-detail\" (click)=\"golead(obj.leadID,obj.bankApprovalStatus)\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <div class=\"pull-left\">\r\n                                        <div class=\"id name\">{{obj.customerName | titlecase}}</div>\r\n                                        <div class=\"id\">STATUS - {{obj.bankApprovalStatus | uppercase}}</div>\r\n                                    </div>\r\n                                    <div class=\"pull-right\">\r\n                                        <div class=\"id\">{{obj.leadDisplayID}}</div>\r\n                                        <div class=\"id\">{{obj.branch}}</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <div class=\"mar\">\r\n                                        <div class=\"id\">Loan Amount</div>\r\n                                        <div class=\"amt\"> &#x20B9; {{obj.loanAmount}}</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <div class=\"id\">Type - {{obj.productType}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <div class=\"id\">Category - {{obj.productCategory}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <div class=\"id\">Product Details - {{obj.productDetails}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <div class=\"id date text-right\"> \r\n                                        <span>{{changeDateFormat(obj.createdDate) | date:'MMM dd, y, h:mm:ss a'}}</span>\r\n                                    </div> \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-container> \r\n            </div>\r\n        </div>\r\n    </div> \r\n    <div class=\"row\" *ngIf=\"dashboardLead?.length > 0\">\r\n        <div class=\"col-xl-12\"> \r\n            <div class=\"pagination float-right\">\r\n                <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> \r\n            </div> \r\n        </div>\r\n    </div> \r\n    <div class=\"row\"  *ngIf=\"dashboardLead?.length == 0\">\r\n        <div class=\"col-xl-12\"> \r\n            <div class=\"no-data\"> \r\n                <p class=\"no-data-i\">\r\n                    <em class=\"fa fa-bullhorn\" aria-hidden=\"true\"></em>\r\n                </p>\r\n                <p class=\"no-data-t\">No Data Available !</p> \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n     ");

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");




var routes = [
    {
        path: '',
        component: app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".widget {\n  border: 1px solid #b7b7b7;\n  min-height: 120px;\n  margin-bottom: 10px;\n  margin-top: 0;\n  padding: 0 1.5em;\n  text-align: center;\n  border-radius: 4px;\n  color: var(--text-color);\n  position: relative;\n  cursor: pointer;\n  background-color: var(--text-color-primary);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n}\n\n.wid-grid {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.icon-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon-div em {\n  font-size: 35px;\n}\n\n.widget:hover {\n  z-index: 2;\n  -webkit-transition: all 200ms ease-in;\n  -webkit-transform: scale(1.05);\n  -ms-transition: all 200ms ease-in;\n  -ms-transform: scale(1.05);\n  -moz-transition: all 200ms ease-in;\n  -moz-transform: scale(1.05);\n  transition: all 200ms ease-in;\n  transform: scale(1.05);\n  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.14);\n}\n\n.panel-detail:hover {\n  z-index: 2;\n  -webkit-transition: all 200ms ease-in;\n  -webkit-transform: scale(1.05);\n  -ms-transition: all 200ms ease-in;\n  -ms-transform: scale(1.01);\n  -moz-transition: all 200ms ease-in;\n  -moz-transform: scale(1.01);\n  transition: all 200ms ease-in;\n  transform: scale(1.01);\n  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.14);\n}\n\n.count {\n  font-size: 3.8rem;\n  font-weight: 600;\n  font-stretch: semi-condensed;\n}\n\n.value {\n  font-size: 1.3rem;\n  font-weight: bold;\n  font-stretch: semi-condensed;\n  letter-spacing: 0.4px;\n  line-height: 1.5rem;\n}\n\n.active {\n  color: var(--theme-color) !important;\n  border: 2px solid var(--theme-color);\n  margin-bottom: 15px !important;\n}\n\n.active::after {\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: 45%;\n  bottom: -14px;\n  border-left: 12px solid transparent;\n  border-right: 12px solid transparent;\n  border-top: 12px solid var(--theme-color);\n}\n\n.panel-detail {\n  border: 1px solid #b7b7b7;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  min-height: 255px;\n  padding: 15px;\n  border-radius: 4px;\n  cursor: pointer;\n  color: var(--text-color);\n  border-bottom: 2px solid var(--theme-color);\n  background-color: var(--text-color-primary);\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\n.name {\n  color: var(--theme-color) !important;\n  font-size: 18px !important;\n}\n\n.id {\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: semi-condensed;\n  line-height: 1;\n  letter-spacing: 0.5;\n  text-align: left;\n  color: var(--text-color);\n  padding: 0.2rem 0;\n  margin-top: 0.5%;\n}\n\n.mar {\n  margin-top: 2%;\n}\n\n.amt {\n  font-size: 25px;\n  font-weight: bold;\n  font-stretch: semi-condensed;\n  line-height: 1.1;\n  letter-spacing: 0.8px;\n  color: var(--theme-color);\n}\n\n.pagination {\n  margin-top: 10px;\n}\n\n.pagination::ng-deep .ngx-pagination .current {\n  background: var(--theme-color) !important;\n  color: var(--text-color-primary);\n}\n\n.pagination::ng-deep .ngx-pagination li {\n  border: 1px solid #b7b7b7;\n  background-color: #FFF;\n  color: var(--text-color);\n}\n\n.pagination::ng-deep .ngx-pagination .disabled {\n  cursor: not-allowed !important;\n  opacity: 0.5;\n}\n\n.pagination::ng-deep .ngx-pagination a:hover, .ngx-pagination button:hover {\n  background: var(--theme-color);\n  color: var(--text-color-primary);\n}\n\n.title h5 {\n  margin: 0 !important;\n  margin-top: 10px !important;\n  padding: 5px !important;\n  padding-left: 0 !important;\n  width: 200px;\n  border: 1px solid #b7b7b7;\n  background-color: var(--theme-color);\n  color: var(--text-color-primary);\n  text-align: center;\n  border-radius: 4px;\n}\n\n.no-data {\n  min-height: 350px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.no-data-i {\n  font-size: 75px;\n  color: #88888869;\n}\n\n.no-data-t {\n  font-size: 35px;\n  color: #88888869;\n}\n\n.date {\n  margin-top: 15px;\n}\n\n.date em {\n  color: var(--theme-color);\n}\n\n.date span {\n  color: var(--theme-color);\n  font-size: 15px;\n}\n\n@media screen and (max-width: 600px) {\n  .title {\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvRDpcXGNvbGVuZGluZ1xcQ29MZW5Db3JlV2ViX1YxL3NyY1xcYXBwXFxtb2R1bGVzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSwyQ0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtBQ0VKOztBRENBO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7QUNFSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLDJDQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxvQ0FBQTtFQUNBLDBCQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURDQTtFQUNJLHlDQUFBO0VBQ0EsZ0NBQUE7QUNFSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ0VKOztBRENBO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSw4QkFBQTtFQUNBLGdDQUFBO0FDR0o7O0FEQUE7RUFDSSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNHSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBREFBO0VBQ0kseUJBQUE7QUNHSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VDR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQgeyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZzogMCAxLjVlbTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpO1xyXG59XHJcblxyXG4ud2lkLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxufVxyXG5cclxuLmljb24tZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uLWRpdiBlbSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuLndpZGdldDpob3ZlciB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAgIFxyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDIwcHggcmdiYSgwLDAsMCwuMTQpOyBcclxufSAgXHJcblxyXG4ucGFuZWwtZGV0YWlsOmhvdmVyIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wMSk7ICAgXHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMjBweCByZ2JhKDAsMCwwLC4xNCk7IFxyXG59XHJcblxyXG4uY291bnQge1xyXG4gICAgZm9udC1zaXplOiAzLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBzZW1pLWNvbmRlbnNlZDtcclxufVxyXG5cclxuLnZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0cmV0Y2g6IHNlbWktY29uZGVuc2VkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxufSAgXHJcblxyXG4uYWN0aXZlIHsgXHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlOjphZnRlcntcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgaGVpZ2h0OjA7XHJcbiAgICB3aWR0aDowOyAgXHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICBib3R0b206IC0xNHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7IFxyXG4gICAgYm9yZGVyLXRvcDogMTJweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XHJcbn1cclxuXHJcbi5wYW5lbC1kZXRhaWwge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I3YjdiNztcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsLjE0KTtcclxuICAgIG1pbi1oZWlnaHQ6IDI1NXB4OyBcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubmFtZSB7IFxyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBzZW1pLWNvbmRlbnNlZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW0gMDtcclxuICAgIG1hcmdpbi10b3A6IDAuNSU7XHJcbn1cclxuXHJcbi5tYXIge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5hbXQge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0cmV0Y2g6IHNlbWktY29uZGVuc2VkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7IFxyXG59IFxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yKSAhaW1wb3J0YW50OyAgXHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KTsgXHJcbn0gIFxyXG5cclxuLnBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOyBcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxufSBcclxuXHJcbi5wYWdpbmF0aW9uOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5wYWdpbmF0aW9uOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBhOmhvdmVyLCAubmd4LXBhZ2luYXRpb24gYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4udGl0bGUgaDUge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDIwMHB4OyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSAgXHJcblxyXG4ubm8tZGF0YSB7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubm8tZGF0YS1pIHtcclxuICAgIGZvbnQtc2l6ZTogNzVweDtcclxuICAgIGNvbG9yOiAjODg4ODg4Njk7XHJcbn1cclxuXHJcbi5uby1kYXRhLXQge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgY29sb3I6ICM4ODg4ODg2OTtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmRhdGUgZW0ge1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcclxufVxyXG5cclxuLmRhdGUgc3BhbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7IFxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLndpZGdldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nOiAwIDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cblxuLndpZC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xufVxuXG4uaWNvbi1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb24tZGl2IGVtIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4ud2lkZ2V0OmhvdmVyIHtcbiAgei1pbmRleDogMjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBib3gtc2hhZG93OiAwIDFweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG59XG5cbi5wYW5lbC1kZXRhaWw6aG92ZXIge1xuICB6LWluZGV4OiAyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cblxuLmNvdW50IHtcbiAgZm9udC1zaXplOiAzLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogc2VtaS1jb25kZW5zZWQ7XG59XG5cbi52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBzZW1pLWNvbmRlbnNlZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIGxlZnQ6IDQ1JTtcbiAgYm90dG9tOiAtMTRweDtcbiAgYm9yZGVyLWxlZnQ6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMTJweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5wYW5lbC1kZXRhaWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICBtaW4taGVpZ2h0OiAyNTVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm5hbWUge1xuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4uaWQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogc2VtaS1jb25kZW5zZWQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogMC41O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IDAuMnJlbSAwO1xuICBtYXJnaW4tdG9wOiAwLjUlO1xufVxuXG4ubWFyIHtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5hbXQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IHNlbWktY29uZGVuc2VkO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucGFnaW5hdGlvbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbi5wYWdpbmF0aW9uOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGE6aG92ZXIsIC5uZ3gtcGFnaW5hdGlvbiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpO1xufVxuXG4udGl0bGUgaDUge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3YjdiNztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5uby1kYXRhIHtcbiAgbWluLWhlaWdodDogMzUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm8tZGF0YS1pIHtcbiAgZm9udC1zaXplOiA3NXB4O1xuICBjb2xvcjogIzg4ODg4ODY5O1xufVxuXG4ubm8tZGF0YS10IHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzg4ODg4ODY5O1xufVxuXG4uZGF0ZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5kYXRlIGVtIHtcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuLmRhdGUgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services */ "./src/app/shared/services/index.ts");







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, apiService, serviceDataTransfer) {
        var _this = this;
        this.router = router;
        this.apiService = apiService;
        this.serviceDataTransfer = serviceDataTransfer;
        this.tabValue = 'pending';
        this.onload('pending');
        this.serviceDataTransfer.currentData.subscribe(function (res) {
            if (res == 'changePending') {
                _this.onload('pending');
                _this.tabValue = 'pending';
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onload = function (status) {
        var _this = this;
        this.apiService.get('/getAppStatus', 'underwriting', { type: 'getAppStatus' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.countDetails = res;
            _this.serviceDataTransfer.changeData(_this.countDetails);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoading = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_this.error = error); })).subscribe();
        this.parameter = {
            bankname: 'KVB',
            type: 'coLenDashboard',
            status: status
        };
        this.apiService.get('/getColendingDashboardLeads', 'underwriting', this.parameter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.dashboardLead = res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoading = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_this.error = error); })).subscribe();
    };
    DashboardComponent.prototype.tabChange = function (val) {
        this.tabValue = val;
        this.onload(this.tabValue);
    };
    DashboardComponent.prototype.golead = function (LeadID, approveStauts) {
        var navigationExtras = {
            queryParams: {
                LeadID: LeadID,
                approveStauts: approveStauts
            }
        };
        this.router.navigate(['/home'], navigationExtras);
    };
    DashboardComponent.prototype.changeIcon = function (val) {
        if (val.toLowerCase() == 'pending') {
            return 'fa-hourglass-half';
        }
        else if (val.toLowerCase() == 'accepted') {
            return 'fa-check';
        }
        else if (val.toLowerCase() == 'overall') {
            return 'fa-check';
        }
        else if (val.toLowerCase() == 'rejected') {
            return 'fa-close';
        }
    };
    DashboardComponent.prototype.changeDateFormat = function (date) {
        return new Date(date);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: app_shared_services__WEBPACK_IMPORTED_MODULE_6__["DataTrasferService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/dashboard/dashboard.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_core__WEBPACK_IMPORTED_MODULE_3__["ApiService"], app_shared_services__WEBPACK_IMPORTED_MODULE_6__["DataTrasferService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipe/pipe.module */ "./src/app/modules/pipe/pipe.module.ts");







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-dashboard-dashboard-module.js.map