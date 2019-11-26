(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Feed\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n  <ion-card *ngFor=\"let post of postsToShow\">\n      <ion-card-content *ngIf=\"post.imageUrl\">\n          <img src=\"{{ post.imageUrl }}\">\n      </ion-card-content>\n\n    <ion-card-header>\n      <ion-card-subtitle class=\"from\"> {{ post.from }} </ion-card-subtitle>\n      <ion-card-subtitle class=\"date\"> {{ post.createdOn | date:'MM-dd-yyy hh:mm:ss'}} </ion-card-subtitle>\n      <ion-card-title> {{post.message}} </ion-card-title>\n    </ion-card-header>\n\n\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.background {\n  --background: linear-gradient(153deg, rgba(47,47,47,1) 0%, rgba(91,91,91,1) 100%);\n}\n\nion-card {\n  background-color: #2f2f2f;\n  border-bottom: 1px solid #2f2f2f;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\nion-card-header {\n  background-color: #2f2f2f;\n  color: #45a5fe;\n}\n\nion-card-title {\n  font-size: 20px;\n  color: #45a5fe;\n}\n\nion-card-subtitle {\n  color: #45a5fe;\n  text-align: right;\n  text-transform: none;\n  width: 50%;\n  display: inline-block;\n}\n\nion-card-content {\n  padding-top: 5px;\n}\n\nimg {\n  max-height: 300px;\n}\n\n.from {\n  text-align: left;\n  font-style: italic;\n}\n\n.date {\n  text-align: right;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J6L2RvY3VtZW50cy9zY2hvb2wvRlNESV8xMDkvc2Vzc2lvbl8xL215c29jaWFsL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGlGQUFBO0FDRUY7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUzZGVnLCByZ2JhKDQ3LDQ3LDQ3LDEpIDAlLCByZ2JhKDkxLDkxLDkxLDEpIDEwMCUpO1xufVxuXG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmYyZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZjJmMmY7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjJmMmY7XG4gIGNvbG9yOiAjNDVhNWZlO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM0NWE1ZmU7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICM0NWE1ZmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuaW1nIHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbi5mcm9tIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmRhdGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1M2RlZywgcmdiYSg0Nyw0Nyw0NywxKSAwJSwgcmdiYSg5MSw5MSw5MSwxKSAxMDAlKTtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmMmYyZjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmYyZjtcbiAgY29sb3I6ICM0NWE1ZmU7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzQ1YTVmZTtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogIzQ1YTVmZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5pbWcge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cblxuLmZyb20ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5kYXRlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



let Tab1Page = class Tab1Page {
    constructor(data) {
        this.data = data;
        this.postsToShow = [];
        this.data.getAllPosts().subscribe(res => {
            this.postsToShow = []; // clear the previous data
            for (var i = 0; i < res.length; i++) {
                var msg = res[i];
                if (msg.to == "Robert" ||
                    msg.from == "Everyone" ||
                    msg.to == "Everyone") {
                    this.postsToShow.push(msg);
                }
            }
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map