(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My Friends\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Register -->\n<ion-content class=\"background\">\n    <ion-card>\n      <ion-card-header>\n        Save Friend\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"stacked\">Name:</ion-label>\n          <ion-input [(ngModel)]=\"model.name\" name=\"name\"></ion-input>\n        </ion-item>\n  \n        <ion-button (click)=\"saveFriend();\" expand=\"block\" size=\"medium\" color=\"primary\">Save Friend</ion-button\n        >\n      </ion-card-content>\n    </ion-card>\n  \n  <!-- List friends -->\n  <ion-list>\n    <ion-item *ngFor=\"let friend of myFriends\">\n      {{ friend.name }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/models/Friend.ts":
/*!**********************************!*\
  !*** ./src/app/models/Friend.ts ***!
  \**********************************/
/*! exports provided: Friend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Friend", function() { return Friend; });
class Friend {
    constructor() {
        this.belongsTo = 'Robert'; // specified if the frind belongs to me
    }
}


/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  --background: linear-gradient(153deg, rgba(47,47,47,1) 0%, rgba(91,91,91,1) 100%);\n}\n\nion-card {\n  background-color: #2f2f2f;\n  border-bottom: 1px solid #2f2f2f;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\nion-card-header {\n  background-color: #2f2f2f;\n  color: #45a5fe;\n}\n\nion-card-title {\n  font-size: 20px;\n  color: #45a5fe;\n}\n\nion-list {\n  color: #45a5fe;\n  background-color: #2f2f2f;\n}\n\nion-item {\n  color: #45a5fe;\n  --ion-background-color: #2f2f2f;\n  background: #2f2f2f;\n}\n\nion-card-subtitle {\n  color: #45a5fe;\n  text-align: right;\n  text-transform: none;\n  width: 50%;\n  display: inline-block;\n}\n\nion-card-content {\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J6L2RvY3VtZW50cy9zY2hvb2wvRlNESV8xMDkvc2Vzc2lvbl8xL215c29jaWFsL3NyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlGQUFBO0FDQ0Y7O0FER0E7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTNkZWcsIHJnYmEoNDcsNDcsNDcsMSkgMCUsIHJnYmEoOTEsOTEsOTEsMSkgMTAwJSk7XG59XG5cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmMmYyZjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmYyZjtcbiAgY29sb3I6ICM0NWE1ZmU7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzQ1YTVmZTtcbn1cblxuaW9uLWxpc3Qge1xuICBjb2xvcjogIzQ1YTVmZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmYyZjtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogIzQ1YTVmZTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzJmMmYyZjtcbiAgYmFja2dyb3VuZDogIzJmMmYyZjtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogIzQ1YTVmZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbiIsIi5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUzZGVnLCByZ2JhKDQ3LDQ3LDQ3LDEpIDAlLCByZ2JhKDkxLDkxLDkxLDEpIDEwMCUpO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjJmMmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmYyZjJmO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmO1xuICBjb2xvcjogIzQ1YTVmZTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNDVhNWZlO1xufVxuXG5pb24tbGlzdCB7XG4gIGNvbG9yOiAjNDVhNWZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmO1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiAjNDVhNWZlO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmO1xuICBiYWNrZ3JvdW5kOiAjMmYyZjJmO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjNDVhNWZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_Friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Friend */ "./src/app/models/Friend.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




let Tab3Page = class Tab3Page {
    constructor(data) {
        this.data = data;
        this.model = new _models_Friend__WEBPACK_IMPORTED_MODULE_2__["Friend"]();
        this.myFriends = [];
        // read all my friends
        this.data.getAllFriends().subscribe(res => {
            this.myFriends = []; // clear prev data
            // Filter to show only friends to belong to me
            for (var i = 0; i < res.length; i++) {
                if (res[i].belongsTo == 'Robert') {
                    this.myFriends.push(res[i]);
                }
            }
        });
    }
    saveFriend() {
        console.log("saving Friend", this.model);
        this.data.saveFriend(this.model);
        // reset form
        this.model = new _models_Friend__WEBPACK_IMPORTED_MODULE_2__["Friend"]();
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map