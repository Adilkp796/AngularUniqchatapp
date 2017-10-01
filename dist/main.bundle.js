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
exports.push([module.i, "input#message {\r\n  margin-top: 400px;\r\n  background: #fff;\r\n  border: none;\r\n  outline: none;\r\n  box-shadow: none;\r\n  font-size: 1.6em;\r\n  font-weight: 300;\r\n  margin-bottom: 3em;\r\n  padding: 1.2em .7em;\r\n}\r\n\r\n#details-container {\r\n  background-color: #929292;\r\n  margin-top: 75px;\r\n  margin-left: -315px;\r\n  position: absolute;\r\n  display: inline;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  width: 100%;\r\n  height: 400px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n#details-container p {\r\n  padding: 1.4em;\r\n  color: #696969;\r\n  margin: 12px;\r\n}\r\n\r\n.user_name {\r\n  float: right;\r\n}\r\n\r\n.me {\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  width: 50%;\r\n  display: inherit;\r\n  margin: 5px 45px 5px 20px;\r\n}\r\n\r\n.you {\r\n  border-radius: 5px;\r\n  background-color: #dcf8c6;\r\n  display: inherit;\r\n  margin: 5px 20px 5px 400px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-offset-2 col-md-8\">\r\n  <button (click)=\"login()\" *ngIf=\"!(user | async)?.uid\">Login</button>\r\n  <button (click)=\"logout()\" *ngIf=\"(user | async)?.uid\">Logout</button>\r\n  <div #scrollMe id=\"details-container\">\r\n    <div *ngFor=\"let item of items | async\" [class.me]=\"isMe(item.email)\" [class.you]=\"isYou(item.email)\">\r\n      <p>\r\n        <img class=\"img-circle\" src=\"{{item.image}}\" height=\"30px\" width=\"30px\">&nbsp; &nbsp;{{item.message}} &nbsp;\r\n        <span class=\"timestamp\">{{ item.timestamp | date:\"dd/MM/yy hh:mm a\" }}</span>\r\n        <span class=\"user_name\">{{item.name}}</span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <input type=\"text\" id=\"message\" *ngIf=\"(user | async)?.uid\" placeholder=\"chat here?\" (keyup.enter)=\"Send($event.target.value)\" [(ngModel)]=\"msgVal\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(afAuth, af) {
        this.afAuth = afAuth;
        this.af = af;
        this.items = af.list('/messages', {
            query: {
                limitToLast: 50
            }
        });
        this.user = this.afAuth.authState;
        console.log(afAuth);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    AppComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    AppComponent.prototype.currentUserDisplayName = function () {
        if (!this.afAuth.auth.currentUser.displayName) {
            return 'Guest';
        }
        else {
            return this.afAuth.auth.currentUser.displayName;
        }
    };
    AppComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AppComponent.prototype.Send = function (desc) {
        this.items.push({
            message: desc,
            name: this.currentUserDisplayName(),
            image: this.afAuth.auth.currentUser.photoURL,
            timestamp: Date.now(),
            email: this.afAuth.auth.currentUser.email
        });
        this.msgVal = '';
        this.email = this.afAuth.auth.currentUser.email;
        // console.log(this.email);
    };
    AppComponent.prototype.isYou = function (email) {
        if (email == this.afAuth.auth.currentUser.email)
            return true;
        else
            return false;
    };
    AppComponent.prototype.isMe = function (email) {
        if (email == this.afAuth.auth.currentUser.email)
            return false;
        else
            return true;
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "myScrollContainer", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var firebaseConfig = {
    apiKey: "AIzaSyD6KZqbXB913vwQ2_pttvnUAyTg4858PQc",
    authDomain: "fir-crud-dedfc.firebaseapp.com",
    databaseURL: "https://fir-crud-dedfc.firebaseio.com",
    projectId: "fir-crud-dedfc",
    storageBucket: "fir-crud-dedfc.appspot.com",
    messagingSenderId: "394728278652"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */] // imports firebase/app needed for everything
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
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