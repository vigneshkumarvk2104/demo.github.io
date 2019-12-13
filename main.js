(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n<app-spinner></app-spinner>\n\n<ngx-smart-modal [customClass]=\"'msg-modal'\" #infoModal [identifier]=\"'infoModal'\">\n  <div class=\"modal-header modal-primary\">\n    <h4 class=\"modal-title pull-left\"> {{mtitle}} </h4>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row txt-color-4\">\n      <div class=\"col-xs-12 col-lg-12 \" style=\"word-wrap: break-word;\" *ngIf=\"!image\">\n        <p style=\"text-align: center\"> {{ mMsg }} </p>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\" *ngIf=\"confirm == 'need'\">\n      <div class=\"marRig15\">\n        <button type=\"submit\" class=\"btn btn-info pull-right\" (click)=\"getConfirmation('yes')\">Yes</button>\n      </div>\n      <div>\n        <button type=\"submit\" class=\"btn btn-info\" (click)=\"infoModal.close()\">No</button>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"!confirm && !image\">\n      <button type=\"submit\" class=\"btn btn-info center-block\" (click)=\"infoModal.close()\">{{mBtn}}</button>\n    </div>\n    <div class=\"row\" *ngIf=\"image && confirm == 'No need'\">\n      <img class=\"img-fluid\" [src]='image' height=\"200px\" width=\"460\" alt=\"\">\n    </div>\n  </div>\n</ngx-smart-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- NAVBAR -->\r\n\r\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\">\r\n    <div class=\"navbar-brand\"> \r\n        <img src=\"assets/images/chola.png\" alt=\"\">  \r\n    </div>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item text-right cursor\">\r\n            <a class=\"nav-link scroll-link\">\r\n                CO-LENDING\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n\r\n<!-- ROUTER -->\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- FOOTER -->   \r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/content-layout/content-layout.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/content-layout/content-layout.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\"> \r\n    <div class=\"container\"> \r\n        <div class=\"fixed-bottom footerDetails\"> \r\n            <ul class=\"list-inline list-unstyled spanDetails\">\r\n                <li class='list-inline-item'><span><a class=\"pointer\">About CHOLA</a></span> | </li>\r\n                <li class='list-inline-item'><span><a class=\"pointer\">Contact us</a></span> | </li>\r\n                <li class='list-inline-item'><span><a class=\"pointer\">Privacy Policy</a></span> | </li>\r\n                <li class='list-inline-item'><span><a class=\"pointer\">Terms & Conditions</a></span> | </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/nav/nav.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/nav/nav.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\">\r\n    <div class=\"navbar-brand\">\r\n        <span class=\"own\">\r\n            <img src=\"assets/images/chola.png\" alt=\"\">\r\n        </span>\r\n        <span class=\"plus\" *ngIf=\"themeBank == '#00A85A' || themeBank == '#F36523'\">\r\n            <em class=\"fa fa-handshake-o\" aria-hidden=\"true\"></em>\r\n        </span>\r\n        <span *ngIf=\"themeBank == '#00A85A'\">\r\n            <img src=\"assets/images/kvb.png\" alt=\"\">\r\n        </span>\r\n        <span *ngIf=\"themeBank == '#F36523'\">\r\n            <img src=\"assets/images/bob.jpg\" alt=\"\">\r\n        </span>\r\n    </div>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\">\r\n            <em class=\"fa fa-bars\"></em>\r\n        </span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item text-right cursor\">\r\n                <a class=\"nav-link scroll-link\" [routerLink]=\"['/repay']\">\r\n                    <em class=\"fa fa-balance-scale\" aria-hidden=\"true\"></em> Repayment\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item text-right cursor\">\r\n                <a class=\"nav-link scroll-link\" [routerLink]=\"['/dashboard']\">\r\n                    <em class=\"fa fa-home\" aria-hidden=\"true\"></em> Dashboard\r\n                </a>\r\n            </li>\r\n            <!-- <li class=\"nav-item text-right\">\r\n                <a class=\"nav-link scroll-link\" style=\"margin-top: 5px;\">\r\n                    <span class=\"notification\" (click)=\"notification()\">\r\n                        <span class=\"round-notification\">\r\n                            <span>{{pendingCount}}</span>\r\n                        </span>\r\n                        <em class=\"fa fa-bell\" aria-hidden=\"true\"></em>\r\n                    </span>\r\n                </a>\r\n            </li> -->\r\n            <li class=\"nav-item text-right cursor\" (click)=\"logOut()\">\r\n                <a class=\"nav-link scroll-link\">\r\n                    <em class=\"fa fa-sign-out\" aria-hidden=\"true\"></em> Log Out\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<div [ngClass]=\"toggleValue ? 'setting' : 'setting-hide'\" (click)=\"toggle()\">\r\n    <em class=\"fa fa-gear fa-spin\" *ngIf=\"!toggleValue\"></em>\r\n    <em class=\"fa fa-close\" *ngIf=\"toggleValue\"></em>\r\n</div>\r\n<div [ngClass]=\"toggleValue ? 'setting-panel' : 'setting-panel-hide'\">\r\n    <div class=\"list-color\">\r\n        <div class=\"center-circle\" *ngFor=\"let color of colors\">\r\n            <div class=\"circle\" [ngStyle]=\"{ 'background-color': color }\" (click)=\"changeColor(color)\"></div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/login/login.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/login/login.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"container-login100\">\r\n            <div class=\"wrap-login100\">\r\n                <div class=\"lock-panel\">\r\n                    <div class=\"lock\">\r\n                        <em class=\"fa\" [ngClass]=\"lockClass\" [ngStyle]=\"lockStyle\" aria-hidden=\"true\"></em>\r\n                    </div>\r\n                </div>\r\n                <form class=\"login100-form p-t-20 \"  novalidate [formGroup]='loginForm' (ngSubmit)='login()' (keyup.enter)='login()'> \r\n                    <div class=\"group\">      \r\n                        <input type=\"text\" id=\"userId\" formControlName='userId'>\r\n                        <span class=\"highlight\"></span>\r\n                        <span class=\"bar\"></span>\r\n                        <label>User ID\r\n                            <em class=\"star-require\">*</em>\r\n                        </label>\r\n                        <div *ngIf='userId.errors && (userId.dirty || userId.touched)'>\r\n                                <div class=\"alert alert-danger arrow\" *ngIf='userId.errors.required'>\r\n                                <span class=\"alert-link\">Please enter user ID.</span>\r\n                                </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"group\">      \r\n                        <input type=\"password\" formControlName='Password'> \r\n                        <span class=\"highlight\"></span>\r\n                        <span class=\"bar\"></span>\r\n                        <label>Password \r\n                            <em class=\"star-require\">*</em>\r\n                        </label>\r\n                        <div *ngIf='Password.errors && (Password.dirty || Password.touched)'>\r\n                            <div class=\"alert alert-danger arrow\" *ngIf='Password.errors.required'>\r\n                                <span class=\"alert-link\">Please enter password.</span>\r\n                            </div>\r\n                        </div>   \r\n                    </div>   \r\n                    <div class=\"submit p-b-20\">\r\n                        <div class=\"sub-icon\"  [class.disabled]=\"!userId.dirty || !Password.dirty || userId.errors || Password.errors\" (click)=\"login()\">\r\n                            <em class=\"fa fa-arrow-right\"></em>\r\n                        </div>\r\n                    </div> \r\n                    <div class=\"error\" [hidden]=!errorMsg> \r\n                        <div class=\"alert alert-danger\">\r\n                            <span class=\"alert-link\">{{errorMsg}}</span>\r\n                        </div> \r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                        <span class=\"txt1\">\r\n                            Forget Password ?\r\n                        </span>\r\n                        <a class=\"txt2\" href=\"#\">\r\n                            click here\r\n                        </a>\r\n                    </div> \r\n                </form>\r\n            </div>\r\n        </div> \r\n    </div> \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/session/session.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/session/session.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  session works!\n</p>\n\n<p>\n  session works!\n</p>\n\n<p>\n  session works!\n</p>\n\n<p>\n  session works!\n</p>\n\n<p>\n  session works!\n</p>\n\n<p>\n  session works!\n</p>\n\n<p>\n  session works!\n</p>\n  \n<p>\n  session works!\n</p>\n\n<p>\n  session works!\n</p>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/control-messages/control-messages.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/control-messages/control-messages.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<small *ngIf=\"errorMessage !== undefined\" class=\"errorMessage\" class=\"text-danger\">\n  {{ errorMessage }}\n</small>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/info-modal/info-modal.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/info-modal/info-modal.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [hidden]=\"!isLoading\" class=\"text-xs-center\">\n</div>\n\n<ngx-spinner\nbdOpacity = 0.9\nbdColor = \"rgba(51,51,51,0.52)\"\nsize = \"default\"\ncolor = \"#fff\"\ntype = \"ball-atom\"\n[fullScreen] = \"true\"\n>\n<p style=\"color: white\" > Loading... </p>\n</ngx-spinner>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/about/about.module": [
		"./src/app/modules/about/about.module.ts",
		"app-modules-about-about-module"
	],
	"app/modules/auth/auth.module": [
		"./src/app/modules/auth/auth.module.ts"
	],
	"app/modules/dashboard/dashboard.module": [
		"./src/app/modules/dashboard/dashboard.module.ts",
		"common",
		"app-modules-dashboard-dashboard-module"
	],
	"app/modules/home/home.module": [
		"./src/app/modules/home/home.module.ts",
		"common",
		"app-modules-home-home-module"
	],
	"app/modules/ops/ops.module": [
		"./src/app/modules/ops/ops.module.ts",
		"app-modules-ops-ops-module"
	],
	"app/modules/repayment/repayment.module": [
		"./src/app/modules/repayment/repayment.module.ts",
		"app-modules-repayment-repayment-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _layouts_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/content-layout/content-layout.component */ "./src/app/layouts/content-layout/content-layout.component.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");







var routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _layouts_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutComponent"],
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        // Should be replaced with actual auth guard
        data: {
            roles: ["SFE"]
        },
        children: _app_shared__WEBPACK_IMPORTED_MODULE_5__["CONTENT_ROUTES"]
    },
    {
        path: 'OPS',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"],
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        // Should be replaced with actual auth guard
        data: {
            roles: ["OPS"]
        },
        loadChildren: 'app/modules/ops/ops.module#OpsModule'
    },
    {
        path: 'auth',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"],
        loadChildren: 'app/modules/auth/auth.module#AuthModule'
    },
    // Fallback when no prior routes is matched
    { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header {\n  width: 100%;\n  float: left;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding: 9px;\n}\n\n.modal-primary {\n  background-color: var(--theme-color);\n  color: #fff;\n}\n\n.modal-title {\n  font-size: 15px;\n  letter-spacing: 0.9px;\n  font-weight: bold;\n}\n\n.pull-left {\n  float: left !important;\n}\n\n.modal-body {\n  clear: both;\n  position: relative;\n  padding: 15px;\n}\n\n.txt-color-4 {\n  color: #253e4d;\n  font-size: 13px !important;\n  font-family: Arial, Verdana !important;\n  padding: 3px;\n}\n\n.marRig15 {\n  margin-right: 15px;\n}\n\n.modal-content {\n  border-radius: 4px 4px 3px 3px;\n}\n\n.alert-box .modal-dialog {\n  width: 400px;\n  border-radius: 3px;\n}\n\n.modal-btn-fixed button {\n  min-width: 88px;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn-info {\n  color: #fff;\n  background-color: var(--theme-color);\n  font-size: 13px;\n  border-color: var(--theme-color);\n  cursor: pointer;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: var(--theme-color);\n}\n\n.modal-btn-fixed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGNvbGVuZGluZ1xcQ29MZW5Db3JlV2ViX1YxL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG59XHJcblxyXG4ubW9kYWwtcHJpbWFyeSB7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tb2RhbC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC45cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnB1bGwtbGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnR4dC1jb2xvci00IHtcclxuICAgIGNvbG9yOiAjMjUzZTRkO1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIFZlcmRhbmEgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLm1hclJpZzE1e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDNweCAzcHg7XHJcbn1cclxuXHJcbi5hbGVydC1ib3ggLm1vZGFsLWRpYWxvZyB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1idG4tZml4ZWQgYnV0dG9uIHtcclxuICAgIG1pbi13aWR0aDogODhweDtcclxufVxyXG5cclxuLmNlbnRlci1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLWluZm8ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bi1pbmZvOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xyXG59XHJcblxyXG4ubW9kYWwtYnRuLWZpeGVke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59IiwiLm1vZGFsLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA5cHg7XG59XG5cbi5tb2RhbC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC45cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHVsbC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBjbGVhcjogYm90aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4udHh0LWNvbG9yLTQge1xuICBjb2xvcjogIzI1M2U0ZDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgVmVyZGFuYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5tYXJSaWcxNSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDNweCAzcHg7XG59XG5cbi5hbGVydC1ib3ggLm1vZGFsLWRpYWxvZyB7XG4gIHdpZHRoOiA0MDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ubW9kYWwtYnRuLWZpeGVkIGJ1dHRvbiB7XG4gIG1pbi13aWR0aDogODhweDtcbn1cblxuLmNlbnRlci1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uYnRuLWluZm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4taW5mbzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5tb2RhbC1idG4tZml4ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, serviceDataTransfer, apiService, sanitizer) {
        this.modalService = modalService;
        this.serviceDataTransfer = serviceDataTransfer;
        this.apiService = apiService;
        this.sanitizer = sanitizer;
        // infoModal : any = {}
        this.title = 'Co Lendng | Master | Home';
        this.getModal = true;
        this.mtitle = 'Internal Server Error';
        this.mMsg = 'Unknown Error, Please contact Admin Team';
        this.mBtn = 'OK';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        this.modalService.getModal('infoModal').onDataAdded.subscribe(function (modal) {
            console.log(modal);
            self.mtitle = modal['title'] ? modal['title'] : self.mtitle;
            self.mMsg = modal['msg'] ? modal['msg'] : self.mMsg;
            self.confirm = modal['confirmation'];
            self.needFor = modal['purpose'];
            self.imgLink = modal['imageUrl'];
            _this.image = '';
            if (modal['imageUrl']) {
                _this.getImg(modal['imageUrl']);
                _this.confirm = 'No need';
            }
        });
    };
    AppComponent.prototype.getConfirmation = function (val) {
        if (this.needFor == 'LogOut') {
            if (val == 'yes') {
                this.serviceDataTransfer.changeData('ok');
            }
        }
        if (this.needFor == 'acknowledgment') {
            if (val == 'yes') {
                this.serviceDataTransfer.changeData(val);
            }
        }
    };
    AppComponent.prototype.getImg = function (val) {
        var _this = this;
        this.apiService.getImage('underwriting', '/fetchKycDocs', val).subscribe(function (res) {
            var blob = new Blob([new Uint8Array(res.data.data)], { type: "image/png" });
            var urlCreator = window['URL'] || window.webkitURL;
            var imageVal = urlCreator.createObjectURL(blob);
            _this.image = _this.sanitizer.bypassSecurityTrustUrl(imageVal);
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__["NgxSmartModalService"] },
        { type: app_shared_services__WEBPACK_IMPORTED_MODULE_3__["DataTrasferService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__["NgxSmartModalService"],
            app_shared_services__WEBPACK_IMPORTED_MODULE_3__["DataTrasferService"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _layouts_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/content-layout/content-layout.component */ "./src/app/layouts/content-layout/content-layout.component.ts");
/* harmony import */ var _layouts_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/nav/nav.component */ "./src/app/layouts/nav/nav.component.ts");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "./src/app/layouts/footer/footer.component.ts");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layouts_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_7__["ContentLayoutComponent"],
                _layouts_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__["AuthLayoutComponent"]
            ],
            imports: [
                // angular
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // 3rd party
                _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
                // core & shared
                _app_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                _app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                // app
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__["NgxSmartModalModule"].forRoot()
            ],
            exports: [ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/app-config.ts":
/*!************************************!*\
  !*** ./src/app/core/app-config.ts ***!
  \************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var config = {
    API_URL: 'assets/api',
    defaultLimitSearch: 100
};


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/no-auth.guard */ "./src/app/core/guards/no-auth.guard.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/token.interceptor */ "./src/app/core/interceptors/token.interceptor.ts");
/* harmony import */ var _guards_module_import_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/module-import.guard */ "./src/app/core/guards/module-import.guard.ts");








var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_guards_module_import_guard__WEBPACK_IMPORTED_MODULE_7__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"]
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
                _guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_4__["NoAuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptor"],
                    multi: true
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var token = this.authService.getToken();
        var role = this.authService.getRole();
        if (token && next.data.roles && !next.data.roles.includes(role)) {
            this.authService.logout();
            this.router.navigate(['/auth/login']);
            return false;
        }
        else if (token) {
            return true;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/guards/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/guards/index.ts ***!
  \**************************************/
/*! exports provided: AuthGuard, NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _no_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-auth.guard */ "./src/app/core/guards/no-auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return _no_auth_guard__WEBPACK_IMPORTED_MODULE_2__["NoAuthGuard"]; });






/***/ }),

/***/ "./src/app/core/guards/module-import.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/core/guards/module-import.guard.ts ***!
  \****************************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import " + moduleName + " modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/guards/no-auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/core/guards/no-auth.guard.ts ***!
  \**********************************************/
/*! exports provided: NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoAuthGuard = /** @class */ (function () {
    function NoAuthGuard() {
    }
    NoAuthGuard.prototype.canActivate = function () {
        return true;
    };
    NoAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoAuthGuard);
    return NoAuthGuard;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, LogLevel, Logger, ThemeService, ILoginContext, AuthService, JsonApiService, ApiService, Project, User, AuthGuard, NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.service */ "./src/app/core/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_2__["LogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ILoginContext", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["ILoginContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonApiService", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["JsonApiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models */ "./src/app/core/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return _models__WEBPACK_IMPORTED_MODULE_4__["Project"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _models__WEBPACK_IMPORTED_MODULE_4__["User"]; });

/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards */ "./src/app/core/guards/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return _guards__WEBPACK_IMPORTED_MODULE_5__["NoAuthGuard"]; });

/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/theme.service */ "./src/app/core/services/theme.service.ts");
/* empty/unused harmony star reexport */








/***/ }),

/***/ "./src/app/core/interceptors/token.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/token.interceptor.ts ***!
  \********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");







var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth, spinner, modalService) {
        this.auth = auth;
        this.spinner = spinner;
        this.modalService = modalService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var re = 'repayment';
        if (request.url !== re) {
            request = request.clone({
                setHeaders: {
                    Authorization: "" + this.auth.getToken()
                }
            });
        }
        this.spinner.show();
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            var self = _this;
            setTimeout(function () {
                self.spinner.hide();
            }, 1000);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            var obj = {
                title: "Internal Server Error",
                msg: error && error.error && error.error.message ? error.error.message : 'Unknown Error Occured. Please contact IT Team',
            };
            // this.modalService.setModalData(obj, 'infoModal',true);
            // this.modalService.getModal('infoModal').open()
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    TokenInterceptor.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__["NgxSmartModalService"] }
    ]; };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__["NgxSmartModalService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/core/logger.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/logger.service.ts ***!
  \****************************************/
/*! exports provided: LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */

/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    Logger.enableProductionMode = function () {
        Logger.level = LogLevel.Warning;
    };
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    Logger.prototype.debug = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.log, LogLevel.Debug, objects);
    };
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    Logger.prototype.info = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.info, LogLevel.Info, objects);
    };
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    Logger.prototype.warn = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.warn, LogLevel.Warning, objects);
    };
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    Logger.prototype.error = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.error, LogLevel.Error, objects);
    };
    Logger.prototype.log = function (func, level, objects) {
        var _this = this;
        if (level <= Logger.level) {
            var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(function (output) { return output.apply(output, [_this.source, level].concat(objects)); });
        }
    };
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely.
     */
    Logger.level = LogLevel.Debug;
    /**
     * Additional log outputs.
     */
    Logger.outputs = [];
    return Logger;
}());



/***/ }),

/***/ "./src/app/core/models/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/*! exports provided: Project, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.model */ "./src/app/core/models/project.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return _project_model__WEBPACK_IMPORTED_MODULE_1__["Project"]; });

/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./src/app/core/models/user.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user_model__WEBPACK_IMPORTED_MODULE_2__["User"]; });






/***/ }),

/***/ "./src/app/core/models/project.model.ts":
/*!**********************************************!*\
  !*** ./src/app/core/models/project.model.ts ***!
  \**********************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/core/models/user.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/user.model.ts ***!
  \*******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var BASE_URL = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrlSet;
var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json') };
    }
    ApiService.prototype.get = function (path, app, params) {
        return this.httpClient.get(BASE_URL[app] + path, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.getImage = function (app, path, params) {
        return this.httpClient.get(BASE_URL[app] + path, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, app, body) {
        if (body === void 0) { body = {}; }
        return this.httpClient
            .put(BASE_URL[app] + path, JSON.stringify(body), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, app, body) {
        if (body === void 0) { body = {}; }
        if (path == '/auth/authenticate') {
            this.options['observe'] = 'response';
        }
        if (app == 'repayment') {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                }),
                observe: 'response'
            };
            return this.httpClient
                .post(BASE_URL[app], JSON.stringify(body), httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
        }
        else {
            return this.httpClient
                .post(BASE_URL[app] + path, body, this.options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
        }
    };
    ApiService.prototype.delete = function (path) {
        return this.httpClient.delete(BASE_URL + path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: ILoginContext, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ILoginContext", function() { return ILoginContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ILoginContext = /** @class */ (function () {
    function ILoginContext() {
    }
    return ILoginContext;
}());

var AuthService = /** @class */ (function () {
    function AuthService(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    AuthService.prototype.login = function (loginContext) {
        return this.apiService.post('/auth/authenticate', 'users', {
            "userId": loginContext.userId,
            "password": loginContext.Password
        });
    };
    ;
    AuthService.prototype.logout = function () {
        sessionStorage.clear();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
    };
    AuthService.prototype.getToken = function () {
        return sessionStorage.getItem('token');
    };
    AuthService.prototype.getName = function () {
        return sessionStorage.getItem('user');
    };
    AuthService.prototype.getRole = function () {
        return sessionStorage.getItem('role');
    };
    AuthService.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: ThemeService, ILoginContext, AuthService, JsonApiService, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ILoginContext", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["ILoginContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _json_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json-api.service */ "./src/app/core/services/json-api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonApiService", function() { return _json_api_service__WEBPACK_IMPORTED_MODULE_2__["JsonApiService"]; });

/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]; });

/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.service */ "./src/app/core/services/theme.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return _theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]; });








/***/ }),

/***/ "./src/app/core/services/json-api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/json-api.service.ts ***!
  \***************************************************/
/*! exports provided: JsonApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonApiService", function() { return JsonApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-config */ "./src/app/core/app-config.ts");






var JsonApiService = /** @class */ (function () {
    function JsonApiService(httpClient) {
        this.httpClient = httpClient;
    }
    JsonApiService.prototype.fetch = function (url) {
        return this.httpClient.get(this.getBaseUrl() + _app_config__WEBPACK_IMPORTED_MODULE_5__["config"].API_URL + url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    JsonApiService.prototype.getBaseUrl = function () {
        return location.protocol + "//" + (location.hostname + (location.port ? ':' + location.port : '')) + "/";
    };
    JsonApiService.prototype.handleError = function (error) {
        var errorMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorMsg);
    };
    JsonApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    JsonApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JsonApiService);
    return JsonApiService;
}());



/***/ }),

/***/ "./src/app/core/services/theme.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/theme.service.ts ***!
  \************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ThemeService = /** @class */ (function () {
    function ThemeService() {
        this.lightTheme = {};
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentData = this.dataSource.asObservable();
    }
    ThemeService.prototype.toggleLight = function (color) {
        this.lightTheme = {
            'background-color': '#f0f1f3',
            'text-color': '#3c4858',
            'text-color-primary': '#FFF',
            'theme-color': color
        };
        this.setTheme(this.lightTheme);
        this.dataSource.next(this.lightTheme);
    };
    ThemeService.prototype.setTheme = function (theme) {
        Object.keys(theme).forEach(function (k) {
            document.documentElement.style.setProperty("--" + k, theme[k]);
        });
    };
    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-brand {\n  display: flex;\n  align-items: center;\n}\n\n.navbar-brand img {\n  height: 40px;\n}\n\n.bg-dark {\n  background-color: var(--text-color-primary) !important;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.18);\n  height: 60px;\n}\n\n.navbar {\n  background: linear-gradient(to right, rgba(167, 207, 223, 0) 0%, var(--theme-color) 100%);\n}\n\n.navbar-collapse {\n  background: linear-gradient(to right, rgba(167, 207, 223, 0) 0%, var(--theme-color) 100%);\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: var(--text-color-primary) !important;\n  letter-spacing: 0.9px;\n  font-size: 15px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hdXRoLWxheW91dC9EOlxcY29sZW5kaW5nXFxDb0xlbkNvcmVXZWJfVjEvc3JjXFxhcHBcXGxheW91dHNcXGF1dGgtbGF5b3V0XFxhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0cy9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtBQ0NEOztBREVBO0VBQ0Msc0RBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLHlGQUFBO0FDQ0Q7O0FERUE7RUFDQyx5RkFBQTtBQ0NEOztBREVBO0VBQ0MsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSAgXHJcbiAgXHJcbi5uYXZiYXItYnJhbmQgaW1nIHtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcbn0gXHJcbiAgXHJcbi5iZy1kYXJrIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xOCk7XHJcblx0aGVpZ2h0OiA2MHB4OyAgXHJcbn0gXHJcbiAgXHJcbi5uYXZiYXIge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxNjcsMjA3LDIyMywwKSAwJSx2YXIoLS10aGVtZS1jb2xvcikgMTAwJSk7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2UgeyBcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTY3LDIwNywyMjMsMCkgMCUsdmFyKC0tdGhlbWUtY29sb3IpIDEwMCUpOyBcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcblx0Y29sb3I6IHZhcigtLXRleHQtY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcclxuXHRsZXR0ZXItc3BhY2luZzogMC45cHg7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iLCIubmF2YmFyLWJyYW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdmJhci1icmFuZCBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE2NywgMjA3LCAyMjMsIDApIDAlLCB2YXIoLS10aGVtZS1jb2xvcikgMTAwJSk7XG59XG5cbi5uYXZiYXItY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTY3LCAyMDcsIDIyMywgMCkgMCUsIHZhcigtLXRoZW1lLWNvbG9yKSAxMDAlKTtcbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjlweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");



var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(overallColor) {
        this.overallColor = overallColor;
        this.overallColor.toggleLight('#003f88');
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _core_services__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }
    ]; };
    AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-layout',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/content-layout/content-layout.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/content-layout/content-layout.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC1sYXlvdXQvY29udGVudC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/content-layout/content-layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/content-layout/content-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent() {
    }
    ContentLayoutComponent.prototype.ngOnInit = function () {
    };
    ContentLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-layout',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/content-layout/content-layout.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/layouts/content-layout/content-layout.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spanDetails {\n  color: gray;\n  font-size: 13px;\n  margin-top: 11px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.footerDetails {\n  background-color: white;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9mb290ZXIvRDpcXGNvbGVuZGluZ1xcQ29MZW5Db3JlV2ViX1YxL3NyY1xcYXBwXFxsYXlvdXRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhbkRldGFpbHMge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6MTNweDtcclxuICAgIG1hcmdpbi10b3A6MTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvb3RlckRldGFpbHN7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGhlaWdodDogNDVweDtcclxufSAgIiwiLnNwYW5EZXRhaWxzIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb290ZXJEZXRhaWxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
        this.version = 2;
        this.envName = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].envName;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/layouts/footer/footer.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/nav/nav.component.scss":
/*!************************************************!*\
  !*** ./src/app/layouts/nav/nav.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-brand {\n  display: flex;\n  align-items: center;\n}\n\n.plus {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.plus em {\n  color: var(--theme-color);\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.navbar-brand img {\n  height: 40px;\n}\n\n.bg-dark {\n  background-color: var(--text-color-primary) !important;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.18);\n  height: 65px;\n}\n\n.navbar {\n  background: linear-gradient(to right, rgba(167, 207, 223, 0) 0%, var(--theme-color) 80%);\n}\n\n.nav-item em {\n  margin-right: 3px;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.nav-item a {\n  margin-left: 5px;\n  margin-right: 5px;\n  color: var(--text-color);\n}\n\n.nav-item em {\n  color: var(--theme-color);\n  cursor: pointer;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: var(--text-color);\n}\n\n.notification {\n  position: relative;\n}\n\n.notification em {\n  font-size: 18px;\n  color: var(--text-color);\n}\n\n.round-notification {\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  top: -10px;\n  right: -3px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.18);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  color: var(--theme-color);\n  background-color: var(--text-color-primary);\n  border: 1px solid var(--theme-color);\n  font-size: 9px;\n}\n\n.fa-bars {\n  color: #FFF;\n  font-size: 28px;\n}\n\n.navbar-toggler {\n  cursor: pointer;\n}\n\n.navbar-collapse a, .nav-link em {\n  color: #FFF !important;\n}\n\n/* Color Selection */\n\n.setting {\n  position: fixed;\n  height: 35px;\n  width: 35px;\n  top: 18%;\n  right: 107px;\n  color: var(--text-color-primary);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  cursor: pointer;\n  border-radius: 50%;\n  z-index: 2000;\n  background-color: var(--theme-color);\n}\n\n.setting-hide {\n  position: fixed;\n  height: 35px;\n  width: 35px;\n  top: 20%;\n  right: 0;\n  color: var(--text-color-primary);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 25px;\n  cursor: pointer;\n  border-radius: 50%;\n  z-index: 1000;\n  background-color: var(--theme-color);\n}\n\n.setting-panel {\n  position: fixed;\n  height: 150px;\n  width: 125px;\n  top: 20%;\n  right: 10px;\n  background: var(--text-color-primary);\n  padding: 15px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 4px;\n  z-index: 1000;\n}\n\n.setting-panel-hide {\n  display: none;\n}\n\n.list-color {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 5px;\n}\n\n.circle {\n  height: 17px;\n  width: 17px;\n  border-radius: 50%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.circle:hover {\n  border: 2px solid #000;\n  cursor: pointer;\n}\n\n.center-circle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media screen and (max-width: 600px) {\n  .navbar-collapse {\n    margin-left: -10px;\n    margin-right: -20px;\n    margin-top: 18px;\n  }\n\n  .navbar-toggler {\n    color: rgba(255, 255, 255, 0.5);\n    border-color: none !important;\n  }\n\n  .navbar-brand img {\n    height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9uYXYvRDpcXGNvbGVuZGluZ1xcQ29MZW5Db3JlV2ViX1YxL3NyY1xcYXBwXFxsYXlvdXRzXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxzREFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usd0ZBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQSxvQkFBQTs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNDLGFBQUE7QUNBRDs7QURHQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDQUY7O0VERUE7SUFDRSwrQkFBQTtJQUNBLDZCQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxZQUFBO0VDRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSBcclxuXHJcbi5wbHVzICB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGx1cyBlbSB7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQgaW1nIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn0gXHJcblxyXG4uYmctZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLDAuMTgpO1xyXG4gIGhlaWdodDogNjVweDsgIFxyXG59IFxyXG5cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE2NywyMDcsMjIzLDApIDAlLHZhcigtLXRoZW1lLWNvbG9yKSA4MCUpO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0gZW0ge1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSBhIHsgXHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7IFxyXG59XHJcblxyXG4ubmF2LWl0ZW0gZW0ge1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiBlbSB7IFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7IFxyXG59XHJcblxyXG4ucm91bmQtbm90aWZpY2F0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0b3A6IC0xMHB4O1xyXG4gIHJpZ2h0OiAtM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLDAuMTgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwOyAgIFxyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAgdmFyKC0tdGhlbWUtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG59IFxyXG5cclxuLmZhLWJhcnMge1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gXHJcblxyXG4ubmF2YmFyLWNvbGxhcHNlIGEsIC5uYXYtbGluayBlbSB7XHJcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogQ29sb3IgU2VsZWN0aW9uICovXHJcblxyXG4uc2V0dGluZyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMzVweDsgXHJcbiAgdG9wOiAxOCU7XHJcbiAgcmlnaHQ6IDEwN3B4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpOyBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMjAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbn1cclxuXHJcbi5zZXR0aW5nLWhpZGUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7IFxyXG4gIHRvcDogMjAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpOyBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbn0gXHJcblxyXG4uc2V0dGluZy1wYW5lbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIHRvcDogMjAlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQtY29sb3ItcHJpbWFyeSk7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLC4xNCk7XHJcbiAgYm9yZGVyLXJhZGl1czo0cHg7IFxyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5zZXR0aW5nLXBhbmVsLWhpZGUge1xyXG4gZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4ubGlzdC1jb2xvciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XHJcbiAgZ3JpZC1nYXA6IDVweDsgXHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gIGhlaWdodDogMTdweDtcclxuICB3aWR0aDogMTdweDsgXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDVweDsgXHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyBcclxufVxyXG5cclxuLmNpcmNsZTpob3ZlciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXItY2lyY2xlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm5hdmJhci1jb2xsYXBzZSB7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDsgIFxyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICB9XHJcbiAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuICAgIGJvcmRlci1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfSBcclxufSIsIi5uYXZiYXItYnJhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGx1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGx1cyBlbSB7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5uYXZiYXItYnJhbmQgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYmctZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGhlaWdodDogNjVweDtcbn1cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxNjcsIDIwNywgMjIzLCAwKSAwJSwgdmFyKC0tdGhlbWUtY29sb3IpIDgwJSk7XG59XG5cbi5uYXYtaXRlbSBlbSB7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1pdGVtIGEge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4ubmF2LWl0ZW0gZW0ge1xuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ub3RpZmljYXRpb24gZW0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cblxuLnJvdW5kLW5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogLTNweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuXG4uZmEtYmFycyB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhci1jb2xsYXBzZSBhLCAubmF2LWxpbmsgZW0ge1xuICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xufVxuXG4vKiBDb2xvciBTZWxlY3Rpb24gKi9cbi5zZXR0aW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICB0b3A6IDE4JTtcbiAgcmlnaHQ6IDEwN3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDIwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuLnNldHRpbmctaGlkZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgdG9wOiAyMCU7XG4gIHJpZ2h0OiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuLnNldHRpbmctcGFuZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMjVweDtcbiAgdG9wOiAyMCU7XG4gIHJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5zZXR0aW5nLXBhbmVsLWhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGlzdC1jb2xvciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtZ2FwOiA1cHg7XG59XG5cbi5jaXJjbGUge1xuICBoZWlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAxN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2lyY2xlOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VudGVyLWNpcmNsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICB9XG5cbiAgLm5hdmJhci10b2dnbGVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJvcmRlci1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdmJhci1icmFuZCBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layouts/nav/nav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/layouts/nav/nav.component.ts ***!
  \**********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");








var NavComponent = /** @class */ (function () {
    function NavComponent(auth, router, modalService, serviceDataTransfer, overallColor) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.modalService = modalService;
        this.serviceDataTransfer = serviceDataTransfer;
        this.overallColor = overallColor;
        this.version = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version;
        this.navItems = [
            { link: '/dashboard/home', title: 'Home' },
            { link: '/about', title: 'About' },
            { link: '/contact', title: 'Contact' }
        ];
        this.colors = [
            '#003f88',
            '#00A85A',
            '#e91e63',
            '#F36523',
            '#2ca8ff',
            '#ff9800',
            '#9368e9',
            '#0091ea',
            '#3e2723',
            '#00bfa5',
            '#afb42b',
            '#546e7a'
        ];
        this.toggleValue = false;
        this.serviceDataTransfer.currentData.subscribe(function (res) {
            if (res) {
                sessionStorage.setItem('countpending', res['pending']);
                _this.pendingCount = sessionStorage.getItem('countpending');
            }
            else {
                _this.pendingCount = 0;
            }
            if (res == 'ok') {
                _this.auth.logout();
                _this.router.navigate(['/auth/login']);
                _this.openPopUp({
                    title: 'Success!',
                    msg: 'You have been logged out successfully'
                });
            }
            else {
                _this.modalService.getModal('infoModal').close();
            }
        });
        if (sessionStorage.getItem('color')) {
            this.overallColor.toggleLight(sessionStorage.getItem('color'));
            this.themeBank = sessionStorage.getItem('themeBasedImage');
        }
        else {
            this.overallColor.toggleLight('#003f88');
        }
        if (sessionStorage.getItem('countpending')) {
            this.pendingCount = sessionStorage.getItem('countpending');
        }
    }
    NavComponent.prototype.ngOnInit = function () {
        if (this.auth.getToken()) {
            this.loggedUserName = this.auth.getName();
        }
    };
    NavComponent.prototype.logOut = function () {
        this.openPopUp({
            title: 'Confirmation',
            msg: 'Are you sure want to logout ?',
            confirmation: 'need',
            purpose: 'LogOut'
        });
    };
    NavComponent.prototype.openPopUp = function (obj) {
        this.modalService.setModalData(obj, 'infoModal', true);
        this.modalService.getModal('infoModal').open();
    };
    NavComponent.prototype.notification = function () {
        if (this.router['url'] == '/dashboard') {
            this.serviceDataTransfer.changeData('changePending');
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    NavComponent.prototype.toggle = function () {
        this.toggleValue = this.toggleValue == false ? true : false;
    };
    NavComponent.prototype.changeColor = function (color) {
        sessionStorage.setItem('color', color);
        this.overallColor.toggleLight(color);
    };
    NavComponent.ctorParameters = function () { return [
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_smart_modal__WEBPACK_IMPORTED_MODULE_5__["NgxSmartModalService"] },
        { type: app_shared_services__WEBPACK_IMPORTED_MODULE_6__["DataTrasferService"] },
        { type: _core_services__WEBPACK_IMPORTED_MODULE_7__["ThemeService"] }
    ]; };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/nav/nav.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/layouts/nav/nav.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_5__["NgxSmartModalService"],
            app_shared_services__WEBPACK_IMPORTED_MODULE_6__["DataTrasferService"],
            _core_services__WEBPACK_IMPORTED_MODULE_7__["ThemeService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/auth/pages/login/login.component.ts");
/* harmony import */ var _pages_session_session_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/session/session.component */ "./src/app/modules/auth/pages/session/session.component.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.routing */ "./src/app/modules/auth/auth.routing.ts");







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _pages_session_session_component__WEBPACK_IMPORTED_MODULE_4__["SessionComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"],
                _app_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth.routing.ts ***!
  \**********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/auth/pages/login/login.component.ts");
/* harmony import */ var _pages_session_session_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/session/session.component */ "./src/app/modules/auth/pages/session/session.component.ts");





var routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'login',
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            },
            {
                path: 'sessionExpired',
                component: _pages_session_session_component__WEBPACK_IMPORTED_MODULE_4__["SessionComponent"]
            }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".p-t-40 {\n  padding-top: 40px;\n}\n\n.p-t-26 {\n  padding-top: 26px;\n}\n\n.p-t-20 {\n  padding-top: 20px;\n}\n\n.p-b-20 {\n  padding-bottom: 20px;\n}\n\n.p-b-40 {\n  padding-bottom: 40px;\n}\n\n.limiter {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.container-login100 {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%239293ac' fill-opacity='0.25' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.wrap-login100 {\n  width: 320px;\n  background: #fff;\n  border-radius: 4px;\n  padding: 0 5px 30px 5px;\n  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  border-bottom: 3px solid #003f88;\n  margin-top: 50px !important;\n}\n\n.login100-form {\n  width: 100%;\n}\n\n.btn-show-pass {\n  font-size: 15px;\n  color: #999999;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  top: 0;\n  right: 35px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n\n.txt1 {\n  font-size: 14px;\n  color: #666666;\n  line-height: 1.5;\n}\n\n.submit {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n}\n\n.disabled {\n  opacity: 0.6;\n}\n\n.sub-icon {\n  font-size: 25px;\n  color: #fff;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  background-color: #003f88;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.fa-eye-slash {\n  color: #ed1c24;\n}\n\n.lock-panel {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.lock {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  background-color: #FFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: -50px;\n  border: 2px solid #003f88;\n}\n\n.lock em {\n  font-size: 50px;\n}\n\n.submit i:hover {\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n.shake {\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n.star-require {\n  color: #ed1c24;\n}\n\n@-webkit-keyframes shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n\n@keyframes shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n\n.group {\n  position: relative;\n  margin-bottom: 35px;\n}\n\ninput {\n  font-size: 15px;\n  margin-left: 25px;\n  padding: 28px 0px 5px 0px;\n  display: block;\n  border: none;\n  width: 80%;\n  border-bottom: 1px solid #52617a;\n  letter-spacing: 1.2px;\n  background-color: transparent;\n  color: #888;\n}\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.bar {\n  position: relative;\n  display: block;\n  width: 80%;\n  margin-left: 25px;\n}\n\nlabel {\n  color: #888;\n  font-size: 14px;\n  font-weight: 600;\n  position: absolute;\n  pointer-events: none;\n  left: 25px;\n  top: 5px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s;\n  -webkit-transition: 0.2s;\n}\n\n.alert-warning, .alert-danger {\n  font-size: 11px;\n  text-align: center;\n  margin: 10px 35px 0px 23px;\n  background: linear-gradient(to right, rgba(167, 207, 223, 0) 0%, #f8d7da 100%);\n  padding: 8px 8px 8px 8px !important;\n}\n\ninput:focus {\n  outline: none;\n}\n\ninput:focus ~ label {\n  top: -10px;\n  font-size: 14px;\n  color: #5264AE;\n}\n\n.bar {\n  position: relative;\n  display: block;\n}\n\n.bar:before,\n.bar:after {\n  content: \"\";\n  height: 1px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #5264AE;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n.bar:before {\n  left: 50%;\n}\n\n.bar:after {\n  right: 50%;\n}\n\ninput:focus ~ .bar:before,\ninput:focus ~ .bar:after {\n  width: 50%;\n}\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\ninput:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #5264AE;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@keyframes inputHighlighter {\n  from {\n    background: #5264AE;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n.arrow::before {\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: 10px;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid #f8d7da;\n}\n\n.error {\n  margin-bottom: 20px;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  transition: background-color 5500s ease-in-out 0s;\n  -webkit-text-fill-color: #888 !important;\n}\n\n@media only screen and (min-device-width: 480px) and (max-device-width: 800px) and (orientation: landscape) {\n  .wrap-login100 {\n    margin-top: 150px !important;\n    margin-bottom: 80px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL0Q6XFxjb2xlbmRpbmdcXENvTGVuQ29yZVdlYl9WMS9zcmNcXGFwcFxcbW9kdWxlc1xcYXV0aFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7QUNDRDs7QURFQTtFQUNDLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxpQkFBQTtBQ0NEOztBREVBO0VBQ0Msb0JBQUE7QUNDRDs7QURFQTtFQUNDLG9CQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBS0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa2RBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtEQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFLQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFJQSxvQkFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0FDQ0Q7O0FERUE7RUFDQyx3RUFBQTtVQUFBLGdFQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURFQTtFQUNDLHdFQUFBO1VBQUEsZ0VBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtBQ0NEOztBREVBO0VBQ0M7SUFDQyxrQ0FBQTtFQ0NBO0VEQ0Q7SUFDQyxpQ0FBQTtFQ0NBO0VEQ0Q7SUFDQyxrQ0FBQTtFQ0NBO0VEQ0Q7SUFDQyxpQ0FBQTtFQ0NBO0FBQ0Y7O0FEYkE7RUFDQztJQUNDLGtDQUFBO0VDQ0E7RURDRDtJQUNDLGlDQUFBO0VDQ0E7RURDRDtJQUNDLGtDQUFBO0VDQ0E7RURDRDtJQUNDLGlDQUFBO0VDQ0E7QUFDRjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNILHlCQUFBO0VBQ0EsY0FBQTtFQUNHLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDSCxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0FEOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNILDBCQUFBO0VBQ0EsOEVBQUE7RUFDQSxtQ0FBQTtBQ0FEOztBREdBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0FDQUQ7O0FER0E7RUFDQyxrQkFBQTtFQUNBLGNBQUE7QUNBRDs7QURHQTs7RUFFQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQ0FEOztBREdBO0VBQ0MsU0FBQTtBQ0FEOztBREdBO0VBQ0MsVUFBQTtBQ0FEOztBREdBOztFQUVDLFVBQUE7QUNBRDs7QURHQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDQUQ7O0FER0E7RUFDQyw2Q0FBQTtFQUVBLHFDQUFBO0FDQUQ7O0FER0E7RUFDQztJQUNDLG1CQUFBO0VDQUE7RURFRDtJQUNDLFFBQUE7SUFDQSx1QkFBQTtFQ0FBO0FBQ0Y7O0FEYUE7RUFDQztJQUNDLG1CQUFBO0VDRkE7RURJRDtJQUNDLFFBQUE7SUFDQSx1QkFBQTtFQ0ZBO0FBQ0Y7O0FES0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0gsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0FDSEQ7O0FETUE7RUFDQyxtQkFBQTtBQ0hEOztBRE1BOzs7O0VBSUksaURBQUE7RUFDQSx3Q0FBQTtBQ0hKOztBRE1BO0VBQ0M7SUFDQyw0QkFBQTtJQUNBLDhCQUFBO0VDSEE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wLXQtNDAge1xyXG5cdHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ucC10LTI2IHtcclxuXHRwYWRkaW5nLXRvcDogMjZweDtcclxufVxyXG5cclxuLnAtdC0yMCB7XHJcblx0cGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5wLWItMjAge1xyXG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucC1iLTQwIHtcclxuXHRwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmxpbWl0ZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWxvZ2luMTAwIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTIwIDIwLjVWMThIMHYtMmgyMHYtMkgwdi0yaDIwdi0ySDBWOGgyMFY2SDBWNGgyMFYySDBWMGgyMnYyMGgyVjBoMnYyMGgyVjBoMnYyMGgyVjBoMnYyMGgyVjBoMnYyMGgydjJIMjB2LTEuNXpNMCAyMGgydjIwSDBWMjB6bTQgMGgydjIwSDRWMjB6bTQgMGgydjIwSDhWMjB6bTQgMGgydjIwaC0yVjIwem00IDBoMnYyMGgtMlYyMHptNCA0aDIwdjJIMjB2LTJ6bTAgNGgyMHYySDIwdi0yem0wIDRoMjB2MkgyMHYtMnptMCA0aDIwdjJIMjB2LTJ6JyBmaWxsPSclMjM5MjkzYWMnIGZpbGwtb3BhY2l0eT0nMC4yNScgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG4ud3JhcC1sb2dpbjEwMCB7XHJcblx0d2lkdGg6IDMyMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHBhZGRpbmc6IDAgNXB4IDMwcHggNXB4O1xyXG5cdGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHQtby1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0LW1zLWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwM2Y4ODsgXHJcblx0bWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9naW4xMDAtZm9ybSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4tc2hvdy1wYXNzIHtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMzVweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcblxyXG4udHh0MSB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGNvbG9yOiAjNjY2NjY2O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0anVzdGlmeS1pdGVtczogY2VudGVyOyBcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuXHRvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5zdWItaWNvbiB7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGhlaWdodDogNTBweDtcclxuXHR3aWR0aDogNTBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwM2Y4ODtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmEtZXllLXNsYXNoIHtcclxuXHRjb2xvcjogI2VkMWMyNDtcclxufVxyXG5cclxuLmxvY2stcGFuZWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjsgIFxyXG59XHJcblxyXG4ubG9jayB7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHR3aWR0aDogMTAwcHg7IFxyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW4tdG9wOiAtNTBweDsgXHJcblx0Ym9yZGVyOiAycHggc29saWQgIzAwM2Y4ODsgXHJcbn1cclxuXHJcbi5sb2NrIGVtIHtcclxuXHRmb250LXNpemU6IDUwcHg7IFxyXG59XHJcblxyXG4uc3VibWl0IGk6aG92ZXIge1xyXG5cdGFuaW1hdGlvbjogc2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgYm90aDtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG59XHJcblxyXG4uc2hha2Uge1xyXG5cdGFuaW1hdGlvbjogc2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgYm90aDtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG59XHJcblxyXG4uc3Rhci1yZXF1aXJlIHtcclxuXHRjb2xvcjogI2VkMWMyNDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGFrZSB7XHJcblx0MTAlLCA5MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcclxuXHR9XHJcblx0MjAlLCA4MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xyXG5cdH1cclxuXHQzMCUsIDUwJSwgNzAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XHJcblx0fVxyXG5cdDQwJSwgNjAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcclxuXHR9XHJcbn0gXHJcblxyXG4uZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDsgXHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG5cdHBhZGRpbmc6IDI4cHggMHB4IDVweCAwcHg7XHJcblx0ZGlzcGxheTogYmxvY2s7IFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTI2MTdhOyAgXHJcblx0bGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBcclxuXHRjb2xvcjogIzg4ODtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcbi5iYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UgYWxsO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAuMnM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcclxufSBcclxuXHJcbi5hbGVydC13YXJuaW5nLCAuYWxlcnQtZGFuZ2VyIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW46IDEwcHggMzVweCAwcHggMjNweDtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTY3LCAyMDcsIDIyMywgMCkgMCUsICNmOGQ3ZGEgMTAwJSk7XHJcblx0cGFkZGluZzogOHB4IDhweCA4cHggOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7IFxyXG59XHJcbiBcclxuaW5wdXQ6Zm9jdXN+bGFiZWwge1xyXG4gICAgdG9wOiAtMTBweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y29sb3I6ICM1MjY0QUU7XHJcbn1cclxuXHJcbi5iYXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBibG9jazsgXHJcbn1cclxuXHJcbi5iYXI6YmVmb3JlLFxyXG4uYmFyOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRoZWlnaHQ6IDFweDtcclxuXHR3aWR0aDogMDtcclxuXHRib3R0b206IDFweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0YmFja2dyb3VuZDogIzUyNjRBRTtcclxuXHR0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbn1cclxuXHJcbi5iYXI6YmVmb3JlIHtcclxuXHRsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5iYXI6YWZ0ZXIge1xyXG5cdHJpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbmlucHV0OmZvY3Vzfi5iYXI6YmVmb3JlLFxyXG5pbnB1dDpmb2N1c34uYmFyOmFmdGVyIHtcclxuXHR3aWR0aDogNTAlO1xyXG59IFxyXG5cclxuLmhpZ2hsaWdodCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGhlaWdodDogNjAlOyBcclxuXHR0b3A6IDI1JTtcclxuXHRsZWZ0OiAwO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXN+LmhpZ2hsaWdodCB7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xyXG5cdC1tb3otYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcclxuXHRhbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xyXG59ICBcclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcclxuXHRmcm9tIHtcclxuXHRcdGJhY2tncm91bmQ6ICM1MjY0QUU7XHJcblx0fVxyXG5cdHRvIHtcclxuXHRcdHdpZHRoOiAwO1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0fVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XHJcblx0ZnJvbSB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjNTI2NEFFO1xyXG5cdH1cclxuXHR0byB7XHJcblx0XHR3aWR0aDogMDtcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcclxuXHRmcm9tIHtcclxuXHRcdGJhY2tncm91bmQ6ICM1MjY0QUU7XHJcblx0fVxyXG5cdHRvIHtcclxuXHRcdHdpZHRoOiAwO1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0fVxyXG59XHJcblxyXG4uYXJyb3c6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgaGVpZ2h0OjA7XHJcblx0d2lkdGg6MDsgICAgXHJcblx0dG9wOiAtMTBweDsgXHJcblx0cmlnaHQ6IDEwcHg7XHJcblx0Ym9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBcclxuXHRib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmOGQ3ZGE7IFxyXG59XHJcblxyXG4uZXJyb3Ige1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0gXHJcblxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDU1MDBzIGVhc2UtaW4tb3V0IDBzO1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICM4ODggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG5cdC53cmFwLWxvZ2luMTAwIHtcclxuXHRcdG1hcmdpbi10b3A6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA4MHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59IiwiLnAtdC00MCB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4ucC10LTI2IHtcbiAgcGFkZGluZy10b3A6IDI2cHg7XG59XG5cbi5wLXQtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnAtYi0yMCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4ucC1iLTQwIHtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbi5saW1pdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFpbmVyLWxvZ2luMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00yMCAyMC41VjE4SDB2LTJoMjB2LTJIMHYtMmgyMHYtMkgwVjhoMjBWNkgwVjRoMjBWMkgwVjBoMjJ2MjBoMlYwaDJ2MjBoMlYwaDJ2MjBoMlYwaDJ2MjBoMlYwaDJ2MjBoMnYySDIwdi0xLjV6TTAgMjBoMnYyMEgwVjIwem00IDBoMnYyMEg0VjIwem00IDBoMnYyMEg4VjIwem00IDBoMnYyMGgtMlYyMHptNCAwaDJ2MjBoLTJWMjB6bTQgNGgyMHYySDIwdi0yem0wIDRoMjB2MkgyMHYtMnptMCA0aDIwdjJIMjB2LTJ6bTAgNGgyMHYySDIwdi0yeicgZmlsbD0nJTIzOTI5M2FjJyBmaWxsLW9wYWNpdHk9JzAuMjUnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLndyYXAtbG9naW4xMDAge1xuICB3aWR0aDogMzIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMCA1cHggMzBweCA1cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtby1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAzZjg4O1xuICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbjEwMC1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4tc2hvdy1wYXNzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICByaWdodDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbi50eHQxIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnN1Ym1pdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLnN1Yi1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzZjg4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtZXllLXNsYXNoIHtcbiAgY29sb3I6ICNlZDFjMjQ7XG59XG5cbi5sb2NrLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2NrIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwM2Y4ODtcbn1cblxuLmxvY2sgZW0ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5zdWJtaXQgaTpob3ZlciB7XG4gIGFuaW1hdGlvbjogc2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuLnNoYWtlIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjgycyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG4uc3Rhci1yZXF1aXJlIHtcbiAgY29sb3I6ICNlZDFjMjQ7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuICAyMCUsIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICB9XG4gIDMwJSwgNTAlLCA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XG4gIH1cbiAgNDAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuLmdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIHBhZGRpbmc6IDI4cHggMHB4IDVweCAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTI2MTdhO1xuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzg4ODtcbn1cblxuLmhpZ2hsaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA2MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxubGFiZWwge1xuICBjb2xvcjogIzg4ODtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBsZWZ0OiAyNXB4O1xuICB0b3A6IDVweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5hbGVydC13YXJuaW5nLCAuYWxlcnQtZGFuZ2VyIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAzNXB4IDBweCAyM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTY3LCAyMDcsIDIyMywgMCkgMCUsICNmOGQ3ZGEgMTAwJSk7XG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0OmZvY3VzIH4gbGFiZWwge1xuICB0b3A6IC0xMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTI2NEFFO1xufVxuXG4uYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJhcjpiZWZvcmUsXG4uYmFyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAwO1xuICBib3R0b206IDFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjNTI2NEFFO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbn1cblxuLmJhcjpiZWZvcmUge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5iYXI6YWZ0ZXIge1xuICByaWdodDogNTAlO1xufVxuXG5pbnB1dDpmb2N1cyB+IC5iYXI6YmVmb3JlLFxuaW5wdXQ6Zm9jdXMgfiAuYmFyOmFmdGVyIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmhpZ2hsaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA2MCU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG5pbnB1dDpmb2N1cyB+IC5oaWdobGlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XG4gIC1tb3otYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcbiAgYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTI2NEFFO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTI2NEFFO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuQGtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZDogIzUyNjRBRTtcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbi5hcnJvdzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZjhkN2RhO1xufVxuXG4uZXJyb3Ige1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTUwMHMgZWFzZS1pbi1vdXQgMHM7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjODg4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLndyYXAtbG9naW4xMDAge1xuICAgIG1hcmdpbi10b3A6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authService, apiService, modalService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.apiService = apiService;
        this.modalService = modalService;
        this.createFormControler();
        this.createForm();
        this.lockClass = 'fa-lock';
        this.lockStyle = {
            'color': 'rgba(0, 63, 136, 0.81)'
        };
    }
    LoginComponent.prototype.createFormControler = function () {
        this.userId = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.Password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            userId: this.userId,
            Password: this.Password
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // if (this.authService.getToken()) {
        //   this.router.navigate(['/dashboard'])
        // } else {
        //   this.showLogin = true
        // }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        var self = this;
        var credentials = this.loginForm.value;
        if (self.loginForm.valid) {
            this.authService.login(credentials)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (users) {
                if (users.body && users.body.status === "success") {
                    sessionStorage.setItem('token', users.headers.get('leapauthtoken'));
                    _this.lockClass = 'fa-unlock-alt';
                    _this.lockStyle = {
                        'color': '#00a85a'
                    };
                    _this.apiService.get('/employees/entitlements', 'users', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (entitlements) {
                        if (entitlements && entitlements[0]) {
                            setTimeout(function () {
                                sessionStorage.setItem('user', entitlements[0].userName);
                                sessionStorage.setItem('color', entitlements[0].theme);
                                sessionStorage.setItem('themeBasedImage', entitlements[0].theme);
                                entitlements[0].primaryHierarchyID = 'OPS'; //static
                                sessionStorage.setItem('role', entitlements[0].primaryHierarchyID);
                                if (entitlements[0].primaryHierarchyID == 'OPS') {
                                    self.router.navigate(['/OPS']);
                                }
                                else {
                                    self.router.navigate(['/dashboard']);
                                }
                            }, 1000);
                        }
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoading = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_this.error = error); })).subscribe();
                }
                else if (users.body && users.body.error === "authError") {
                    _this.errorMsg = users.body.error;
                    console.log(users.body.error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(users.body.message);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Invalid Unknown Error');
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoading = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_this.errorMsg = error.message ? error.message : 'Invalid Error', _this.changeLock()); })).subscribe();
        }
        // else {
        //   self.openPopUp({
        //     title: 'Login Failed',
        //     msg: 'Please enter mandatory fields with valid information to proceed further'
        //   })
        // }
    };
    LoginComponent.prototype.openPopUp = function (obj) {
        this.modalService.setModalData(obj, 'infoModal', true);
        this.modalService.getModal('infoModal').open();
    };
    LoginComponent.prototype.changeLock = function () {
        var _this = this;
        this.lockClass = 'fa-lock shake';
        this.lockStyle = {
            'color': '#ed1c24'
        };
        setTimeout(function () {
            _this.lockClass = 'fa-lock';
            _this.lockStyle = {
                'color': '#003f88'
            };
            _this.errorMsg = '';
        }, 4000);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__["NgxSmartModalService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/auth/pages/login/login.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_core__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _app_core__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__["NgxSmartModalService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/session/session.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/modules/auth/pages/session/session.component.sass ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9zZXNzaW9uL3Nlc3Npb24uY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/auth/pages/session/session.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/auth/pages/session/session.component.ts ***!
  \*****************************************************************/
/*! exports provided: SessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionComponent", function() { return SessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SessionComponent = /** @class */ (function () {
    function SessionComponent() {
    }
    SessionComponent.prototype.ngOnInit = function () {
    };
    SessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./session.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/session/session.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./session.component.sass */ "./src/app/modules/auth/pages/session/session.component.sass")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SessionComponent);
    return SessionComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/control-messages/control-messages.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/control-messages/control-messages.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".errorMessage {\n  color: #a94442;\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udHJvbC1tZXNzYWdlcy9EOlxcY29sZW5kaW5nXFxDb0xlbkNvcmVXZWJfVjEvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcY29udHJvbC1tZXNzYWdlc1xcY29udHJvbC1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udHJvbC1tZXNzYWdlcy9jb250cm9sLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb250cm9sLW1lc3NhZ2VzL2NvbnRyb2wtbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3JNZXNzYWdlIHtcbiAgY29sb3I6ICNhOTQ0NDI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4iLCIuZXJyb3JNZXNzYWdlIHtcbiAgY29sb3I6ICNhOTQ0NDI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/control-messages/control-messages.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/control-messages/control-messages.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ControlMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMessagesComponent", function() { return ControlMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validation.service */ "./src/app/shared/services/validation.service.ts");




var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return _services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].getValidationErrorMessage(propertyName, this.control.errors[propertyName], this.labelName);
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], ControlMessagesComponent.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ControlMessagesComponent.prototype, "labelName", void 0);
    ControlMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-control-messages',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./control-messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/control-messages/control-messages.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./control-messages.component.scss */ "./src/app/shared/components/control-messages/control-messages.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/info-modal/info-modal.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/info-modal/info-modal.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2luZm8tbW9kYWwvaW5mby1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/info-modal/info-modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/info-modal/info-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: InfoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModalComponent", function() { return InfoModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoModalComponent = /** @class */ (function () {
    function InfoModalComponent() {
        this.isLoading = false;
        this.isShowModal = false;
    }
    InfoModalComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InfoModalComponent.prototype, "isLoading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InfoModalComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InfoModalComponent.prototype, "isShowModal", void 0);
    InfoModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/info-modal/info-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-modal.component.scss */ "./src/app/shared/components/info-modal/info-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoModalComponent);
    return InfoModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(spinner) {
        this.spinner = spinner;
        this.isLoading = false;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        // console.log(this.spinner.show)
        //   setTimeout(() => {
        //     /** spinner ends after 5 seconds */
        //     this.spinner.show();
        //     console.log("spin start")
        //     setTimeout(()=>{
        //       this.spinner.hide();
        //     },2000)
        // }, 5000);
    };
    SpinnerComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerComponent.prototype, "isLoading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpinnerComponent.prototype, "message", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.scss */ "./src/app/shared/components/spinner/spinner.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]; });

/* harmony import */ var _routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return _routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_2__["CONTENT_ROUTES"]; });






/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var CONTENT_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'home',
        loadChildren: 'app/modules/home/home.module#HomeModule'
    },
    {
        path: 'about',
        loadChildren: 'app/modules/about/about.module#AboutModule'
    },
    {
        path: 'repay',
        loadChildren: 'app/modules/repayment/repayment.module#RepaymentModule'
    }
];


/***/ }),

/***/ "./src/app/shared/services/data-trasfer.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/data-trasfer.service.ts ***!
  \*********************************************************/
/*! exports provided: DataTrasferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTrasferService", function() { return DataTrasferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataTrasferService = /** @class */ (function () {
    function DataTrasferService() {
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentData = this.dataSource.asObservable();
    }
    DataTrasferService.prototype.changeData = function (data) {
        this.dataSource.next(data);
    };
    DataTrasferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataTrasferService);
    return DataTrasferService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: ValidationService, DataTrasferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.service */ "./src/app/shared/services/validation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return _validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"]; });

/* harmony import */ var _data_trasfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-trasfer.service */ "./src/app/shared/services/data-trasfer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTrasferService", function() { return _data_trasfer_service__WEBPACK_IMPORTED_MODULE_2__["DataTrasferService"]; });






/***/ }),

/***/ "./src/app/shared/services/validation.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/validation.service.ts ***!
  \*******************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidationErrorMessage = function (validatorName, validatorValue, labelName) {
        var config = {
            required: "Field is required.",
            invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            maxlength: "The field can't contain more than " + validatorValue.requiredLength + " characters.",
            minlength: "The field must contain atleast " + validatorValue.requiredLength + " characters."
        };
        return config[validatorName];
    };
    ValidationService.passwordValidator = function (control) {
        if (!control.value) {
            return;
        }
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        // (?!.*\s)          - Spaces are not allowed
        return (control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) ? '' : { invalidPassword: true };
    };
    ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/control-messages/control-messages.component */ "./src/app/shared/components/control-messages/control-messages.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/shared/components/spinner/spinner.component.ts");
/* harmony import */ var _components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/info-modal/info-modal.component */ "./src/app/shared/components/info-modal/info-modal.component.ts");









_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faAsterisk"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBars"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUserCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPowerOff"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faRocket"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPlayCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEdit"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTimes"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCaretUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCaretDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faExclamationTriangle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faFilter"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTasks"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faLanguage"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPaintBrush"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faLightbulb"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faWindowMaximize"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faStream"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBook"]);



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
            ],
            declarations: [
                _components_control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_9__["ControlMessagesComponent"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"],
                _components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_11__["InfoModalComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _components_control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_9__["ControlMessagesComponent"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"],
                _components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_11__["InfoModalComponent"]
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    serverUrl: "mastersapi",
    serverUrlSet: {
        masters: "mastersapi",
        users: "usermanagementapi",
        underwriting: "underwritingapi",
        repayment: "repayment"
    },
    envName: 'DEV',
    version: 'v0.1'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\colending\CoLenCoreWeb_V1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map