webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".disclaimer {\r\n    padding: .5em;\r\n    background-color: #e01b1b;\r\n    position: absolute;\r\n    top: 1em;\r\n    right: 2em;\r\n    width: 10em;\r\n    border-radius: 5px;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<app-dashboard></app-dashboard>\r\n<p-growl life='1500'></p-growl>\r\n<router-outlet></router-outlet>\r\n<div class='disclaimer'>Much of the functionality of this web application has been stripped for the sake of demonstration</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_pihome_page_pihome_page_component__ = __webpack_require__("../../../../../src/app/components/pihome-page/pihome-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_edit_proposal_edit_proposal_component__ = __webpack_require__("../../../../../src/app/components/edit-proposal/edit-proposal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_formcomponents_intake_intake_component__ = __webpack_require__("../../../../../src/app/components/formcomponents/intake/intake.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_formcomponents_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/components/formcomponents/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_pi_pre_award_pi_pre_award_component__ = __webpack_require__("../../../../../src/app/components/pi-pre-award/pi-pre-award.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_formcomponents_equipment_equipment_component__ = __webpack_require__("../../../../../src/app/components/formcomponents/equipment/equipment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_bread_crumb_bread_crumb_component__ = __webpack_require__("../../../../../src/app/components/bread-crumb/bread-crumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_form_footer_form_footer_component__ = __webpack_require__("../../../../../src/app/components/form-footer/form-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_formcomponents_coi_coi_component__ = __webpack_require__("../../../../../src/app/components/formcomponents/coi/coi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_formcomponents_economic_interest_economic_interest_component__ = __webpack_require__("../../../../../src/app/components/formcomponents/economic-interest/economic-interest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_proposal_archive_proposal_archive_component__ = __webpack_require__("../../../../../src/app/components/proposal-archive/proposal-archive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_preaward_service__ = __webpack_require__("../../../../../src/app/services/preaward.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_proposal_service__ = __webpack_require__("../../../../../src/app/services/proposal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_mock_data_service__ = __webpack_require__("../../../../../src/app/services/mock-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_formcomponents_approval_approval_component__ = __webpack_require__("../../../../../src/app/components/formcomponents/approval/approval.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_keys_pipe__ = __webpack_require__("../../../../../src/app/pipes/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__directives_timeline_bar_directive__ = __webpack_require__("../../../../../src/app/directives/timeline-bar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// core angular





// ngPrime















// generated components
















// services





// pipes

// directives


var AppRoutes = [
    { path: 'aquila', component: __WEBPACK_IMPORTED_MODULE_10__components_landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'aquila/login', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'aquila/home', component: __WEBPACK_IMPORTED_MODULE_11__components_pihome_page_pihome_page_component__["a" /* PiHomePageComponent */] },
    { path: 'aquila/pipreaward', component: __WEBPACK_IMPORTED_MODULE_16__components_pi_pre_award_pi_pre_award_component__["a" /* PiPreAwardComponent */] },
    { path: 'aquila/editproposal/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_edit_proposal_edit_proposal_component__["a" /* EditProposalComponent */] },
    { path: 'aquila/test', component: __WEBPACK_IMPORTED_MODULE_30__components_test_test_component__["a" /* TestComponent */] },
    { path: 'aquila/proposalarchive', component: __WEBPACK_IMPORTED_MODULE_22__components_proposal_archive_proposal_archive_component__["a" /* ProposalArchiveComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_landing_page_landing_page_component__["a" /* LandingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_pihome_page_pihome_page_component__["a" /* PiHomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_edit_proposal_edit_proposal_component__["a" /* EditProposalComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_formcomponents_intake_intake_component__["a" /* IntakeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_formcomponents_timeline_timeline_component__["a" /* TimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_pi_pre_award_pi_pre_award_component__["a" /* PiPreAwardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_formcomponents_equipment_equipment_component__["a" /* EquipmentComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_bread_crumb_bread_crumb_component__["a" /* BreadCrumbComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_form_footer_form_footer_component__["a" /* FormFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_formcomponents_coi_coi_component__["a" /* ConflictOfInterestComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_formcomponents_economic_interest_economic_interest_component__["a" /* EconomicInterestComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_formcomponents_approval_approval_component__["a" /* ApprovalComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pipes_keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_29__directives_timeline_bar_directive__["a" /* TimelineBarDirective */],
            __WEBPACK_IMPORTED_MODULE_30__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_proposal_archive_proposal_archive_component__["a" /* ProposalArchiveComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["RouterModule"].forRoot(AppRoutes),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MenubarModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["OverlayPanelModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MessagesModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MessageModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ProgressSpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ToggleButtonModule"],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_23__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_24__services_preaward_service__["a" /* PreawardService */],
            __WEBPACK_IMPORTED_MODULE_25__services_proposal_service__["a" /* ProposalService */],
            __WEBPACK_IMPORTED_MODULE_6_primeng_components_common_messageservice__["MessageService"],
            __WEBPACK_IMPORTED_MODULE_26__services_mock_data_service__["a" /* MockDataService */],
            __WEBPACK_IMPORTED_MODULE_28__pipes_keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_29__directives_timeline_bar_directive__["a" /* TimelineBarDirective */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/bread-crumb/bread-crumb.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n    height:1.5em;\r\n    width:100%;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\ndiv{\r\n    height:100%;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\nimg{\r\n    height:60%;;\r\n}\r\nlabel.active{\r\n    color:#13bcff;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bread-crumb/bread-crumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor='let page of pages; let i=index'>\r\n<label [class.active]='i==index'>{{page}}</label>\r\n<img *ngIf='i!=pages.length-1' src='../../assets/images/bread-crumb-arrow.png'>\r\n</div>\r\n<!-- arrow icon <div>Icons made by <a href=\"https://www.flaticon.com/authors/lucy-g\" title=\"Lucy G\">Lucy G</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a></div> -->"

/***/ }),

/***/ "../../../../../src/app/components/bread-crumb/bread-crumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadCrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadCrumbComponent = (function () {
    function BreadCrumbComponent() {
    }
    BreadCrumbComponent.prototype.ngOnInit = function () {
    };
    return BreadCrumbComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('index'),
    __metadata("design:type", Number)
], BreadCrumbComponent.prototype, "index", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('pages'),
    __metadata("design:type", Array)
], BreadCrumbComponent.prototype, "pages", void 0);
BreadCrumbComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bread-crumb',
        template: __webpack_require__("../../../../../src/app/components/bread-crumb/bread-crumb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/bread-crumb/bread-crumb.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BreadCrumbComponent);

//# sourceMappingURL=bread-crumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    width: 100vw;\r\n    height: 1.5em;\r\n    padding:5px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background: linear-gradient(#0e0e0e, #4c4c4c);\r\n    color: white;\r\n    font-size: 18px;\r\n}\r\n\r\nlabel {\r\n    color: white;\r\n    height: 1.5em;\r\n    padding:5px;    \r\n\r\n}\r\n\r\nlabel:hover {\r\n    background-color: gold;\r\n    color: black;\r\n    height: 1.5em;\r\n    padding:5px;\r\n    cursor:pointer;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>AQUILA</p>\r\n<!-- login -->\r\n<label *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/aquila/login']\">Login</label>\r\n<!-- logout -->\r\n<label *ngIf=\"authService.loggedIn()\" (click)='authService.logout()' [routerLink]=\"['aquila/']\">LogOut</label>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-proposal/edit-proposal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n  min-height: 100%;\r\n  bottom: 0;\r\n  width: 80%;\r\n  margin: 0 9.9%;\r\n  padding: 1em;\r\n  background-color: white;\r\n}\r\n\r\n#menu-state {\r\n  height: 90%;\r\n  width: 100%;\r\n}\r\n\r\n#dashboard {\r\n  width: 100%;\r\n  border-bottom: 1px solid black;\r\n  margin-bottom:1em;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n#name{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n  }\r\n\r\n/* grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>; */\r\n#menu-container {\r\n  width:100%;\r\n  display:-ms-grid;\r\n  display:grid;\r\n  -ms-grid-columns: 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n  -ms-grid-rows: auto auto auto;\r\n      grid-template-rows: auto auto auto;\r\n  grid-gap: 1em;\r\n}\r\n#forms {\r\n  grid-area: 1/1/2/4;\r\n  display:-ms-grid;\r\n  display:grid;\r\n  -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-gap: 1em;\r\n}\r\ntimeline {\r\n  grid-area:2/1/4/2;\r\n}\r\n#tables {\r\n  grid-area: 2/2/4/4;\r\n}\r\n.required-forms {\r\n  background: linear-gradient(#52aed5, #4894c7);\r\n  box-shadow: 5px 5px 12px #6c6c6c;\r\n  font-size: 1em;\r\n  position: relative;\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.required-forms:hover {\r\n  background-color: rgba(221, 221, 221, 0.795);\r\n  border: 1px solid rgb(241, 199, 45);\r\n  box-shadow: 0 0 20px rgb(241, 199, 45);\r\n  font-size: 1em;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.form-image {\r\n  margin:1em 0;\r\n}\r\n\r\n#router-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n.spinner-container {\r\n  height:90vh;\r\n  width:100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align:center;\r\n      -ms-flex-align:center;\r\n          align-items:center;\r\n}\t\r\n\r\n@-webkit-keyframes ui-progress-spinner-color {\r\n  100%,\r\n  0% {\r\n      stroke: #55b8da;\r\n  }\r\n  40% {\r\n      stroke: #3570b5;\r\n  }\r\n  66% {\r\n      stroke: #1a3999;\r\n  }\r\n  80%,\r\n  90% {\r\n      stroke: #3570b5;\r\n  }\r\n}\t\r\n\r\n@keyframes ui-progress-spinner-color {\r\n  100%,\r\n  0% {\r\n      stroke: #55b8da;\r\n  }\r\n  40% {\r\n      stroke: #3570b5;\r\n  }\r\n  66% {\r\n      stroke: #1a3999;\r\n  }\r\n  80%,\r\n  90% {\r\n      stroke: #3570b5;\r\n  }\r\n}\r\n/* timeline */\r\n#timeline-bar {\r\n  width: 100%;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  width: 100%;\r\n}\r\n\r\n.bar {\r\n  height: 30px;\r\n  border-left: 3px solid white;\r\n  margin-left: 8px;\r\n}\r\n.barCompleted {\r\n  border-left: 3px solid rgb(91, 188, 220);\r\n}\r\n.icon-name-container {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.icon {\r\n  height: 16px;\r\n  width: 16px;\r\n  border: 2px solid white;\r\n  border-radius: 50%;\r\n}\r\n.iconCompleted {\r\n  background-color: rgb(91, 188, 220);\r\n  border:2px solid rgb(91, 188, 220);\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/check-symbol.png") + ")\r\n}\r\n.name {\r\n  padding-left: 3px;\r\n  font-weight:bold;\r\n  color:white;\r\n}\r\n.coi-wrapper {\r\n  box-shadow: 5px 5px 12px #6c6c6c;\r\n}\r\n@media only screen and (min-device-width : 320px) and (max-device-width: 480px) {\r\n  :host {\r\n    display: block;\r\n    min-height: 100%;\r\n    width: auto !important;\r\n    margin: 0 !important;\r\n    background-color: white;\r\n    padding: 1em;\r\n  }\r\n  #menu-container, #forms {\r\n    width: 100%;\r\n   display:-webkit-box !important;\r\n   display:-ms-flexbox !important;\r\n   display:flex !important;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column ;\r\n            flex-direction: column ;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n} \r\n.required-forms {\r\n  margin-top: .5em;\r\n}\r\n#dashboard {\r\n  width: 100%;\r\n  border-bottom: 1px solid black;\r\n  margin-bottom:1em;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch;\r\n}\r\n#dashboard> * {\r\n  margin-bottom: .5em;\r\n}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-proposal/edit-proposal.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='showSpinner' class='spinner' class='spinner-container'>\r\n  <p-progressSpinner  animationDuration='.75s'></p-progressSpinner>\r\n</div>\r\n\r\n<div @fade *ngIf='menuState && !showSpinner' id='menu-state'>\r\n  <div id='dashboard'>\r\n    <h3 id='name'>{{proposal?.proposalName}}</h3>\r\n    <button *ngIf='user.type!=\"INVESTIGATOR\"'pButton [routerLink]=\"['/aquila/proposalarchive']\" label='Proposal Archive'></button>\r\n    <button pButton [routerLink]=\"['/aquila/pipreaward']\" label='Pre Award'></button>\r\n    <button pButton label='Help' icon='fa-question'></button>\r\n  </div>\r\n  <div id='menu-container'>\r\n    <!-- timeline -->\r\n    <div class='required-forms' id='timeline' (click)='setCurrentForm(\"Timeline\")'>\r\n      <p class='title'>Timeline</p>\r\n      <!-- [@stageAnimation]='timeline.stages.length' -->\r\n      <ul id='timeline-bar'>\r\n        <li  *ngFor='let stage of proposal.timeline.stages; index as i'>\r\n          <!-- bar -->\r\n          <div class='bar' appTimelineBar *ngIf='i!=0' [ngClass]='{\"barCompleted\": stage.uasReviewed}'></div>\r\n          <div class='icon-name-container'>\r\n            <!-- icon -->\r\n            <div class='icon' [ngClass]=\"{'iconCompleted': stage.uasReviewed, 'selected-icon':stageIndex==i}\"></div>\r\n            <!-- name -->\r\n            <label class='name'>{{stage.name}}</label>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!-- forms -->\r\n     <div id='forms'>\r\n      <div class='required-forms' (click)='setCurrentForm(\"Intake\")'>\r\n        <p class='title'>Intake Form </p>\r\n        <img src='../../../assets/images/file.png' class='form-image'>\r\n      </div>\r\n      <div class='required-forms' *ngIf='proposal.approvalForm' (click)='setCurrentForm(\"Approval\")'>\r\n        <p class='title'>Approval Form</p>\r\n        <img src='../../../assets/images/file.png' class='form-image'>\r\n\r\n      </div>\r\n      <div class='required-forms' *ngIf='proposal.equipmentForm' (click)='setCurrentForm(\"Equipment\")'>\r\n        <p class='title'>Equipment Form</p>\r\n        <img src='../../../assets/images/file.png' class='form-image'>\r\n\r\n      </div>\r\n      <div class='required-forms' *ngIf='proposal.economicInterestPi' (click)='setCurrentForm(\"economic-interest\")'>\r\n        <p class='title'>PI Statement Of Economic Interest</p>\r\n        <img src='../../../assets/images/file.png' class='form-image'>\r\n\r\n      </div>\r\n    </div>\r\n    <!-- tables -->\r\n    <div *ngIf='proposal.conflictOfInterestForms.length!=0' id='tables'>\r\n      <!-- <div class='required-forms' (click)='setCurrentForm(\"coi\")'></div> -->\r\n      <div class='coi-wrapper'>\r\n      <p-dataTable [value]='proposal?.conflictOfInterestForms' selectionMode='single' (onRowSelect)='coiSelect($event)'>\r\n          <p-header>Conflict Of Interest Forms</p-header>\r\n          <p-column field='type' header='Type'></p-column>\r\n          <p-column field='progress' header='Stage' value='incomplete'></p-column>\r\n        </p-dataTable>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div @fade *ngIf='routerState' id='router-container'>\r\n  <button pButton id='menu-return' (click)='changeState()' label='Forms' icon='fa-arrow-up'></button>\r\n  <app-intake *ngIf='currentForm==\"Intake\"'></app-intake>\r\n  <app-equipment *ngIf='currentForm==\"Equipment\"'></app-equipment>\r\n  <app-approval *ngIf='currentForm==\"Approval\"'></app-approval>\r\n  <app-timeline *ngIf='currentForm==\"Timeline\"'></app-timeline>\r\n  <app-coi *ngIf='currentForm==\"coi\"'></app-coi>\r\n  <app-economic-interest *ngIf='currentForm==\"economic-interest\"'></app-economic-interest>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-proposal/edit-proposal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProposalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_proposal_service__ = __webpack_require__("../../../../../src/app/services/proposal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_preaward_service__ = __webpack_require__("../../../../../src/app/services/preaward.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_mock_data__ = __webpack_require__("../../../../../src/app/services/mock-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProposalComponent = (function () {
    function EditProposalComponent(activatedRoute, router, proposalService, preAwardService, authService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.proposalService = proposalService;
        this.preAwardService = preAwardService;
        this.authService = authService;
        this.showSpinner = false;
        // listens for updates from the children form container
        var $proposal = proposalService.updatedFormtoProposal$.subscribe(function (form) {
            console.log(form);
        });
    }
    EditProposalComponent.prototype.ngOnInit = function () {
        this.getParams();
        this.getProposal();
        // setTimeout(() => {this.getProposal()} , 1000);
        this.menuState = true;
        this.routerState = false;
        this.currentForm = '';
        this.user = this.authService.getUserData();
    };
    EditProposalComponent.prototype.ngOnDestroy = function () {
        // this.$proposal.unsubscribe();
    };
    // get id from pi preaward component
    EditProposalComponent.prototype.getParams = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.proposalId = params['id'];
        });
    };
    EditProposalComponent.prototype.getProposal = function () {
        // this.preAwardService.getProposal(this.proposalId).subscribe( proposal => {
        //   this.proposal = proposal; // setting response proposal equal to local proposal field
        //   this.showSpinner = false;
        // });
        this.proposal = __WEBPACK_IMPORTED_MODULE_5__services_mock_data__["a" /* MockProposal */];
    };
    // styles the bottom right label if form is required
    EditProposalComponent.prototype.setRequiredForms = function (form) {
        // needs to be implemented
    };
    // toggle between form and menu
    EditProposalComponent.prototype.changeState = function () {
        var _this = this;
        if (this.menuState) {
            this.menuState = false;
            setTimeout(function () {
                _this.routerState = true;
            }, 500);
        }
        else {
            this.routerState = false;
            setTimeout(function () {
                _this.menuState = true;
            }, 500);
        }
    };
    // set which form to display
    EditProposalComponent.prototype.setCurrentForm = function (form) {
        this.currentForm = form;
        this.sendForm();
        this.changeState();
    };
    // conflict Of interest form is selected
    EditProposalComponent.prototype.coiSelect = function (event) {
        this.proposal.selectedCoiFormId = event.data.id;
        this.setCurrentForm('coi');
    };
    // when child component is instantied, update proposal in service
    EditProposalComponent.prototype.sendForm = function () {
        // console.log(this.proposal)
        this.proposalService.parentUpdatesProposal(this.proposal);
    };
    return EditProposalComponent;
}());
EditProposalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-proposal',
        template: __webpack_require__("../../../../../src/app/components/edit-proposal/edit-proposal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-proposal/edit-proposal.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('fade', [
                // state(),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["query"])('@stageAnimation', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animateChild"])()
                    ], { optional: true })
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_proposal_service__["a" /* ProposalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_proposal_service__["a" /* ProposalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_preaward_service__["a" /* PreawardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_preaward_service__["a" /* PreawardService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object])
], EditProposalComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-proposal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/form-footer/form-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n    margin-top:1em;\r\ndisplay:-webkit-box;\r\ndisplay:-ms-flexbox;\r\ndisplay:flex;\r\n-webkit-box-orient:horizontal;\r\n-webkit-box-direction:normal;\r\n    -ms-flex-direction:row;\r\n        flex-direction:row;\r\n-webkit-box-pack: end;\r\n    -ms-flex-pack: end;\r\n        justify-content: flex-end;\r\n}\r\n.right-arrow,.left-arrow {\r\n    height: 36px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/form-footer/form-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <img *ngIf='index!=0' src='../../../assets/images/left-arrow.png' class='left-arrow' (click)='changeIndex(\"left\")'>\r\n<img *ngIf='index!=length-1' src='../../../assets/images/right-arrow.png' class='right-arrow' (click)='changeIndex(\"right\")'> -->\r\n<button *ngIf='index!=0' pButton class='ui-button-success' (click)='changeIndex(\"left\")' label='Previous' icon='fa-arrow-left'  ></button>\r\n<button *ngIf='index!=length-1' pButton class='ui-button-success' (click)='changeIndex(\"right\")' label='Next' icon='fa-arrow-right' iconPos='right' ></button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/form-footer/form-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormFooterComponent = (function () {
    function FormFooterComponent() {
        this.newIndex = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FormFooterComponent.prototype.ngOnInit = function () {
    };
    FormFooterComponent.prototype.changeIndex = function (direction) {
        if (direction === 'left') {
            this.index = this.index - 1;
        }
        if (direction === 'right') {
            this.index = this.index + 1;
        }
        this.newIndex.emit(this.index);
    };
    return FormFooterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('index'),
    __metadata("design:type", Number)
], FormFooterComponent.prototype, "index", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('length'),
    __metadata("design:type", Number)
], FormFooterComponent.prototype, "length", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FormFooterComponent.prototype, "newIndex", void 0);
FormFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-footer',
        template: __webpack_require__("../../../../../src/app/components/form-footer/form-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/form-footer/form-footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FormFooterComponent);

//# sourceMappingURL=form-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/approval/approval.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fl\r\n{\r\n    float:left;\r\n    word-break: break-all;\r\n    width: 30%;\r\n}\r\n\r\n#local-wrap{\r\n   width:800px;\r\n   margin:-10;\r\n   border:0px solid;\r\n   height:200px;\r\n   display:block;\r\n\r\n}\r\n#title {\r\n    width: 40%;\r\n}\r\n\r\n#title label {\r\n    margin: 5px;\r\n    float: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/approval/approval.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='container'>\r\n    <div id='dash-bar'>\r\n        <h3>Approval Form for Externally Funded Grants and Contracts</h3>\r\n        <app-bread-crumb [index]='index' [pages]='breadCrumbStrings'></app-bread-crumb>\r\n        <div [ngStyle]='setProgressBar(50)'></div>\r\n        <div id=''></div>\r\n    </div>\r\n    <!-- page 1 General Information -->\r\n    <div *ngIf='index==0' class='form-flex-start'>\r\n        <p class='form-title'>General Information</p>\r\n        <label>Project Title</label>\r\n        <input type=\"text\" [(ngModel)]='approvalForm.projectTitle' pInputText>\r\n        <label>P.I. Name</label>\r\n        <input type=\"text\" [(ngModel)]='approvalForm.pIName'pInputText>\r\n        <label>Email</label>\r\n        <input type=\"text\" [(ngModel)]='approvalForm.email' pInputText>\r\n        <label>College</label>\r\n        <input type=\"text\" [(ngModel)]='approvalForm.college' pInputText>\r\n        <label>Department</label>\r\n        <input type='text' [(ngModel)]='approvalForm.department' pInputText>\r\n        <label>Funding Sponsor</label>\r\n        <input type='text' pInputText>\r\n        <label>Deadline Date</label>\r\n        <input type='text' [(ngModel)]='approvalForm.deadlineDate' pInputText>\r\n    </div>\r\n\r\n    <!-- page 2 Project Information -->\r\n    <div *ngIf='index==1' class='form-flex-start'>\r\n        <p class='form-title'>Project Information</p>\r\n        <label>UAS Project ID</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Proposal Code</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Co-PI(s)</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Type of Proposal</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Type of Grant or Contacts</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Purpose of Project</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Funding Agency</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>CFDA #</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Funded</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Not Funded</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Date</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Full Amount Funded</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Yes</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>No</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>If no</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Amount Funded</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n    <!-- page 3 Terms and Amounts Requested -->\r\n    <div *ngIf='index==2' class='form-flex-start'>\r\n        <p class='form-title'>Terms and Amounts Requested</p>\r\n        <p>Project year one or next period</p>\r\n        <label>From:</label>\r\n        <p-calendar></p-calendar>\r\n        <label>Through</label>\r\n        <p-calendar></p-calendar>\r\n        <p>Entire project</p>\r\n        <label>From:</label>\r\n        <p-calendar></p-calendar>\r\n        <label>Through</label>\r\n        <p-calendar></p-calendar>\r\n        <label>Total months</label>\r\n        <input type=\"text\" pInputText>\r\n        <div id=\"local-wrap\">\r\n            <div id=\"title\" class=\"fl\">\r\n                <p>Terms</p>\r\n                <label>(a)Agency Funds Requested(Direct)</label>\r\n                <label>(b)Agency Funds Requested(Modified Total Direct)</label>\r\n                <label>(c)Agency Funds Requested(Indirect)</label>\r\n                <label><b>(d)Total Agency Funds Requested(a+c)</b></label>\r\n                <label>(e)Cal State LA/UAS Cost Sharing</label>\r\n                <label>(f)Cal State LA/UAS Unrecovered F&A</label>\r\n                <label>(g)External Cost Sharing</label>\r\n                <label><b>(h)Total Project Cost([d throughg]=h)</b></label>\r\n                <label>(i)Percent Cal State LA Cost Sharing(e/h)</label>\r\n                <label>(j)Percent IDC Recovered/DC Base(c/a)</label>\r\n                <label>(k)Percent IDC Recovered/MTDC Base(c/b)</label>\r\n            </div>\r\n            <div class=\"fl\">\r\n                <p>Year 1</p>\r\n                <label>(a) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(b) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(c) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(d) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(e) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(f) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(g) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(h) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(i) % </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(j) % </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(k) % </label>\r\n                <input type=\"text\" pInputText>\r\n            </div>\r\n            <div class=\"fl\">\r\n                <p>Entire Project</p>\r\n                <label>(a) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(b) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(c) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(d) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(e) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(f) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(g) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(h) $ </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(i) % </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(j) % </label>\r\n                <input type=\"text\" pInputText>\r\n                <label>(k) % </label>\r\n                <input type=\"text\" pInputText>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- page 4 Certifications/Special Requirements -->\r\n    <div *ngIf='index==3' class='form-flex-start'>\r\n        <p class='form-title'>Certifications/Special Requirements</p>\r\n        <p>Additional Space</p>\r\n        <label>No</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Yes</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Approved</label>\r\n        <input type=\"text\" pInputText>\r\n        <p>Vertebrate Animals</p>\r\n        <label>No</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Yes</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Approved</label>\r\n        <input type=\"text\" pInputText>\r\n        <p>Biological Hazards</p>\r\n        <label>No</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Yes</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Approved</label>\r\n        <input type=\"text\" pInputText>\r\n        <p>Conflict of Interest Statement</p>\r\n        <label>No</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Yes</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Approved</label>\r\n        <input type=\"text\" pInputText>\r\n        <p>Human Subjects</p>\r\n        <label>No</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Yes</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Approved</label>\r\n        <input type=\"text\" pInputText>\r\n        <p>Radiological Hazards</p>\r\n        <label>No</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Yes</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Approved</label>\r\n        <input type=\"text\" pInputText>\r\n        <p>Computer Equipment</p>\r\n        <label>No</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Yes</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Approved</label>\r\n        <input type=\"text\" pInputText>\r\n        <p>Recimbinant DNA</p>\r\n        <label>No</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Yes</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Approved</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n    <!-- page 5 Required Review and Approvals -->\r\n    <div *ngIf='index==4' class='form-flex-start'>\r\n        <p class='form-title'>University Approval (signatures to be secured by PI)</p>\r\n        <p>My signature below certifies that: 1) I am familiar with all cost-sharing obligations shown in section 9 of this form, and\r\n        2) I am satisfied with and responsible for all commitments in the as they relate to my are (facilities, personnel/financial/\r\n        prgrammatic). I will notify ORSCA should a change occur during the funding period that would alter the filed statement option\r\n        conflict of interest</p>\r\n        <!-- SIGNATURES -->\r\n        <p>University Cost Sharing</p>\r\n        <label>No</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Yes</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <!-- SIGNATURES -->\r\n        <p class='form-title'>Required Review and Approvals</p>\r\n        <p>Submit form to UAS (GE314) for signatures below</p>\r\n        <!-- SIGNATURES -->\r\n    </div>\r\n    <!-- page 6 Cost Sharing Information -->\r\n    <div *ngIf='index==5' class='form-flex-start'>\r\n        <p class='form-title'>Cost Sharing Information (Entire Project)</p>\r\n        <p>Is Cost Sharing required by the funding agency</p>\r\n        <label>No</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <label>Yes</label>\r\n        <p-checkbox binary='true'></p-checkbox>\r\n        <p>(A) Cal State LA Cost Sharing</p>\r\n        <p>College #1</p>\r\n        <label>Personnel</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Fringe</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Meeting Expenses</label>\r\n        <input type=\"text\" pInputText>\r\n        <label><b>Total</b></label>\r\n        <input type=\"text\" pInputText>\r\n        <p>College #2</p>\r\n        <input type=\"text\" pInputText>\r\n        <label>Personnel</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Fringe</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>Meeting Expenses</label>\r\n        <input type=\"text\" pInputText>\r\n        <label><b>Total</b></label>\r\n        <input type=\"text\" pInputText>\r\n        <label><b>Total(College #1) and (College #2)</b></label>\r\n        <input type=\"text\" pInputText>\r\n        <br><label>(A) Cal State LA Cost Sharing</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>(B) Unrecovered F&A on Cost Sharing</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>(C) Unrecovered F&A on MTDC</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>(D)Third Party Cost Share</label>\r\n        <input type=\"text\" pInputText>\r\n        <br><label><b>Total Cal State LA COst Sharing (A+B+C)</b></label>\r\n        <input type=\"text\" pInputText>\r\n        <br><label><b>Total Propsal Cost Sharing (A+B+C+D)</b></label>\r\n        <input type=\"text\" pInputText>\r\n        <p><b>Cal State LA Internal Notes:</b></p>\r\n        <p>Per the Federal Rate Agreegment dated 07/03/14, the predetermined Facilitites & Administrative Cost Rate for the period of 7/1/14\r\n        to 6/30/15 is 45.5%. The predetermined Facilities & Administrative Cost Rate for the period 7/1/15 to 6/30/17 is 46%. The provisional\r\n        Facilities & Administrative Cost Rate for the periods beginning 7/1/17 and beyonf is 46%. Unrecovered F&A is calculated as follows:</p>\r\n        <label>$</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>x</label>\r\n        <input type=\"text\" pInputText>\r\n        <label>%=$</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n    <!-- page 7 Proposal Workload -->\r\n    <div *ngIf='index==6' class='form-flex-start'>\r\n        <p class='form-title'>Proposal Personnel Workload</p>\r\n    </div>\r\n    <app-form-footer [index]='index' [length]='breadCrumbStrings.length' (newIndex)='updateIndex($event)'></app-form-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/approval/approval.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_PreAward_ApprovalForm__ = __webpack_require__("../../../../../src/app/models/PreAward/ApprovalForm.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApprovalComponent = (function () {
    function ApprovalComponent() {
        this.breadCrumbStrings = ['General Information', 'Project Information', 'Terms and Amounts Requested', 'Certifications/Special Requirements', 'Required Review and Approvals', 'Cost Sharing Information', 'Proposal Workload'];
    }
    ApprovalComponent.prototype.ngOnInit = function () {
        this.index = 0;
        this.approvalForm = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_ApprovalForm__["a" /* ApprovalForm */]('1');
    };
    ApprovalComponent.prototype.updateIndex = function (value) {
        this.index = value;
    };
    ApprovalComponent.prototype.setProgressBar = function (percentage) {
        var formattedWidth = percentage + '%';
        return {
            'height': '10px',
            'width': formattedWidth,
            'background-color': 'rgb(46, 236, 29)'
        };
    };
    return ApprovalComponent;
}());
ApprovalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-approval',
        template: __webpack_require__("../../../../../src/app/components/formcomponents/approval/approval.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/formcomponents/approval/approval.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ApprovalComponent);

//# sourceMappingURL=approval.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/coi/coi.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n    width:100%;\r\n}\r\ndiv{\r\n    width:100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/coi/coi.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf='coiForm.type==\"OIPHS\"'> Other Investigators/ Key Personnel Statement of Financial Interests/PHS</h3>\r\n<h3 *ngIf='coiForm.type==\"OINONPHS\"'> Other Investigators/ Key Personnel Statement of Financial NSF and Other Non-PHS Governmental Agencies</h3>\r\n<h3 *ngIf='coiForm.type==\"PIPHS\"'> Principal Investigator's Statement of Financial Interest/PHS</h3>\r\n<h3 *ngIf='coiForm.type==\"PINONPHS\"'>Principal Investigator's Statement of Financial Interest NSF and Other Non-PHS Governmental Agencies</h3>\r\n<!-- <label>OIPHS OINONPHS PIPHS PINONPHS</label> for debugging\r\n<input [(ngModel)]='coiForm.type' pInputText> -->\r\n<button type=\"button\" pButton  label=\"Update\"></button>\r\n\r\n<app-bread-crumb [index]='index' [pages]='breadCrumbStrings'></app-bread-crumb>\r\n<!-- page 1 -->\r\n<div *ngIf='index==\"0\"' class='form-flex-start'>\r\n  <p *ngIf='coiForm.type==\"OIPHS\"||coiForm.type==\"PIPHS\"'> Under Cal State La's Conflict of Interest policy, the Principal Investigator and all other investigators/key personnel\r\n    who have or share responsibilty for the design, conduct, or reporting of PHS sponsored projects must report their personal\r\n    financial interests in any organization(s) that, to the best of the investigator's knowledge, may have a significant\r\n    impact on their institutional responsibilities.\r\n  </p>\r\n  <p *ngIf='coiForm.type==\"OINONPHS\"||coiForm.type==\"PINONPHS\"'>Under Cal State La's Conflict of Interest policy, the Principal Investigator and all other investigators/personnel who\r\n    have or share responsibility for the design, conduct, or reporting of NSF sponsored projects must disclose all significant\r\n    financial interests of the investigator (including those of the investigator's spouse/registered domestic partner and\r\n    dependent children) (i) that would reasonably appear to be affected by the research or educational activities funded\r\n    or proposed for funding by NSF; or (ii) in entities whose financial interests would reasonably appear to be affected\r\n    by such actvities.\r\n  </p>\r\n  <p *ngIf='coiForm.type==\"OIPHS\"||coiForm.type==\"OINONPHS\"'>\r\n    You have been named as an investigator/key personnel meeting the above criteria on the following grant.\r\n  </p>\r\n  <!-- proposal information -->\r\n  <p class='form-title'>Proposal Information</p>\r\n  <div *ngIf='coiForm.type==\"OIPHS\"||coiForm.type==\"OINONPHS\"'>\r\n    <label>Proposal #: {{coiForm.proposalNumber}}</label>\r\n    <label>Proposal Title: {{coiForm.proposalTitle}}</label>\r\n  </div>\r\n  <!-- sponsor -->\r\n  <p class='form-title'>Sponsor</p>\r\n  <div class='form-flex-start'>\r\n    <label>Sponsor</label>\r\n    <input type='text' [(ngModel)]='coiForm.sponsor' pInputText>\r\n    <label>Sponsor Type</label>\r\n    <select [(ngModel)]='coiForm.sponsorType'>\r\n      <option *ngIf='coiForm.type==\"PIPHS\"||coiForm.type==\"OIPHS\"'>Federal Agency</option>\r\n      <option>Sub Award with Federal Agency Pass Through</option>\r\n      <option *ngIf='coiForm.type==\"PIPHS\"||coiForm.type==\"OIPHS\"'>Other</option>\r\n    </select>\r\n    <label *ngIf='coiForm.sponsorType!=\"Sub Award with Federal Agency Pass Through\"'> Specify </label>\r\n    <label *ngIf='coiForm.sponsorType==\"Sub Award with Federal Agency Pass Through\"'>Specify sponsor and pass through agency</label>\r\n    <input type='text' [(ngModel)]='coiForm.sponsorSpecification' pInputText>\r\n  </div>\r\n  <!-- reason for disclosure -->\r\n  <p class='form-title'>Reason for disclosure</p>\r\n  <label>New Proposal</label>\r\n  <p-checkbox [(ngModel)]='coiForm.newProposal' binary='true'></p-checkbox>\r\n  <label>Continuation/Additional Funding</label>\r\n  <p-checkbox [(ngModel)]='coiForm.contAddFunding' binary='true'></p-checkbox>\r\n  <label>New/Change Investigator</label>\r\n  <p-checkbox [(ngModel)]='coiForm.newChangeInvestigator' binary='true'></p-checkbox>\r\n  <label>New Interest Obtained</label>\r\n  <p-checkbox [(ngModel)]='coiForm.newInterestObtained' binary='true'></p-checkbox>\r\n  <div *ngIf='coiForm.newInterestObtained' class='form-flex-start indent'>\r\n    <label> Previous proposal/award # if applicable</label>\r\n    <input [(ngModel)]='coiForm.previousProposalNumber' type='text' pInputText>\r\n  </div>\r\n  <label>New Sponsor on Existing Project (Previous sponsor name)</label>\r\n  <p-checkbox [(ngModel)]='coiForm.newSponsor' binary='true'></p-checkbox>\r\n  <div *ngIf='coiForm.newSponsor' class='form-flex-start indent'>\r\n    <label>Previous Sponsor Name</label>\r\n    <input [(ngModel)]='coiForm.previousSponsorName' type='text' pInputText>\r\n  </div>\r\n  <label>Request from IRB</label>\r\n  <p-checkbox [(ngModel)]='coiForm.requestFromIrb' binary='true'></p-checkbox>\r\n  <label>No Cost Time Extension</label>\r\n  <p-checkbox [(ngModel)]='coiForm.noCostTimeExtension' binary='true'></p-checkbox>\r\n  <label>Other</label>\r\n  <p-checkbox [(ngModel)]='coiForm.other' binary='true'></p-checkbox>\r\n  <div *ngIf='coiForm.other' class='form-flex-start indent'>\r\n    <label>Specify</label>\r\n    <input type='text' [(ngModel)]='coiForm.otherSpecification' pInputText>\r\n  </div>\r\n  <label>Budget Period</label>\r\n  <div>\r\n    <label>From:</label>\r\n    <p-calendar [(ngModel)]='coiForm.budgetPeriodStart'></p-calendar>\r\n    <label>Through:</label>\r\n    <p-calendar [(ngModel)]='coiForm.budgetPeriodEnd'></p-calendar>\r\n  </div>\r\n  <label>Project Period</label>\r\n  <div>\r\n    <label>From:</label>\r\n    <p-calendar [(ngModel)]='coiForm.projectPeriodStart'></p-calendar>\r\n    <label>Through:</label>\r\n    <p-calendar [(ngModel)]='coiForm.projectPeriodEnd'></p-calendar>\r\n  </div>\r\n  <label>Amount Requested (estimated) for Budget Period $</label>\r\n  <input  [(ngModel)]='coiForm.amountRequested'type='text' pInputText>\r\n  <label>IRB/IACUC/IBC No(s) if applicable</label>\r\n  <input [(ngModel)]='coiForm.iRBACUCIBCNo' type='text' pInputText>\r\n</div>\r\n<!-- page 2 -->\r\n<div *ngIf='index==\"1\"' class='form-flex-start'>\r\n  <p class='form-title'>Disclosure and Certification</p>\r\n  <!-- first part -->\r\n  <p *ngIf='coiForm.type==\"PIPHS\"'>The Principal Investigator's signature acknowledges having read Cal State La's Investigator's Disclosure of Financial Interest\r\n    for Projects Funded by the Public Health Service (PHS) and certifies that all individuals required to make disclosures\r\n    of Significant Financial Interests have been listed on this form, or that no other individuals working on the research\r\n    are required to make decisions.\r\n  </p>\r\n  <p *ngIf='coiForm.type==\"OIPHS\"'>The Investigator's/Key Personnel's signature acknowledges having read Cal State La's Investigator's Disclosure of Financial\r\n    Interest for Projects Funded by the Public Health Service (PHS) and certifies that all individuals required to make disclosures\r\n    of Significant Financial Interests have been listed on this form, or that no other individuals working on the research\r\n    are required to make decisions.\r\n  </p>\r\n  <p *ngIf='coiForm.type==\"OINONPHS\"||coiForm.type==\"PINONPHS\"'>ThePrincipal Investigator's signature acknowledges having read Cal State La's Financial Conflict of Interest Policy for\r\n    Investigators Sponsored by the National Science Foundation (NFS) and certifies that all individuals required to make\r\n    disclosures of Significant Financial Interests have been listed on this form, or that no other individuals working on\r\n    the research are required to make decisions.\r\n  </p>\r\n  <!-- second part -->\r\n  <label *ngIf='coiForm.type==\"PIPHS\"||coiForm.type==\"OIPHS\"||coiForm.type==\"OINONPHS\"'>\r\n    Do you, your spouse or registered domestic partner, or dependent children have a Significant Financial Interest related to\r\n    your institutional responsibilities? (See Next Page for definitions of Significant Financial Interests)\r\n  </label>\r\n  <label *ngIf='coiForm.type==\"PINONPHS\"'>\r\n    Do you, your spouse or registered domestic partner, or dependent children have a Significant Financiala Interest (i) that\r\n    would reasonably appear to be affected by the research or educational activities funded or proposed for funding by NSF;\r\n    or (ii) in entities whose financial interests would reasonably appear to be affected by such actvities. See next page\r\n    for definitions of Significant Financial Interests\r\n  </label>\r\n  <p-checkbox [(ngModel)]='coiForm.significantFinInterest' binary='true'></p-checkbox>\r\n  <label>Attach Addendum</label>\r\n  <!-- content for naming OI   -->\r\n  <div *ngIf='coiForm.type==\"PIPHS\"||coiForm.type==\"PINONPHS\"' class='form-flex-start'>\r\n    <label>Are there other Investigators/ Key Personnel who share responsibility for the design, conduct, or reporting of research?</label>\r\n    <p-checkbox [(ngModel)]='coiForm.anyOtherInvestigators' binary='true'></p-checkbox>\r\n    <div *ngIf='coiForm.anyOtherInvestigators' class='form-flex-start indent'>\r\n      <p>You should direct all Other Investigators/ Key Personnel to the Other Investigators/ Key Personnel Statement Of Financial\r\n        Interests/ PHS form to complete their disclosure</p>\r\n      <label>Please List Other Investigator(s)/Key Personnel (this would include coPIS, consultants, sub-recipients or any others\r\n        who have, or share, responsibility for the design, conduct, or reporting of this PHS sponsored projects). IT IS THE\r\n        RESPONSIBILITY OF THE PI TO PROVIDE THESE NAMES.</label>\r\n      <textarea pInputTextarea [(ngModel)]='coiForm.otherInvestigatorsValue' rows=\"4\" cols=\"50\"></textarea>\r\n    </div>\r\n  </div>\r\n  <!-- signature and date of person filling out this form -->\r\n  <!-- <label>Name of Investigator/ Key Personnel</label>\r\n  <input type='text' pInputText>\r\n  <label>Administrative Review Institutional Official</label>\r\n  <p-checkbox binary='true'></p-checkbox>\r\n  <input type='text' pInputText> -->\r\n  <!-- other ARI stuff -->\r\n</div>\r\n<!-- last page -->\r\n<div *ngIf='index==\"2\"'>\r\n  <!-- PHS -->\r\n  <div *ngIf='coiForm.type==\"OIPHS\"||coiForm.type==\"PIPHS\"'>\r\n    <p class='form-title'>Institutional Responsibilities</p>\r\n    <p>\r\n      Institutional responsibility refers to an Investigator's professional responsibilities on behalf of the institution, and\r\n      as defined by the instiution in its policy on financial conflicts of interest, which may include for example: activities\r\n      such as research, research consultation, teaching, professional practice, institutional committee memberships, and\r\n      service on panels such as Institutional Review Boards or Data and Safety Monitoring Boards.\r\n    </p>\r\n\r\n    <p class='form-title'>Significant Financial Interest(s): Significant Financial Interests include but are not limited to:</p>\r\n    <p>\r\n      <br>1. For publicly traded entity: Income or other payments for services including salary, and any payment for services\r\n      not otherwise identified as salary, including but not limited to, consulting payments, honoraria, paid authorship,\r\n      or any payments or consieration of value, including payments made to a health sciences compensation plan, received\r\n      during the prior 12 months and the value of any equity interest(including stock, stock options or other ownership interests,\r\n      as determined by public prices or other reasonable measure of fair market value) in the entity as of the date of disclosure,\r\n      when aggregated, exceeds $5,000.\r\n      <br>\r\n      <br>[Investigators are not required disclose SFI in mutual funds or other investment vehicles such as retirement funds\r\n      as long as the Investigator does not directly control decisions made for these investments vehicles]\r\n      <br>\r\n      <br>2. For a non-publicly traded entity: Income or other payment for services including salary, and any payment for services\r\n      note not otherwise identified as salary, including but not limited to, consulting payments, honoraria, paid authorship,\r\n      any other payments or consideration of value, including payments made to a health sciences compensation plan, received\r\n      during the prior 12 months that exceeds $5,000, or equity interest of any amount, including, but not limited to stock,\r\n      stock options, or ownership interest in the entity.\r\n      <br>\r\n      <br>[Invesigators are not required to diclose (a) payments made by Cal State LA or UAS, including salary, stipends, royalty\r\n      payments, honararia, reimbursement of expenses or any other remuneration from Cal State LA or UASl or (b) income for\r\n      seminars, lectures, teaching engagements, or service on advisory committees or review panels sponsored by federal,\r\n      state or local governments, a US institution of higher education, or a research institute, academic medical center\r\n      or hospital that is affiliated with an institution of higher education so long as they do not involve contractual obligations\r\n      that would conflict with the researcher's obligations as a Cal State LA employee under the terms of the California\r\n      State University's patent, copyright or other intellectual property policies.]\r\n      <br>\r\n      <br>3. Intellectual property right and interests: Income received during the previous 12 months that exceeds $5,000 for\r\n      such rights and interests.\r\n      <br>\r\n      <br>[SFIs do not include royalties received from Cal State LA or UAS related patents or copyrights]\r\n      <br>\r\n      <br>4. Travel: The occurrence of any sponsored or reimbursed travel (for the Investigator only) must be disclosed whether\r\n      payment is made to the Investigator directly, or expenses are paid on behalf of the Investigator by a for-profit or\r\n      non-profit organization:\r\n      <br>\r\n      <br>a. Either prospectively, by listing all travel that the Investigator anticipated will be sponsored or reimbursed during\r\n      next 12 months, or\r\n      <br>\r\n      <br>b. Within 30 days of the occurrence if the trip wasn't reported prospectively.\r\n      <br>\r\n      <br>[Investigators are not required to disclose travel that is reimbursed or sponsored by federal, state or local governments,\r\n      a US institution of higher education, or research institute, academic medical center or hospital that is affiliated\r\n      with an institution of higher education]\r\n      <br>\r\n      <br>Under the California Public Records Act, this infomation may be made available to the public upon request.\r\n    </p>\r\n\r\n  </div>\r\n  <!-- NONPHS -->\r\n  <div *ngIf='coiForm.type==\"OINONPHS\"||coiForm.type==\"PINONPHS\"'>\r\n    <p class='form-title'>Significant Financial Interests</p>\r\n    <p>\r\n      Significant financial interests are involved and must be disclosed where one or more of the following financial interests\r\n      of the investigator (and those of the investigator's spouse/domestic partner or dependent children) resonably appears\r\n      to be related to the investigator's institutional responsibilities\r\n    </p>\r\n    <p-checkbox binary='true'></p-checkbox>\r\n    <label>\r\n      <p>A significant financial interest exists if an equity interest that, when aggregated for the investigator and investigator's\r\n        spouse/domestic partner and dependent children, exceeds $10,000 in value as determined through reference to public\r\n        prices or other reasonable measures of matket value, and represent more than a 5% ownership interest in any single\r\n        entity\r\n      </p>\r\n    </label>\r\n    <p-checkbox binary='true'></p-checkbox>\r\n    <label>\r\n      <p> A significant financial interest exists when salary, royalties or other payments that, when aggregated for the investigator\r\n        and the investigator's spouse/domestic partner of dependent children, have exceeded or are expected to exceed $10,000\r\n        during any immediately preceding or following 12 month period.\r\n      </p>\r\n    </label>\r\n    <p>For National Science Foundation (NSF), significant financial interest\r\n      <b> does not </b>include:</p>\r\n    <p-checkbox binary='true'></p-checkbox>\r\n    <label>\r\n      <br>Salary, royalties or other remuneration from the applicant Institution\r\n      <br>\r\n    </label>\r\n    <p-checkbox binary='true'></p-checkbox>\r\n    <label>\r\n      <br>Any ownership interest in the Institution, if the Institution is an applicant under Small Business Innocation Program\r\n      or Small Business Technology Transfer Program\r\n      <br>\r\n    </label>\r\n    <p-checkbox binary='true'></p-checkbox>\r\n    <label>\r\n      <br>Income from seminars, lectures, or teaching engagements sponsored by public or nonprofit entities\r\n      <br>\r\n    </label>\r\n    <p-checkbox binary='true'></p-checkbox>\r\n    <label>\r\n      <br>Income from service on advisory committees or review panels for public or nonprofit entities\r\n      <br>\r\n    </label>\r\n    <p-checkbox binary='true'></p-checkbox>\r\n    <label>\r\n      <br>Equity interest and/or salary, royalty and other payments do not exceed the thresholds in the section regarding NSF\r\n      immediately above\r\n      <br>\r\n    </label>\r\n    <p>\r\n      <br>Under the California Public Records Act, this infomation may be made available to the public upon request.\r\n      <br>\r\n    </p>\r\n  </div>\r\n</div>\r\n<app-form-footer [index]='index' [length]='breadCrumbStrings.length' (newIndex)='updateIndex($event)'></app-form-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/coi/coi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConflictOfInterestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_proposal_service__ = __webpack_require__("../../../../../src/app/services/proposal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConflictOfInterestComponent = (function () {
    function ConflictOfInterestComponent(proposalService) {
        this.coiForm = this.parseCoiForm(proposalService.getConflictOfInterestForm().coiForm);
    }
    ConflictOfInterestComponent.prototype.ngOnInit = function () {
        this.index = 0;
        this.breadCrumbStrings = ['General Info', 'Disclosure and Certification', 'Significant Financial Interest'];
    };
    ConflictOfInterestComponent.prototype.updateIndex = function (value) {
        this.index = value;
    };
    ConflictOfInterestComponent.prototype.parseCoiForm = function (coiForm) {
        if (coiForm.budgetPeriodStart !== null) {
            coiForm.budgetPeriodStart = new Date(coiForm.budgetPeriodStart);
        }
        if (coiForm.budgetPeriodEnd !== null) {
            coiForm.budgetPeriodEnd = new Date(coiForm.budgetPeriodEnd);
        }
        if (coiForm.projectPeriodStart !== null) {
            coiForm.projectPeriodStart = new Date(coiForm.projectPeriodStart);
        }
        if (coiForm.projectPeriodEnd !== null) {
            coiForm.projectPeriodEnd = new Date(coiForm.projectPeriodEnd);
        }
        if (coiForm.piDate !== null) {
            coiForm.piDate = new Date(coiForm.piDate);
        }
        if (coiForm.keyPersonnelDate !== null) {
            coiForm.keyPersonnelDate = new Date(coiForm.keyPersonnelDate);
        }
        if (coiForm.aRIDate !== null) {
            coiForm.aRIDate = new Date(coiForm.aRIDate);
        }
        return coiForm;
    };
    return ConflictOfInterestComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ConflictOfInterestComponent.prototype, "type", void 0);
ConflictOfInterestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-coi',
        template: __webpack_require__("../../../../../src/app/components/formcomponents/coi/coi.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/formcomponents/coi/coi.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_proposal_service__["a" /* ProposalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_proposal_service__["a" /* ProposalService */]) === "function" && _a || Object])
], ConflictOfInterestComponent);

var _a;
// save
// add the reason
//# sourceMappingURL=coi.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/economic-interest/economic-interest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".local-css-class{\r\n    background-color:red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/economic-interest/economic-interest.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='container'>\r\n  <!-- dash bar -->\r\n  <h3>Statement of Economic Interest for Principal Investigator</h3>\r\n  <button type=\"button\" pButton (click)=\"update()\" label=\"Update\"></button>\r\n  <app-bread-crumb [index]='index' [pages]='breadCrumbStrings'></app-bread-crumb>\r\n  <!-- page 1 Instructions for Completing Form 700-U -->\r\n  <div *ngIf='index==0' class='form-flex-start'>\r\n    <p class='form-title'>Who Files Form 700-U?</p>\r\n    <p>This form must be filed by all persons employed by US or CSU who have principal responsibility for a research project\r\n      if the project is to be funded or supported, in whole or in part, by contract or grant (or othrt fundd earmarked by\r\n      the donor for a specific research project or for a specific researcher) from a nongovernmental entity.\r\n      <br>\r\n      <br>Reporting requirements are outlined in Regulation 18755. This regulation provides that research funding by certain\r\n      nonprofit entities will not trigger disclosure. This regulation is available on the FPPC website.</p>\r\n    <p class='form-title'>What is the Reporting Period?</p>\r\n    <p>For \"intial\" statements, before the final acceptance of the contract, grant, or gift the filer must report investments\r\n      in and business positions with the sponsor as of the date that the award is made, and income and gifts received from\r\n      sponsor within the 12 months prior to the data that the award is made.\r\n      <br>\r\n      <br>For \"interium\" statements, the filer must submit a statement within 30 days after the contract, grant, or gift is renewed\r\n      the discloses reportable investments, income and business positions that the filer held or receivedd during the business\r\n      positions that the filer held or received during the period between the date initial statenebt was filed and the date\r\n      the project contract, grant, or gift was renewed.</p>\r\n    <p class='form-title'>What is an Investment?</p>\r\n    <p>\"Investment\" means any financial interest in a business entity in which you, yout spouse or registered domestic partner,\r\n      or your dependent children have a direct, indirect, or beneficial interest totaling $2,000 or more. Reportable investments\r\n      include stocks, bonds, warrants, and options, including those held in margin or brokerage accounts. (See Gov. Code\r\n      section 82034 and Regulation 18237.)</p>\r\n    <p class='form-title'>What is Income?</p>\r\n    <p>\"Income\" means a payment received, including but not limited to any salary, wage, advance, dividend, interest, rent,\r\n      proceeds from any sale, gift, including any gift of food pr beverage, loan forgiveness or payment of indebtedness received\r\n      by the filer, reimbursement for expenses, per diem, or contribution to an insurance or pension program paid by any\r\n      person other than an employer, and any community property interest in income of a spouse o registered domestic partner.\r\n      Income also includes a pro rata share of any income of any business entity or trust in which the individual, spouse,\r\n      or registered domestic partner owns directly, indirectly, or beneficially, a 10% interest or greater. Income includes\r\n      your gross income and your community property interest in your spouse's or registered domestic partner's gross income\r\n      totaling $500 or more. Gross income is the total amount of income before deducting expenses, losses, or taxes. (See\r\n      Gov. Code Section 82030.)</p>\r\n    <p class='form-title'>What is a Loan?</p>\r\n    <p>Loans received or outstanding are reportable if they total $500 or more from a single lender. Your community property\r\n      interest in loans received by your spouse or registered domestic partner also must be reported. Loans from commercial\r\n      lending institutions made in the lender's regular course of business on terms available to members of the public without\r\n      regard to your official status are not reportable. (See Gov. Code Secios 82030(a).)</p>\r\n    <p class='form-title'>What is a Gift?</p>\r\n    <p>A gift is anything of value for which you have not provided equal or greater consideration to the donor. A gift is reportable\r\n      if its fair market value is $50 or more. In addition, multiple gifts totaling $50 or more received from a reportable\r\n      source must ve reported.\r\n      <br>\r\n      <br>It is the acceptance of a gift, not the uktunare use to which it is put, that imposes your reporting obligation. Therefore\r\n      you must report a gift even if you never used it otif you gave it away to another person.\r\n      <br>\r\n      <br>If the exact amount of a gift is not known, you must make a good faith estimate of the item's fair market value. Listing\r\n      that value of a gift as \"over $50\" or \"value unknown\" is not adequate disclosure.</p>\r\n    <p class='form-title'>Commonly reportable gifts include:</p>\r\n    <ul>\r\n      <li>Tickets/passes to sporting or entertainment events</li>\r\n      <li>Tickets/passes to amusement parks</li>\r\n      <li>Parking passes</li>\r\n      <li>Food, beverages, and accommodations, including those provided in direct connection with your attendance at a convention,\r\n        conference, meeting, social event, meal, or like gathering</li>\r\n      <li>Rebates/discounts not made in the regular course of business to members of the public without regard to official status</li>\r\n      <li>Wedding gifts</li>\r\n      <li>An honorarium received prior to filing an \"intial\" statement. You may report an honorarium as income rather that as\r\n        a gidt if you provided services of equal or greater value than the payment received.</li>\r\n      <li>Transportation and lodging</li>\r\n      <li>Forgiveness of a loan received by you</li>\r\n    </ul>\r\n    <p>(See Gov. Code Section 82028.)</p>\r\n    <p class='form-title'>What's New?</p>\r\n    <p>If an individual receives a travel payment for travel occuring on or after January 1, 2016, which is reportable as a\r\n      gift, he or she must disclose the travek destination.</p>\r\n    <p class='form-title'>What is a Travel Payment?</p>\r\n    <p>Travel payments include advances and reimbursements for travel and related expenses, including lodging and meals.</p>\r\n    <ul>\r\n      <li>Travel payments are\r\n        <b>gifts </b> if you did not provide services which were equal to or greater in value than the payments received. You\r\n        must disclose gifts totaling $50 or more from a single source during the period covered by the statement. Gifts of\r\n        travel are reportable without regard to where the donor is located.\r\n        <br>\r\n        <br>When reporting travel payments which are gifts, you must provide a description of the gift and the date(s) received.\r\n        In addition, the travel destination must be disclosed for travel taken on or after January 1, 2016.</li>\r\n      <li>Travel payments are\r\n        <b>income</b> if you provided services which were equal to or greater in value than the payments received. You must\r\n        disclose income totaling $500 or more from a single source during the period covered by the statement. The filer\r\n        has the burden of proving the payments are income rather than gifts\r\n        <br>\r\n        <br>When reporting travel payments as income, you must describe the services you provided in exchange for the payment.\r\n        You are not required to disclose the date(s) for travel payments which are income.</li>\r\n    </ul>\r\n    <p>Gifts of travel may be subject to a $470 gift limit. In addition, certain travel payments are reportable gifts, but are\r\n      not subject to the limit. See the FPPC fact sheet entitled \"Limitations and Restrictions on Gifts, Honoraria, Travel,\r\n      and Loans,\" which can be obtained from the FPPC at\r\n      <i>www.fppc.ca.gov.</i>\r\n      <br>\r\n      <br>You are\r\n      <u>not</u> required to disclose:</p>\r\n    <ul>\r\n      <li>Travel payments received from any state, local, or federal government agency for which you provided services equal\r\n        or greater in value than the payment received, such as reimbursement for travel on agency business from your government\r\n        agency employer.</li>\r\n      <li>Travel payments received from your employer in the normal course of your employment.</li>\r\n      <li>A travel payment that was received from a non-profit entity exempt from taxation under Internal Revenue Service Code\r\n        Section 501(c)(3) for which you provided equal or greater consideration, such as reimbursement for travel on business\r\n        for 501(c)(3) organization for which you are a board member.</li>\r\n    </ul>\r\n    <p>Check the box to indicate if the payment was a gift or income, report the amount, and disclose the date(s) if applicable.</p>\r\n    <p class='form-title'>Violations</p>\r\n    <p>Failure to file the required Statement of Economic Interests or failure to report a financial interest may subject a\r\n      principal investigator to civil liability, including fines, as well as University discipline. (See Gov. Code Sections\r\n      81000-91014)\r\n    </p>\r\n    <p class='form-title'>Privacy Information Notice</p>\r\n    <p>Information requested on all FPPC forms is used by the FPPC to administer and enforce the Political Reform Act (Gov.\r\n      Code Sections 81000-91014 and Regulations 18110-18997). All information required by these forms is mandated by the\r\n      Political Reform Act. Failure to provide all of the information required by the Act is a violation subject to administrative,\r\n      criminal or civil prosecution. All reports and statements provided are public records open for public inspection and\r\n      reproduction.\r\n      <br>\r\n      <br>If you have any quetions regarding this Privacy Notice or how to access your personal information, please contract\r\n      the FPPC at:\r\n      <br>\r\n      <br>General Counsel\r\n      <br>Fair Political Practices Commission\r\n      <br>428 J, Street, Suite 620\r\n      <br>Sacramento, CA 95814\r\n      <br>(916) 322-5660</p>\r\n  </div>\r\n  <!-- page 2 General Information -->\r\n  <div *ngIf='index==1' class='form-flex-start'>\r\n    <p class='form-title'>General Information</p>\r\n    <label>Campus</label>\r\n    <input type='text' [(ngModel)]='economicInterestPI.campus' pInputText>\r\n    <label>Last Name</label>\r\n    <input type='text' [(ngModel)]='economicInterestPI.lastName' pInputText>\r\n    <label>First Name</label>\r\n    <input type='text' [(ngModel)]='economicInterestPI.firstName' pInputText>\r\n    <label>Middle Name</label>\r\n    <input type='text' [(ngModel)]='economicInterestPI.middleInitial' pInputText>\r\n    <label>Telephone Number</label>\r\n    <input type='text' [(ngModel)]='economicInterestPI.phoneNumber' pInputText>\r\n    <label>Academic Unit or Department</label>\r\n    <input type='text' [(ngModel)]='economicInterestPI.department' pInputText>\r\n    <label>Mail Code</label>\r\n    <input type='text' [(ngModel)]='economicInterestPI.mailCode' pInputText>\r\n    <label>Email Address</label>\r\n    <input type='text' [(ngModel)]='economicInterestPI.email' pInputText>\r\n    <label>Title of Research Project</label>\r\n    <input type='text' [(ngModel)]='economicInterestPI.projectTitle' pInputText>\r\n  </div>\r\n  <!-- page 3 Funding Entity and Type of Statement -->\r\n  <div *ngIf='index==2' class='form-flex-start'>\r\n    <p class='form-title'>Information Regarding Funding Entity</p>\r\n    <p>(Use a separate Form 700-U for each funding entity.)</p>\r\n    <label>Name of Entity:</label>\r\n    <input type='text' [(ngModel)]='economicInterestPI.entityName' pInputText>\r\n    <label>Address of Entity:</label>\r\n    <input type='text' [(ngModel)]='economicInterestPI.entityAddress' pInputText>\r\n    <label>Principal Business of Entity:</label>\r\n    <input type='text' [(ngModel)]='economicInterestPI.principalBusiness' pInputText>\r\n    <label>Amount of Funding: $</label>\r\n    <input type='number' [(ngModel)]='economicInterestPI.fundingAmount' pInputText>\r\n    <p-checkbox label='Estimated' binary='true' [(ngModel)]='economicInterestPI.estimateAmount'></p-checkbox>\r\n    <p-checkbox label='Actual' binary='true' [(ngModel)]='economicInterestPI.actualAmount'></p-checkbox>\r\n    <!-- 2 -->\r\n    <p class='form-title'>Type of Statement (Check at least one box)</p>\r\n    <p-checkbox label='Initial (for new funding)' binary='true' [(ngModel)]='economicInterestPI.initialFunding'></p-checkbox>\r\n    <div *ngIf='economicInterestPI.initialFunding' class='form-flex-start indent'>\r\n    <label>Date of initial funding:</label>\r\n    <p-calendar [(ngModel)]='economicInterestPI.fundDate'></p-calendar>\r\n    </div>\r\n    <p-checkbox label='Interim (for renewed funding)' binary='true' [(ngModel)]='economicInterestPI.interimFund'></p-checkbox>\r\n    <div *ngIf='economicInterestPI.interimFund' class='form-flex-start indent'>\r\n    <label>Funding was renewed on:</label>\r\n    <p-calendar [(ngModel)]='economicInterestPI.interimDate'></p-calendar>\r\n    </div>\r\n  </div>\r\n  <!-- page 4 Filer Information -->\r\n  <div *ngIf='index==3' class='form-flex-start'>\r\n    <p class='form-title'>Filer Information</p>\r\n    <p><strong>A.</strong> Are you a director, officer, partner, trustee, consultant, employee, or do you hold a position of management in the entity\r\n      listed in Part 1?</p>\r\n    <p-toggleButton [(ngModel)]=\"economicInterestPI.positionHeld\"></p-toggleButton>\r\n    <div *ngIf='economicInterestPI.positionHeld' class='form-flex-start indent'>  \r\n      <label>Title:</label>\r\n      <input type='text' [(ngModel)]='economicInterestPI.positionTitle' pInputText>\r\n    </div>\r\n    <p><strong>B.</strong>Do you, your spouse or registered domestic partner, or your dependent children have an investment of $2,000 or more in\r\n      the entity listed in Part 1 above?</p>\r\n      <p-toggleButton [(ngModel)]=\"economicInterestPI.investmentGreaterThan\"></p-toggleButton>\r\n      <div class='amount-list' *ngIf='economicInterestPI.investmentGreaterThan' class='form-flex-start indent'>\r\n      <label>Amount $</label>\r\n      <input type='number' [(ngModel)]='economicInterestPI.investAmount' pInputText>\r\n      <label>Date Disposed: (if applicable)</label>\r\n      <p-calendar [(ngModel)]='economicInterestPI.dateDisposed'></p-calendar>\r\n    </div>\r\n    <p><strong>C.</strong>Have you received income of $500 or more from the entity listed in Part 1 during the reporting period?</p>\r\n    <p-toggleButton [(ngModel)]=\"economicInterestPI.receivedIncome\"></p-toggleButton>\r\n    <div class='amount-list' *ngIf='economicInterestPI.receivedIncome' class='form-flex-start indent'>\r\n      <label>Amount $</label>\r\n      <input type='number' [(ngModel)]='economicInterestPI.receivedAmount' pInputText>\r\n      <p>Was this income received through you spouse or registered domestic partner?</p>\r\n      <p-toggleButton [(ngModel)]=\"economicInterestPI.receivedThroughSpouse\"></p-toggleButton>\r\n    </div>\r\n    \r\n    <p><strong>D.</strong>Have you received loans from the entity in Part 1 for which the balance exceeded $500 during the reporting period?</p>\r\n    <p-toggleButton [(ngModel)]=\"economicInterestPI.receivedThroughEntity\"></p-toggleButton>\r\n    <div class='loan-information' *ngIf='economicInterestPI.receivedThroughEntity' class='form-flex-start indent'>\r\n      <label>Loan Amount $</label>\r\n      <input type='number' [(ngModel)]='economicInterestPI.loanAmount' pInputText>\r\n      <p>Was the loan: Secured</p>\r\n      <p-toggleButton [(ngModel)]=\"economicInterestPI.loanSecured\"></p-toggleButton>\r\n      <label>Interest rate: %</label>\r\n      <input type='number' [(ngModel)]='economicInterestPI.loanInterest' pInputText>\r\n      <p>Was the loan entirely repaid within the last 12 months?</p>\r\n      <p-toggleButton [(ngModel)]=\"economicInterestPI.loanPaidOff\"></p-toggleButton>\r\n    </div>\r\n    <p><strong>E.</strong>Have you received gifts from the entity listed in Part 1 within the last 12 months valued at $50 or more?</p>\r\n    <p-toggleButton [(ngModel)]=\"economicInterestPI.giftsReceived\"></p-toggleButton>\r\n    <div class='gift-received' *ngIf='economicInterestPI.giftsReceived' class='form-flex-start indent'>\r\n      <label>Description:</label>\r\n      <textarea pInputTextarea [(ngModel)]='economicInterestPI.giftsDescription' autoResize=\"autoResize\"></textarea>\r\n      <label>Value: $</label>\r\n      <input type=\"number\" [(ngModel)]='economicInterestPI.giftsValue' pInputText>\r\n      <label>Date Received:</label>\r\n      <p-calendar [(ngModel)]='economicInterestPI.giftsReceivedDate'></p-calendar>\r\n    </div>\r\n    <p><strong>F.</strong>Has the entity in Part 1 paid for your travel during the reporting period?</p>\r\n    <p-toggleButton [(ngModel)]=\"economicInterestPI.travelThroughEntity\"></p-toggleButton>\r\n    <div class='travel-enetity' *ngIf='economicInterestPI.travelThroughEntity' class='form-flex-start indent'>\r\n      <p>Type of Payment: (check one)</p>\r\n      <div>\r\n        <label>Gift</label>\r\n        <p-checkbox binary='true' [(ngModel)]='economicInterestPI.travelPaymentTypeGift'></p-checkbox>\r\n        <label>Income</label>\r\n        <p-checkbox binary='true' [(ngModel)]='economicInterestPI.atravelPaymentTypeIncome'></p-checkbox>\r\n      </div>\r\n      <label>Amount: $</label>\r\n      <input type=\"number\" [(ngModel)]='economicInterestPI.travelAmount' pInputText>\r\n      <label>dates (if applicable)</label>\r\n      <p-calendar [(ngModel)]='economicInterestPI.travelStartDate'></p-calendar>\r\n      <p-calendar [(ngModel)]='economicInterestPI.travelEndDate'></p-calendar>\r\n      <label>Description</label>\r\n      <textarea pInputTextarea [(ngModel)]='economicInterestPI.travelDescription' autoResize=\"autoResize\"></textarea>\r\n    </div>\r\n  </div>\r\n  <!-- page 5 Verification -->\r\n  <div *ngIf='index==4' class='form-flex-start'>\r\n    <p class='form-title'>Verification</p>\r\n    <p>I have used all reasonable diligence in preparing this statement. I have reviewed this statement and to the best of my\r\n      knowledge the information contained herein and in any attached schedules is true and complete. I certifu under plenalty\r\n      or perjury under the laws of the State of California that the foregoing is true and correct.</p>\r\n    <label>Date Signed (month, day, year)</label>\r\n    <input type=\"text\" [(ngModel)]='economicInterestPI.dateSigned' pInputText>\r\n    <label>Signature (File the originally signed statement with your university)</label>\r\n    <input type=\"text\" [(ngModel)]='economicInterestPI.signature' pInputText>\r\n  </div>\r\n  <!-- footer -->\r\n  <app-form-footer [index]='index' [length]='breadCrumbStrings.length' (newIndex)='updateIndex($event)'></app-form-footer>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/economic-interest/economic-interest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EconomicInterestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_preaward_service__ = __webpack_require__("../../../../../src/app/services/preaward.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_proposal_service__ = __webpack_require__("../../../../../src/app/services/proposal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EconomicInterestComponent = (function () {
    function EconomicInterestComponent(proposalService, preAwardService) {
        this.proposalService = proposalService;
        this.preAwardService = preAwardService;
        this.economicInterestPI = this.parseEconomicInterestPi(this.proposalService.getEconomicInterestPI());
        // this.economicInterestPI = new EconomicInterestPI();
    }
    EconomicInterestComponent.prototype.ngOnInit = function () {
        this.index = 0;
        this.breadCrumbStrings =
            ['Instructions for Completing Form 700-U', 'General Information', 'Funding Entity', 'Filer Information', 'Verification']; // page title
    };
    // listens for index updates from form footer
    EconomicInterestComponent.prototype.updateIndex = function (value) {
        this.index = value;
    };
    EconomicInterestComponent.prototype.update = function () {
        this.preAwardService.updateEconomicInterestPI(this.economicInterestPI).subscribe(function (newEconomicInterest) {
            console.log(newEconomicInterest);
            //  this.proposalService.updateEconomicInterestPI(this.economicInterestPI);
        });
    };
    EconomicInterestComponent.prototype.parseEconomicInterestPi = function (economicInterestPI) {
        if (economicInterestPI.fundDate !== null) {
            economicInterestPI.fundDate = new Date(economicInterestPI.fundDate);
        }
        if (economicInterestPI.interimDate !== null) {
            economicInterestPI.interimDate = new Date(economicInterestPI.interimDate);
        }
        if (economicInterestPI.dateDisposed !== null) {
            economicInterestPI.dateDisposed = new Date(economicInterestPI.dateDisposed);
        }
        if (economicInterestPI.dateSigned !== null) {
            economicInterestPI.dateSigned = new Date(economicInterestPI.dateSigned);
        }
        if (economicInterestPI.giftsReceivedDate !== null) {
            economicInterestPI.giftsReceivedDate = new Date(economicInterestPI.giftsReceivedDate);
        }
        if (economicInterestPI.travelStartDate !== null) {
            economicInterestPI.travelStartDate = new Date(economicInterestPI.travelStartDate);
        }
        if (economicInterestPI.travelEndDate !== null) {
            economicInterestPI.travelEndDate = new Date(economicInterestPI.travelEndDate);
        }
        if (economicInterestPI.dateSigned !== null) {
            economicInterestPI.dateSigned = new Date(economicInterestPI.dateSigned);
        }
        return economicInterestPI;
    };
    return EconomicInterestComponent;
}());
EconomicInterestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-economic-interest',
        template: __webpack_require__("../../../../../src/app/components/formcomponents/economic-interest/economic-interest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/formcomponents/economic-interest/economic-interest.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_proposal_service__["a" /* ProposalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_proposal_service__["a" /* ProposalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_preaward_service__["a" /* PreawardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_preaward_service__["a" /* PreawardService */]) === "function" && _b || Object])
], EconomicInterestComponent);

var _a, _b;
//# sourceMappingURL=economic-interest.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/equipment/equipment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n}\r\ndiv{\r\n    width:100%;\r\n}\r\n.pages {\r\n    /* border:1px solid greenyellow; */\r\n    height:100%;\r\n    min-width: 100%;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    overflow: hidden;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/equipment/equipment.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='container'>\r\n  <div id='dash-bar'>\r\n    <h3>UAS Grants and Contracts New Equipment Approval Form</h3>\r\n    <button type=\"button\" pButton (click)=\"update()\" label=\"Update\"></button>\r\n    <app-bread-crumb [index]='index' [pages]='breadCrumbStrings'></app-bread-crumb>\r\n  </div>\r\n  <div class='pages'>\r\n    <!-- page 1 General Information -->\r\n    <div *ngIf='index==0' class='form-flex-start'>\r\n      <p class='form-title'>General Information</p>\r\n      <label>Faculty Name</label>\r\n      <input type=\"text\" [(ngModel)]='equipmentForm.facultyName' pInputText>\r\n      <label>Department</label>\r\n      <input type=\"text\" [(ngModel)]='equipmentForm.department' pInputText>\r\n      <label>Grant-Agency</label>\r\n      <input type=\"text\" [(ngModel)]='equipmentForm.grantAgency' pInputText>\r\n      <label>Proposal Title</label>\r\n      <input type=\"text\" [(ngModel)]='equipmentForm.proposalTitle' pInputText>\r\n      <p-checkbox label='Extension' binary='true' [(ngModel)]='equipmentForm.extension'></p-checkbox>\r\n      <div class='form-flex-start indent' *ngIf='equipmentForm.extension'>\r\n        <label>Extension Amount</label>\r\n        <input type=\"text\" [(ngModel)]='equipmentForm.extensionValue' pInputText>\r\n      </div>\r\n      <p-checkbox label='Cost Share' binary='true' [(ngModel)]='equipmentForm.costShare'></p-checkbox>\r\n      <p-checkbox label='Donation' binary='true' [(ngModel)]='equipmentForm.donation'></p-checkbox>\r\n      <p-checkbox label='New Equipment' binary='true' [(ngModel)]='equipmentForm.newEquipment'></p-checkbox>\r\n\r\n    </div>\r\n    <!-- page 2 Equipment -->\r\n    <div *ngIf='index==1' class='form-flex-start'>\r\n      <!-- table -->\r\n      <p-dataTable [value]=\"equipmentForm.typeOfEquipment\" [responsive]=\"true\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event,'typeOfEquipment')\">\r\n        <p-header>Type of Equipment</p-header>\r\n        <p-column field='name' header='Name'>\r\n        </p-column>\r\n        <p-column field='specification' header='Specification'>\r\n        </p-column>\r\n        <p-column field='url' header='URL'>\r\n        </p-column>\r\n        <p-footer>\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n            <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd('typeOfEquipment')\" label=\"Add\"></button>\r\n          </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n      <p class='form-title'>Type Of Equipment (List each equipment item and attach specifications/quote nad url/website if available)</p>\r\n      <label>Building</label>\r\n      <input type=\"text\" [(ngModel)]='equipmentForm.buildingLocation' pInputText>\r\n      <label>Room</label>\r\n      <input type=\"text\" [(ngModel)]='equipmentForm.roomLocation' pInputText>\r\n      <label>Company Donating</label>\r\n      <input type=\"text\" [(ngModel)]='equipmentForm.companyDonating' pInputText>\r\n      <label>Previous Use</label>\r\n      <input type=\"text\" [(ngModel)]='equipmentForm.previousUse' pInputText>\r\n\r\n      <p-checkbox label='Size Of Equipment' binary='true' [(ngModel)]='equipmentForm.sizeOfEquipment'></p-checkbox>\r\n      <div @slideHorizontal *ngIf='equipmentForm.sizeOfEquipment' class='form-flex-start indent'>\r\n        <label>Height ft</label>\r\n        <input type=\"number\" [(ngModel)]='equipmentForm.height' pInputText>\r\n        <label>Width ft</label>\r\n        <input type=\"number\" [(ngModel)]='equipmentForm.width' pInputText>\r\n        <label>Length ft</label>\r\n        <input type=\"number\" [(ngModel)]='equipmentForm.length' pInputText>\r\n      </div>\r\n    </div>\r\n    <!-- page 3 check all that apply  -->\r\n    <div *ngIf='index==2' class='form-flex-start'>\r\n      <p class='form-title'>Please Check all that apply</p>\r\n      <p-checkbox label='Space Modification Requirement (e.g Removal of walls or bench)' binary='true' [(ngModel)]='equipmentForm.spaceModificationRequirement'></p-checkbox>\r\n      <!--  electrical changes-->\r\n      <p-checkbox label='Electrical Modification(s)' binary='true' [(ngModel)]='equipmentForm.electricalModification'></p-checkbox>\r\n      <div @slideHorizontal class='requirement-list' *ngIf='equipmentForm.electricalModification' class='form-flex-start indent'>\r\n        <p-checkbox label='Volts' binary='true' [(ngModel)]='equipmentForm.volts'></p-checkbox>\r\n        <p-checkbox label='Amps' binary='true' [(ngModel)]='equipmentForm.amp'></p-checkbox>\r\n        <p-checkbox label='Phase' binary='true' [(ngModel)]='equipmentForm.phase'></p-checkbox>\r\n        <p-checkbox label='Dedicated Power' binary='true' [(ngModel)]='equipmentForm.dedicatedPower'></p-checkbox>\r\n        <p-checkbox label='Circuit Breaker Specification' binary='true' [(ngModel)]='equipmentForm.circuitBreakerSpecification'></p-checkbox>\r\n        <p-checkbox label='Motor/Compressor (if applied) specification' binary='true' [(ngModel)]='equipmentForm.motorCompressorSpecification'></p-checkbox>\r\n        <p-checkbox label='Special Conduit Requirements' binary='true' [(ngModel)]='equipmentForm.specialNeeds'></p-checkbox>\r\n        <div *ngIf='equipmentForm.specialNeeds' @slideHorizontal class='form-flex-start indent'>\r\n          <label>Specify</label>\r\n          <input type=\"text\" [(ngModel)]='equipmentForm.specialNeedsString' pInputText>\r\n        </div>\r\n        <p-checkbox label='FWR Paid For' binary='true' [(ngModel)]='equipmentForm.fwr'></p-checkbox>\r\n        <div *ngIf='equipmentForm.fwr' @slideHorizontal class='form-flex-start indent'>\r\n          <label>FWR Paid For By</label>\r\n          <input type=\"text\" [(ngModel)]='equipmentForm.fwrPaidBy' pInputText>\r\n        </div>\r\n      </div>\r\n      <!-- HVAC -->\r\n      <p-checkbox label='Heating,Ventilation, Air Conditioning Requirements (HVAC)' binary='true' [(ngModel)]='equipmentForm.hvac'></p-checkbox>\r\n      <div @slideHorizontal class='form-flex-start indent' *ngIf='equipmentForm.hvac'>\r\n        <p-checkbox label='Air/chilled water flow(s) requirement' binary='true' [(ngModel)]='equipmentForm.airChilledWaterFlow'></p-checkbox>\r\n        <p-checkbox label='Temperature(s) setting/control requirement' binary='true' [(ngModel)]='equipmentForm.temperature'></p-checkbox>\r\n        <p-checkbox label='Humidity control/requirement' binary='true' [(ngModel)]='equipmentForm.humidityControl'></p-checkbox>\r\n        <p-checkbox label='Supply pressure (static operating) at users end' binary='true' [(ngModel)]='equipmentForm.supplyPressure'></p-checkbox>\r\n        <p-checkbox label='Central package unit selection/specification' binary='true' [(ngModel)]='equipmentForm.centralPackageUnit'></p-checkbox>\r\n        <p-checkbox label='Special duct work/AHU/damper/valving/motor (w/specifications as applied)' binary='true' [(ngModel)]='equipmentForm.specialWork'></p-checkbox>\r\n        <p-checkbox label='Noise Requirement (if applied)' binary='true' [(ngModel)]='equipmentForm.noiseRequirement'></p-checkbox>\r\n      </div>\r\n      <!-- plumbing -->\r\n      <p-checkbox label='Plumbing Modification(s)' binary='true' [(ngModel)]='equipmentForm.plumbing'></p-checkbox>\r\n      <div @slideHorizontal class='form-flex-start indent' *ngIf='equipmentForm.plumbing'>\r\n        <p-checkbox label='Fluid (water,natural gas, air, others)' binary='true' [(ngModel)]='equipmentForm.fluid'></p-checkbox>\r\n        <p-checkbox label='Flow Rate (gpm,cfm)' binary='true' [(ngModel)]='equipmentForm.flowRate'></p-checkbox>\r\n        <p-checkbox label='Pressure (static/operating) requirement (at users end)' binary='true' [(ngModel)]='equipmentForm.pressure'></p-checkbox>\r\n        <p-checkbox label='Fluid temperature requirement' binary='true' [(ngModel)]='equipmentForm.fluidTemperature'></p-checkbox>\r\n        <p-checkbox label='Pump/compressor/motor specifications' binary='true' [(ngModel)]='equipmentForm.pumpCompressorMotor'></p-checkbox>\r\n      </div>\r\n      <!-- network -->\r\n      <p-checkbox label='Network Requirement(s)' binary='true' [(ngModel)]='equipmentForm.network'></p-checkbox>\r\n      <div @slideHorizontal class='form-flex-start indent' *ngIf='equipmentForm.network'>\r\n        <p-checkbox label='Maintenance' binary='true' [(ngModel)]='equipmentForm.maintenance'></p-checkbox>\r\n        <p-checkbox label='License Requirements' binary='true' [(ngModel)]='equipmentForm.licenseRequirements'></p-checkbox>\r\n        <p-checkbox label='Hardware' binary='true' [(ngModel)]='equipmentForm.hardware'></p-checkbox>\r\n      </div>\r\n      <!-- hazardous material-->\r\n      <p-checkbox label='Hazardous Material' binary='true' [(ngModel)]='equipmentForm.hazardousMaterial'></p-checkbox>\r\n      <div @slideHorizontal class='form-flex-start' *ngIf='equipmentForm.hazardousMaterial'>\r\n        <!-- chemicals -->\r\n        <p-dataTable [value]=\"equipmentForm.chemicals\" [responsive]=\"true\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event,'chemical')\">\r\n          <p-header>Chemicals</p-header>\r\n          <p-column field='key' header='Chemical'>\r\n          </p-column>\r\n          <p-column field='value' header='Quantity'>\r\n          </p-column>\r\n          <p-footer>\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd('chemical')\" label=\"Add\"></button>\r\n            </div>\r\n          </p-footer>\r\n        </p-dataTable>\r\n        <!-- radiaton -->\r\n        <p-dataTable [value]=\"equipmentForm.radiation\" [responsive]=\"true\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event,'radiation')\">\r\n          <p-header>Radiation Use</p-header>\r\n          <p-column field='key' header='Name'></p-column>\r\n          <p-column field='value' header='Specification'></p-column>\r\n          <p-footer>\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd('radiation')\" label=\"Add\"></button>\r\n            </div>\r\n          </p-footer>\r\n        </p-dataTable>\r\n      </div>\r\n      <p-checkbox label='Maintenance Requirement' binary='true' [(ngModel)]='equipmentForm.maintenanceRequirement'></p-checkbox>\r\n      <textarea pInputTextarea *ngIf='equipmentForm.maintenanceRequirement' [(ngModel)]=\"equipmentForm.maintenanceRequirements\"\r\n        autoResize=\"autoResize\"></textarea>\r\n    </div>\r\n  </div>\r\n  <app-form-footer [index]='index' [length]='breadCrumbStrings.length' (newIndex)='updateIndex($event)'></app-form-footer>\r\n  <!-- dialog   -->\r\n  <p-dialog header=\"bork\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\">\r\n    <!-- typee of equipment -->\r\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"displayType=='typeOfEquipment'\">\r\n      <label>Name</label>\r\n      <input pInputText [(ngModel)]=\"typeOfEquipment.name\" />\r\n      <label>Specification</label>\r\n      <input pInputText [(ngModel)]=\"typeOfEquipment.specification\" />\r\n      <label>URL</label>\r\n      <input pInputText [(ngModel)]=\"typeOfEquipment.url\" />\r\n    </div>\r\n    <!-- chemicals -->\r\n    <div *ngIf=\"displayType=='chemical'\">\r\n      <label>Chemical</label>\r\n      <input pInputText [(ngModel)]=\"mapEntry.key\" />\r\n      <label>Quantity</label>\r\n      <input pInputText [(ngModel)]=\"mapEntry.value\" />\r\n    </div>\r\n    <!-- radiation -->\r\n    <div *ngIf=\"displayType=='radiation'\">\r\n      <label>Radiation Agent</label>\r\n      <input pInputText [(ngModel)]=\"mapEntry.key\" />\r\n      <label>Source</label>\r\n      <input pInputText [(ngModel)]=\"mapEntry.value\" />\r\n    </div>\r\n    <p-footer>\r\n      <div>\r\n        <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"></button>\r\n      </div>\r\n    </p-footer>\r\n  </p-dialog>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/equipment/equipment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_PreAward_EquipmentForm__ = __webpack_require__("../../../../../src/app/models/PreAward/EquipmentForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_preaward_service__ = __webpack_require__("../../../../../src/app/services/preaward.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_proposal_service__ = __webpack_require__("../../../../../src/app/services/proposal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_keys_pipe__ = __webpack_require__("../../../../../src/app/pipes/keys.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EquipmentComponent = (function () {
    function EquipmentComponent(proposalService, preAwardService, keysPipe) {
        this.proposalService = proposalService;
        this.preAwardService = preAwardService;
        this.keysPipe = keysPipe;
        this.breadCrumbStrings = ['General Info', 'Equipment', 'Requirements'];
        this.typeOfEquipment = new __WEBPACK_IMPORTED_MODULE_2__models_PreAward_EquipmentForm__["b" /* TypeOfEquipment */]();
        this.mapEntry = new __WEBPACK_IMPORTED_MODULE_2__models_PreAward_EquipmentForm__["a" /* MapEntry */]();
    }
    EquipmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.index = 0;
        this.direction = 'left';
        var equipmentObject = this.proposalService.getEquipmentForm();
        if (equipmentObject.equipmentForm.id == null) {
            //  equipment form does not exist so pull it
            this.preAwardService.getEquipment(equipmentObject.proposalId).subscribe(function (newEquipmentForm) {
                _this.equipmentForm = newEquipmentForm;
            });
        }
        else {
            equipmentObject.equipmentForm.proposalId = equipmentObject.proposalId;
            if (equipmentObject.equipmentForm.chemicals.length == undefined) {
                this.equipmentForm = this.parseEquipmentForm(equipmentObject.equipmentForm);
            }
            else {
                this.equipmentForm = equipmentObject.equipmentForm;
            }
        }
        // make post request, set the response = this.equipmentForm,
    };
    // listens for index updates from form footer
    EquipmentComponent.prototype.updateIndex = function (value) {
        // console.log(`value: ${value} this.index: ${this.index}`);
        // right arrow
        if (value > this.index) {
            this.direction = 'left';
            // left arrow
        }
        else {
            this.direction = 'right';
        }
        this.index = value;
    };
    EquipmentComponent.prototype.update = function () {
        var _this = this;
        var equipmentFormCopy = Object.assign({}, this.equipmentForm);
        equipmentFormCopy.chemicals = this.keysPipe.backToObject(equipmentFormCopy.chemicals);
        equipmentFormCopy.radiation = this.keysPipe.backToObject(equipmentFormCopy.radiation);
        this.preAwardService.updateEquipment(equipmentFormCopy).subscribe(function (newEquipment) {
            newEquipment = _this.parseEquipmentForm(newEquipment);
            _this.proposalService.updateEquipmentForm(_this.equipmentForm);
        });
    };
    EquipmentComponent.prototype.onRowSelect = function (event, type) {
        if (type === 'typeOfEquipment') {
            this.newTypeOfEquipment = false;
            this.typeOfEquipment = event.data;
        }
        if (type === 'chemical' || type === 'radiation') {
            this.newMapEntry = false;
            this.mapEntry = event.data;
        }
        this.displayType = type;
        this.displayDialog = true;
    };
    EquipmentComponent.prototype.showDialogToAdd = function (type) {
        if (type === 'typeOfEquipment') {
            this.newTypeOfEquipment = true;
            this.typeOfEquipment = new __WEBPACK_IMPORTED_MODULE_2__models_PreAward_EquipmentForm__["b" /* TypeOfEquipment */]();
        }
        if (type === 'chemical' || type === 'radiation') {
            this.newMapEntry = true;
            this.mapEntry = new __WEBPACK_IMPORTED_MODULE_2__models_PreAward_EquipmentForm__["a" /* MapEntry */]();
        }
        this.displayType = type;
        this.displayDialog = true;
    };
    EquipmentComponent.prototype.findIndex = function () {
        var type = this.displayType;
        if (type === 'typeOfEquipment') {
            return this.equipmentForm.typeOfEquipment.indexOf(this.typeOfEquipment);
        }
        if (type === 'chemical') {
            return this.equipmentForm.chemicals.indexOf(this.mapEntry);
        }
        if (type === 'radiation') {
            return this.equipmentForm.radiation.indexOf(this.mapEntry);
        }
    };
    EquipmentComponent.prototype.save = function () {
        var type = this.displayType;
        if (type === 'typeOfEquipment') {
            if (!this.equipmentForm.typeOfEquipment) {
                this.equipmentForm.typeOfEquipment = [];
            }
            var typeOfEquipmentList = this.equipmentForm.typeOfEquipment.slice();
            if (this.newTypeOfEquipment) {
                typeOfEquipmentList.push(this.typeOfEquipment);
            }
            else {
                typeOfEquipmentList[this.findIndex()] = this.typeOfEquipment;
            }
            this.equipmentForm.typeOfEquipment = typeOfEquipmentList;
        }
        if (type === 'chemical') {
            if (!this.mapEntry) {
                this.equipmentForm.chemicals = [];
            }
            var chemicalsList = this.equipmentForm.chemicals.slice();
            if (this.newMapEntry) {
                chemicalsList.push(this.mapEntry);
            }
            else {
                chemicalsList[this.findIndex()] = this.mapEntry;
            }
            this.equipmentForm.chemicals = chemicalsList;
            console.log(this.equipmentForm.chemicals);
        }
        if (type === 'radiation') {
            if (!this.mapEntry) {
                this.equipmentForm.radiation = [];
            }
            var radiationList = this.equipmentForm.radiation.slice();
            if (this.newMapEntry) {
                radiationList.push(this.mapEntry);
            }
            else {
                radiationList[this.findIndex()] = this.mapEntry;
            }
            this.equipmentForm.radiation = radiationList;
        }
        this.displayDialog = false;
    };
    EquipmentComponent.prototype.delete = function () {
        var type = this.displayType;
        var index = this.findIndex();
        if (type === 'typeOfEquipment') {
            this.equipmentForm.typeOfEquipment = this.equipmentForm.typeOfEquipment.filter(function (val, i) { return i !== index; });
        }
        if (type === 'chemical') {
            this.equipmentForm.chemicals = this.equipmentForm.chemicals.filter(function (val, i) { return i !== index; });
        }
        if (type === 'radiation') {
            this.equipmentForm.radiation = this.equipmentForm.radiation.filter(function (val, i) { return i !== index; });
        }
        this.displayDialog = false;
    };
    EquipmentComponent.prototype.setProgressBar = function (percentage) {
        var formattedWidth = percentage + '%';
        return {
            'height': '10px',
            'width': formattedWidth,
            'background-color': 'rgb(46, 236, 29)'
        };
    };
    EquipmentComponent.prototype.parseEquipmentForm = function (equipmentForm) {
        equipmentForm.chemicals = this.keysPipe.transform(equipmentForm.chemicals);
        equipmentForm.radiation = this.keysPipe.transform(equipmentForm.radiation);
        return equipmentForm;
    };
    return EquipmentComponent;
}());
EquipmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-equipment',
        template: __webpack_require__("../../../../../src/app/components/formcomponents/equipment/equipment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/formcomponents/equipment/equipment.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('slideHorizontal', [
                // right arrow clicked entering
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])(':enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        transform: 'translateX(-100%)'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        transform: 'translateX(0)'
                    }))
                ]),
                // right arrow clicked leaving
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])(':leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        transform: 'translateX(-100%)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_proposal_service__["a" /* ProposalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_proposal_service__["a" /* ProposalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_preaward_service__["a" /* PreawardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_preaward_service__["a" /* PreawardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__pipes_keys_pipe__["a" /* KeysPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__pipes_keys_pipe__["a" /* KeysPipe */]) === "function" && _c || Object])
], EquipmentComponent);

var _a, _b, _c;
//# sourceMappingURL=equipment.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/intake/intake.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n}\r\nh3 {\r\n    margin-top: 0;\r\n    padding-top: 10px;\r\n}\r\n.required-asterisk {\r\n    color: #e32;\r\n    margin:0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/intake/intake.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='container'>\r\n  <div id='dash-bar'>\r\n    <h3>UAS Grants and Contracts Intake Form</h3>\r\n    <button type=\"button\" pButton (click)=\"update()\" label=\"Update\"></button>\r\n    <app-bread-crumb [index]='index' [pages]='breadCrumbStrings'></app-bread-crumb>\r\n  </div>\r\n  <!-- first page A,B,C -->\r\n  <div *ngIf='index==0' class='form-flex-start'>\r\n    <p class='form-title'>General Information</p>\r\n    <label>Principal Investigator</label>\r\n    <input type=\"text\" [(ngModel)]='intakeForm.principleInvestigator' pInputText>\r\n    <small *ngIf='!intakeForm.principleInvestigator' class='required-asterisk'>*required</small>\r\n    <label>College</label>\r\n    <input type=\"text\" pInputText>\r\n    <label>Sponsor</label>\r\n    <input type=\"text\" [(ngModel)]='intakeForm.sponsor' pInputText>\r\n    <!-- <small *ngIf='!intakeForm.sponsor' class='required-asterisk'>*required</small> -->\r\n    <label>Project Title</label>\r\n    <input type=\"text\" [(ngModel)]='intakeForm.projectTitle' pInputText>\r\n    <small *ngIf='!intakeForm.projectTitle' class='required-asterisk'>*required</small>\r\n    <label> Proposed Funding Amount $</label>\r\n    <input type=\"number\" [(ngModel)]='intakeForm.proposedFundingAmount' pInputText>\r\n    <small *ngIf='!intakeForm.proposedFundingAmount' class='required-asterisk'>*required</small>\r\n    <label> Start Date</label>\r\n    <p-calendar [(ngModel)]='intakeForm.startDate'></p-calendar>\r\n    <small *ngIf='!intakeForm.startDate' class='required-asterisk'>*required</small>\r\n    <label> End Date</label>\r\n    <p-calendar [(ngModel)]='intakeForm.endDate'></p-calendar>\r\n    <small *ngIf='!intakeForm.endDate' class='required-asterisk'>*required</small>\r\n    \r\n    <!-- personnel object -->\r\n    <div id='personnel'>\r\n      <p-dataTable [value]=\"intakeForm.personnel\" [responsive]=\"true\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event,'personnel')\">\r\n        <p-header>PERSONNEL</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"employer\" header=\"Employer\"></p-column>\r\n        <p-column field=\"positionTitleOnGrant\" header=\"Position Title On Grant\"></p-column>\r\n        <p-column field=\"units\" header=\"Units\"></p-column>\r\n        <p-footer>\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n            <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd('personnel')\" label=\"Add\"></button>\r\n          </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n    <p class='form-title'>PARTICIPATION SUPPORT</p>\r\n    <label>Do you anticipate any participation stipends as part of your proposal?</label>\r\n    <p-toggleButton [(ngModel)]=\"intakeForm.anticipateStipend\"></p-toggleButton>\r\n\r\n    <!-- if stipend is true -->\r\n    <div @slideHorizontal class='form-flex-start indent' *ngIf='intakeForm.anticipateStipend'>\r\n      <label>Please identify the type of Stipend:Study Participant, Student Tuition, Travel.. etc, and provide your Participation\r\n        Stipend eligibility criteria and selection process below.</label>\r\n      <input type=\"text\" [(ngModel)]='intakeForm.stipend' pInputText>\r\n      <p-checkbox  label='Faculty Student Research/Creative Activities' [(ngModel)]=\"intakeForm.facultyStudentResearchCreativeActivities\" binary='true'></p-checkbox>\r\n      <label>Will this project actively involve students in Research</label>\r\n      <p-toggleButton [(ngModel)]=\"intakeForm.studentsInvolved\"></p-toggleButton>\r\n\r\n      <!-- if rsca is true -->\r\n      <div @slideHorizontal class='form-flex-start indent' *ngIf='intakeForm.studentsInvolved'>\r\n        <p>Please answer the following</p>\r\n        <label> Number Of Undergrad Students</label>\r\n        <input type=\"number\" [(ngModel)]='intakeForm.noOfUnderGradStudents' pInputText>\r\n        <label> Number Of Grad Students</label>\r\n        <input type=\"number\" [(ngModel)]='intakeForm.noOfGradStudents' pInputText>\r\n        <p>What type of RSCA activities will be incorporated? (Check all that apply)</p>\r\n         <p-checkbox label='Laboratory Assistance' binary='true' [(ngModel)]='intakeForm.laboratoryAssistance'></p-checkbox>\r\n         <p-checkbox label='Data Collection' binary='true' [(ngModel)]='intakeForm.dataCollection'></p-checkbox>\r\n         <p-checkbox label='Report Writing' binary='true' [(ngModel)]='intakeForm.reportWriting'></p-checkbox>\r\n         <p-checkbox label='Literature Review' binary='true' [(ngModel)]='intakeForm.literatureReview'></p-checkbox>\r\n         <p-checkbox label='Coding Or Data Entry' binary='true' [(ngModel)]='intakeForm.codingOrDataEntry'></p-checkbox>\r\n         <p-checkbox label='Presentation' binary='true' [(ngModel)]='intakeForm.presentations'></p-checkbox>\r\n         <p-checkbox label='Archival Research' binary='true' [(ngModel)]='intakeForm.archivalResearch'></p-checkbox>\r\n         <p-checkbox label='Data Analysis'  binary='true' [(ngModel)]='intakeForm.dataAnalysis'></p-checkbox>\r\n         <p-checkbox label='Other Actvities' binary='true' [(ngModel)]='intakeForm.otherActvities'></p-checkbox>\r\n        <!-- otherActivitiesList:String[]; -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- second page -->\r\n  <div *ngIf='index==1' id='participation'>\r\n    <p-dataTable [value]=\"intakeForm.subgrantsOrSubcontracts\" [responsive]=\"true\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event,'subgrantsubcontract')\">\r\n      <p-header>SubGrant(s) or SubContract(s)</p-header>\r\n      <p-column field=\"institution\" header=\"Institution Name\"></p-column>\r\n      <p-column field=\"proposedFundingAmount\" header=\"Proposed Funding Amount\"></p-column>\r\n      <p-column field=\"contactPersonName\" header=\"Contact Person\"></p-column>\r\n      <p-column field=\"contactInfo\" header=\"Contact Info\"></p-column>\r\n      <p-footer>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd('subgrantsubcontract')\"\r\n            label=\"Add\"></button>\r\n        </div>\r\n      </p-footer>\r\n    </p-dataTable>\r\n    <p-dataTable [value]=\"intakeForm.projectLocations\" [responsive]=\"true\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event,'projectlocation')\">\r\n      <p-header>PROJECT LOCATIONS</p-header>\r\n      <p-column field=\"siteName\" header=\"Site Name\"></p-column>\r\n      <p-column field=\"siteAddress\" header=\"Site Address\"></p-column>\r\n      <p-column field=\"projectedPercentOfTimeAtSite\" header=\"Projected Percent Of Time At State\"></p-column>\r\n      <p-column field=\"agreementArranged\" header=\"On Campus Space Or On Campus Rental Needed\"></p-column>\r\n      <p-footer>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd('projectlocation')\" label=\"Add\"></button>\r\n        </div>\r\n      </p-footer>\r\n    </p-dataTable>\r\n    <p-dataTable [value]=\"intakeForm.additionalPartiesInvolved\" [responsive]=\"true\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event,'additionalparty')\">\r\n      <p-header>ADDITIONAL PARTIES INVOLVED (e.g Prime Sponsor, Third Party, etc.)</p-header>\r\n      <p-column field=\"partyName\" header=\"Party Name\"></p-column>\r\n      <p-column field=\"supervisor\" header=\"Supervisor\"></p-column>\r\n      <p-column field=\"explanationOfInvolvement\" header=\"Explanation Of Involvement\"></p-column>\r\n      <p-footer>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd('additionalparty')\" label=\"Add\"></button>\r\n        </div>\r\n      </p-footer>\r\n    </p-dataTable>\r\n  </div>\r\n  <!-- third page -->\r\n  <div *ngIf='index==2' id='compliances'>\r\n    <p class='form-title'>BUDGET (if possible, bring a draft and budget justification to the first meeting with UAS Grants and Contracts)</p>\r\n    <div class='form-flex-start'>\r\n      <label> Agency F&A (Indirect) Cost Rate Percentage</label>\r\n      <input type=\"number\" pInputText [(ngModel)]='intakeForm.agencyCostRatePercentage'>\r\n      <label>Is costsharing required by the agency?</label>\r\n      <p-toggleButton [(ngModel)]=\"intakeForm.agencyCostSharing\"></p-toggleButton>\r\n      <label>Is costsharing requested by the PI?</label>\r\n      <p-toggleButton [(ngModel)]=\"intakeForm.piCostSharing\"></p-toggleButton>\r\n      <label> Count of computers to be requested?</label>\r\n      <input type=\"number\" pInputText [(ngModel)]='intakeForm.computersRequested'>\r\n      <!-- requested equipment -->\r\n      <p-dataTable [value]=\"intakeForm.requestedEquipment\" [responsive]=\"true\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event,'requestedequipment')\">\r\n        <p-header>Equipment To Be Requested?</p-header>\r\n        <p-column field=\"key\" header=\"Name\"></p-column>\r\n        <p-column field=\"value\" header=\"Approximate Cost\"></p-column>\r\n        <p-footer>\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n            <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd('requestedequipment')\"\r\n              label=\"Add\"></button>\r\n          </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n    <p-dataTable [value]=\"intakeForm.space\" [responsive]=\"true\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event,'space')\">\r\n      <p-header>SPACE(Indicate if any space will be required as part of the proposed work/activity)</p-header>\r\n      <p-column field=\"item\" header=\"Item (personnel,equipment, storage,. etc)\"></p-column>\r\n      <p-column field=\"typeOfUse\" header=\"New Space,change of use, renovation?\"></p-column>\r\n      <p-column field=\"sourceOfFunds\" header=\"Source Of Funds\"></p-column>\r\n      <p-footer>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd('space')\" label=\"Add\"></button>\r\n        </div>\r\n      </p-footer>\r\n    </p-dataTable>\r\n    <p-dataTable [value]=\"intakeForm.hazardousSubstances\" [responsive]=\"true\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event,'hazard')\">\r\n      <p-header>HAZARDOUS SUBSTANCES (Consult with EHS to obtain proper clearance or confirmation of approval to work with hazardous\r\n        agents)</p-header>\r\n      <p-column field=\"key\" header=\"Name Of Agent\"></p-column>\r\n      <p-column field=\"value\" header=\"Type(biohazard, radiation, recombinant DNA..)\"></p-column>\r\n      <p-footer>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd('hazard')\" label=\"Add\"></button>\r\n        </div>\r\n      </p-footer>\r\n    </p-dataTable>\r\n  </div>\r\n  <!-- last page -->\r\n  <div *ngIf='index==3' class='form-flex-start'>\r\n    <p class='form-title'>OTHER COMPLIANCES</p>\r\n     <p-checkbox label='Human Subjects (If yes, consult with IRB Compliance Specialist [Elia Amaro, x3798])' binary='true' [(ngModel)]='intakeForm.humanSubjects'></p-checkbox>\r\n     <p-checkbox label='Vertebrate Animals (If yes, consult with IACUC Compliance Specialist [Elia Amaro, x3798])' binary='true' [(ngModel)]='intakeForm.vertebrateAnimals'></p-checkbox>\r\n    <!-- <label for='qf'> Questionare Field</label>\r\n        <input id='qf' type=\"text\" pInputText>\r\n        <label for='ct'> Category Title</label>\r\n        <input id='ct' type=\"text\" pInputText> -->\r\n    <p class='form-title'> OTHER SERVICES (indicate which of the following services you will need for this proposal)</p>\r\n    <label >Assistance With Proposal Development (e.g,conceptualization, writing, editing)</label>\r\n    <label>If yes, contact UAS Grants & Contracts and/or the Associate Vice President for Research at least one month in advance</label>\r\n     <p-checkbox binary='true' [(ngModel)]='intakeForm.assistanceWithProposalDevelopment'></p-checkbox>\r\n     <p-checkbox label='Technical Assistance'binary='true' [(ngModel)]='intakeForm.technicalAssistance'></p-checkbox>\r\n     <p-checkbox label='Letter Of Support President' binary='true'  [(ngModel)]='intakeForm.letterOfSupportPresident'></p-checkbox>\r\n     <p-checkbox label='Letter of Support Provost' binary='true' [(ngModel)]='intakeForm.letterOfSupportProvost'></p-checkbox>\r\n     <p-checkbox label='Letter Of Support Associate VP Of Research' binary='true' [(ngModel)]='intakeForm.letterOfSupportAssocVPOfResearch'></p-checkbox>\r\n     <p-checkbox label='Duplication Of Final Document Package' binary='true' [(ngModel)]='intakeForm._duplicationfFinalDocumentPackage'></p-checkbox>\r\n    <label> Number Of Copies</label>\r\n    <input type=\"number\" [(ngModel)]='intakeForm.noOfCopies' pInputText>\r\n    <p class='form-title'>PROJECT SUMMARY Please provide a brief project summary, scope of work, or abstract, of your proposal</p>\r\n    <input type=\"text\" [(ngModel)]='intakeForm.summary' pInputText>\r\n  </div>\r\n  <!-- arrows -->\r\n  <app-form-footer [index]='index' [length]='breadCrumbStrings.length' (newIndex)='updateIndex($event)'></app-form-footer>\r\n  <!-- dialog for crud stuff -->\r\n  <p-dialog header=\"{{intakeInnerClass}}\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\">\r\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"intakeInnerClass=='personnel'\">\r\n      <label>Name</label>\r\n      <input pInputText [(ngModel)]=\"personnel.name\" />\r\n      <label>Employer</label>\r\n      <input pInputText [(ngModel)]=\"personnel.employer\" />\r\n      <label>Position Title On Grant</label>\r\n      <input pInputText [(ngModel)]=\"personnel.positionTitleOnGrant\" />\r\n      <label>Units</label>\r\n      <input pInputText [(ngModel)]=\"personnel.units\" />\r\n    </div>\r\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"intakeInnerClass=='subgrantsubcontract'\">\r\n      <label>Institution Name</label>\r\n      <input pInputText [(ngModel)]=\"subgrantSubProject.institution\" />\r\n      <label>Proposed Funding Amount</label>\r\n      <!--number-->\r\n      <input type='number' pInputText [(ngModel)]=\"subgrantSubProject.proposedFundingAmount\" />\r\n      <label>Contact Person</label>\r\n      <input pInputText [(ngModel)]=\"subgrantSubProject.contactPersonName\" />\r\n      <label>Contact Info</label>\r\n      <input pInputText [(ngModel)]=\"subgrantSubProject.contactInfo\" />\r\n    </div>\r\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"intakeInnerClass=='projectlocation'\">\r\n      <label>Site Name</label>\r\n      <input pInputText [(ngModel)]=\"projectLocation.siteName\" />\r\n      <label>Site Address</label>\r\n      <input pInputText [(ngModel)]=\"projectLocation.siteAddress\" />\r\n      <label>Projected Percent Of Time At Site</label>\r\n      <input pInputText [(ngModel)]=\"projectLocation.projectedPercentOfTimeAtSite\" />\r\n      <label>Will an on campus space or rental agreement need to be arranged?</label>\r\n       <p-checkbox binary='true' [(ngModel)]='projectLocation.agreementArranged'></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"intakeInnerClass=='additionalparty'\">\r\n      <label>Party Name</label>\r\n      <input pInputText [(ngModel)]=\"additionalParty.partyName\" />\r\n      <label>Supervisor</label>\r\n      <input pInputText [(ngModel)]=\"additionalParty.supervisor\" />\r\n      <label>Explanation Of Involvement (Extent/Use, By who,...etc)</label>\r\n      <input pInputText [(ngModel)]=\"additionalParty.explanationOfInvolvement\" />\r\n    </div>\r\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"intakeInnerClass=='space'\">\r\n      <label>Item(personnel,equipment, storage ...etc)</label>\r\n      <input pInputText [(ngModel)]=\"space.item\" />\r\n      <label>New Space, change of use or renovation?</label>\r\n      <input pInputText [(ngModel)]=\"space.typeOfUse\" />\r\n      <label>Source of Funds</label>\r\n      <input pInputText [(ngModel)]=\"space.sourceOfFunds\" />\r\n    </div>\r\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"intakeInnerClass=='requestedequipment'\">\r\n      <label>Name</label>\r\n      <input pInputText [(ngModel)]=\"mapEntry.key\" />\r\n      <label>Approximate Cost</label>\r\n      <input pInputText [(ngModel)]=\"mapEntry.value\" />\r\n    </div>\r\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"intakeInnerClass=='hazard'\">\r\n      <label>Name Of Agent</label>\r\n      <input pInputText [(ngModel)]=\"mapEntry.key\" />\r\n      <label>Type(biohazard,radiation, recombinant DNA)</label>\r\n      <input pInputText [(ngModel)]=\"mapEntry.value\" />\r\n    </div>\r\n    <p-footer>\r\n      <div>\r\n        <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"></button>\r\n      </div>\r\n    </p-footer>\r\n  </p-dialog>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/intake/intake.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntakeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__ = __webpack_require__("../../../../../src/app/models/PreAward/IntakeForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_proposal_service__ = __webpack_require__("../../../../../src/app/services/proposal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_preaward_service__ = __webpack_require__("../../../../../src/app/services/preaward.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_keys_pipe__ = __webpack_require__("../../../../../src/app/pipes/keys.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var IntakeComponent = (function () {
    function IntakeComponent(proposalService, preAwardService, messageService, keysPipe) {
        this.proposalService = proposalService;
        this.preAwardService = preAwardService;
        this.messageService = messageService;
        this.keysPipe = keysPipe;
        this.breadCrumbStrings = ['General Info', 'Participation', 'Compliances', 'Other'];
        this.personnel = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__["c" /* Personnel */]();
        this.subgrantSubProject = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__["f" /* SubgrantSubProject */]();
        this.projectLocation = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__["d" /* ProjectLocation */]();
        this.additionalParty = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__["a" /* AdditionalPartiesInvolved */]();
        this.mapEntry = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__["b" /* MapEntry */]();
        this.space = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__["e" /* Space */]();
        this.intakeForm = this.parseIntake(this.proposalService.getIntakeForm()); // ignore this at the moment make this into observable
    }
    IntakeComponent.prototype.ngOnInit = function () {
        this.index = 0;
        this.displayDialog = false;
    };
    IntakeComponent.prototype.updateIndex = function (value) {
        this.index = value;
    };
    IntakeComponent.prototype.update = function () {
        var _this = this;
        var intakeFormCopy = Object.assign({}, this.intakeForm);
        intakeFormCopy.requestedEquipment = this.keysPipe.backToObject(intakeFormCopy.requestedEquipment);
        intakeFormCopy.hazardousSubstances = this.keysPipe.backToObject(intakeFormCopy.hazardousSubstances);
        this.preAwardService.updateIntake(intakeFormCopy).subscribe(function (newIntake) {
            _this.intakeForm = _this.parseIntake(newIntake);
            _this.intakeForm.proposalId = intakeFormCopy.proposalId;
            _this.messageService.add({ severity: 'success', summary: 'Changes Saved' });
            _this.proposalService.updateIntakeForm(_this.intakeForm);
        });
    };
    // when add is clicked on any datatable
    IntakeComponent.prototype.showDialogToAdd = function (type) {
        if (type === 'personnel') {
            this.newPersonnel = true;
            this.personnel = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__["c" /* Personnel */]();
        }
        if (type === 'subgrantsubcontract') {
            this.newSubgrantSubProject = true;
            this.subgrantSubProject = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__["f" /* SubgrantSubProject */]();
        }
        if (type === 'projectlocation') {
            this.newProjectLocation = true;
            this.projectLocation = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__["d" /* ProjectLocation */]();
        }
        if (type === 'additionalparty') {
            this.newAdditionalParty = true;
            this.additionalParty = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__["a" /* AdditionalPartiesInvolved */]();
        }
        if (type === 'space') {
            this.newSpace = true;
            this.space = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__["e" /* Space */]();
        }
        if (type === 'requestedequipment' || type === 'hazard') {
            this.newMapEntry = true;
            this.mapEntry = new __WEBPACK_IMPORTED_MODULE_1__models_PreAward_IntakeForm__["b" /* MapEntry */]();
        }
        this.intakeInnerClass = type;
        this.displayDialog = true;
    };
    // when a data entry in data table is clicked
    IntakeComponent.prototype.onRowSelect = function (event, type) {
        if (type === 'personnel') {
            this.newPersonnel = false;
            this.personnel = event.data;
        }
        if (type === 'subgrantsubcontract') {
            this.newSubgrantSubProject = false;
            this.subgrantSubProject = event.data;
        }
        if (type === 'projectlocation') {
            this.newProjectLocation = false;
            this.projectLocation = event.data;
        }
        if (type === 'additionalparty') {
            this.newAdditionalParty = false;
            this.additionalParty = event.data;
        }
        if (type === 'space') {
            this.newSpace = false;
            this.space = event.data;
        }
        if (type === 'requestedequipment' || type === 'hazard') {
            this.newMapEntry = false;
            this.mapEntry = event.data;
        }
        this.intakeInnerClass = type;
        this.displayDialog = true;
    };
    // finds the index in its array, of the selected object in a data table
    IntakeComponent.prototype.findIndex = function () {
        var type = this.intakeInnerClass;
        if (type === 'personnel') {
            return this.intakeForm.personnel.indexOf(this.personnel);
        }
        if (type === 'subgrantsubcontract') {
            return this.intakeForm.subgrantsOrSubcontracts.indexOf(this.subgrantSubProject);
        }
        if (type === 'projectlocation') {
            return this.intakeForm.projectLocations.indexOf(this.projectLocation);
        }
        if (type === 'additionalparty') {
            return this.intakeForm.additionalPartiesInvolved.indexOf(this.additionalParty);
        }
        if (type === 'space') {
            return this.intakeForm.space.indexOf(this.space);
        }
        if (type === 'requestedequipment') {
            return this.intakeForm.requestedEquipment.indexOf(this.mapEntry);
        }
        if (type === 'hazard') {
            return this.intakeForm.hazardousSubstances.indexOf(this.mapEntry);
        }
    };
    // save new CRUD element
    IntakeComponent.prototype.save = function () {
        var type = this.intakeInnerClass;
        if (type === 'personnel') {
            if (!this.intakeForm.personnel) {
                this.intakeForm.personnel = [];
            }
            var personnelList = this.intakeForm.personnel.slice();
            if (this.newPersonnel) {
                personnelList.push(this.personnel);
            }
            else {
                personnelList[this.findIndex()] = this.personnel;
            }
            this.intakeForm.personnel = personnelList;
        }
        if (type === 'subgrantsubcontract') {
            if (!this.intakeForm.subgrantsOrSubcontracts) {
                this.intakeForm.subgrantsOrSubcontracts = [];
            }
            var subGrantSubProjectList = this.intakeForm.subgrantsOrSubcontracts.slice();
            if (this.newSubgrantSubProject) {
                subGrantSubProjectList.push(this.subgrantSubProject);
            }
            else {
                subGrantSubProjectList[this.findIndex()] = this.subgrantSubProject;
            }
            this.intakeForm.subgrantsOrSubcontracts = subGrantSubProjectList;
        }
        if (type === 'projectlocation') {
            if (!this.intakeForm.projectLocations) {
                this.intakeForm.projectLocations = [];
            }
            var projectLocationList = this.intakeForm.projectLocations.slice();
            if (this.newProjectLocation) {
                projectLocationList.push(this.projectLocation);
            }
            else {
                projectLocationList[this.findIndex()] = this.projectLocation;
            }
            this.intakeForm.projectLocations = projectLocationList;
        }
        if (type === 'additionalparty') {
            if (!this.intakeForm.additionalPartiesInvolved) {
                this.intakeForm.additionalPartiesInvolved = [];
            }
            var additionalPartyList = this.intakeForm.additionalPartiesInvolved.slice();
            if (this.newAdditionalParty) {
                additionalPartyList.push(this.additionalParty);
            }
            else {
                additionalPartyList[this.findIndex()] = this.additionalParty;
            }
            this.intakeForm.additionalPartiesInvolved = additionalPartyList;
        }
        if (type === 'space') {
            if (!this.intakeForm.space) {
                this.intakeForm.space = [];
            }
            var spaceList = this.intakeForm.space.slice();
            if (this.newSpace) {
                spaceList.push(this.space);
            }
            else {
                spaceList[this.findIndex()] = this.space;
            }
            this.intakeForm.space = spaceList;
        }
        if (type === 'requestedequipment') {
            if (!this.intakeForm.requestedEquipment) {
                this.intakeForm.requestedEquipment = [];
            }
            var equipmentList = this.intakeForm.requestedEquipment.slice();
            if (this.newMapEntry) {
                equipmentList.push(this.mapEntry);
            }
            else {
                equipmentList[this.findIndex()] = this.mapEntry;
            }
            this.intakeForm.requestedEquipment = equipmentList;
        }
        if (type === 'hazard') {
            if (!this.intakeForm.hazardousSubstances) {
                this.intakeForm.hazardousSubstances = [];
            }
            var hazardList = this.intakeForm.hazardousSubstances.slice();
            if (this.newMapEntry) {
                hazardList.push(this.mapEntry);
            }
            else {
                hazardList[this.findIndex()] = this.mapEntry;
            }
            this.intakeForm.hazardousSubstances = hazardList;
        }
        // reset
        this.displayDialog = false;
    };
    // delete a CRUD element
    IntakeComponent.prototype.delete = function () {
        var type = this.intakeInnerClass;
        var index = this.findIndex();
        if (type === 'personnel') {
            this.intakeForm.personnel = this.intakeForm.personnel.filter(function (val, i) { return i !== index; });
        }
        if (type === 'subgrantsubcontract') {
            this.intakeForm.subgrantsOrSubcontracts = this.intakeForm.subgrantsOrSubcontracts.filter(function (val, i) { return i !== index; });
        }
        if (type === 'projectlocation') {
            this.intakeForm.projectLocations = this.intakeForm.projectLocations.filter(function (val, i) { return i !== index; });
        }
        if (type === 'additionalparty') {
            this.intakeForm.additionalPartiesInvolved = this.intakeForm.additionalPartiesInvolved.filter(function (val, i) { return i !== index; });
        }
        if (type === 'space') {
            this.intakeForm.space = this.intakeForm.space.filter(function (val, i) { return i !== index; });
        }
        if (type === 'requestedequipment') {
            this.intakeForm.requestedEquipment = this.intakeForm.requestedEquipment.filter(function (val, i) { return i !== index; });
        }
        if (type === 'hazard') {
            this.intakeForm.hazardousSubstances = this.intakeForm.hazardousSubstances.filter(function (val, i) { return i !== index; });
        }
        this.displayDialog = false;
    };
    // convert requiestedEwuipment and hazardous substances maps to arrays, ceck if has already been converted
    IntakeComponent.prototype.parseIntake = function (intakeForm) {
        if (intakeForm.requestedEquipment.length == undefined) {
            intakeForm.requestedEquipment = this.keysPipe.transform(intakeForm.requestedEquipment);
            intakeForm.hazardousSubstances = this.keysPipe.transform(intakeForm.hazardousSubstances);
            if (intakeForm.startDate !== null) {
                intakeForm.startDate = new Date(intakeForm.startDate);
            }
            if (intakeForm.endDate !== null) {
                intakeForm.endDate = new Date(intakeForm.endDate);
            }
        }
        else {
            this.intakeForm = intakeForm;
        }
        return intakeForm;
    };
    return IntakeComponent;
}());
IntakeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-intake',
        template: __webpack_require__("../../../../../src/app/components/formcomponents/intake/intake.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/formcomponents/intake/intake.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('slideHorizontal', [
                // right arrow clicked entering
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])(':enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({
                        transform: 'translateX(-100%)'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({
                        transform: 'translateX(0)'
                    }))
                ]),
                // right arrow clicked leaving
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])(':leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({
                        transform: 'translateX(-100%)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_proposal_service__["a" /* ProposalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_proposal_service__["a" /* ProposalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_preaward_service__["a" /* PreawardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_preaward_service__["a" /* PreawardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__["MessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__["MessageService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__pipes_keys_pipe__["a" /* KeysPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__pipes_keys_pipe__["a" /* KeysPipe */]) === "function" && _d || Object])
], IntakeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=intake.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/timeline/timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.dash-bar {\r\n  width: 100%;\r\n  border-bottom: 1px solid black;\r\n  margin-bottom: 1em;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.page-title {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.timeline-info>label {\r\n  font-weight: bold;\r\n}\r\n\r\n#timeline-bar {\r\n  height: 100%;\r\n  width: 30%;\r\n  float: left;\r\n  margin: 0;\r\n  padding-left: 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  width: 100%;\r\n}\r\n\r\n.bar {\r\n  height: 30px;\r\n  border-left: 3px solid #9e9e9e;\r\n  margin-left: 8px;\r\n}\r\n\r\n.barCompleted {\r\n  border-left: 3px solid rgb(91, 188, 220);\r\n}\r\n\r\n.bar-drag-over {\r\n  height: 40px;\r\n  border-left: 5px solid rgb(241, 199, 45);\r\n}\r\n\r\n.icon-name-container {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.icon-name-container:hover .name {\r\n  color: #2790b0;\r\n}\r\n\r\n.icon-name-container:hover .icon {\r\n  box-shadow: 0 0 20px rgb(241, 199, 45);\r\n  border: 2px solid rgb(241, 199, 45);\r\n}\r\n\r\n.selected-icon {\r\n  box-shadow: 0 0 20px rgb(241, 199, 45);\r\n  border: 2px solid rgb(241, 199, 45) !important;\r\n}\r\n\r\n.icon {\r\n  height: 16px;\r\n  width: 16px;\r\n  border: 2px solid #9e9e9e;\r\n  border-radius: 50%;\r\n}\r\n\r\n.iconCompleted {\r\n  background-color: rgb(91, 188, 220);\r\n  border: 2px solid rgb(91, 188, 220);\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/check-symbol.png") + ")\r\n}\r\n\r\n.name {\r\n  padding-left: 3px;\r\n  font-weight: bold;\r\n  color: #9e9e9e;\r\n}\r\n\r\n#stage-content {\r\n  height: 100%;\r\n  /* overflow-x:hidden; */\r\n}\r\n\r\n.stage-general-info {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr;\r\n  grid-gap: .5em;\r\n  width: 80%;\r\n}\r\n\r\n.drag-icon {\r\n  float: left\r\n}\r\n\r\n.button-footers,\r\n.edit {\r\n  -ms-flex-item-align: end;\r\n      align-self: flex-end;\r\n}\r\n\r\n@media only screen and (min-device-width: 320px) and (max-device-width: 800px) {\r\n  :host {\r\n    display: block;\r\n    height: 100%;\r\n    width: auto !important;\r\n    margin: 0 !important;\r\n    background-color: white;\r\n  }\r\n\r\n  .dash-bar {\r\n    width: 100%;\r\n    border-bottom: 1px solid black;\r\n    margin-bottom: 1em;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n  }\r\n  .dash-bar>* {\r\n    margin-bottom: .5em;\r\n  }\r\n  #timeline-bar {\r\n    height: 100%;\r\n    width: 100% !important;\r\n    float: none !important;\r\n    margin-bottom: .5em;\r\n    padding-left: 0;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='dash-bar'>\r\n  <h3 class='page-title'>Timeline</h3>\r\n  <button pButton (click)='setDialogType(\"view-basic-timeline\")' label='Timeline Info'></button>\r\n  <button pButton *ngIf='user.type!=\"INVESTIGATOR\"' (click)='handleAddStage()' label='Add Stage' icon='fa-plus'  ></button>\r\n</div>\r\n<ul  [@stageAnimation]='timeline.stages.length' id='timeline-bar'>\r\n  <li  *ngFor='let stage of timeline?.stages; index as i'>\r\n    <!-- bar -->\r\n    <div class='bar' appTimelineBar *ngIf='i!=0' (drop)='drop({\"event\":$event,\"index\":i})' (dragover)='allowDrop($event)' [ngClass]='{\"barCompleted\": stage.uasReviewed}'></div>\r\n    <div class='icon-name-container' (click)='getCurrentStage(stage.id)' >\r\n      <!-- icon -->\r\n      <div class='icon' [ngClass]=\"{'iconCompleted': stage.uasReviewed, 'selected-icon':stageIndex==i}\"></div>\r\n      <!-- name -->\r\n      <label class='name'>{{stage.name}}</label>\r\n    </div>\r\n  </li>\r\n  <!-- add to end of timeline -->\r\n  <li *ngIf='dragging'>\r\n    <div class='bar' appTimelineBar (drop)='drop({\"event\":$event,\"index\":timeline.stages.length-1})' (dragover)='allowDrop($event)'></div>\r\n  </li>\r\n</ul>\r\n<div id='stage-content'>\r\n  <!-- view basic timeline info -->\r\n  <div class='form-flex-start timeline-info' *ngIf='dialogType==\"view-basic-timeline\"'>\r\n    <h2 class='form-title'>{{timeline.proposalName}}</h2>\r\n    <label>Principal Investigator</label>\r\n    <p>{{timeline.principalInvestigator}}</p>\r\n    <label>Other Investigators</label>\r\n    <p *ngFor='let oi of timeline.coPi'>{{oi}}</p>\r\n    <label>Funding Agency</label>\r\n    <p>{{timeline.fundingAgency }}</p>\r\n    <label>UAS Due Date</label>\r\n    <p>{{timeline.uasDueDate }}</p>\r\n    <label>Sponsor Due Date</label>\r\n    <p>{{timeline.sponsorDueDate }}</p>\r\n    <label>Final Signatures Deadline</label>\r\n    <p>{{timeline.finalSign}}</p>\r\n    <button *ngIf='user.type!=\"INVESTIGATOR\"' pButton class='ui-button-warning' (click)='setDialogType(\"edit-basic-timeline\")' label='Edit' icon='fa-edit'  ></button>\r\n  </div>\r\n  <!-- edit timeline info -->\r\n  <div class='form-flex-start timeline-info' *ngIf='dialogType==\"edit-basic-timeline\"'>\r\n    <h2 class='form-title'>{{timeline.proposalName}}</h2>\r\n    <label>Principal Investigator</label>\r\n    <p>{{timeline.principalInvestigator}}</p>\r\n    <label>Other Investigators</label>\r\n    <p *ngFor='let oi of timeline.coPi'>{{oi}}</p>\r\n    <label>Funding Agency</label>\r\n    <input type='text' pInputText [(ngModel)]='timeline.fundingAgency'>\r\n    <label>UAS Due Date</label>\r\n    <p-calendar [(ngModel)]='timeline.uasDueDate'></p-calendar>\r\n    <label>Sponsor Due Date</label>\r\n    <p-calendar [(ngModel)]='timeline.sponsorDueDate'></p-calendar>\r\n    <label>Final Signatures Deadline</label>\r\n    <p-calendar [(ngModel)]='timeline.finalSign'></p-calendar>\r\n    <button pButton class='ui-button-success' (click)='saveTimeline()' label='Save Timeline' [disabled]='timeline.uasDueDate==null'></button>\r\n\r\n  </div>\r\n  <!-- show a stage -->\r\n  <div class='form-flex-start timeline-info' *ngIf='dialogType==\"view-stage\"'>\r\n    <h2>{{stage.name}}</h2>\r\n    <label>Expected Date</label>\r\n    <p>{{stage.expectedDate}}</p>\r\n    <label>Completed Date</label>\r\n    <p>{{stage.completedDate}}</p>\r\n    <!-- forms -->\r\n    <p-dataTable [value]='stage.requiredForms'>\r\n      <p-header>Required Forms</p-header>\r\n      <p-column field='key' header='Form'></p-column>\r\n      <!-- <p-column header='Status'></p-column> -->\r\n    </p-dataTable>\r\n    <!-- files -->\r\n    <p-dataTable [value]='stage.requiredFiles'>\r\n      <p-header>Required Files</p-header>\r\n      <p-column field='key' header='File'></p-column>\r\n      <p-column header='Upload'>\r\n        <ng-template pTemplate='body' let-file='rowData'>\r\n          <p-fileUpload [disabled]='stage.uasReviewRequired' mode=\"basic\" auto='true' customUpload='true' (uploadHandler)='myUploader($event,file)' chooseLabel=\"Browse\"></p-fileUpload>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field='value' header='Download'>\r\n        <ng-template pTemplate='body' let-file='rowData'>\r\n          <button pButton (click)='downloadFile(file)' label='Download' [disabled]='file.value?.filePath==null'></button>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n    <label class='form-title'>Additional Notes</label>\r\n    <p>{{stage.addComments}}</p>\r\n    <!-- make this available when stages are complete and not when in approved -->\r\n    <button pButton *ngIf='user.type==\"INVESTIGATOR\"' [disabled]='stage.uasReviewRequired' class='ui-button-success edit ' (click)='submitForPending()' label='Submit For Review' icon='fa-edit'  ></button>\r\n    <button pButton *ngIf='user.type!=\"INVESTIGATOR\"' class='ui-button-warning edit ' (click)='setDialogType(\"edit-stage\")' label='Edit' icon='fa-edit'  ></button>\r\n  </div>\r\n  <!-- edit a stage -->\r\n  <div class='form-flex-start window' *ngIf='dialogType==\"edit-stage\"'>\r\n    <h2>{{stage.name}}</h2>\r\n    <input type='text' pInputText [(ngModel)]='stage.name'>\r\n    <div class='stage-general-info'>\r\n      <div style='width:100%;'>\r\n        <label>Expected Date</label>\r\n        <p-calendar [(ngModel)]='stage.expectedDate' [showIcon]='true'></p-calendar>\r\n      </div>\r\n      <div>\r\n        <label>Completed Date</label>\r\n        <p-calendar [(ngModel)]='stage.completedDate' [showIcon]='true'></p-calendar>\r\n      </div>\r\n      <div>\r\n        <label>UAS Review Required</label>\r\n        <p-checkbox [(ngModel)]='stage.uasReviewRequired' binary='true'></p-checkbox>\r\n      </div>\r\n      <div>\r\n        <label>UAS Approved</label>\r\n        <p-checkbox [(ngModel)]='stage.uasReviewed' binary='true'></p-checkbox>\r\n      </div>\r\n    </div>\r\n    <label class='form-title'>Order in Timeline</label>\r\n    <div class='drag-reorder' draggable='true' (dragstart)='setDragging(true)' (dragend)='setDragging(false)'>\r\n      <div class='icon drag-icon'></div>\r\n      <label>Drag me to reorder</label>\r\n    </div>\r\n    <!-- forms -->\r\n    <p-dataTable [value]='stage.requiredForms' [immutable]='false'>\r\n      <p-header>Required Forms</p-header>\r\n      <p-column field='key' header='Form'></p-column>\r\n      <!-- <p-column header='Status'></p-column> -->\r\n      <p-column header='Delete'>\r\n        <ng-template pTemplate='body'>\r\n          <button pButton class='ui-button-danger' (click)='handleRemoveForm(key)' label='Delete' icon='fa-minus'  ></button>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-footer>\r\n        <select #form>\r\n          <option *ngFor='let form of unSelectedForms'>{{form}}</option>\r\n        </select>\r\n        <button pButton (click)='handleAddForm(form.value)' label='Form' icon='fa-plus'  ></button>\r\n      </p-footer>\r\n    </p-dataTable>\r\n    <!-- files -->\r\n    <p-dataTable [value]='stage.requiredFiles' [immutable]='false'>\r\n      <p-header>Required Files</p-header>\r\n      <p-column field='key' header='File'></p-column>\r\n      <p-column header='Upload'>\r\n        <ng-template pTemplate='body' let-file='rowData'>\r\n          <p-fileUpload mode=\"basic\" customUpload=\"true\" auto='true' (uploadHandler)='myUploader($event,file)' chooseLabel=\"Browse\"></p-fileUpload>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field='value' header='Download'>\r\n        <ng-template pTemplate='body' let-file='rowData'>\r\n          <button pButton (click)='downloadFile(file)' label='Download' [disabled]='file.value?.filePath==null'></button>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header='Delete'>\r\n        <ng-template pTemplate='body' let-file='rowData'>\r\n          <button pButton class='ui-button-danger' (click)='handleRemoveFile(file)' label='Delete' icon='fa-minus'  ></button>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-footer>\r\n        <input pInputText type='text' #addReqFile>\r\n        <button pButton (click)='handleAddFile(addReqFile.value)' label='File' icon='fa-plus'  ></button>\r\n      </p-footer>\r\n    </p-dataTable>\r\n    <label class='form-title'>Additional Notes</label>\r\n    <textarea pInputTextarea [(ngModel)]=\"stage.additionalNotes\" autoResize=\"autoResize\"></textarea>\r\n    <div class='button-footers'>\r\n      <button pButton class='ui-button-success' (click)='saveStage()' label='Save'></button>\r\n      <button pButton class='ui-button-danger' (click)='deleteStage()' label='Delete'></button>\r\n    </div>\r\n  </div>\r\n  <p-progressBar mode=\"indeterminate\" *ngIf='showProgressBar' [style]=\"{'height': '6px'}\"></p-progressBar>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/formcomponents/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver_FileSaver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver_FileSaver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_preaward_service__ = __webpack_require__("../../../../../src/app/services/preaward.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_proposal_service__ = __webpack_require__("../../../../../src/app/services/proposal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_keys_pipe__ = __webpack_require__("../../../../../src/app/pipes/keys.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TimelineComponent = (function () {
    function TimelineComponent(messageService, preAwardService, proposalService, authService, keysPipe) {
        this.messageService = messageService;
        this.preAwardService = preAwardService;
        this.proposalService = proposalService;
        this.authService = authService;
        this.keysPipe = keysPipe;
        this.preAwardForms = ['Intake Form', 'Equipment form', 'Approval Form',
            'COI Other Investigator/Key Personnel PHS',
            'COI Other Investigator/Key Personnel NONPHS',
            'COI Principal Investigator PHS',
            'COI Principal Investigator NONPHS',
            'Statement Of Economic Interest',
        ];
        this.populateTimeLine();
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this.dialogType = 'view-basic-timeline';
        this.user = this.authService.getUserData();
    };
    // timeline
    TimelineComponent.prototype.populateTimeLine = function () {
        var _this = this;
        var obj = this.proposalService.getTimeline();
        this.timeline = this.parseDates(obj.timeline);
        // parse the object maps into iterables
        if (obj.timeline.stages[0].requiredForms.length == undefined) {
            this.timeline.stages.forEach(function (stage, i, stages) {
                stages[i] = _this.parseStage(stage);
            });
        }
        this.dragging = false;
        this.draggingOverTimeline = false;
        this.proposalId = obj.proposalId;
        this.showProgressBar = false;
    };
    TimelineComponent.prototype.saveTimeline = function () {
        var _this = this;
        if (this.timeline.stages.length === 1) {
            // have to parse the pre meeting stages, req forms and files
            var timelineCopy = Object.assign({}, this.timeline);
            timelineCopy.stages[0].requiredForms = this.keysPipe.backToObject(timelineCopy.stages[0].requiredForms);
            timelineCopy.stages[0].requiredFiles = this.keysPipe.backToObject(timelineCopy.stages[0].requiredFiles);
            this.showProgressBar = true;
            this.preAwardService.putTimeline(this.proposalId, timelineCopy).subscribe(function (timeline) {
                timeline = _this.parseDates(timeline);
                timeline.stages.forEach(function (stage, i, stages) {
                    stages[i] = _this.parseStage(stage);
                });
                _this.timeline = timeline;
                _this.showProgressBar = false;
                _this.messageService.add({ severity: 'success', summary: 'Service Message' });
            });
        }
        else {
            // making patch request
            this.preAwardService.patchTimeline(this.proposalId, this.timeline).subscribe(function (timeline) {
                _this.timeline.fundingAgency = timeline.fundingAgency;
                if (timeline.uasDueDate) {
                    _this.timeline.uasDueDate = new Date(timeline.uasDueDate);
                }
                else {
                    _this.timeline.uasDueDate = timeline.uasDueDate;
                }
                if (timeline.sponsorDueDate) {
                    _this.timeline.sponsorDueDate = new Date(timeline.sponsorDueDate);
                }
                else {
                    _this.timeline.sponsorDueDate = timeline.sponsorDueDate;
                }
                if (timeline.finalSign) {
                    _this.timeline.finalSign = new Date(timeline.finalSign);
                }
                else {
                    _this.timeline.finalSign = timeline.finalSign;
                }
                _this.messageService.add({ severity: 'success', summary: 'Service Message' });
            });
        }
    };
    // stage
    TimelineComponent.prototype.handleAddStage = function () {
        var _this = this;
        this.showProgressBar = true;
        this.preAwardService.createStage(this.timeline.id).subscribe(function (stage) {
            _this.stage = _this.parseStage(stage);
            _this.timeline.stages.push(stage);
            _this.setDialogType('edit-stage');
            _this.showProgressBar = false;
            _this.messageService.add({ severity: 'success', summary: 'Stage Added' });
            _this.stageIndex = _this.timeline.stages.length - 1;
        });
    };
    TimelineComponent.prototype.saveStage = function () {
        var _this = this;
        var stage = Object.assign({}, this.stage);
        stage.requiredForms = this.keysPipe.backToObject(stage.requiredForms);
        stage.requiredFiles = this.keysPipe.backToObject(stage.requiredFiles);
        stage.stageOrder = this.getStageIndex(this.stage.id);
        this.showProgressBar = true;
        this.preAwardService.saveStage(this.timeline.id, stage).subscribe(function (savedStage) {
            _this.stage = _this.parseStage(savedStage);
            _this.showProgressBar = false;
            _this.messageService.add({ severity: 'success', summary: 'Stage Saved' });
            // this.proposalService.
        });
    };
    TimelineComponent.prototype.sortStageIntoTimeline = function (indexToPush) {
        var _this = this;
        var currentStageIndex = this.getStageIndex(this.stage.id);
        console.log("stage index " + currentStageIndex + " index to pushh " + indexToPush);
        if (indexToPush !== currentStageIndex || indexToPush !== currentStageIndex + 1) {
            this.showProgressBar = true;
            this.preAwardService.reorderStage(this.stage.id, indexToPush).subscribe(function (response) {
                if (indexToPush === 0) {
                    _this.timeline.stages.splice(currentStageIndex, 1);
                    _this.timeline.stages.unshift(_this.stage);
                }
                else if (indexToPush == _this.timeline.stages.length) {
                    _this.timeline.stages.splice(currentStageIndex, 1);
                    _this.timeline.stages.unshift(_this.stage);
                }
                else {
                    _this.timeline.stages.splice(currentStageIndex, 1);
                    _this.timeline.stages.splice(indexToPush, 0, _this.stage);
                }
                _this.stageIndex = _this.getStageIndex(_this.stage.id);
                _this.showProgressBar = false;
                _this.messageService.add({ severity: 'success', summary: 'Stage Reordered' });
            });
        }
        else {
            console.log("nope");
        }
    };
    TimelineComponent.prototype.deleteStage = function () {
        var _this = this;
        // make delete request if successful, sort stage orders, update stage orders
        this.showProgressBar = true;
        this.preAwardService.deleteStage(this.stage.id).subscribe(function (response) {
            // if successful
            var currentStageIndex = _this.timeline.stages.findIndex(function (stage) {
                return _this.stage == stage;
            });
            _this.timeline.stages.splice(currentStageIndex, 1);
            _this.setDialogType('view-basic-timeline');
            _this.showProgressBar = false;
            _this.messageService.add({ severity: 'success', summary: 'Stage Deleted' });
        });
    };
    // forms
    TimelineComponent.prototype.populateunSelectedForms = function () {
        var _this = this;
        this.unSelectedForms = this.preAwardForms.filter(function (preAwardForm) {
            return _this.stage.requiredForms.findIndex(function (form) {
                return form.key === preAwardForm;
            }) == -1;
        });
    };
    TimelineComponent.prototype.handleAddForm = function (form) {
        this.stage.requiredForms.push({ 'key': form, 'value': null });
        this.populateunSelectedForms();
    };
    TimelineComponent.prototype.handleRemoveForm = function (form) {
        var index = this.stage.requiredForms.findIndex(function (reqForm) {
            return reqForm === form;
        });
        this.stage.requiredForms.splice(index, 1);
        // set unselectedForms
        this.populateunSelectedForms();
    };
    // files
    TimelineComponent.prototype.handleAddFile = function (fileName) {
        var duplicate = this.stage.requiredFiles.findIndex(function (file) {
            return file.key === fileName;
        });
        if (duplicate !== -1) {
            // let the user know that its a duplicate
        }
        else {
            this.stage.requiredFiles.push({ 'key': fileName, 'value': null });
        }
    };
    TimelineComponent.prototype.handleRemoveFile = function (fileEntry) {
        var _this = this;
        var fileIndex = this.stage.requiredFiles.findIndex(function (reqFile) {
            return reqFile.key === fileEntry.key;
        });
        // the file info is already in the database
        if (fileEntry.value != null) {
            this.showProgressBar = true;
            this.preAwardService.deleteFile(this.timeline.id, this.stage.id, this.stage.requiredFiles[fileIndex].value.id)
                .subscribe(function (response) {
                _this.showProgressBar = false;
                _this.stage.requiredFiles.splice(fileIndex, 1);
            });
        }
        else {
            this.stage.requiredFiles.splice(fileIndex, 1);
        }
    };
    TimelineComponent.prototype.myUploader = function (event, file) {
        var _this = this;
        this.showProgressBar = true;
        this.preAwardService.uploadFile(this.proposalId, file.value.id, event.files[0])
            .subscribe(function (response) {
            // have to clear the files on upload element
            file.value = response;
            _this.showProgressBar = false;
            _this.messageService.add({ severity: 'success', summary: 'File Uploaded' });
            _this.fileUploads.forEach(function (fileUpload) {
                fileUpload.clear();
            });
        });
    };
    TimelineComponent.prototype.downloadFile = function (file) {
        var _this = this;
        this.showProgressBar = true;
        this.preAwardService.downloadFile(file.value.id).subscribe(function (data) {
            var contentDisposition = data.headers.get('content-disposition');
            var contentType = data.headers.get('content-type');
            var fileName = contentDisposition.split('=')[1];
            Object(__WEBPACK_IMPORTED_MODULE_4_file_saver_FileSaver__["saveAs"])(new Blob([data.body], { type: contentType }), fileName);
            _this.showProgressBar = false;
        });
    };
    // for presentation delete
    TimelineComponent.prototype.submitForPending = function () {
    };
    // helper functionss
    TimelineComponent.prototype.getCurrentStage = function (stageId) {
        var stageIndex = this.getStageIndex(stageId);
        this.stage = this.timeline.stages[stageIndex];
        this.stageIndex = stageIndex;
        this.setDialogType('');
        this.setDialogType('view-stage');
        // console.log(this.fileUploads)
    };
    TimelineComponent.prototype.getStageIndex = function (stageId) {
        var stageIndex = this.timeline.stages.findIndex(function (stage) {
            return stage.id == stageId;
        });
        return stageIndex;
    };
    TimelineComponent.prototype.setDialogType = function (type) {
        this.dialogType = type;
        if (type === 'edit-stage') {
            this.populateunSelectedForms();
        }
        else if (type === 'view-basic-timeline') {
            this.stageIndex = null;
        }
    };
    TimelineComponent.prototype.setDragging = function (value) {
        this.dragging = value;
    };
    TimelineComponent.prototype.setDragOverTimeline = function (value) {
        this.draggingOverTimeline = value;
    };
    // handle drag and drop for stage in a timeline
    TimelineComponent.prototype.drop = function (obj) {
        obj.event.preventDefault();
        this.sortStageIntoTimeline(obj.index);
    };
    // hover element over drop zone
    TimelineComponent.prototype.allowDrop = function (event) {
        event.preventDefault();
    };
    // format data
    TimelineComponent.prototype.parseDates = function (timeline) {
        if (timeline.uasDueDate !== null) {
            timeline.uasDueDate = new Date(timeline.uasDueDate);
        }
        if (timeline.sponsorDueDate !== null) {
            timeline.sponsorDueDate = new Date(timeline.sponsorDueDate);
        }
        if (timeline.finalSign !== null) {
            timeline.finalSign = new Date(timeline.finalSign);
        }
        return timeline;
    };
    TimelineComponent.prototype.parseStage = function (stage) {
        if (stage.expectedDate !== null) {
            stage.expectedDate = new Date(stage.expectedDate);
        }
        if (stage.completedDate !== null) {
            stage.completedDate = new Date(stage.completedDate);
        }
        stage.requiredForms = this.keysPipe.transform(stage.requiredForms);
        stage.requiredFiles = this.keysPipe.transform(stage.requiredFiles);
        return stage;
    };
    return TimelineComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["FileUpload"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], TimelineComponent.prototype, "fileUploads", void 0);
TimelineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timeline',
        template: __webpack_require__("../../../../../src/app/components/formcomponents/timeline/timeline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/formcomponents/timeline/timeline.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('stageAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["query"])('li', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateY(-100%)', opacity: '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["query"])('li', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["stagger"])('200ms', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('300ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateY(0)', opacity: '1' }))
                    ]))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('view-stage', [
                // state(),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateX(-100%)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateX(0)' }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: '0' }))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('edit-stage', [
                // state(),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: '1' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: '0' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__["MessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__["MessageService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_preaward_service__["a" /* PreawardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_preaward_service__["a" /* PreawardService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_proposal_service__["a" /* ProposalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_proposal_service__["a" /* ProposalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__pipes_keys_pipe__["a" /* KeysPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__pipes_keys_pipe__["a" /* KeysPipe */]) === "function" && _f || Object])
], TimelineComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  width: 100vw;\r\n  height: 100%;\r\n}\r\n\r\n#name {\r\n  color: white;\r\n  margin: auto;\r\n  padding: 15% 10%;\r\n}\r\n\r\n#contentContainer {\r\n  position: relative;\r\n  min-height: 70vh;\r\n  bottom: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  line-height: 1.8;\r\n}\r\n\r\n#content-1,\r\n#content-3 {\r\n  background-color: white;\r\n}\r\n\r\n#content-2 {\r\n  color: white;\r\n}\r\n\r\n.home-title {\r\n  text-align: center;\r\n}\r\n\r\n.information {\r\n  padding: 0 1em;\r\n  font-size: 1em;\r\n}\r\n@media (orientation:landscape){\r\n  .imageContainer {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/eaglestatue1.jpg") + ");\r\n    background-attachment: fixed;\r\n    background-position: left center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 80%;\r\n  }\r\n  .content-image {\r\n    float:left;\r\n    padding: 1em;\r\n  \r\n  }\r\n}\r\n\r\n@media (orientation: portrait) {\r\n#content-1, #content-2, #content-3 {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id='name'>\r\n  <img id='logo' class='animated slideInLeft' src='../../../assets/images/logo-black-transparent.png' />\r\n</div> -->\r\n<div class='imageContainer'>\r\n  <h1 id = 'name'> Cal State LA University Auxiliary Services Grants & Contracts</h1>\r\n</div>\r\n<div id='contentContainer'>\r\n  <div id = 'content-1'>\r\n  <h2 class='home-title'> Funding</h2>\r\n  <img class='content-image' src='../../../assets/images/piggy-bank.png' />\r\n  <p class='information'>\r\n    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\r\n    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It\r\n    was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\r\n    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n  </p>\r\n</div>\r\n<div id = 'content-2'>\r\n  <h2  class = 'home-title'>Monitor Your Proposal</h2>  \r\n  <img class='content-image' src='../../../assets/images/timeline.png' />\r\n  <p class='information'>\r\n    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\r\n    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It\r\n    was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\r\n    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n  </p>\r\n  </div>\r\n  <div id = 'content-3'>\r\n  <h2 class='home-title'> Forms </h2>\r\n  <img class='content-image' src='../../../assets/images/contract.png' />\r\n  <p class='information'>\r\n    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\r\n    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It\r\n    was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\r\n    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n  </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingPageComponent = (function () {
    function LandingPageComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.checkIfLoggedIn();
    };
    LandingPageComponent.prototype.checkIfLoggedIn = function () {
        if (this.authenticationService.loggedIn()) {
            this.router.navigate(['/home']);
        }
    };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing-page',
        template: __webpack_require__("../../../../../src/app/components/landing-page/landing-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/landing-page/landing-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], LandingPageComponent);

var _a, _b;
//# sourceMappingURL=landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#container {\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/eaglestatue1.jpg") + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n}\r\n\r\nimg {\r\n  width: 30vh;\r\n}\r\n\r\n#login {\r\n  width: auto;\r\n  height: auto;\r\n  min-height: 50%;\r\n  -webkit-transform: translateX(20%);\r\n          transform: translateX(20%);\r\n  box-shadow: 0 0 7px #FFFFFF;\r\n  background-color: white;\r\n  border-radius: 2%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 10px;\r\n}\r\n\r\n.ui-float-label,\r\ninput {\r\n  width: 100% !important;\r\n}\r\n\r\n@media (orientation: portrait) {\r\n  #login {\r\n      -webkit-transform: none !important;\r\n              transform: none !important;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='container' class=''>\r\n  <!-- <img id='logo' src='../../../assets/images/logo.jpg' /> -->\r\n  <form id='login' (ngSubmit)=\"submit()\">\r\n    <img id='logo' src='../../../assets/images/logo-black-transparent.png' />\r\n    <span class=\"ui-float-label\">\r\n      <input id=\"username\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"username\" name=\"username\" />\r\n      <label for=\"username\">Username</label>\r\n    </span>\r\n    <span class=\"ui-float-label\">\r\n      <input id=\"password\" type=\"password\" size=\"30\" pInputText [(ngModel)]=\"password\" name=\"password\" />\r\n      <label for=\"password\">Password</label>\r\n    </span>\r\n    <label *ngIf=failedLoginFlag>\r\n      Username or password is incorrect. </label>\r\n    <input class=\"ui-button-success\" pButton type=\"submit\" value=\"Sign In\" />\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mock_data_service__ = __webpack_require__("../../../../../src/app/services/mock-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authenticationService, mockService, router) {
        this.authenticationService = authenticationService;
        this.mockService = mockService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.checkIfLoggedIn();
        this.username = 'username1';
        this.password = 'password';
        this.usernameFlag = false;
        this.passwordFlag = false;
        this.failedLoginFlag = false;
    };
    // when login form is submitted
    LoginComponent.prototype.submit = function () {
        // if (!this.username) {
        //   this.usernameFlag = true;
        //   return;
        // }
        // if (!this.password) {
        //   this.passwordFlag = true;
        //   return;
        // }
        // this.authenticationService.authenticate(this.username, this.password).subscribe(response => {
        //   // if user exists
        //   if (response.user.username != null) {
        this.authenticationService.storeUserData({ 'username': 'username1', 'id': 1 });
        //  this.authenticationService.storeJWT(response.jwt);
        this.router.navigate(['/aquila/home']);
        //   } else {
        //     // handle the bug Unexpected end of JSON input at Object.parse
        //     this.failedLoginFlag = true;
        //   }
        // });
    };
    LoginComponent.prototype.checkIfLoggedIn = function () {
        if (this.authenticationService.loggedIn()) {
            this.router.navigate(['/aquila/home']);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_mock_data_service__["a" /* MockDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_mock_data_service__["a" /* MockDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pi-pre-award/pi-pre-award.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n  height: 100%;\r\n  width: 80%;\r\n  margin: 0 9.9%;\r\n  padding: 1em;\r\n  background-color: white;\r\n}\r\n\r\n#dash-bar {\r\n  width: 100%;\r\n  border-bottom: 1px solid black;\r\n  margin-bottom:1em;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.page-title {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n#proposals {\r\n  width: 100%;\r\n}\r\n@media only screen and (min-device-width : 320px) and (max-device-width: 480px) {\r\n  :host {\r\n    display: block;\r\n    height: 100%;\r\n    width: auto !important;\r\n    margin: 0 !important;\r\n    background-color: white;\r\n    padding: 1em;\r\n  }\r\n form {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n }\r\n #dash-bar {\r\n  width: 100%;\r\n  border-bottom: 1px solid black;\r\n  margin-bottom:1em;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch;\r\n}\r\n#dash-bar> * {\r\n  margin-bottom: .5em;\r\n}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pi-pre-award/pi-pre-award.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='dash-bar'>\r\n  <h3 class = 'page-title'>{{userName}}'s Proposal's</h3>\r\n  <button pButton label='Home' [routerLink]=\"['/aquila/home']\" icon='fa-home'></button>\r\n  <button  pButton label='New Proposal'(click)=\"op.toggle($event)\" icon='fa-plus'></button>\r\n</div>\r\n<div id='proposals'>\r\n  <p-dataTable [value]='usersProposals' (onRowSelect)='navigate($event.data.id)' selectionMode='single' [immutable]='false'>\r\n    <p-header>Proposals</p-header>\r\n    <p-column field='proposalName' header='Name'></p-column>\r\n    <p-column field='dateCreated' header='Date Created'></p-column>\r\n    <p-column field='status' header='Status'></p-column>\r\n  </p-dataTable>\r\n  <p-overlayPanel header=\"New Proposal\" showEffect=\"fade\" #op>\r\n    <form (ngSubmit)='createProposal()'>\r\n      <label>Proposal Name</label>\r\n      <input type='input' pInputText [(ngModel)]='newProposalName' name='newProposalName'>\r\n      <button pButton class='ui-button-success' type='submit' label='New Proposal'></button>\r\n    </form>\r\n  </p-overlayPanel>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/pi-pre-award/pi-pre-award.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiPreAwardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_preaward_service__ = __webpack_require__("../../../../../src/app/services/preaward.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mock_data__ = __webpack_require__("../../../../../src/app/services/mock-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PiPreAwardComponent = (function () {
    function PiPreAwardComponent(router, preAwardService) {
        this.router = router;
        this.preAwardService = preAwardService;
    }
    PiPreAwardComponent.prototype.ngOnInit = function () {
        this.getProposals();
        this.displayDialog = false;
    };
    PiPreAwardComponent.prototype.getProposals = function () {
        this.userName = JSON.parse(localStorage.getItem('user')).username;
        // this.preAwardService.getProposals().subscribe(proposals => {
        //   this.usersProposals = proposals;
        // });
        this.usersProposals = [__WEBPACK_IMPORTED_MODULE_3__services_mock_data__["a" /* MockProposal */]];
    };
    PiPreAwardComponent.prototype.createProposal = function () {
        var _this = this;
        this.preAwardService.newProposal(this.newProposalName).subscribe(function (proposal) {
            _this.usersProposals.push(proposal);
        }); // creates the proposal
    };
    PiPreAwardComponent.prototype.showDialog = function () {
        this.displayDialog = true;
    };
    PiPreAwardComponent.prototype.navigate = function (proposalId) {
        this.router.navigate(['/aquila/editproposal', proposalId]);
    };
    return PiPreAwardComponent;
}());
PiPreAwardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pi-pre-award',
        template: __webpack_require__("../../../../../src/app/components/pi-pre-award/pi-pre-award.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pi-pre-award/pi-pre-award.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_preaward_service__["a" /* PreawardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_preaward_service__["a" /* PreawardService */]) === "function" && _b || Object])
], PiPreAwardComponent);

var _a, _b;
//# sourceMappingURL=pi-pre-award.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pihome-page/pihome-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n  height: 100%;\r\n  width: 80%;\r\n  background-color: white;\r\n  margin: 0 9.9%;\r\n  padding: 1em;\r\n}\r\n\r\n#container {\r\n  width: 100%;\r\n}\r\n\r\n#dash-bar {\r\n  width: 100%;\r\n  border-bottom: 1px solid black;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  \r\n}\r\n#home {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n#link-container {\r\n  height: 30%;\r\n  width: 100%;\r\n  padding-top:1em;\r\n  display:-ms-grid;\r\n  display:grid;\r\n  -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-gap: 1em;\r\n}\r\n\r\n#link-container>div {\r\n color:white;\r\n background: linear-gradient(#52aed5, #4894c7);\r\n box-shadow: 5px 5px 12px #6c6c6c;\r\n}\r\n#link-container>div:hover {\r\n  background-color: rgba(221, 221, 221, 0.795);\r\n  border: 1px solid #2790b0;\r\n  box-shadow: 0 0 20px rgb(241, 199, 45);\r\n  font-size: 1em;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.content{\r\n    padding: 0 1em;\r\n}\r\n#form {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n}\r\n@media only screen and (min-device-width : 320px) and (max-device-width: 480px) {\r\n  :host {\r\n    display: block;\r\n    height: 100%;\r\n    width: auto !important;\r\n    margin: 0 !important;\r\n    background-color: white;\r\n    padding: 1em;\r\n  }\r\n  #link-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    padding-top:1em;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n} \r\n#link-container>div {\r\n margin: .5em 0;\r\n }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pihome-page/pihome-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- dash bar -->\r\n<div id='container'>\r\n  <div id='dash-bar'>\r\n    <h3 id='home'>Home</h3>\r\n    <button pButton label='Help' icon='fa-question'></button>\r\n    <button pButton label='Settings' (click)='settingsClicked()' icon='fa-cog'></button>\r\n  </div>\r\n  <!-- boxes -->\r\n  <div id='link-container'>\r\n    <div (click)='navigate(\"pipreaward\")' class='main-window'>\r\n      <p class='title'>Pre Award</p>\r\n      <p class='content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae repudiandae eius ad ea. Architecto, doloribus.\r\n        Atque, placeat fuga illo sit non est </p>\r\n    </div>\r\n    <div class='main-window'>\r\n      <p class='title'>Post Award</p>\r\n      <p class='content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae repudiandae eius ad ea. Architecto, doloribus.\r\n        Atque, placeat fuga illo sit non est </p>\r\n    </div>\r\n    <div (click)='navigate(\"proposalarchive\")' class='main-window' *ngIf='user.type!=\"INVESTIGATOR\"'>\r\n      <p class='title'>Proposal Archive</p>\r\n      <p class='content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae repudiandae eius ad ea. Architecto, doloribus.\r\n        Atque, placeat fuga illo sit non est </p>\r\n    </div>\r\n    <!-- edit user info -->\r\n    <p-dialog header=\"General Account Settings\" [(visible)]=\"userInfoPrompt\" [responsive]=\"true\" showEffect=\"fade\" >\r\n      <div id='form'>\r\n        <div *ngIf='firstTimeUser'>\r\n          <label>User Name</label>\r\n          <input type=\"text\" pInputText [(ngModel)]='user.username' (keyup)='validateUsername()'>\r\n          <label class='required-indicator'>username taken</label>\r\n          <label class='optional-indicator'>username valid</label>\r\n        </div>\r\n        <label>First Name</label>\r\n        <input type=\"text\" pInputText [(ngModel)]='user.firstName'>\r\n        <label>Last Name</label>\r\n        <input type=\"text\" pInputText [(ngModel)]='user.lastName'>\r\n        <label>Phone Number</label>\r\n        <input type=\"text\" pInputText [(ngModel)]='user.number'>\r\n        <label>Contact Email</label>\r\n        <input type=\"text\" pInputText [(ngModel)]='user.email'>\r\n        <button pButton *ngIf='canSubmit()' class='ui-button-success' label='Update'></button>\r\n      </div>\r\n    </p-dialog>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- aesthetic yellow bottom\r\n<div id='bottom'>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/pihome-page/pihome-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiHomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mock_data_service__ = __webpack_require__("../../../../../src/app/services/mock-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PiHomePageComponent = (function () {
    function PiHomePageComponent(router, authService, mockService) {
        this.router = router;
        this.authService = authService;
        this.mockService = mockService;
    }
    PiHomePageComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getUserData();
        // this.setUserInfoPrompt();
    };
    PiHomePageComponent.prototype.setUserInfoPrompt = function () {
        // tslint:disable-next-line:triple-equals
        if (this.checkIfFirstTimeUser() == true) {
            this.firstTimeUser = true;
            this.userInfoPrompt = true;
        }
        else {
            this.firstTimeUser = false;
            this.userInfoPrompt = false;
        }
    };
    // checks if user has username, meaning they are in our systen
    PiHomePageComponent.prototype.checkIfFirstTimeUser = function () {
        if (this.user.username == null) {
            return true;
        }
        else {
            return false;
        }
    };
    // makes sure forms are properly filled out
    PiHomePageComponent.prototype.canSubmit = function () {
        // implement based off of any forms empty and if username is valid
        return true;
    };
    // when form fields are submitted
    PiHomePageComponent.prototype.submit = function () {
        var _this = this;
        // not first time user
        if (!this.firstTimeUser) {
            this.authService.editUser(this.user).subscribe(function (user) {
                _this.user = user;
                _this.authService.storeUserData(_this.user);
                _this.firstTimeUser = false;
                _this.userInfoPrompt = false;
            });
        }
        else {
            // first time user (need saml to implement cause our db only has populated users)
            this.authService.saveUser(this.user).subscribe(function (user) {
                _this.user = user;
                _this.authService.storeUserData(_this.user);
                _this.firstTimeUser = false;
                _this.userInfoPrompt = false;
            });
        }
    };
    // stops routing if first time using
    PiHomePageComponent.prototype.navigate = function (location) {
        if (!this.firstTimeUser) {
            this.router.navigate(["aquila/" + location]);
        }
    };
    // prompts form fields
    PiHomePageComponent.prototype.settingsClicked = function () {
        this.userInfoPrompt = true;
    };
    // new user username validation
    PiHomePageComponent.prototype.validateUsername = function () {
        console.log(this.user.username);
    };
    return PiHomePageComponent;
}());
PiHomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pihome-page',
        template: __webpack_require__("../../../../../src/app/components/pihome-page/pihome-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pihome-page/pihome-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_mock_data_service__["a" /* MockDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_mock_data_service__["a" /* MockDataService */]) === "function" && _c || Object])
], PiHomePageComponent);

var _a, _b, _c;
//# sourceMappingURL=pihome-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/proposal-archive/proposal-archive.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: block;\r\n    height: 100%;\r\n    width: 80%;\r\n    background-color: white;\r\n    margin: 0 9.9%;\r\n    padding: 1em;\r\n  }\r\n  #dash-bar {\r\n    width: 100%;\r\n    border-bottom: 1px solid black;\r\n    margin-bottom:1em;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .page-title {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/proposal-archive/proposal-archive.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='dash-bar'>\r\n  <h3 class = 'page-title'>Proposal Archive</h3>\r\n  <button pButton label='Home' [routerLink]=\"['/aquila/home']\" icon='fa-home'></button>\r\n  <span class=\"ui-float-label\">\r\n      <input id=\"searchTerm\" type=\"password\" pInputText [(ngModel)]=\"searchTerm\" name='searchTerm'/>\r\n      <label for=\"searchTerm\">Search</label>\r\n  </span>\r\n  <!-- <select>\r\n      <option>ALL</option>\r\n      <option>DRAFT</option>\r\n      <option>MEETING</option>\r\n      <option>POSTMEETING</option>\r\n      <option>FINAL</option>\r\n      <option>CANCELLED</option>\r\n    </select> -->\r\n</div>\r\n<div id='proposals'>\r\n  <p-dataTable [value]='displayedProposals' (onRowSelect)='navigate($event.data.id)' selectionMode='single' [immutable]='false' [rows]=\"15\" [paginator]=\"true\">\r\n    <p-header>Archive</p-header>\r\n    <p-column field='id' header='Proposal #'></p-column>\r\n    <p-column field='proposalName' header='Name'></p-column>\r\n    <p-column field='intakeForm.principleInvestigator' header='Investigator'></p-column>\r\n    <p-column field='dateCreated' header='Date Created'></p-column>\r\n    <p-column field='status' header='Status'></p-column>\r\n  </p-dataTable>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/proposal-archive/proposal-archive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalArchiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_preaward_service__ = __webpack_require__("../../../../../src/app/services/preaward.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mock_data__ = __webpack_require__("../../../../../src/app/services/mock-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProposalArchiveComponent = (function () {
    function ProposalArchiveComponent(preAwardService, router) {
        this.preAwardService = preAwardService;
        this.router = router;
    }
    ProposalArchiveComponent.prototype.ngOnInit = function () {
        this.showSpinner = false;
        // this.populateProposals();
        this.proposals = [__WEBPACK_IMPORTED_MODULE_3__services_mock_data__["a" /* MockProposal */]];
        this.displayedProposals = this.proposals;
    };
    ProposalArchiveComponent.prototype.populateProposals = function () {
        // this.preAwardService.getAllProposals().subscribe(proposals => {
        //   this.proposals = proposals;
        //   this.displayedProposals = proposals;
        //   this.showSpinner = false;
        // });
    };
    ProposalArchiveComponent.prototype.navigate = function (proposalId) {
        this.router.navigate(['/aquila/editproposal', proposalId]);
    };
    return ProposalArchiveComponent;
}());
ProposalArchiveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-proposal-archive',
        template: __webpack_require__("../../../../../src/app/components/proposal-archive/proposal-archive.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/proposal-archive/proposal-archive.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_preaward_service__["a" /* PreawardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_preaward_service__["a" /* PreawardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], ProposalArchiveComponent);

var _a, _b;
// drop the spinner
// make the request
// change the proposal status/request
// search
// filter by status
//# sourceMappingURL=proposal-archive.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<p-fileUpload mode='basic' auto='true' customUpload='true' #name (onSelect)='select()' (uploadHandler)='myUploader($event)' chooseLabel=\"Browse\"></p-fileUpload>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestComponent = (function () {
    function TestComponent(messageService) {
        this.messageService = messageService;
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.prototype.select = function () {
        console.log('selected');
    };
    TestComponent.prototype.myUploader = function (event) {
        this.messageService.add({ severity: 'success', summary: 'File Uploaded', detail: 'Via MessageService' });
        this.fileInput.clear();
    };
    return TestComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('name'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["FileUpload"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["FileUpload"]) === "function" && _a || Object)
], TestComponent.prototype, "fileInput", void 0);
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__["MessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__["MessageService"]) === "function" && _b || Object])
], TestComponent);

var _a, _b;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/timeline-bar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineBarDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineBarDirective = (function () {
    function TimelineBarDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.style = "{\n      height: 40px;\n      border-left: 5px solid rgb(241, 199, 45);\n    }";
    }
    TimelineBarDirective.prototype.onDragOver = function (event) {
        event.preventDefault();
        this.renderer.addClass(this.el.nativeElement, 'bar-drag-over');
    };
    TimelineBarDirective.prototype.onDragExit = function (event) {
        event.preventDefault();
        this.renderer.removeClass(this.el.nativeElement, 'bar-drag-over');
    };
    TimelineBarDirective.prototype.onDrop = function (event) {
        event.preventDefault();
        this.renderer.removeClass(this.el.nativeElement, 'bar-drag-over');
    };
    return TimelineBarDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragenter', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TimelineBarDirective.prototype, "onDragOver", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TimelineBarDirective.prototype, "onDragExit", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TimelineBarDirective.prototype, "onDrop", null);
TimelineBarDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appTimelineBar]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], TimelineBarDirective);

var _a, _b;
//# sourceMappingURL=timeline-bar.directive.js.map

/***/ }),

/***/ "../../../../../src/app/models/PreAward/ApprovalForm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalForm; });
var ApprovalForm = (function () {
    //
    function ApprovalForm(id) {
        this.id = id;
    }
    return ApprovalForm;
}());

//# sourceMappingURL=ApprovalForm.js.map

/***/ }),

/***/ "../../../../../src/app/models/PreAward/EquipmentForm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EquipmentForm */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TypeOfEquipment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapEntry; });
var EquipmentForm = (function () {
    function EquipmentForm() {
    }
    return EquipmentForm;
}());

var TypeOfEquipment = (function () {
    function TypeOfEquipment() {
    }
    return TypeOfEquipment;
}());

var MapEntry = (function () {
    function MapEntry() {
    }
    return MapEntry;
}());

//# sourceMappingURL=EquipmentForm.js.map

/***/ }),

/***/ "../../../../../src/app/models/PreAward/IntakeForm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IntakeForm */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Personnel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SubgrantSubProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ProjectLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionalPartiesInvolved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MapEntry; });
var IntakeForm = (function () {
    function IntakeForm() {
    }
    return IntakeForm;
}());

var Personnel = (function () {
    function Personnel() {
    }
    return Personnel;
}());

var SubgrantSubProject = (function () {
    function SubgrantSubProject() {
    }
    return SubgrantSubProject;
}());

var ProjectLocation = (function () {
    function ProjectLocation() {
    }
    return ProjectLocation;
}());

var AdditionalPartiesInvolved = (function () {
    function AdditionalPartiesInvolved() {
    }
    return AdditionalPartiesInvolved;
}());

var Space = (function () {
    function Space() {
    }
    return Space;
}());

var MapEntry = (function () {
    function MapEntry() {
    }
    return MapEntry;
}());

//# sourceMappingURL=IntakeForm.js.map

/***/ }),

/***/ "../../../../../src/app/models/PreAward/TimeLine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TimeLine */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stage; });
/* unused harmony export FileInfo */
var TimeLine = (function () {
    function TimeLine() {
    }
    return TimeLine;
}());

var Stage = (function () {
    function Stage() {
    }
    return Stage;
}());

var FileInfo = (function () {
    function FileInfo() {
    }
    return FileInfo;
}());

//# sourceMappingURL=TimeLine.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value) {
        var keys = [];
        // tslint:disable-next-line:forin
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe.prototype.backToObject = function (value) {
        var obj = {};
        value.forEach(function (element) {
            obj[element.key] = element.value;
        });
        return obj;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'keys'
    })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/login', { "username": username, "password": password }, { headers: headers });
    };
    AuthenticationService.prototype.saveUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer " + this.getJWT());
        return this.http.post('api/saveuser', user, { headers: headers });
    };
    AuthenticationService.prototype.editUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.getJWT() });
        return this.http.put("api/user/" + user.id, user, { headers: headers });
    };
    AuthenticationService.prototype.storeUserData = function (user) {
        // localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
    };
    AuthenticationService.prototype.getUserData = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    AuthenticationService.prototype.storeJWT = function (jwt) {
        localStorage.setItem('jwt', jwt);
    };
    AuthenticationService.prototype.getJWT = function () {
        return localStorage.getItem('jwt');
    };
    AuthenticationService.prototype.loggedIn = function () {
        if (localStorage.getItem('user')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.clear();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/mock-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MockDataService = (function () {
    function MockDataService() {
        this.idSeed = 100;
    }
    return MockDataService;
}());
MockDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MockDataService);

//# sourceMappingURL=mock-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockProposal; });
var MockProposal = {
    'id': 1,
    'proposalName': 'proposal1',
    'dateCreated': '2018-04-25',
    'status': 'POSTMEETING',
    'intakeForm': {
        'principleInvestigator': 'Ferg Yams',
        'department': null,
        'college': null,
        'projectTitle': 'proposal1',
        'proposedFundingAmount': 3000,
        'startDate': '2018-04-12',
        'endDate': '2018-04-27',
        'personnel': [
            {
                'name': 'barry',
                'employer': 'me',
                'positionTitleOnGrant': 'developer',
                'units': 4,
                'percentOfTimeProposed': 0,
                'id': 1
            }
        ],
        'anticipateStipend': true,
        'stipend': 'travel',
        'facultyStudentResearchCreativeActivities': false,
        'studentsInvolved': true,
        'noOfGradStudents': 0,
        'noOfUndergradStudents': 0,
        'laboratoryAssistance': false,
        'dataCollection': false,
        'reportWriting': false,
        'literatureReview': false,
        'codingOrDataEntry': true,
        'presentations': false,
        'archivalResearch': false,
        'dataAnalysis': false,
        'otherActivities': false,
        'otherActivitiesList': [],
        'subgrantsOrSubcontracts': [],
        'projectLocations': [],
        'additionalPartiesInvolved': [],
        'agencyCostRatePercentage': 0,
        'agencyCostSharing': false,
        'piCostSharing': false,
        'computersRequested': 0,
        'requestedEquipment': {},
        'space': [],
        'hazardousSubstances': {},
        'humanSubjects': false,
        'vertebrateAnimals': false,
        'questionnaireField': null,
        'cipCategoryTitle': null,
        'cipClassification': null,
        'assistanceWithProposalDevelopment': false,
        'technicalAssistance': false,
        'letterOfSupportPresident': false,
        'letterOfSupportProvost': false,
        'letterOfSupportAssocVPOfResearch': false,
        'duplicationfFinalDocumentPackage': false,
        'noOfCopies': 0,
        'projectSummary': null,
        'id': 1,
        'complete': true
    },
    'timeline': {
        'principalInvestigator': 'Ferg Yams',
        'coPI': [],
        'proposalName': 'proposal1',
        'fundingAgency': null,
        'uasDueDate': 1523430000000,
        'sponsorDueDate': null,
        'finalSign': null,
        'stages': [
            {
                'name': 'Pre-Meeting',
                'stageOrder': 0,
                'expectedDate': null,
                'completedDate': null,
                'uasReviewRequired': true,
                'uasReviewed': true,
                'deadlineType': 'Principal Investigator',
                'requiredForms': {
                    'Intake Form': 1
                },
                'requiredFiles': {
                    'Pre-Meeting Budget': {
                        'nameOfUploader': null,
                        'fileName': 'Pre-Meeting Budget',
                        'fileType': null,
                        'filePath': null,
                        'uploadDate': null,
                        'id': 2,
                        'uploaded': false
                    }
                },
                'addComments': null,
                'id': 1
            },
            {
                'name': 'First Budget Due',
                'stageOrder': 1,
                'expectedDate': 1522134000000,
                'completedDate': null,
                'uasReviewRequired': false,
                'uasReviewed': false,
                'deadlineType': 'Principal Investigator',
                'requiredForms': {},
                'requiredFiles': {
                    'First Budget': {
                        'nameOfUploader': null,
                        'fileName': 'First Budget',
                        'fileType': null,
                        'filePath': null,
                        'uploadDate': null,
                        'id': 3,
                        'uploaded': false
                    }
                },
                'addComments': null,
                'id': 2
            },
            {
                'name': 'Final Budget Due',
                'stageOrder': 2,
                'expectedDate': 1522479600000,
                'completedDate': null,
                'uasReviewRequired': false,
                'uasReviewed': false,
                'deadlineType': 'Principal Investigator',
                'requiredForms': {
                    'Equipment': 2
                },
                'requiredFiles': {
                    'Equipment Quotes & Specs': {
                        'nameOfUploader': null,
                        'fileName': 'Equipment Quotes & Specs',
                        'fileType': null,
                        'filePath': null,
                        'uploadDate': null,
                        'id': 6,
                        'uploaded': false
                    },
                    'Sub Contract Documents': {
                        'nameOfUploader': null,
                        'fileName': 'Sub Contract Documents',
                        'fileType': null,
                        'filePath': null,
                        'uploadDate': null,
                        'id': 4,
                        'uploaded': false
                    },
                    'Final Budget': {
                        'nameOfUploader': null,
                        'fileName': 'Final Budget',
                        'fileType': null,
                        'filePath': null,
                        'uploadDate': null,
                        'id': 5,
                        'uploaded': false
                    }
                },
                'addComments': null,
                'id': 3
            },
            {
                'name': 'Print Forms/ Project Summary',
                'stageOrder': 3,
                'expectedDate': 1522825200000,
                'completedDate': null,
                'uasReviewRequired': false,
                'uasReviewed': false,
                'deadlineType': 'Principal Investigator',
                'requiredForms': {
                    'Intake Form': 1
                },
                'requiredFiles': {
                    'Signatures PDF': {
                        'nameOfUploader': null,
                        'fileName': 'Signatures PDF',
                        'fileType': null,
                        'filePath': null,
                        'uploadDate': null,
                        'id': 8,
                        'uploaded': false
                    },
                    'Supporting Letters': {
                        'nameOfUploader': null,
                        'fileName': 'Supporting Letters',
                        'fileType': null,
                        'filePath': null,
                        'uploadDate': null,
                        'id': 7,
                        'uploaded': false
                    }
                },
                'addComments': null,
                'id': 4
            },
            {
                'name': 'Final Proposal',
                'stageOrder': 4,
                'expectedDate': 1523257200000,
                'completedDate': null,
                'uasReviewRequired': false,
                'uasReviewed': false,
                'deadlineType': 'Principal Investigator',
                'requiredForms': {},
                'requiredFiles': {},
                'addComments': null,
                'id': 5
            },
            {
                'name': 'Identification',
                'stageOrder': 5,
                'expectedDate': null,
                'completedDate': null,
                'uasReviewRequired': false,
                'uasReviewed': false,
                'deadlineType': null,
                'requiredForms': {
                    'COI Other Investigator/Key Personnel PHS': 3,
                    'Statement Of Economic Interest': 4
                },
                'requiredFiles': {
                    'birth certificate': {
                        'nameOfUploader': null,
                        'fileName': 'birth certificate',
                        'fileType': null,
                        'filePath': null,
                        'uploadDate': null,
                        'id': 9,
                        'uploaded': false
                    }
                },
                'addComments': null,
                'id': 6
            }
        ],
        'id': 1
    },
    'approvalForm': null,
    'conflictOfInterestForms': [
        {
            'type': 'OIPHS',
            'proposalNumber': null,
            'proposalTitle': null,
            'sponsor': null,
            'sponsorType': null,
            'sponsorSpecification': null,
            'newProposal': false,
            'contAddFunding': false,
            'newChangeInvestigator': false,
            'newInterestObtained': false,
            'previousProposalNumber': null,
            'newSponsor': false,
            'previousSponsorName': null,
            'requestFromIrb': false,
            'noCostTimeExtension': false,
            'other': false,
            'otherSpecification': null,
            'budgetPeriodStart': null,
            'budgetPeriodEnd': null,
            'projectPeriodStart': null,
            'projectPeriodEnd': null,
            'amountRequested': 0,
            'iRBACUCIBCNo': null,
            'significantFinInterest': false,
            'anyOtherInvestigators': false,
            'otherInvestigatorsValue': null,
            'piSignature': null,
            'piDate': null,
            'keyPersonnelSign': null,
            'keyPersonnelDate': null,
            'aRIOfficial': false,
            'aRIDate': null,
            'proposal': null,
            'id': 3,
            'complete': false
        }
    ],
    'economicInterestPi': {
        'progress': 0,
        'lastName': null,
        'firstName': null,
        'middleInitial': null,
        'phoneNumber': null,
        'department': null,
        'mailCode': null,
        'email': null,
        'projectTitle': null,
        'campus': null,
        'entityName': null,
        'entityAddress': null,
        'principalBusiness': null,
        'fundingAmount': null,
        'estimateAmount': null,
        'actualAmount': null,
        'initialFunding': false,
        'fundDate': null,
        'interimFund': false,
        'interimDate': null,
        'positionHeld': null,
        'positionTitle': null,
        'investmentGreaterThan': null,
        'investAmount': null,
        'dateDisposed': null,
        'receivedIncome': null,
        'receivedAmount': null,
        'receivedThroughSpouse': null,
        'receivedThroughEntity': null,
        'loanAmount': null,
        'loanSecured': false,
        'loanInterest': null,
        'loanPaidOff': null,
        'giftsReceived': null,
        'giftsDescription': null,
        'giftsValue': null,
        'giftsReceivedDate': null,
        'travelThroughEntity': null,
        'travelPaymentTypeGift': false,
        'travelPaymentTypeIncome': false,
        'travelAmount': 0,
        'travelStartDate': null,
        'travelEndDate': null,
        'travelDescription': null,
        'dateSigned': null,
        'signature': null,
        'id': 4,
        'complete': false
    },
    'equipmentForm': {
        'progress': 0,
        'facultyName': null,
        'department': null,
        'proposalTitle': null,
        'extension': false,
        'extensionValue': null,
        'costShare': false,
        'donation': false,
        'newEquipment': false,
        'typeOfEquipment': [],
        'buildingLocation': null,
        'roomLocation': null,
        'companyDonating': null,
        'previousUse': null,
        'spaceModificationRequirement': false,
        'electricalModification': false,
        'volts': false,
        'amps': false,
        'phase': false,
        'dedicatedPower': false,
        'circuitBreakerSpecification': false,
        'motorCompressorSpecification': false,
        'specialNeeds': false,
        'fwr': false,
        'specialNeedsString': null,
        'fwrPaidBy': null,
        'hvac': false,
        'airChilledWaterFlow': false,
        'temperature': false,
        'humidityControl': false,
        'supplyPressure': false,
        'centralPackageUnit': false,
        'specialWork': false,
        'noiseRequirement': false,
        'plumbing': false,
        'fluid': false,
        'flowRate': false,
        'pressure': false,
        'fluidTemperature': false,
        'pumpCompressorMotor': false,
        'maintenance': false,
        'licenseRequirements': false,
        'hardware': false,
        'hazardousMaterial': false,
        'chemicals': {},
        'radiation': {},
        'maintenanceRequirement': false,
        'maintenanceRequirements': null,
        'sizeOfEquipment': false,
        'directorOfResearchDevelopmentSignature': null,
        'directorOfResearchDevelopmentSignatureDate': null,
        'directorOfFacilitiesServicesSignature': null,
        'directorOfFacilitiesServicesSignatureDate': null,
        'id': 2,
        'complete': false
    }
};
//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ "../../../../../src/app/services/preaward.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreawardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_PreAward_TimeLine__ = __webpack_require__("../../../../../src/app/models/PreAward/TimeLine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreawardService = (function () {
    function PreawardService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    PreawardService.prototype.newProposal = function (proposalName) {
        var userId = this.authService.getUserData().id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        return this.http.post("api/proposal/", { "proposalName": proposalName, "userId": userId }, { headers: headers });
    };
    // returns the proposals of a user
    PreawardService.prototype.getProposals = function () {
        var userId = this.authService.getUserData().id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        return this.http.get("api/proposals/" + userId, { headers: headers });
    };
    // get proposal by id
    PreawardService.prototype.getProposal = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        return this.http.get("api/proposal/" + id, { headers: headers });
    };
    PreawardService.prototype.getAllProposals = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        return this.http.get("api/proposals/", { headers: headers });
    };
    // intake
    PreawardService.prototype.updateIntake = function (intakeForm) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        return this.http.
            put("api/proposal/" + intakeForm.proposalId + "/intake/" + intakeForm.id, JSON.parse(JSON.stringify(intakeForm)), { headers: headers });
    };
    PreawardService.prototype.getIntake = function (proposalId, intakeId) {
    };
    // equipment
    PreawardService.prototype.getEquipment = function (id) {
        return this.http.get("api/equipment/" + id);
    };
    PreawardService.prototype.updateEquipment = function (equipmentForm) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        // tslint:disable-next-line:max-line-length
        return this.http.put("api/proposal/" + equipmentForm.proposalId + "/equipment/" + equipmentForm.id, JSON.parse(JSON.stringify(equipmentForm)), { headers: headers });
    };
    // economic interest
    PreawardService.prototype.getEconomicInterestPI = function (id) {
        return this.http.get("api/proposal/economicinterest/" + id);
    };
    PreawardService.prototype.updateEconomicInterestPI = function (economicInterestPI) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        // tslint:disable-next-line:max-line-length
        return this.http.put("api/proposal/" + economicInterestPI.proposalId + "/economicinterest/" + economicInterestPI.id, JSON.parse(JSON.stringify(economicInterestPI)), { headers: headers });
    };
    // conflict of interest
    PreawardService.prototype.updateConflictOfInterest = function (coiForm) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
    };
    // timeline
    PreawardService.prototype.patchTimeline = function (proposalId, timeline) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        var body = {
            'principalInvestigator': timeline.principalInvestigator,
            'coPi': timeline.coPi,
            'proposalName': timeline.proposalName,
            'fundingAgency': timeline.fundingAgency,
            'uasDueDate': timeline.uasDueDate,
            'sponsorDueDate': timeline.sponsorDueDate,
            'finalSign': timeline.finalSign
        };
        return this.http.patch("api/proposal/" + proposalId + "/timeline/" + timeline.id, body, { headers: headers });
    };
    PreawardService.prototype.putTimeline = function (proposalId, timeline) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        return this.http.
            put("api/proposal/" + proposalId + "/timeline/" + timeline.id, JSON.parse(JSON.stringify(timeline)), { headers: headers });
    };
    // stage
    PreawardService.prototype.createStage = function (timelineId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        var stage = JSON.parse(JSON.stringify(new __WEBPACK_IMPORTED_MODULE_2__models_PreAward_TimeLine__["a" /* Stage */]()));
        return this.http.post("api/proposal/timeline/" + timelineId + "/stage/", stage, { headers: headers });
    };
    PreawardService.prototype.saveStage = function (timelineId, stage) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        stage = JSON.parse(JSON.stringify(stage));
        return this.http.put("api/timeline/" + timelineId + "/stage/update/" + stage.id, stage, { headers: headers });
    };
    PreawardService.prototype.deleteStage = function (stageId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        return this.http.delete("api/timeline/stage/" + stageId, { headers: headers });
    };
    PreawardService.prototype.reorderStage = function (stageId, indexToPush) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        return this.http.get("api/timeline/stage/" + stageId + "/order/" + indexToPush, { headers: headers });
    };
    PreawardService.prototype.uploadFile = function (proposalId, fileId, file) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        var formData = new FormData();
        formData.append('file', file);
        return this.http.put("api/proposal/" + proposalId + "/fileupload/" + fileId, formData, { headers: headers });
    };
    PreawardService.prototype.downloadFile = function (fileId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        return this.http.get("api/downloadfile/" + fileId, { responseType: 'blob', observe: 'response', headers: headers });
    };
    PreawardService.prototype.deleteFile = function (timelineId, stageId, fileId) {
        // `/timeline/{timelineId}/stage/{stageId}/deletefile/{fileId}`
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.authService.getJWT() });
        return this.http.delete("api/timeline/" + timelineId + "/stage/" + stageId + "/deletefile/" + fileId);
    };
    return PreawardService;
}());
PreawardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], PreawardService);

var _a, _b;
//# sourceMappingURL=preaward.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/proposal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// this is the bidirectional data flow service
var ProposalService = (function () {
    function ProposalService() {
        this.proposalSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.formSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.proposalToForm$ = this.proposalSource.asObservable();
        this.updatedFormtoProposal$ = this.formSource.asObservable();
    }
    // proposal
    ProposalService.prototype.parentUpdatesProposal = function (proposal) {
        this.proposal = proposal;
    };
    // form
    ProposalService.prototype.getIntakeForm = function () {
        this.proposal.intakeForm.proposalId = this.proposal.id;
        return this.proposal.intakeForm;
    };
    ProposalService.prototype.updateIntakeForm = function (intakeForm) {
        this.formSource.next(intakeForm);
    };
    ProposalService.prototype.getEquipmentForm = function () {
        return { 'equipmentForm': this.proposal.equipmentForm, 'proposalId': this.proposal.id };
    };
    ProposalService.prototype.updateEquipmentForm = function (equipmentForm) {
        this.formSource.next(equipmentForm);
    };
    ProposalService.prototype.getEconomicInterestPI = function () {
        this.proposal.economicInterestPi.proposalId = this.proposal.id;
        return this.proposal.economicInterestPi;
    };
    ProposalService.prototype.updateEconomicInterestPI = function (economicInterestPI) {
        this.formSource.next(economicInterestPI);
    };
    ProposalService.prototype.getTimeline = function () {
        return { 'proposalId': this.proposal.id, 'timeline': this.proposal.timeline };
    };
    ProposalService.prototype.updateTimeline = function (timeline) {
        this.formSource.next(timeline);
    };
    ProposalService.prototype.getConflictOfInterestForm = function () {
        var _this = this;
        // with given id find where to put it
        var coiForm = this.proposal.conflictOfInterestForms.find(function (coi) {
            return coi.id === _this.proposal.selectedCoiFormId;
        });
        return { 'proposalId': this.proposal.id, 'coiForm': coiForm };
    };
    return ProposalService;
}());
ProposalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ProposalService);

// user clicks on form
// edit proposal calls parent Update Proposal
// form component is created, which calls getIntakeForm()
// user updates Proposal from form component on interaction
//# sourceMappingURL=proposal.service.js.map

/***/ }),

/***/ "../../../../../src/assets/images/check-symbol.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBBQXFyyTkSuhAAAAWElEQVQoz2NgoAT8Z8IvLfT/5P8QZtzSDHsYTBj+4dZ97v///6v/s1BF+r8IfumG/8//a+Ax/H/D//8wJTjshinB4zSokgv4XN7w/z8eaagSfNJERA0uAACePWjU+aFXlgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0yMFQyMzoyMzo0NCswMjowMMudrCkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMjBUMjM6MjM6NDQrMDI6MDC6wBSVAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/assets/images/eaglestatue1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eaglestatue1.ff1af71a3ee5864054c5.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map