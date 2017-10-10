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
exports.push([module.i, "input#message {\r\n  margin-top: 400px;\r\n  background: #fff;\r\n  border: none;\r\n  outline: none;\r\n  box-shadow: none;\r\n  font-size: 1.6em;\r\n  font-weight: 300;\r\n  margin-bottom: 3em;\r\n  padding: 1.2em .7em;\r\n}\r\n.login_button {\r\n    background:#008FEF;\r\n    color:white;\r\n    padding: 1.2em;\r\n    width:300px;\r\n    text-align:center;\r\n    font-size:1.2em;\r\n    margin-bottom: 30px;\r\n    cursor:pointer;\r\n}/* You can add global styles to this file, and also import other style files */\r\n\r\n\r\n#details-container {\r\n  background-color: #929292;\r\n  margin-top: 75px;\r\n  margin-left: -315px;\r\n  position: absolute;\r\n  display: inline;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  width: 100%;\r\n  height: 400px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.message_container {\r\n  padding: 10px;\r\n  color: #696969;\r\n  margin: 12px;\r\n}\r\n\r\n.me {\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  width: 50%;\r\n  display: inherit;\r\n  margin: 5px 45px 5px 20px;\r\n}\r\n\r\n.you {\r\n  border-radius: 5px;\r\n  background-color: #dcf8c6;\r\n  display: inherit;\r\n  margin: 5px 20px 5px 400px;\r\n}\r\n.delete_button{\r\n  border: 1px solid;\r\nbackground-color: #3C9;\r\ncolor: #ffffff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-offset-2 col-md-8\">\r\n  <button (click)=\"login()\" *ngIf=\"!(user | async)?.uid\" class=\"login_button\">Login</button>\r\n  <button (click)=\"logout()\" *ngIf=\"(user | async)?.uid\" class=\"login_button\">Logout</button>\r\n  <div #scrollMe id=\"details-container\">\r\n    <!-- <div *ngFor=\"let item of items | async\" [class.me]=\"isMe(item.email)\" [class.you]=\"isYou(item.email)\">\r\n      <div class=\"message_container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7\">\r\n            <img class=\"img-circle\" src=\"{{item.image}}\" height=\"30px\" width=\"30px\">&nbsp; &nbsp;{{item.message}} &nbsp;\r\n          </div>\r\n          <div class=\"col-md-5\">\r\n            <p>{{item.name}}</p>\r\n            <p>{{ item.timestamp | date:\"dd/MM/yy hh:mm a\" }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <div *ngFor=\"let upload of uploads | async\" [class.me]=\"isMe(upload.email)\" [class.you]=\"isYou(upload.email)\">\r\n      <a href=\"{{upload.imageUrl}}\" download><img src=\"{{upload.imageUrl}}\" alt=\"\" height=\"400px\" width=\"400px\" ></a>\r\n      <video *ngIf=\"upload.videoUrl\" width=\"400\" controls>\r\n         <source src=\"{{upload.videoUrl}}\">\r\n       </video>\r\n      <div class=\"message_container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7\">\r\n            <img class=\"img-circle\" src=\"{{upload.profileImage}}\" height=\"30px\" width=\"30px\">&nbsp; &nbsp;{{upload.message}} &nbsp;\r\n          </div>\r\n          <div class=\"col-md-5\">\r\n            <p>{{upload.displayName}}</p>\r\n            <p>{{ upload.timestamp | date:\"dd/MM/yy hh:mm a\" }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <input type=\"text\" id=\"message\" *ngIf=\"(user | async)?.uid\" placeholder=\"chat here?\" (keyup.enter)=\"Send($event.target.value)\" [(ngModel)]=\"msgVal\">\r\n  <uploads-list></uploads-list>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uploads_shared_upload_service__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// upload sevice from shared folder

var AppComponent = (function () {
    function AppComponent(afAuth, af, upSvc) {
        this.afAuth = afAuth;
        this.af = af;
        this.upSvc = upSvc;
        this.items = af.list('/uploads', {
            query: {
                limitToLast: 50
            }
        });
        this.user = this.afAuth.authState;
        console.log(afAuth);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.uploads = this.upSvc.getUploads({ limitToLast: 50 });
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
            displayName: this.currentUserDisplayName(),
            profileImage: this.afAuth.auth.currentUser.photoURL,
            timestamp: Date.now(),
            email: this.afAuth.auth.currentUser.email,
        });
        this.msgVal = '';
        this.email = this.afAuth.auth.currentUser.email;
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__uploads_shared_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__uploads_shared_upload_service__["a" /* UploadService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__uploads_shared_upload_service__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__uploads_shared_videoupload_service__ = __webpack_require__("../../../../../src/app/uploads/shared/videoupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__uploads_upload_form_upload_form_component__ = __webpack_require__("../../../../../src/app/uploads/upload-form/upload-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__uploads_uploads_list_uploads_list_component__ = __webpack_require__("../../../../../src/app/uploads/uploads-list/uploads-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__uploads_upload_detail_upload_detail_component__ = __webpack_require__("../../../../../src/app/uploads/upload-detail/upload-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import image upload
// import { ImageUploadModule } from "angular2-image-upload";
// uploads picture





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
            // ImageUploadModule.forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__uploads_upload_form_upload_form_component__["a" /* UploadFormComponent */],
            __WEBPACK_IMPORTED_MODULE_10__uploads_uploads_list_uploads_list_component__["a" /* UploadsListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__uploads_upload_detail_upload_detail_component__["a" /* UploadDetailComponent */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__uploads_shared_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_8__uploads_shared_videoupload_service__["a" /* videoUploadService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/uploads/shared/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = (function () {
    function UploadService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
        this.basePath = '/uploads';
    }
    UploadService.prototype.getUploads = function (query) {
        if (query === void 0) { query = {}; }
        this.uploads = this.db.list(this.basePath, {
            query: query
        });
        return this.uploads;
    };
    UploadService.prototype.deleteUpload = function (upload) {
        var _this = this;
        this.deleteFileData(upload.$key)
            .then(function () {
            _this.deleteFileStorage(upload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files
    UploadService.prototype.pushUpload = function (upload) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // upload in progress
            var snap = snapshot;
            upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
        }, function (error) {
            // upload failed
            console.log(error);
        }, function () {
            // upload success
            upload.imageUrl = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            upload.email = _this.afAuth.auth.currentUser.email;
            upload.profileImage = _this.afAuth.auth.currentUser.photoURL;
            upload.displayName = _this.afAuth.auth.currentUser.displayName;
            upload.timestamp = Date.now();
            _this.saveFileData(upload);
            return undefined;
        });
    };
    // Writes the file details to the realtime db
    UploadService.prototype.saveFileData = function (upload) {
        this.db.list(this.basePath + "/").push(upload);
    };
    // Writes the file details to the realtime db
    UploadService.prototype.deleteFileData = function (key) {
        return this.db.list(this.basePath + "/").remove(key);
    };
    // Firebase files must have unique names in their respective storage dir
    // So the name serves as a unique key
    UploadService.prototype.deleteFileStorage = function (name) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    return UploadService;
}());
UploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], UploadService);

var _a, _b;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/uploads/shared/upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = (function () {
    function Upload(file) {
        this.createdAt = new Date();
        this.file = file;
    }
    return Upload;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ "../../../../../src/app/uploads/shared/videoupload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return videoUploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var videoUploadService = (function () {
    function videoUploadService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
        this.basePath = '/uploads';
    }
    videoUploadService.prototype.getUploads = function (query) {
        if (query === void 0) { query = {}; }
        this.uploads = this.db.list(this.basePath, {
            query: query
        });
        return this.uploads;
    };
    // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files
    videoUploadService.prototype.pushUpload = function (upload) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // upload in progress
            var snap = snapshot;
            upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
        }, function (error) {
            // upload failed
            console.log(error);
        }, function () {
            // upload success
            upload.videoUrl = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            upload.email = _this.afAuth.auth.currentUser.email;
            upload.profileImage = _this.afAuth.auth.currentUser.photoURL;
            upload.displayName = _this.afAuth.auth.currentUser.displayName;
            upload.timestamp = Date.now();
            _this.saveFileData(upload);
            return undefined;
        });
    };
    // Writes the file details to the realtime db
    videoUploadService.prototype.saveFileData = function (upload) {
        this.db.list(this.basePath + "/").push(upload);
    };
    return videoUploadService;
}());
videoUploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], videoUploadService);

var _a, _b;
//# sourceMappingURL=videoupload.service.js.map

/***/ }),

/***/ "../../../../../src/app/uploads/upload-detail/upload-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".delete_button{\r\n  border: 1px solid;\r\nbackground-color: #3C9;\r\ncolor: #ffffff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/uploads/upload-detail/upload-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <img src=\"{{upload.url}}\" alt=\"img\" height=\"80px\" width=\"80px\">\r\n<button (click)='deleteUpload(upload)' class=\"delete_button\">Delete</button><br> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/uploads/upload-detail/upload-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_upload_service__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_upload__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadDetailComponent = (function () {
    function UploadDetailComponent(upSvc) {
        this.upSvc = upSvc;
    }
    UploadDetailComponent.prototype.ngOnInit = function () {
    };
    UploadDetailComponent.prototype.deleteUpload = function (upload) {
        this.upSvc.deleteUpload(this.upload);
        console.log(this.upload);
    };
    return UploadDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_upload__["a" /* Upload */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_upload__["a" /* Upload */]) === "function" && _a || Object)
], UploadDetailComponent.prototype, "upload", void 0);
UploadDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'upload-detail',
        template: __webpack_require__("../../../../../src/app/uploads/upload-detail/upload-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/uploads/upload-detail/upload-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_upload_service__["a" /* UploadService */]) === "function" && _b || Object])
], UploadDetailComponent);

var _a, _b;
//# sourceMappingURL=upload-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/uploads/upload-form/upload-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choose_file{\r\n  \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/uploads/upload-form/upload-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentUpload\">\r\n  <progress class=\"progress is-success\" min=1 max=100 value=\"{{ currentUpload?.progress }}\"></progress>\r\n  <p>Progress: {{currentUpload?.name}} | {{currentUpload?.progress}}% Complete</p>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <label>\r\n       <input type=\"file\" class=\"choose_file\" (change)=\"detectFiles($event)\">\r\n  </label>\r\n  <button class=\"button\" [disabled]=\"!selectedFiles\" (click)=\"uploadimage()\">\r\n      Upload image\r\n  </button>\r\n  <button class=\"button\" [disabled]=\"!selectedFiles\" (click)=\"uploadvideo()\">\r\n      Upload video\r\n  </button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/uploads/upload-form/upload-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_upload_service__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_videoupload_service__ = __webpack_require__("../../../../../src/app/uploads/shared/videoupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_upload__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import * as _ from "lodash";
var UploadFormComponent = (function () {
    function UploadFormComponent(upSvc, vdSvc) {
        this.upSvc = upSvc;
        this.vdSvc = vdSvc;
    }
    UploadFormComponent.prototype.ngOnInit = function () {
    };
    UploadFormComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
        console.log(this.selectedFiles["0"].type);
    };
    UploadFormComponent.prototype.uploadimage = function () {
        // image/jpeg
        // image/png
        var fileType = this.selectedFiles["0"].type;
        if (fileType === "image/jpeg" || fileType === "image/png") {
            var files = this.selectedFiles.item(0);
            this.currentUpload = new __WEBPACK_IMPORTED_MODULE_3__shared_upload__["a" /* Upload */](files);
            this.upSvc.pushUpload(this.currentUpload);
        }
        else {
            console.log("Invalid Type");
        }
    };
    UploadFormComponent.prototype.uploadvideo = function () {
        var fileType = this.selectedFiles["0"].type;
        if (fileType === "video/mp4") {
            var files = this.selectedFiles.item(0);
            this.currentUpload = new __WEBPACK_IMPORTED_MODULE_3__shared_upload__["a" /* Upload */](files);
            this.vdSvc.pushUpload(this.currentUpload);
        }
        else {
            console.log("Invalid Type");
        }
    };
    return UploadFormComponent;
}());
UploadFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'upload-form',
        template: __webpack_require__("../../../../../src/app/uploads/upload-form/upload-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/uploads/upload-form/upload-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_upload_service__["a" /* UploadService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_videoupload_service__["a" /* videoUploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_videoupload_service__["a" /* videoUploadService */]) === "function" && _b || Object])
], UploadFormComponent);

var _a, _b;
//# sourceMappingURL=upload-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/uploads/uploads-list/uploads-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>image upload</h3>\r\n\r\n<!-- <div *ngFor=\"let upload of uploads | async\">\r\n  <upload-detail [upload]='upload'></upload-detail>\r\n</div> -->\r\n\r\n\r\n<upload-form></upload-form>\r\n"

/***/ }),

/***/ "../../../../../src/app/uploads/uploads-list/uploads-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_upload_service__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadsListComponent = (function () {
    function UploadsListComponent(upSvc) {
        this.upSvc = upSvc;
    }
    UploadsListComponent.prototype.ngOnInit = function () {
        this.uploads = this.upSvc.getUploads({ limitToLast: 5 });
    };
    return UploadsListComponent;
}());
UploadsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'uploads-list',
        template: __webpack_require__("../../../../../src/app/uploads/uploads-list/uploads-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_upload_service__["a" /* UploadService */]) === "function" && _a || Object])
], UploadsListComponent);

var _a;
//# sourceMappingURL=uploads-list.component.js.map

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