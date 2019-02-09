(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _bestsellers_bestsellers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bestsellers/bestsellers.component */ "./src/app/bestsellers/bestsellers.component.ts");
/* harmony import */ var _under20_under20_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./under20/under20.component */ "./src/app/under20/under20.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _ckoutnav_ckoutnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ckoutnav/ckoutnav.component */ "./src/app/ckoutnav/ckoutnav.component.ts");
/* harmony import */ var _mainnav_mainnav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainnav/mainnav.component */ "./src/app/mainnav/mainnav.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/tools/tools.component.ts");
/* harmony import */ var _solar_solar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./solar/solar.component */ "./src/app/solar/solar.component.ts");
/* harmony import */ var _windup_windup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./windup/windup.component */ "./src/app/windup/windup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'gidget' },
    { path: 'gidget', component: _mainnav_mainnav_component__WEBPACK_IMPORTED_MODULE_8__["MainnavComponent"], children: [
            { path: '', pathMatch: 'full', redirectTo: 'main' },
            { path: 'main', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
            { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] }, { path: 'U20', component: _under20_under20_component__WEBPACK_IMPORTED_MODULE_4__["Under20Component"] }, { path: 'bestsellers', component: _bestsellers_bestsellers_component__WEBPACK_IMPORTED_MODULE_3__["BestsellersComponent"] },
            { path: 'tools', component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_9__["ToolsComponent"] }, { path: 'solar', component: _solar_solar_component__WEBPACK_IMPORTED_MODULE_10__["SolarComponent"] }, { path: 'windup', component: _windup_windup_component__WEBPACK_IMPORTED_MODULE_11__["WindupComponent"] }
        ] },
    { path: 'checkout', component: _ckoutnav_ckoutnav_component__WEBPACK_IMPORTED_MODULE_7__["CkoutnavComponent"], children: [
            { path: '', pathMatch: 'full', redirectTo: 'cart' },
            { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] }
        ] }
];
// { path: 'gidget/new', component: NewComponent },
// { path: 'gidget/U20', component: Under20Component },
// { path: 'gidget/bestsellers', component: BestsellersComponent},
// { path: 'gidget/cart', component: CartComponent}];
//   { path: 'reviews', component: ReviewComponent, children: [
//     { path: 'details/:id', component: ReviewDetailComponent },
//     { path: 'author/:id', component: AuthorComponent },
//     { path: 'all/:id', component: AllreviewsComponent }]
// }
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root {\r\n  background-color: #F5928D;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjU5MjhEO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"root\" style=\"text-align:center\">\n    <a href=\"/\"><img src=\"images/gidget-logo.png\"/></a>\n</div>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _bestsellers_bestsellers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bestsellers/bestsellers.component */ "./src/app/bestsellers/bestsellers.component.ts");
/* harmony import */ var _under20_under20_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./under20/under20.component */ "./src/app/under20/under20.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _ckoutnav_ckoutnav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ckoutnav/ckoutnav.component */ "./src/app/ckoutnav/ckoutnav.component.ts");
/* harmony import */ var _mainnav_mainnav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mainnav/mainnav.component */ "./src/app/mainnav/mainnav.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/tools/tools.component.ts");
/* harmony import */ var _solar_solar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./solar/solar.component */ "./src/app/solar/solar.component.ts");
/* harmony import */ var _windup_windup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./windup/windup.component */ "./src/app/windup/windup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_6__["NewComponent"],
                _bestsellers_bestsellers_component__WEBPACK_IMPORTED_MODULE_7__["BestsellersComponent"],
                _under20_under20_component__WEBPACK_IMPORTED_MODULE_8__["Under20Component"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
                _ckoutnav_ckoutnav_component__WEBPACK_IMPORTED_MODULE_11__["CkoutnavComponent"],
                _mainnav_mainnav_component__WEBPACK_IMPORTED_MODULE_12__["MainnavComponent"],
                _tools_tools_component__WEBPACK_IMPORTED_MODULE_13__["ToolsComponent"],
                _solar_solar_component__WEBPACK_IMPORTED_MODULE_14__["SolarComponent"],
                _windup_windup_component__WEBPACK_IMPORTED_MODULE_15__["WindupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bestsellers/bestsellers.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bestsellers/bestsellers.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: 'Mouse Memoirs', sans-serif;\n  }\n\n  .item_container {\n    background-color: grey;\n  }\n\n  /*\n  .items1 {\n    background-color: skyblue;\n    height: 500px;\n  } */\n\n  .items1 p {\n    color: white;\n  }\n\n  /* .items1 h3 {\n    background-color: green;\n  } */\n\n  .items1 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n\n  .items1 img {\n    background-color: white;\n  }\n\n  /* .items2 {\n    background-color: skyblue;\n  } */\n\n  .items2 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n\n  .items2 p {\n    color: white;\n  }\n\n  /* .items2 h3 {\n    background-color: green;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVzdHNlbGxlcnMvYmVzdHNlbGxlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUF5QztHQUN4Qzs7RUFFRDtJQUNFLHVCQUF1QjtHQUN4Qjs7RUFDSDs7OztNQUlNOztFQUVKO0lBQ0UsYUFBYTtHQUNkOztFQUVEOztNQUVJOztFQUVKO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSx3QkFBd0I7R0FDekI7O0VBRUQ7O01BRUk7O0VBRUo7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLGFBQWE7R0FDZDs7RUFFRDs7TUFFSSIsImZpbGUiOiJzcmMvYXBwL2Jlc3RzZWxsZXJzL2Jlc3RzZWxsZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gIGZvbnQtZmFtaWx5OiAnTW91c2UgTWVtb2lycycsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAuaXRlbV9jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIH1cbi8qXG4gIC5pdGVtczEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfSAqL1xuXG4gIC5pdGVtczEgcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogLml0ZW1zMSBoMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIH0gKi9cblxuICAuaXRlbXMxIGRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICB9XG5cbiAgLml0ZW1zMSBpbWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogLml0ZW1zMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcbiAgfSAqL1xuXG4gIC5pdGVtczIgZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDElO1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIH1cblxuICAuaXRlbXMyIHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC8qIC5pdGVtczIgaDMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB9ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/bestsellers/bestsellers.component.html":
/*!********************************************************!*\
  !*** ./src/app/bestsellers/bestsellers.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\">\n\n  <div class=\"items1\">\n    <div class=\"new\">\n      <h3>New</h3>\n      <a href=\"somewhere.html\"><img src=\"images/blowfish.png\"/></a>\n      <p>Fish Dryer Buddies</p>\n      <p>$8</p>\n    </div>\n    <div class=\"bestsellers\">\n      <h3>Bestsellers</h3>\n      <a href=\"somewhere.html\"><img src=\"images/luchadors.png\"/></a>\n      <p>Luchador Bottle Openers</p>\n      <p>$8</p>\n    </div>\n    <div class=\"u20\">\n      <h3>Gifts Under $20</h3>\n      <a href=\"somewhere.html\"><img src=\"images/ladybug.png\"/></a>\n      <p>Ladybug Contact Lens Case</p>\n      <p>$5</p>\n    </div>\n  </div>\n\n  <div class=\"items2\">\n    <div class=\"tools_tech\">\n      <h3>Tools & Tech</h3>\n      <a href=\"somewhere.html\"><img src=\"images/swissarmydog.png\"/></a>\n      <p>Animal Multitool</p>\n      <p>$20</p>\n    </div>\n    <div class=\"solar_power\">\n      <h3>Solar-Powered</h3>\n      <a href=\"somewhere.html\"><img src=\"images/thequeens.png\"/></a>\n      <p>Solar Queen</p>\n      <p>$20</p>\n    </div>\n    <div class=\"wind_up\">\n      <h3>Wind-Up Toys</h3>\n      <a href=\"somewhere.html\"><img src=\"images/bug2.png\"/></a>\n      <p>Spinney Wind Up</p>\n      <p>$14</p>\n    </div>\n  </div>\n\n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/bestsellers/bestsellers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bestsellers/bestsellers.component.ts ***!
  \******************************************************/
/*! exports provided: BestsellersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestsellersComponent", function() { return BestsellersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BestsellersComponent = /** @class */ (function () {
    function BestsellersComponent() {
    }
    BestsellersComponent.prototype.ngOnInit = function () {
    };
    BestsellersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bestsellers',
            template: __webpack_require__(/*! ./bestsellers.component.html */ "./src/app/bestsellers/bestsellers.component.html"),
            styles: [__webpack_require__(/*! ./bestsellers.component.css */ "./src/app/bestsellers/bestsellers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BestsellersComponent);
    return BestsellersComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cartItems\">\n    <a href=\"somewhere.html\"><img src=\"images/blowfish.png\"/></a>\n    <p>Fish Dryer Buddies</p>\n    <p>$8</p>\n    <a href=\"somewhere.html\"><img src=\"images/luchadors.png\"/></a>\n    <p>Luchador Bottle Openers</p>\n    <p>$8</p>\n    <a href=\"somewhere.html\"><img src=\"images/ladybug.png\"/></a>\n    <p>Ladybug Contact Lens Case</p>\n    <p>$5</p>\n</div>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/ckoutnav/ckoutnav.component.css":
/*!*************************************************!*\
  !*** ./src/app/ckoutnav/ckoutnav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ckoutnav{\n    font-size:15px;\n    color:white;\n    margin-left: 20%;\n}\n\n.rightnav{\n    font-size: 11px;\n    margin-left: 10px;\n    vertical-align: right;\n    padding: 10px;\n}\n\n#search{\n    margin-left: 35%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2tvdXRuYXYvY2tvdXRuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Nrb3V0bmF2L2Nrb3V0bmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2tvdXRuYXZ7XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLnJpZ2h0bmF2e1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI3NlYXJjaHtcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/ckoutnav/ckoutnav.component.html":
/*!**************************************************!*\
  !*** ./src/app/ckoutnav/ckoutnav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <span class=\"ckoutnav\">\n    Shipping + Payment > Review Order > Order Placed!\n    </span>\n    <a id=\"search\" class=\"rightnav\" href=\"\">Search</a> \n    <a class=\"rightnav\" [routerLink]=\"['/checkout/cart']\">Cart</a> \n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/ckoutnav/ckoutnav.component.ts":
/*!************************************************!*\
  !*** ./src/app/ckoutnav/ckoutnav.component.ts ***!
  \************************************************/
/*! exports provided: CkoutnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CkoutnavComponent", function() { return CkoutnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CkoutnavComponent = /** @class */ (function () {
    function CkoutnavComponent() {
    }
    CkoutnavComponent.prototype.ngOnInit = function () {
    };
    CkoutnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ckoutnav',
            template: __webpack_require__(/*! ./ckoutnav.component.html */ "./src/app/ckoutnav/ckoutnav.component.html"),
            styles: [__webpack_require__(/*! ./ckoutnav.component.css */ "./src/app/ckoutnav/ckoutnav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CkoutnavComponent);
    return CkoutnavComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh3 {\r\n  font-family: 'Mouse Memoirs', sans-serif;\r\n  }\r\n\r\n  .item_container {\r\n    background-color: grey;\r\n  }\r\n\r\n  /* \r\n  .items1 {\r\n    background-color: skyblue;\r\n    height: 500px;\r\n  } */\r\n\r\n  .items1 p {\r\n    color: white;\r\n  }\r\n\r\n  /* .items1 h3 {\r\n    background-color: green;\r\n  } */\r\n\r\n  .items1 div{\r\n    display: inline-block;\r\n    margin: 1%;\r\n    padding-left: 100px;\r\n  }\r\n\r\n  .items1 img {\r\n    background-color: white;\r\n  }\r\n\r\n  /* .items2 {\r\n    background-color: skyblue;\r\n  } */\r\n\r\n  .items2 div{\r\n    display: inline-block;\r\n    margin: 1%;\r\n    padding-left: 100px;\r\n  }\r\n\r\n  .items2 p {\r\n    color: white;\r\n  }\r\n\r\n  img {\r\n    width: 300px;\r\n    height: 300px;\r\n  }\r\n\r\n  /* .items2 h3 {\r\n    background-color: green;\r\n  } */\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUNBQXlDO0dBQ3hDOztFQUVEO0lBQ0UsdUJBQXVCO0dBQ3hCOztFQUNIOzs7O01BSU07O0VBRUo7SUFDRSxhQUFhO0dBQ2Q7O0VBRUQ7O01BRUk7O0VBRUo7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLHdCQUF3QjtHQUN6Qjs7RUFFRDs7TUFFSTs7RUFFSjtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0UsYUFBYTtHQUNkOztFQUVEO0lBQ0UsYUFBYTtJQUNiLGNBQWM7R0FDZjs7RUFFRDs7TUFFSSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgzIHtcclxuICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLml0ZW1fY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgfVxyXG4vKiBcclxuICAuaXRlbXMxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH0gKi9cclxuXHJcbiAgLml0ZW1zMSBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC8qIC5pdGVtczEgaDMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfSAqL1xyXG5cclxuICAuaXRlbXMxIGRpdntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLml0ZW1zMSBpbWcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAvKiAuaXRlbXMyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgfSAqL1xyXG5cclxuICAuaXRlbXMyIGRpdntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLml0ZW1zMiBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLyogLml0ZW1zMiBoMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9ICovXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"item_container\">\n\n  <div class=\"items1\">\n    <div class=\"new\">\n      <h3>New</h3>\n      <a href=\"somewhere.html\"><img src=\"images/blowfish.png\"/></a>\n      <p>Fish Dryer Buddies</p>\n      <p>$8</p>\n    </div>\n    <div class=\"bestsellers\">\n      <h3>Bestsellers</h3>\n      <a href=\"somewhere.html\"><img src=\"images/luchadors.png\"/></a>\n      <p>Luchador Bottle Openers</p>\n      <p>$8</p>\n    </div>\n    <div class=\"u20\">\n      <h3>Gifts Under $20</h3>\n      <a href=\"somewhere.html\"><img src=\"images/ladybug.png\"/></a>\n      <p>Ladybug Contact Lens Case</p>\n      <p>$5</p>\n    </div>\n  </div>\n\n  <div class=\"items2\">\n    <div class=\"tools_tech\">\n      <h3>Tools & Tech</h3>\n      <a href=\"somewhere.html\"><img src=\"images/swissarmydog.png\"/></a>\n      <p>Animal Multitool</p>\n      <p>$20</p>\n    </div>\n    <div class=\"solar_power\">\n      <h3>Solar-Powered</h3>\n      <a href=\"somewhere.html\"><img src=\"images/thequeens.png\"/></a>\n      <p>Solar Queen</p>\n      <p>$20</p>\n    </div>\n    <div class=\"wind_up\">\n      <h3>Wind-Up Toys</h3>\n      <a href=\"somewhere.html\"><img src=\"images/bug2.png\"/></a>\n      <p>Spinney Wind Up</p>\n      <p>$14</p>\n    </div>\n  </div>\n\n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/mainnav/mainnav.component.css":
/*!***********************************************!*\
  !*** ./src/app/mainnav/mainnav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.mainnav{\n    font-size: 25px;\n    margin-left: 15px;\n    vertical-align: middle;\n\n}\n\n.rightnav{\n    font-size: 20px;\n    /* margin-left: 20px; */\n    vertical-align: right;\n    padding: 10px;\n}\n\n#search{\n    margin-left: 300px;\n}\n\n#menu ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #F5928D;\n  }\n\n#menu li {\n    float: left;\n  }\n\n#menu li a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 36px;\n    text-decoration: none;\n  }\n\n#menu li a:hover {\n    background-color: #111111;\n  }\n\n#scroller {\n    position: relative;\n    background-color: #DAF891;\n  }\n\n/* For the inner holder, we clip anything that runs over, via \"overflow: hidden\".  We position the holder to fully fill its parent, the #scroller div. */\n\n#scroller .innerScrollArea {\n    overflow: hidden;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n/* On the unordered list that holds our photos, we remove the default margin and padding.  We also use \"position: relative\" so the list items can be laid out in a horizontal row. */\n\n#scroller ul {\n    padding: 0;\n    margin: 0;\n    position: relative;\n  }\n\n/* On the individual list items, we remove the default padding, margin and list bullets.  The position is set to absolute; we'll use JavaScript to set the precise left positioning value. */\n\n#scroller li {\n    padding: 0;\n    margin: 10px;\n    list-style-type: none;\n    position: absolute;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbm5hdi9tYWlubmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7O0NBRTFCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwQkFBMEI7R0FDM0I7O0FBRUQ7SUFDRSxZQUFZO0dBQ2I7O0FBRUQ7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsc0JBQXNCO0dBQ3ZCOztBQUVEO0lBQ0UsMEJBQTBCO0dBQzNCOztBQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLDBCQUEwQjtHQUMzQjs7QUFFRCx5SkFBeUo7O0FBQ3pKO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxVQUFVO0dBQ1g7O0FBRUQscUxBQXFMOztBQUNyTDtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0dBQ3BCOztBQUVELDZMQUE2TDs7QUFDN0w7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7R0FDcEIiLCJmaWxlIjoic3JjL2FwcC9tYWlubmF2L21haW5uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW5uYXZ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbn1cblxuLnJpZ2h0bmF2e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvKiBtYXJnaW4tbGVmdDogMjBweDsgKi9cbiAgICB2ZXJ0aWNhbC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI3NlYXJjaHtcbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7XG59XG5cbiNtZW51IHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjU5MjhEO1xuICB9XG5cbiAgI21lbnUgbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgI21lbnUgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICNtZW51IGxpIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XG4gIH1cblxuICAjc2Nyb2xsZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFGODkxO1xuICB9XG5cbiAgLyogRm9yIHRoZSBpbm5lciBob2xkZXIsIHdlIGNsaXAgYW55dGhpbmcgdGhhdCBydW5zIG92ZXIsIHZpYSBcIm92ZXJmbG93OiBoaWRkZW5cIi4gIFdlIHBvc2l0aW9uIHRoZSBob2xkZXIgdG8gZnVsbHkgZmlsbCBpdHMgcGFyZW50LCB0aGUgI3Njcm9sbGVyIGRpdi4gKi9cbiAgI3Njcm9sbGVyIC5pbm5lclNjcm9sbEFyZWEge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgfVxuXG4gIC8qIE9uIHRoZSB1bm9yZGVyZWQgbGlzdCB0aGF0IGhvbGRzIG91ciBwaG90b3MsIHdlIHJlbW92ZSB0aGUgZGVmYXVsdCBtYXJnaW4gYW5kIHBhZGRpbmcuICBXZSBhbHNvIHVzZSBcInBvc2l0aW9uOiByZWxhdGl2ZVwiIHNvIHRoZSBsaXN0IGl0ZW1zIGNhbiBiZSBsYWlkIG91dCBpbiBhIGhvcml6b250YWwgcm93LiAqL1xuICAjc2Nyb2xsZXIgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC8qIE9uIHRoZSBpbmRpdmlkdWFsIGxpc3QgaXRlbXMsIHdlIHJlbW92ZSB0aGUgZGVmYXVsdCBwYWRkaW5nLCBtYXJnaW4gYW5kIGxpc3QgYnVsbGV0cy4gIFRoZSBwb3NpdGlvbiBpcyBzZXQgdG8gYWJzb2x1dGU7IHdlJ2xsIHVzZSBKYXZhU2NyaXB0IHRvIHNldCB0aGUgcHJlY2lzZSBsZWZ0IHBvc2l0aW9uaW5nIHZhbHVlLiAqL1xuICAjc2Nyb2xsZXIgbGkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/mainnav/mainnav.component.html":
/*!************************************************!*\
  !*** ./src/app/mainnav/mainnav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <a class=\"mainnav\" [routerLink]=\"['./new']\">New </a>\n    <a class=\"mainnav\" [routerLink]=\"['./bestsellers']\">Bestsellers</a>\n    <a class=\"mainnav\" [routerLink]=\"['./U20']\">Gifts under $20</a>\n    <a class=\"mainnav\" [routerLink]=\"['./tools']\">Tools & Tech</a>\n    <a class=\"mainnav\" [routerLink]=\"['./solar']\">Solar-Powered</a>\n    <a class=\"mainnav\" [routerLink]=\"['./windup']\">Wind-Up Toys</a>\n    <a id=\"search\" class=\"rightnav\" href=\"\">Search</a>\n    <a class=\"rightnav\" [routerLink]=\"['/checkout/cart']\">Cart (3)</a>\n</nav>\n\n\n<div id=\"scroller\" style=\"width: 100%; min-height: 200px; margin: 0 auto; background-image:url(images/Homepage6.png); background-size: 1500px 200px; background-repeat: no-repeat;\">\n  <div class=\"innerScrollArea\">\n    <ul>\n        <!-- Define photos here -->\n        <li><a href=\"somewhere.html\"><img src=\"images/penguin-361x380_large.png\" width=\"200\" height=\"200\" /></a></li>\n        <li><a href=\"somewhere.html\"><img src=\"images/camera_539x400.png\" width=\"200\" height=\"200\" /></a></li>\n        <li><a href=\"somewhere.html\"><img src=\"images/penguin-361x380_large.png\" width=\"200\" height=\"200\" /></a></li>\n        <li><a href=\"somewhere.html\"><img src=\"images/penguin-361x380_large.png\" width=\"200\" height=\"200\" /></a></li>\n        <li><a href=\"somewhere.html\"><img src=\"images/camera_539x400.png\" width=\"200\" height=\"200\" /></a></li>\n        <li><a href=\"somewhere.html\"><img src=\"images/penguin-361x380_large.png\" width=\"200\" height=\"200\" /></a></li>\n    </ul>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n<!-- <app-home></app-home> -->\n"

/***/ }),

/***/ "./src/app/mainnav/mainnav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mainnav/mainnav.component.ts ***!
  \**********************************************/
/*! exports provided: MainnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainnavComponent", function() { return MainnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainnavComponent = /** @class */ (function () {
    function MainnavComponent() {
    }
    MainnavComponent.prototype.ngOnInit = function () {
    };
    MainnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainnav',
            template: __webpack_require__(/*! ./mainnav.component.html */ "./src/app/mainnav/mainnav.component.html"),
            styles: [__webpack_require__(/*! ./mainnav.component.css */ "./src/app/mainnav/mainnav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainnavComponent);
    return MainnavComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: 'Mouse Memoirs', sans-serif;\n  }\n\n  .item_container {\n    background-color: grey;\n  }\n\n  /*\n  .items1 {\n    background-color: skyblue;\n    height: 500px;\n  } */\n\n  .items1 p {\n    color: white;\n  }\n\n  /* .items1 h3 {\n    background-color: green;\n  } */\n\n  .items1 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n\n  .items1 img {\n    background-color: white;\n  }\n\n  /* .items2 {\n    background-color: skyblue;\n  } */\n\n  .items2 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n\n  .items2 p {\n    color: white;\n  }\n\n  /* .items2 h3 {\n    background-color: green;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0dBQ3hDOztFQUVEO0lBQ0UsdUJBQXVCO0dBQ3hCOztFQUNIOzs7O01BSU07O0VBRUo7SUFDRSxhQUFhO0dBQ2Q7O0VBRUQ7O01BRUk7O0VBRUo7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLHdCQUF3QjtHQUN6Qjs7RUFFRDs7TUFFSTs7RUFFSjtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0UsYUFBYTtHQUNkOztFQUVEOztNQUVJIiwiZmlsZSI6InNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgLml0ZW1fY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICB9XG4vKlxuICAuaXRlbXMxIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH0gKi9cblxuICAuaXRlbXMxIHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC8qIC5pdGVtczEgaDMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB9ICovXG5cbiAgLml0ZW1zMSBkaXZ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMSU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgfVxuXG4gIC5pdGVtczEgaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC8qIC5pdGVtczIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gIH0gKi9cblxuICAuaXRlbXMyIGRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICB9XG5cbiAgLml0ZW1zMiBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAvKiAuaXRlbXMyIGgzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgfSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\">\n\n  <div class=\"items1\">\n    <div class=\"new\">\n      <h3>New</h3>\n      <a href=\"somewhere.html\"><img src=\"images/blowfish.png\"/></a>\n      <p>Fish Dryer Buddies</p>\n      <p>$8</p>\n    </div>\n    <div class=\"bestsellers\">\n      <h3>Bestsellers</h3>\n      <a href=\"somewhere.html\"><img src=\"images/luchadors.png\"/></a>\n      <p>Luchador Bottle Openers</p>\n      <p>$8</p>\n    </div>\n    <div class=\"u20\">\n      <h3>Gifts Under $20</h3>\n      <a href=\"somewhere.html\"><img src=\"images/ladybug.png\"/></a>\n      <p>Ladybug Contact Lens Case</p>\n      <p>$5</p>\n    </div>\n  </div>\n\n  <div class=\"items2\">\n    <div class=\"tools_tech\">\n      <h3>Tools & Tech</h3>\n      <a href=\"somewhere.html\"><img src=\"images/swissarmydog.png\"/></a>\n      <p>Animal Multitool</p>\n      <p>$20</p>\n    </div>\n    <div class=\"solar_power\">\n      <h3>Solar-Powered</h3>\n      <a href=\"somewhere.html\"><img src=\"images/thequeens.png\"/></a>\n      <p>Solar Queen</p>\n      <p>$20</p>\n    </div>\n    <div class=\"wind_up\">\n      <h3>Wind-Up Toys</h3>\n      <a href=\"somewhere.html\"><img src=\"images/bug2.png\"/></a>\n      <p>Spinney Wind Up</p>\n      <p>$14</p>\n    </div>\n  </div>\n\n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewComponent = /** @class */ (function () {
    function NewComponent() {
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/solar/solar.component.css":
/*!*******************************************!*\
  !*** ./src/app/solar/solar.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: 'Mouse Memoirs', sans-serif;\n  }\n\n  .item_container {\n    background-color: grey;\n  }\n\n  /*\n  .items1 {\n    background-color: skyblue;\n    height: 500px;\n  } */\n\n  .items1 p {\n    color: white;\n  }\n\n  /* .items1 h3 {\n    background-color: green;\n  } */\n\n  .items1 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n\n  .items1 img {\n    background-color: white;\n  }\n\n  /* .items2 {\n    background-color: skyblue;\n  } */\n\n  .items2 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n\n  .items2 p {\n    color: white;\n  }\n\n  /* .items2 h3 {\n    background-color: green;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29sYXIvc29sYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUF5QztHQUN4Qzs7RUFFRDtJQUNFLHVCQUF1QjtHQUN4Qjs7RUFDSDs7OztNQUlNOztFQUVKO0lBQ0UsYUFBYTtHQUNkOztFQUVEOztNQUVJOztFQUVKO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSx3QkFBd0I7R0FDekI7O0VBRUQ7O01BRUk7O0VBRUo7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLGFBQWE7R0FDZDs7RUFFRDs7TUFFSSIsImZpbGUiOiJzcmMvYXBwL3NvbGFyL3NvbGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gIGZvbnQtZmFtaWx5OiAnTW91c2UgTWVtb2lycycsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAuaXRlbV9jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIH1cbi8qXG4gIC5pdGVtczEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfSAqL1xuXG4gIC5pdGVtczEgcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogLml0ZW1zMSBoMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIH0gKi9cblxuICAuaXRlbXMxIGRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICB9XG5cbiAgLml0ZW1zMSBpbWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogLml0ZW1zMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcbiAgfSAqL1xuXG4gIC5pdGVtczIgZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDElO1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIH1cblxuICAuaXRlbXMyIHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC8qIC5pdGVtczIgaDMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB9ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/solar/solar.component.html":
/*!********************************************!*\
  !*** ./src/app/solar/solar.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\">\n\n  <div class=\"items1\">\n    <div class=\"new\">\n      <h3>New</h3>\n      <a href=\"somewhere.html\"><img src=\"images/blowfish.png\"/></a>\n      <p>Fish Dryer Buddies</p>\n      <p>$8</p>\n    </div>\n    <div class=\"bestsellers\">\n      <h3>Bestsellers</h3>\n      <a href=\"somewhere.html\"><img src=\"images/luchadors.png\"/></a>\n      <p>Luchador Bottle Openers</p>\n      <p>$8</p>\n    </div>\n    <div class=\"u20\">\n      <h3>Gifts Under $20</h3>\n      <a href=\"somewhere.html\"><img src=\"images/ladybug.png\"/></a>\n      <p>Ladybug Contact Lens Case</p>\n      <p>$5</p>\n    </div>\n  </div>\n\n  <div class=\"items2\">\n    <div class=\"tools_tech\">\n      <h3>Tools & Tech</h3>\n      <a href=\"somewhere.html\"><img src=\"images/swissarmydog.png\"/></a>\n      <p>Animal Multitool</p>\n      <p>$20</p>\n    </div>\n    <div class=\"solar_power\">\n      <h3>Solar-Powered</h3>\n      <a href=\"somewhere.html\"><img src=\"images/thequeens.png\"/></a>\n      <p>Solar Queen</p>\n      <p>$20</p>\n    </div>\n    <div class=\"wind_up\">\n      <h3>Wind-Up Toys</h3>\n      <a href=\"somewhere.html\"><img src=\"images/bug2.png\"/></a>\n      <p>Spinney Wind Up</p>\n      <p>$14</p>\n    </div>\n  </div>\n\n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/solar/solar.component.ts":
/*!******************************************!*\
  !*** ./src/app/solar/solar.component.ts ***!
  \******************************************/
/*! exports provided: SolarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarComponent", function() { return SolarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SolarComponent = /** @class */ (function () {
    function SolarComponent() {
    }
    SolarComponent.prototype.ngOnInit = function () {
    };
    SolarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solar',
            template: __webpack_require__(/*! ./solar.component.html */ "./src/app/solar/solar.component.html"),
            styles: [__webpack_require__(/*! ./solar.component.css */ "./src/app/solar/solar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SolarComponent);
    return SolarComponent;
}());



/***/ }),

/***/ "./src/app/tools/tools.component.css":
/*!*******************************************!*\
  !*** ./src/app/tools/tools.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: 'Mouse Memoirs', sans-serif;\n  }\n\n  .item_container {\n    background-color: grey;\n  }\n\n  /*\n  .items1 {\n    background-color: skyblue;\n    height: 500px;\n  } */\n\n  .items1 p {\n    color: white;\n  }\n\n  /* .items1 h3 {\n    background-color: green;\n  } */\n\n  .items1 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n\n  .items1 img {\n    background-color: white;\n  }\n\n  /* .items2 {\n    background-color: skyblue;\n  } */\n\n  .items2 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n\n  .items2 p {\n    color: white;\n  }\n\n  /* .items2 h3 {\n    background-color: green;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbHMvdG9vbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUF5QztHQUN4Qzs7RUFFRDtJQUNFLHVCQUF1QjtHQUN4Qjs7RUFDSDs7OztNQUlNOztFQUVKO0lBQ0UsYUFBYTtHQUNkOztFQUVEOztNQUVJOztFQUVKO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSx3QkFBd0I7R0FDekI7O0VBRUQ7O01BRUk7O0VBRUo7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLGFBQWE7R0FDZDs7RUFFRDs7TUFFSSIsImZpbGUiOiJzcmMvYXBwL3Rvb2xzL3Rvb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gIGZvbnQtZmFtaWx5OiAnTW91c2UgTWVtb2lycycsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAuaXRlbV9jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIH1cbi8qXG4gIC5pdGVtczEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfSAqL1xuXG4gIC5pdGVtczEgcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogLml0ZW1zMSBoMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIH0gKi9cblxuICAuaXRlbXMxIGRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICB9XG5cbiAgLml0ZW1zMSBpbWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogLml0ZW1zMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcbiAgfSAqL1xuXG4gIC5pdGVtczIgZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDElO1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIH1cblxuICAuaXRlbXMyIHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC8qIC5pdGVtczIgaDMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB9ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/tools/tools.component.html":
/*!********************************************!*\
  !*** ./src/app/tools/tools.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\">\n\n  <div class=\"items1\">\n    <div class=\"new\">\n      <h3>New</h3>\n      <a href=\"somewhere.html\"><img src=\"images/blowfish.png\"/></a>\n      <p>Fish Dryer Buddies</p>\n      <p>$8</p>\n    </div>\n    <div class=\"bestsellers\">\n      <h3>Bestsellers</h3>\n      <a href=\"somewhere.html\"><img src=\"images/luchadors.png\"/></a>\n      <p>Luchador Bottle Openers</p>\n      <p>$8</p>\n    </div>\n    <div class=\"u20\">\n      <h3>Gifts Under $20</h3>\n      <a href=\"somewhere.html\"><img src=\"images/ladybug.png\"/></a>\n      <p>Ladybug Contact Lens Case</p>\n      <p>$5</p>\n    </div>\n  </div>\n\n  <div class=\"items2\">\n    <div class=\"tools_tech\">\n      <h3>Tools & Tech</h3>\n      <a href=\"somewhere.html\"><img src=\"images/swissarmydog.png\"/></a>\n      <p>Animal Multitool</p>\n      <p>$20</p>\n    </div>\n    <div class=\"solar_power\">\n      <h3>Solar-Powered</h3>\n      <a href=\"somewhere.html\"><img src=\"images/thequeens.png\"/></a>\n      <p>Solar Queen</p>\n      <p>$20</p>\n    </div>\n    <div class=\"wind_up\">\n      <h3>Wind-Up Toys</h3>\n      <a href=\"somewhere.html\"><img src=\"images/bug2.png\"/></a>\n      <p>Spinney Wind Up</p>\n      <p>$14</p>\n    </div>\n  </div>\n\n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/tools/tools.component.ts":
/*!******************************************!*\
  !*** ./src/app/tools/tools.component.ts ***!
  \******************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolsComponent = /** @class */ (function () {
    function ToolsComponent() {
    }
    ToolsComponent.prototype.ngOnInit = function () {
    };
    ToolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! ./tools.component.html */ "./src/app/tools/tools.component.html"),
            styles: [__webpack_require__(/*! ./tools.component.css */ "./src/app/tools/tools.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ }),

/***/ "./src/app/under20/under20.component.css":
/*!***********************************************!*\
  !*** ./src/app/under20/under20.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: 'Mouse Memoirs', sans-serif;\n  }\n\n  .item_container {\n    background-color: grey;\n  }\n\n  /*\n  .items1 {\n    background-color: skyblue;\n    height: 500px;\n  } */\n\n  .items1 p {\n    color: white;\n  }\n\n  /* .items1 h3 {\n    background-color: green;\n  } */\n\n  .items1 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n\n  .items1 img {\n    background-color: white;\n  }\n\n  /* .items2 {\n    background-color: skyblue;\n  } */\n\n  .items2 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n\n  .items2 p {\n    color: white;\n  }\n\n  /* .items2 h3 {\n    background-color: green;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5kZXIyMC91bmRlcjIwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUM7R0FDeEM7O0VBRUQ7SUFDRSx1QkFBdUI7R0FDeEI7O0VBQ0g7Ozs7TUFJTTs7RUFFSjtJQUNFLGFBQWE7R0FDZDs7RUFFRDs7TUFFSTs7RUFFSjtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0Usd0JBQXdCO0dBQ3pCOztFQUVEOztNQUVJOztFQUVKO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSxhQUFhO0dBQ2Q7O0VBRUQ7O01BRUkiLCJmaWxlIjoic3JjL2FwcC91bmRlcjIwL3VuZGVyMjAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgZm9udC1mYW1pbHk6ICdNb3VzZSBNZW1vaXJzJywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5pdGVtX2NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgfVxuLypcbiAgLml0ZW1zMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9ICovXG5cbiAgLml0ZW1zMSBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAvKiAuaXRlbXMxIGgzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgfSAqL1xuXG4gIC5pdGVtczEgZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDElO1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIH1cblxuICAuaXRlbXMxIGltZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAvKiAuaXRlbXMyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xuICB9ICovXG5cbiAgLml0ZW1zMiBkaXZ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMSU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgfVxuXG4gIC5pdGVtczIgcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogLml0ZW1zMiBoMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIH0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/under20/under20.component.html":
/*!************************************************!*\
  !*** ./src/app/under20/under20.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\">\n\n  <div class=\"items1\">\n    <div class=\"new\">\n      <h3>New</h3>\n      <a href=\"somewhere.html\"><img src=\"images/blowfish.png\"/></a>\n      <p>Fish Dryer Buddies</p>\n      <p>$8</p>\n    </div>\n    <div class=\"bestsellers\">\n      <h3>Bestsellers</h3>\n      <a href=\"somewhere.html\"><img src=\"images/luchadors.png\"/></a>\n      <p>Luchador Bottle Openers</p>\n      <p>$8</p>\n    </div>\n    <div class=\"u20\">\n      <h3>Gifts Under $20</h3>\n      <a href=\"somewhere.html\"><img src=\"images/ladybug.png\"/></a>\n      <p>Ladybug Contact Lens Case</p>\n      <p>$5</p>\n    </div>\n  </div>\n\n  <div class=\"items2\">\n    <div class=\"tools_tech\">\n      <h3>Tools & Tech</h3>\n      <a href=\"somewhere.html\"><img src=\"images/swissarmydog.png\"/></a>\n      <p>Animal Multitool</p>\n      <p>$20</p>\n    </div>\n    <div class=\"solar_power\">\n      <h3>Solar-Powered</h3>\n      <a href=\"somewhere.html\"><img src=\"images/thequeens.png\"/></a>\n      <p>Solar Queen</p>\n      <p>$20</p>\n    </div>\n    <div class=\"wind_up\">\n      <h3>Wind-Up Toys</h3>\n      <a href=\"somewhere.html\"><img src=\"images/bug2.png\"/></a>\n      <p>Spinney Wind Up</p>\n      <p>$14</p>\n    </div>\n  </div>\n\n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/under20/under20.component.ts":
/*!**********************************************!*\
  !*** ./src/app/under20/under20.component.ts ***!
  \**********************************************/
/*! exports provided: Under20Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Under20Component", function() { return Under20Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Under20Component = /** @class */ (function () {
    function Under20Component() {
    }
    Under20Component.prototype.ngOnInit = function () {
    };
    Under20Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-under20',
            template: __webpack_require__(/*! ./under20.component.html */ "./src/app/under20/under20.component.html"),
            styles: [__webpack_require__(/*! ./under20.component.css */ "./src/app/under20/under20.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Under20Component);
    return Under20Component;
}());



/***/ }),

/***/ "./src/app/windup/windup.component.css":
/*!*********************************************!*\
  !*** ./src/app/windup/windup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: 'Mouse Memoirs', sans-serif;\n  }\n\n  .item_container {\n    background-color: grey;\n  }\n\n  /*\n  .items1 {\n    background-color: skyblue;\n    height: 500px;\n  } */\n\n  .items1 p {\n    color: white;\n  }\n\n  /* .items1 h3 {\n    background-color: green;\n  } */\n\n  .items1 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n\n  .items1 img {\n    background-color: white;\n  }\n\n  /* .items2 {\n    background-color: skyblue;\n  } */\n\n  .items2 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n\n  .items2 p {\n    color: white;\n  }\n\n  /* .items2 h3 {\n    background-color: green;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZHVwL3dpbmR1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0dBQ3hDOztFQUVEO0lBQ0UsdUJBQXVCO0dBQ3hCOztFQUNIOzs7O01BSU07O0VBRUo7SUFDRSxhQUFhO0dBQ2Q7O0VBRUQ7O01BRUk7O0VBRUo7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLHdCQUF3QjtHQUN6Qjs7RUFFRDs7TUFFSTs7RUFFSjtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0UsYUFBYTtHQUNkOztFQUVEOztNQUVJIiwiZmlsZSI6InNyYy9hcHAvd2luZHVwL3dpbmR1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgLml0ZW1fY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICB9XG4vKlxuICAuaXRlbXMxIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH0gKi9cblxuICAuaXRlbXMxIHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC8qIC5pdGVtczEgaDMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB9ICovXG5cbiAgLml0ZW1zMSBkaXZ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMSU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgfVxuXG4gIC5pdGVtczEgaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC8qIC5pdGVtczIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gIH0gKi9cblxuICAuaXRlbXMyIGRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICB9XG5cbiAgLml0ZW1zMiBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAvKiAuaXRlbXMyIGgzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgfSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/windup/windup.component.html":
/*!**********************************************!*\
  !*** ./src/app/windup/windup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\">\n\n  <div class=\"items1\">\n    <div class=\"new\">\n      <h3>New</h3>\n      <a href=\"somewhere.html\"><img src=\"images/blowfish.png\"/></a>\n      <p>Fish Dryer Buddies</p>\n      <p>$8</p>\n    </div>\n    <div class=\"bestsellers\">\n      <h3>Bestsellers</h3>\n      <a href=\"somewhere.html\"><img src=\"images/luchadors.png\"/></a>\n      <p>Luchador Bottle Openers</p>\n      <p>$8</p>\n    </div>\n    <div class=\"u20\">\n      <h3>Gifts Under $20</h3>\n      <a href=\"somewhere.html\"><img src=\"images/ladybug.png\"/></a>\n      <p>Ladybug Contact Lens Case</p>\n      <p>$5</p>\n    </div>\n  </div>\n\n  <div class=\"items2\">\n    <div class=\"tools_tech\">\n      <h3>Tools & Tech</h3>\n      <a href=\"somewhere.html\"><img src=\"images/swissarmydog.png\"/></a>\n      <p>Animal Multitool</p>\n      <p>$20</p>\n    </div>\n    <div class=\"solar_power\">\n      <h3>Solar-Powered</h3>\n      <a href=\"somewhere.html\"><img src=\"images/thequeens.png\"/></a>\n      <p>Solar Queen</p>\n      <p>$20</p>\n    </div>\n    <div class=\"wind_up\">\n      <h3>Wind-Up Toys</h3>\n      <a href=\"somewhere.html\"><img src=\"images/bug2.png\"/></a>\n      <p>Spinney Wind Up</p>\n      <p>$14</p>\n    </div>\n  </div>\n\n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/windup/windup.component.ts":
/*!********************************************!*\
  !*** ./src/app/windup/windup.component.ts ***!
  \********************************************/
/*! exports provided: WindupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindupComponent", function() { return WindupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindupComponent = /** @class */ (function () {
    function WindupComponent() {
    }
    WindupComponent.prototype.ngOnInit = function () {
    };
    WindupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-windup',
            template: __webpack_require__(/*! ./windup.component.html */ "./src/app/windup/windup.component.html"),
            styles: [__webpack_require__(/*! ./windup.component.css */ "./src/app/windup/windup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WindupComponent);
    return WindupComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lg/Documents/CodingDojo/MEAN/gidgets_clickable_true/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map