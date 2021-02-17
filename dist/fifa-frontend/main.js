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

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_teams_teams_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/teams/teams-admin.component */ "./src/app/admin/components/teams/teams-admin.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/admin/components/list/list.component.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/admin/components/add/add.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/admin/components/edit/edit.component.ts");
/* harmony import */ var _services_admin_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/admin.guard */ "./src/app/services/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var adminRoutes = [
    {
        path: 'admin-teams',
        component: _components_teams_teams_admin_component__WEBPACK_IMPORTED_MODULE_2__["TeamsAdminComponent"],
        canActivate: [_services_admin_guard__WEBPACK_IMPORTED_MODULE_6__["AdminGuard"]],
        children: [
            { path: '', redirectTo: 'listado', pathMatch: 'full' },
            { path: 'listado', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
            { path: 'crear', component: _components_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"] },
            { path: 'editar', component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
            { path: 'editar/:id', component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(adminRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _components_teams_teams_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/teams/teams-admin.component */ "./src/app/admin/components/teams/teams-admin.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/admin/components/list/list.component.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/admin/components/add/add.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/admin/components/edit/edit.component.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/admin/pipes/search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_teams_teams_admin_component__WEBPACK_IMPORTED_MODULE_5__["TeamsAdminComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
                _components_add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"]
            ],
            providers: []
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/components/add/add.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/add/add.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-10\">\n    <h3>{{title}}</h3>\n\n    <form #formAdd=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <p>\n            <label>Nombre</label>\n            <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"team.name\" class=\"form-control\" required/>\n            <span *ngIf=\"!name.valid && name.touched\">\n                    El nombre es obligatorio\n            </span>\n        </p>\n        <p>\n            <label>Descripción</label>\n            <textarea type=\"text\" name=\"description\" #description=\"ngModel\" [(ngModel)]=\"team.description\" class=\"form-control\" required></textarea>\n            <span *ngIf=\"!description.valid && description.touched\">\n                    La Descripción es obligatoria\n            </span>\n        </p>\n        <p>\n            <label>Año</label>\n            <input type=\"text\" name=\"year\" #year=\"ngModel\" [(ngModel)]=\"team.year\" class=\"form-control\" required/>\n            <span *ngIf=\"!year.valid && year.touched\">\n                    El año es obligatorio\n            </span>\n        </p>\n\n        <div *ngIf=\"is_edit && team.image\">\n            <div class=\"image_for_edit\">\n                <img src=\"{{url + 'get-image.team/' + team.image}}\" />\n            </div>\n        </div>\n\n        <p>\n            <label>Imagen del animal</label>\n            <input type=\"file\" placeholder=\"Subir imagen...\" (change)=\"fileChangeEvent($event)\" />\n        </p>\n\n        <input type=\"submit\" value=\"{{title}}\" class=\"btn btn-success\">\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/admin/components/add/add.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/components/add/add.component.ts ***!
  \*******************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _models_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/team */ "./src/app/models/team.ts");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/upload.service */ "./src/app/services/upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddComponent = /** @class */ (function () {
    function AddComponent(_route, _router, _teamService, _userService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._teamService = _teamService;
        this._userService = _userService;
        this._uploadService = _uploadService;
        this.title = 'Add Team';
        this.team = new _models_team__WEBPACK_IMPORTED_MODULE_3__["Team"]('', '', '', '', 2018, '', '');
        this.identity = this._userService.get_identity();
        this.token = this._userService.get_token();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._teamService.add_team(this.token, this.team).subscribe(function (response) {
            if (!response.team) {
                _this.status = 'error';
            }
            else {
                _this.status = 'success';
                _this.team = response.team;
                if (!_this.filesToUpload) {
                    _this._router.navigate(['/admin-panel/listado']);
                }
                else {
                    _this._uploadService.make_file_request(_this.url + 'upload-image-team/' + _this.team._id, [], _this.filesToUpload, _this.token, 'image')
                        .then(function (result) {
                        _this.team.image = result.image;
                        _this._router.navigate(['/admin-panel/listado']);
                    });
                }
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = "error";
            }
        });
    };
    AddComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/admin/components/add/add.component.html"),
            providers: [_services_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/edit/edit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/edit/edit.component.ts ***!
  \*********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _models_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/team */ "./src/app/models/team.ts");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/upload.service */ "./src/app/services/upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditComponent = /** @class */ (function () {
    function EditComponent(_route, _router, _teamService, _userService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._teamService = _teamService;
        this._userService = _userService;
        this._uploadService = _uploadService;
        this.is_edit = true;
        this.title = 'Editar';
        this.team = new _models_team__WEBPACK_IMPORTED_MODULE_3__["Team"]('', '', '', '', 2018, '', '');
        this.identity = this._userService.get_identity();
        this.token = this._userService.get_token();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    EditComponent.prototype.ngOnInit = function () {
        if (this.team.name == null) {
        }
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        var id = this.team._id;
        this._teamService.edit_team(this.token, id, this.team).subscribe(function (response) {
            if (!response.animal) {
                _this.status = 'error';
            }
            else {
                _this.status = "success";
                _this.team = response.team;
                if (!_this.filesToUpload) {
                    _this._router.navigate(['/team', _this.team._id]);
                }
                else {
                    _this._uploadService.make_file_request(_this.url + 'upload-image-team/' + _this.team._id, [], _this.filesToUpload, _this.token, 'image')
                        .then(function (result) {
                        _this.team.image = result.image;
                        _this._router.navigate(['/team', _this.team._id]);
                    });
                }
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = "error";
            }
        });
    };
    EditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    EditComponent.prototype.getTeam = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._teamService.get_team(id).subscribe(function (response) {
                if (!response.team) {
                    //  this._router.navigate(['/']);        
                }
                else {
                    _this.team = response.team;
                }
            }, function (error) {
                console.log(error);
                //this._router.navigate(['/home']);        
            });
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-edit',
            template: __webpack_require__(/*! ../add/add.component.html */ "./src/app/admin/components/add/add.component.html"),
            providers: [_services_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/list/list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/list/list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n    <h3>{{title}}</h3>\n\n    <div class=\"row\">\n        <div class=\"col-lg-1\">Buscar:</div>\n        <div class=\"col-lg-3\">\n            <input type=\"text\" [(ngModel)]=\"searchTerm\" />\n        </div>\n        <div class=\"label label-success\" *ngIf=\"searchTerm\">\n            Termino de busqueda: <strong>{{searchTerm}}</strong>\n        </div>\n    </div>\n\n    <table class=\"table table-hover\">\n        <thead class=\"thead-default\">\n            <tr>\n                <th>Name</th>\n                <th>Year</th>\n                <th>Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let team of teams | search: searchTerm\">\n                <td>{{team.name}}</td>\n                <td>{{team.year}}</td>\n                <td class=\"btn-toolbar\">\n\n                    <a [routerLink]=\"['/team', team._id]\" class=\"btn btn-sm btn-success\">\n                        <span class=\"glyphicon glyphicon-eye-open\" area-hidden=\"true\"></span> Ver\n                    </a>\n                    <a [routerLink]=\"['/admin-panel/editar', team._id]\" class=\"btn btn-sm btn-primary\">\n                        <span class=\"glyphicon glyphicon-pencil\" area-hidden=\"true\"></span> Editar\n                    </a>\n                    <a href=\"#myModal-{{team._id}}\" role=\"button\" data-toggle=\"modal\" class=\"btn btn-sm btn-danger\">\n                        <span class=\"glyphicon glyphicon-trash\" area-hidden=\"true\"></span> Borrar\n                    </a>\n\n                    <div id=\"myModal-{{team._id}}\" class=\"modal fade\">\n                        <div class=\"modal-dialog\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                                    <h4 class=\"modal-title\">¿Estas Seguro?</h4>\n                                </div>\n                                <div class=\"modal-body\">\n                                    <p>Seguro que quieres eliminar el animal <strong>{{team.name}}</strong>?</p>\n                                    <p class=\"text-warning\"><small>Si borras este animal no pordrás recuperarlo.</small></p>\n                                </div>\n                                <div class=\"modal-footer\">\n\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteTeam(team._id)\">Borrar</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/components/list/list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/list/list.component.ts ***!
  \*********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListComponent = /** @class */ (function () {
    function ListComponent(_route, _router, _teamService, _userService) {
        this._route = _route;
        this._router = _router;
        this._teamService = _teamService;
        this._userService = _userService;
        this.title = 'Listado';
        this.title = 'Listado de Animales';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = this._userService.get_token();
        this._teamService.get_teams().subscribe(function (response) {
            if (!response.teams) {
            }
            else {
                _this.teams = response.teams;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ListComponent.prototype.getTeams = function () {
        var _this = this;
        this._teamService.get_teams().subscribe(function (response) {
            if (!response.teams) {
            }
            else {
                _this.teams = response.teams;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ListComponent.prototype.deleteTeam = function (id) {
        var _this = this;
        $('#myModal-' + id).modal('hide');
        this._teamService.delete_team(this.token, id).subscribe(function (response) {
            if (!response.team) {
                alert('Error en el servidor');
            }
            _this.getTeams();
        }, function (error) {
            alert('Error en el servidor');
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/components/list/list.component.html"),
            providers: [_services_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/teams/teams-admin.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/teams/teams-admin.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-4\">\n    <h3>{{title}}</h3>\n    <div class=\"sidebar-admin\" data-example-id=\"sample-nav-stacked\">\n        <ul class=\"nav nav-pills nav-stacked\">\n            <li role=\"presentation\" [routerLinkActive]=\"['active']\">\n                <a [routerLink]=\"['listado']\">List</a>\n            </li>\n            <li role=\"presentation\" [routerLinkActive]=\"['active']\">\n                <a [routerLink]=\"['crear']\">Create</a>\n            </li>\n            <li role=\"presentation\" [routerLinkActive]=\"['active']\">\n                <a [routerLink]=\"['editar']\">Edit</a>\n            </li>\n        </ul>\n    </div>\n\n</div>\n\n<div class=\"col-lg-8\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/admin/components/teams/teams-admin.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/teams/teams-admin.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeamsAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsAdminComponent", function() { return TeamsAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeamsAdminComponent = /** @class */ (function () {
    function TeamsAdminComponent() {
        this.title = 'Teams';
    }
    TeamsAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-teams',
            template: __webpack_require__(/*! ./teams-admin.component.html */ "./src/app/admin/components/teams/teams-admin.component.html")
        })
    ], TeamsAdminComponent);
    return TeamsAdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/pipes/search.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/admin/pipes/search.pipe.ts ***!
  \********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, term) {
        if (term == undefined) {
            return items;
        }
        return items.filter(function (item) {
            return item.name.toLowerCase().includes(term.toLowerCase());
        });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SearchPipe);
    return SearchPipe;
}());



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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"navigation col-lg-12\">\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n\n            <div class=\"navbar-header\">\n                <a [routerLink]=\"['/home']\" class=\"navbar-brand\">{{ title }}</a>\n            </div>\n\n            <ul class=\"nav navbar-nav\">\n                <li>\n                    <a [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">\n                        <span class=\"glyphicon glyphicon-home\"></span> Home\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/teams']\" [routerLinkActive]=\"['active']\">\n                        <span class=\"glyphicon glyphicon-star\"></span> Teams\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/keepers']\" [routerLinkActive]=\"['active']\">\n                        <span class=\"glyphicon glyphicon-user\"></span> Admins\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/store']\" [routerLinkActive]=\"['active']\">\n                        <span class=\"glyphicon glyphicon-gift\"></span> Store\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/contact']\" [routerLinkActive]=\"['active']\">\n                        <span class=\"glyphicon glyphicon-comment\"></span> Contact\n                    </a>\n                </li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"!identity\">\n                <li>\n                    <a [routerLink]=\"['/signup']\" [routerLinkActive]=\"['active']\">\n                        <span class=\"glyphicon glyphicon-user\"></span> Register\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/login']\">\n                        <span class=\"glyphicon glyphicon-log-in\" [routerLinkActive]=\"['active']\"></span> Login\n                    </a>\n                </li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"identity\">\n                <li class=\"avatar\" *ngIf=\"identity && identity.image && identity.image != 'null'\">\n                    <img src=\"{{ url + 'get-image-file/' + identity.image }}\" />\n                </li>\n\n                <li class=\"dropdown\">\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                    {{identity.name}} <span class=\"caret\"></span>\n                  </a>\n\n                    <ul class=\"dropdown-menu\">\n                        <li *ngIf=\"identity && identity.role == 'ROLE_ADMIN'\">\n                            <a [routerLink]=\"['/admin-teams']\">\n                                <span class=\"glyphicon glyphicon-tasks\"></span> Administration\n                            </a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/profile']\">\n                                <span class=\"glyphicon glyphicon-cog\"></span> Profile\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"pointer\" (click)=\"logout()\">\n                                <span class=\"glyphicon glyphicon-log-out\"></span> Logout\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n\n        </div>\n    </nav>\n\n</div>\n\n<div class=\"col-lg-11\">\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.title = 'Fifa 2020 Web Application';
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.get_identity();
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.identity = this._userService.get_identity();
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.identity = null;
        this._router.navigate(['/']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _moduloemail_moduloemail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moduloemail/moduloemail.module */ "./src/app/moduloemail/moduloemail.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");
/* harmony import */ var _components_parques_parques_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/parques/parques.component */ "./src/app/components/parques/parques.component.ts");
/* harmony import */ var _components_teams_teams_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/teams/teams.component */ "./src/app/components/teams/teams.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_keepers_keepers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/keepers/keepers.component */ "./src/app/components/keepers/keepers.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user-edit/user-edit.component */ "./src/app/components/user-edit/user-edit.component.ts");
/* harmony import */ var _components_team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/team-detail/team-detail.component */ "./src/app/components/team-detail/team-detail.component.ts");
/* harmony import */ var _services_admin_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/admin.guard */ "./src/app/services/admin.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Components











// Services


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_store_store_component__WEBPACK_IMPORTED_MODULE_10__["StoreComponent"],
                _components_parques_parques_component__WEBPACK_IMPORTED_MODULE_11__["ParquesComponent"],
                _components_teams_teams_component__WEBPACK_IMPORTED_MODULE_12__["TeamsComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _components_keepers_keepers_component__WEBPACK_IMPORTED_MODULE_14__["KeepersComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_18__["UserEditComponent"],
                _components_team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_19__["TeamDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _moduloemail_moduloemail_module__WEBPACK_IMPORTED_MODULE_6__["ModuloemailModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            providers: [
                _services_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["appRoutingProviders"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");
/* harmony import */ var _components_teams_teams_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/teams/teams.component */ "./src/app/components/teams/teams.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_keepers_keepers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/keepers/keepers.component */ "./src/app/components/keepers/keepers.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-edit/user-edit.component */ "./src/app/components/user-edit/user-edit.component.ts");
/* harmony import */ var _components_team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/team-detail/team-detail.component */ "./src/app/components/team-detail/team-detail.component.ts");










var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'teams', component: _components_teams_teams_component__WEBPACK_IMPORTED_MODULE_2__["TeamsComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'cuidadores', component: _components_keepers_keepers_component__WEBPACK_IMPORTED_MODULE_4__["KeepersComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'store', component: _components_store_store_component__WEBPACK_IMPORTED_MODULE_1__["StoreComponent"] },
    { path: 'signup', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'profile', component: _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__["UserEditComponent"] },
    { path: 'team/:id', component: _components_team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_9__["TeamDetailComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/animation.ts":
/*!*****************************************!*\
  !*** ./src/app/components/animation.ts ***!
  \*****************************************/
/*! exports provided: fadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1
        }))
    ])
]);


/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" [@fadeIn]>\n\n<h1>{{title}}</h1>\n\n<main-email></main-email>\n</div>>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/animation */ "./src/app/components/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.title = 'Contacto';
    }
    ContactComponent.prototype.ngOnInit = function () {
        console.log("ContactComponent OnInit");
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            animations: [_components_animation__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8 col-lg-offset-2\" [@fadeIn]>\n    <div class=\"jumbotron\">\n        <h1>{{title}}</h1>\n        <p>Enjoy the different FIFA soccer teams in our website</p>\n\n        <p class=\"btn-toolbar\">\n            <a class=\"btn btn-primary btn-lg\" role=\"button\" [routerLink]=\"['/teams']\">\n          Show Teams\n        </a>\n            <a class=\"btn btn-success btn-lg\" role=\"button\" [routerLink]=\"['/admins']\">\n          Show Admins\n        </a>\n            <a class=\"btn btn-warning btn-lg\" role=\"button\" [routerLink]=\"['/contact']\">\n          Contact us\n        </a>\n        </p>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animation */ "./src/app/components/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Home';
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            animations: [_animation__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/keepers/keepers.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/keepers/keepers.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" [@fadeIn]>\n    <h1>{{title}}</h1>\n\n\n    <div class=\"col-lg-3\" *ngFor=\"let keeper of keepers\">\n        <div class=\"thumbnail\">\n            <div>\n                <img  *ngIf=\"keeper.image\" class=\"keeper-image-mask\" src=\"{{ url + 'get-image-file/' + keeper.image }}\" alt=\"{{keeper.name}}\">\n                <img  *ngIf=\"!keeper.image\" src=\"https://via.placeholder.com/270x200\" alt=\"{{keeper.name}}\">\n                <img  *ngIf=\"keeper.image == 'undefined'\" src=\"https://via.placeholder.com/270x200\" alt=\"{{keeper.name}}\">\n                <div class=\"caption\">\n                    <h3>{{keeper.name + ' ' + keeper.surname}}</h3>\n                </div>\n            </div>\n        </div>\n   </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/keepers/keepers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/keepers/keepers.component.ts ***!
  \*********************************************************/
/*! exports provided: KeepersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeepersComponent", function() { return KeepersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/animation */ "./src/app/components/animation.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KeepersComponent = /** @class */ (function () {
    function KeepersComponent(_userService) {
        this._userService = _userService;
        this.title = 'Cuidadores';
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    KeepersComponent.prototype.ngOnInit = function () {
        console.log("KeepersComponent OnInit");
        this.getKeepers();
        console.log(this.keepers);
    };
    KeepersComponent.prototype.getKeepers = function () {
        var _this = this;
        this._userService.get_keepers().subscribe(function (response) {
            if (!response.users) {
                console.log("error getting keepers");
            }
            else {
                console.log("success getting keepers");
                console.log(response.users);
                _this.keepers = response.users;
            }
        }, function (error) {
            console.log(error);
        });
    };
    KeepersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'keeper',
            template: __webpack_require__(/*! ./keepers.component.html */ "./src/app/components/keepers/keepers.component.html"),
            animations: [_components_animation__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], KeepersComponent);
    return KeepersComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6\" [@fadeIn]>\n\n    <h1>{{title}}</h1>\n\n    <div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\n        Login correcto\n    </div>\n    \n    <div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\n        No te has identificado correctamente\n    </div>\n\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-7\">\n        <p>\n            <label>Email:</label>\n            <input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" class=\"form-control\" required />\n        </p>    \n        <span *ngIf=\"!email.valid && email.touched\">\n            El email es obligatorio\n        </span>\n        <p>\n        <label>Password:</label>\n            <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\"class=\"form-control\" required />\n        <span *ngIf=\"!password.valid && password.touched\">\n            El password es obligatorio\n        </span>\n        </p>   \n       <input type=\"submit\" value=\"Log In\" class=\"btn btn-success\" />\n    </form>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/animation */ "./src/app/components/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.title = 'Login';
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', 'ROLE_USER', '');
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login component cargado');
        console.log(localStorage.getItem('identity'));
        console.log(localStorage.getItem('token'));
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.sign_up(this.user).subscribe(function (response) {
            _this.indentity = response.user;
            if (!_this.indentity || !_this.indentity._id) {
                _this.status = 'success';
            }
            else {
                _this.indentity.password = '';
                localStorage.setItem('identity', JSON.stringify(_this.indentity));
                _this._userService.sign_up(_this.user, 'true').subscribe(function (response) {
                    _this.token = response.token;
                    if (_this.token.length <= 0) {
                        alert("El token no se ha generado");
                    }
                    else {
                        localStorage.setItem('token', _this.token);
                        _this.status = 'success';
                        _this._router.navigate(['/']);
                    }
                }, function (error) {
                    var error_message = error;
                    if (error_message != null) {
                        var body = JSON.parse(error._body);
                        _this.status = 'error';
                    }
                });
            }
        }, function (error) {
            var error_message = error;
            if (error_message != null) {
                var body = JSON.parse(error._body);
                _this.status = 'error';
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
            animations: [_components_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/parques/parques.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/parques/parques.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{nombre}}</h2>\n\n<ol>\n    <li>metros {{metros}}</li>\n    <li>vegetación {{vegetacion}}</li>\n    <li>\n        <span *ngIf=\"abierto==true\">Abierto</span>\n        <span *ngIf=\"abierto!=true\">Cerrado</span>\n    </li>\n</ol>\n\n<button (click)=\"emitirEvento($event)\">Mostrar en el Padre</button>"

/***/ }),

/***/ "./src/app/components/parques/parques.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/parques/parques.component.ts ***!
  \*********************************************************/
/*! exports provided: ParquesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParquesComponent", function() { return ParquesComponent; });
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

var ParquesComponent = /** @class */ (function () {
    function ParquesComponent() {
        this.pasameLosDatos = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nombre = 'Tienda para caballos';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = true;
    }
    ParquesComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    ParquesComponent.prototype.ngOnInit = function () {
        console.log("OnInit ");
    };
    ParquesComponent.prototype.ngDoCheck = function () {
        //  console.log("DoCheck");
    };
    ParquesComponent.prototype.emitirEvento = function () {
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ParquesComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ParquesComponent.prototype, "pasameLosDatos", void 0);
    ParquesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'parque',
            template: __webpack_require__(/*! ./parques.component.html */ "./src/app/components/parques/parques.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ParquesComponent);
    return ParquesComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6\" [@fadeIn]>\n    <h1>{{title}}</h1>\n\n    <div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\n        You have successfully registered at the Zoo please click this <a [routerLink]=\"['/login']\">link</a> to continue\n    </div>\n\n    <div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\n        {{errorMessage}}\n    </div>\n\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-10\" autocomplete=\"false\">\n        <p>\n            <label>Nombre</label>\n            <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"user.name\" class=\"form-control\" readonly onfocus=\"this.removeAttribute('readonly')\" required />\n            <span id=\"name_span\" *ngIf=\"!name.valid && name.touched && (shown != 'true') \">\n                El nombre es obligatorio\n            </span>\n        </p>\n        <p>\n            <label>Apellidos</label>\n            <input type=\"text\" name=\"surname\" id=\"surname\" #surname=\"ngModel\" [(ngModel)]=\"user.surname\" class=\"form-control\" readonly onfocus=\"this.removeAttribute('readonly')\" required />\n            <span id=\"surname_span\" *ngIf=\"!surname.valid && surname.touched && (shown != 'true')\">\n                    Los apellidos son obligatorio\n                </span>\n        </p>\n        <p>\n            <label>Email</label>\n            <input type=\"text\" id=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" readonly onfocus=\"this.removeAttribute('readonly')\" class=\"form-control\" required />\n            <span id=\"email_span\" *ngIf=\"!email.valid && email.touched && (shown != 'true')\">\n                    El email son obligatorio\n             </span>\n        </p>\n        <p>\n            <label>Password</label>\n            <input type=\"password\" id=\"password\" readonly onfocus=\"this.removeAttribute('readonly')\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" class=\"form-control\" required />\n            <span id=\"password_span\" *ngIf=\"!password.valid && password.touched && (shown != 'true')\">\n                La contraseña no es correcta\n            </span>\n        </p>\n        <p>\n            <label>Confirm Password</label>\n            <input type=\"password\" id=\"confirmPassword\" readonly onfocus=\"this.removeAttribute('readonly')\" name=\"confirmPassword\" #confirmPassword=\"ngModel\" [(ngModel)]=\"cPassword\" class=\"form-control\" required />\n            <span id=\"password_span\" *ngIf=\"!password.valid && password.touched && (shown != 'true')\">\n          This field is required\n        </span>\n        </p>\n        <input type=\"submit\" value=\"{{title}}\" class=\"btn btn-primary\" />\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/animation */ "./src/app/components/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.title = 'Register';
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', 'ROLE_USER', '');
        this.shown = 'false';
    }
    RegisterComponent.prototype.validateSignUpInfo = function () {
        this.errorMessage = '';
        this.status = '';
        if (!this.user.name || !this.user.surname || !this.user.password || !this.user.email ||
            this.user.name.trim() === '' || this.user.surname.trim() === '' ||
            this.user.password.trim() === '' || this.user.email.trim() === '') {
            this.errorMessage = 'Please fill all the fields in the registration form since all are required tor register at the Zoo';
            this.status = 'error';
            return false;
        }
        if (this.user.password !== this.cPassword) {
            this.errorMessage = 'The passwords you entered didn\'t match.  Please try again.';
            this.status = 'error';
            return false;
        }
        if (!this.validateEmail()) {
            this.errorMessage = 'The email you entered is not a valid email.  Please try again.';
            this.status = 'error';
            return false;
        }
        if (!this.validatePassword()) {
            this.errorMessage = "Your password needs to be at least eight characters long,\n                combine upper case and lower case letters, include a number, and a one of these\n                three special characters (@, ?. or !).";
            this.status = 'error';
            return false;
        }
        return true;
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.validateSignUpInfo()) {
            this._userService.register(this.user).subscribe(function (response) {
                console.log('here');
                if (response.user._id) {
                    _this.status = 'success';
                    _this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', 'ROLE_USER', '');
                    _this.shown = 'true';
                }
                else {
                    _this.status = 'error';
                }
            }, function (error) {
                _this.errorMessage = 'The email you entered has already been registered at the Zoo. Please follow password recovery link.';
                _this.status = 'error';
            });
        }
    };
    RegisterComponent.prototype.validateEmail = function () {
        // tslint:disable-next-line: max-line-length
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.user.email);
    };
    RegisterComponent.prototype.validatePassword = function () {
        // tslint:disable-next-line: max-line-length
        var re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@\?])(?=.{8,})');
        return re.test(this.user.password);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
            animations: [_components_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/store/store.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/store/store.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" [@fadeIn]>\n\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-10\" autocomplete=\"false\">\n        <input id=\"buttonDelay\" type=\"submit\" value=\"Display text after 20 seconds of clicking\" class=\"btn btn-success\" />\n        <div id=\"textDelay\" class=\"alert alert-success\" *ngIf=\"isDislayButtonText\">\n            This text was shown after 20 seconds of clicking the above button\n        </div>\n    </form>\n\n</div>"

/***/ }),

/***/ "./src/app/components/store/store.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/store/store.component.ts ***!
  \*****************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
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

var StoreComponent = /** @class */ (function () {
    // private isTimeOutEnabled = false;
    function StoreComponent() {
        this.isDislayButtonText = false;
    }
    StoreComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.isDislayButtonText) {
            this.isDislayButtonText = false;
        }
        setTimeout(function () {
            _this.isDislayButtonText = true;
        }, 20000);
    };
    StoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'store',
            template: __webpack_require__(/*! ./store.component.html */ "./src/app/components/store/store.component.html"),
            styles: ['h1 {color: blue}']
        }),
        __metadata("design:paramtypes", [])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/app/components/team-detail/team-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/team-detail/team-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animal-box col-lg-11\" *ngIf=\"team\">\n    <div id=\"animal-head-card\" class=\"col-lg-4 pull-left\">\n        <img src=\"{{url + 'get-image-team/' + team.image}}\" style=\"width:300px\" />\n    </div>\n    <div class=\"animal-data col-lg-7 pull-left\">\n        <h1>{{team.name}}</h1>\n        <p>{{team.user.name + ' ' + team.user.surname}}</p>\n        <p>{{team.year}}</p>\n        <p>{{team.description}}</p>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/team-detail/team-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/team-detail/team-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeamDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailComponent", function() { return TeamDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamDetailComponent = /** @class */ (function () {
    function TeamDetailComponent(_route, _router, _teamService) {
        this._route = _route;
        this._router = _router;
        this._teamService = _teamService;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
    }
    TeamDetailComponent.prototype.ngOnInit = function () {
        this.getTeam();
    };
    TeamDetailComponent.prototype.getTeam = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._teamService.get_team(id).subscribe(function (response) {
                if (!response.team) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.team = response.team;
                }
            }, function (error) {
                console.log(error);
                _this._router.navigate(['/home']);
            });
        });
    };
    TeamDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'team-detail',
            template: __webpack_require__(/*! ./team-detail.component.html */ "./src/app/components/team-detail/team-detail.component.html"),
            providers: [_services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]])
    ], TeamDetailComponent);
    return TeamDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/teams/teams.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/teams/teams.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" [@fadeIn]>\n    <h1>{{title}}</h1>\n\n\n    <div class=\"col-lg-3\" *ngFor=\"let team of teams\">\n        <div class=\"thumbnail\">\n            <div>\n                <img *ngIf=\"team.image\" class=\"animal-image-mask\" src=\"{{ url + 'get-image-team/' + team.image }}\" alt=\"{{team.name}}\">\n                <img *ngIf=\"!team.image\" src=\"https://via.placeholder.com/270x200\" alt=\"{{team.name}}\">\n                <div class=\"caption\">\n                    <h3><a [routerLink]=\"['/team', team._id]\">{{team.name}}</a></h3>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/teams/teams.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/teams/teams.component.ts ***!
  \*****************************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _components_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/animation */ "./src/app/components/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(_teamService) {
        this._teamService = _teamService;
        this.title = 'Teams';
        this.title = "Teams";
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    TeamsComponent.prototype.ngOnInit = function () {
        console.log("TeamsComponent OnInit");
        this.getTeams();
    };
    TeamsComponent.prototype.getTeams = function () {
        var _this = this;
        this._teamService.get_teams().subscribe(function (response) {
            if (!response.teams) {
            }
            else {
                _this.teams = response.teams;
            }
        }, function (error) {
            console.log(error);
        });
    };
    TeamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'teams',
            template: __webpack_require__(/*! ./teams.component.html */ "./src/app/components/teams/teams.component.html"),
            providers: [_services_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]],
            animations: [_components_animation__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]]
        }),
        __metadata("design:paramtypes", [_services_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-edit/user-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6\">\n    <h1>{{title}}</h1>\n\n    <div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\n        Has actualizado tu información correctamente\n    </div>\n    \n    <div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\n        No has actualizado tu información correctamente\n    </div>\n\n    <form #userEditForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-10\">\n        <p>\n            <label>Nombre</label>\n            <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"user.name\" class=\"form-control\" readonly onfocus=\"this.removeAttribute('readonly')\" required />\n            <span id=\"name_span\" *ngIf=\"!name.valid && name.touched && (shown != 'true') \">\n                El nombre es obligatorio\n            </span>\n        </p>    \n        <p>\n            <label>Apellidos</label>\n            <input type=\"text\" name=\"surname\" id=\"surname\" #surname=\"ngModel\" [(ngModel)]=\"user.surname\" class=\"form-control\" readonly onfocus=\"this.removeAttribute('readonly')\" required />\n                <span id=\"surname_span\" *ngIf=\"!surname.valid && surname.touched && (shown != 'true')\">\n                    Los apellidos son obligatorio\n                </span>\n            </p>    \n        <p>\n            <label>Email</label>\n            <input  type=\"text\" id=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" readonly onfocus=\"this.removeAttribute('readonly')\" class=\"form-control\" required />\n            <span id=\"email_span\" *ngIf=\"!email.valid && email.touched && (shown != 'true')\">\n                    El email son obligatorio\n             </span>\n        </p>    \n\n        <div class=\"image_for_edit\" *ngIf=\"user.image && user.image != 'null'\">\n            <img src=\"{{ url + 'get-image-file/' + user.image }}\" />\n        </div>\n\n        <p>\n            <label>Sube to avatar</label>\n            <input type=\"file\" placeholder=\"Subir Imagen\" (change)=\"fileChangeEvent($event)\" />\n        </p>\n        <input type=\"submit\" value=\"{{title}}\" class=\"btn btn-primary\" />\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-edit/user-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(_userService, _uploadService) {
        this._userService = _userService;
        this._uploadService = _uploadService;
        this.title = "Edit my profile";
        this.identity = this._userService.get_identity();
        this.token = this._userService.get_token();
        this.user = this.identity;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        //console.log('se ha cargado el componente');
        this.token = this._userService.get_token();
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        delete this.user.password;
        console.log(this.user);
        this._userService.update_user(this.user).subscribe(function (response) {
            if (!response.user) {
                _this.status = "error";
            }
            else {
                localStorage.setItem('identity', JSON.stringify(_this.user));
                _this.status = "success";
                _this._uploadService.make_file_request(_this.url + 'upload-image-user/' + _this.user._id, [], _this.filesToUpload, _this.token, 'image')
                    .then(function (result) {
                    _this.user.image = result.image;
                    localStorage.setItem('identity', JSON.stringify(_this.user));
                });
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = "error";
            }
        });
    };
    UserEditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    UserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/components/user-edit/user-edit.component.html"),
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/models/team.ts":
/*!********************************!*\
  !*** ./src/app/models/team.ts ***!
  \********************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
var Team = /** @class */ (function () {
    function Team(_id, name, league, description, year, image, user) {
        this._id = _id;
        this.name = name;
        this.league = league;
        this.description = description;
        this.year = year;
        this.image = image;
        this.user = user;
    }
    return Team;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, name, surname, email, password, role, image) {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.image = image;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/moduloemail/components/guardar-email/guardar-email.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/moduloemail/components/guardar-email/guardar-email.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>{{title}}</h4>\n<input type=\"text\" [(ngModel)]=\"emailContacto\"  />\n<button (click)=\"guardarEmail()\">Guardar Email</button>"

/***/ }),

/***/ "./src/app/moduloemail/components/guardar-email/guardar-email.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/moduloemail/components/guardar-email/guardar-email.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GuardarEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardarEmailComponent", function() { return GuardarEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GuardarEmailComponent = /** @class */ (function () {
    function GuardarEmailComponent() {
        this.title = 'Guardar email';
    }
    GuardarEmailComponent.prototype.guardarEmail = function () {
        localStorage.setItem('emailContacto', this.emailContacto);
    };
    GuardarEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guardar-email',
            template: __webpack_require__(/*! ./guardar-email.component.html */ "./src/app/moduloemail/components/guardar-email/guardar-email.component.html")
        })
    ], GuardarEmailComponent);
    return GuardarEmailComponent;
}());



/***/ }),

/***/ "./src/app/moduloemail/components/main-email/main-email.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/moduloemail/components/main-email/main-email.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainEmailComponent", function() { return MainEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainEmailComponent = /** @class */ (function () {
    function MainEmailComponent() {
        this.title = 'Modulo de emails';
    }
    MainEmailComponent.prototype.ngOnInit = function () {
        console.log("componente principal del modulo cargado");
    };
    MainEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-email',
            template: "\n    <div class=\"panel panel-default\">\n    <h1>{{title}}</h1>\n    <mostrar-email></mostrar-email>\n    <guardar-email></guardar-email>\n    </div>\n  ",
        })
    ], MainEmailComponent);
    return MainEmailComponent;
}());



/***/ }),

/***/ "./src/app/moduloemail/components/mostrar-email/mostrar-email.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/moduloemail/components/mostrar-email/mostrar-email.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MostrarEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostrarEmailComponent", function() { return MostrarEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MostrarEmailComponent = /** @class */ (function () {
    function MostrarEmailComponent() {
        this.title = 'Mostrar email';
    }
    MostrarEmailComponent.prototype.ngOnInit = function () {
        this.emailContacto = localStorage.getItem('emailContacto');
    };
    MostrarEmailComponent.prototype.ngDoCheck = function () {
        this.emailContacto = localStorage.getItem('emailContacto');
    };
    MostrarEmailComponent.prototype.borrarEmail = function () {
        localStorage.removeItem('emailContacto');
        localStorage.clear;
        this.emailContacto = null;
    };
    MostrarEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mostrar-email',
            template: "\n        <h4>{{title}}</h4>\n\n        <span *ngIf=\"emailContacto\">\n            <strong>Email de contacto:</strong> {{emailContacto}}\n            <button (click)=\"borrarEmail()\">Eliminar email de contacto</button>\n        </span>\n  ",
        })
    ], MostrarEmailComponent);
    return MostrarEmailComponent;
}());



/***/ }),

/***/ "./src/app/moduloemail/moduloemail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/moduloemail/moduloemail.module.ts ***!
  \***************************************************/
/*! exports provided: ModuloemailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuloemailModule", function() { return ModuloemailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_guardar_email_guardar_email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/guardar-email/guardar-email.component */ "./src/app/moduloemail/components/guardar-email/guardar-email.component.ts");
/* harmony import */ var _components_mostrar_email_mostrar_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mostrar-email/mostrar-email.component */ "./src/app/moduloemail/components/mostrar-email/mostrar-email.component.ts");
/* harmony import */ var _components_main_email_main_email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-email/main-email.component */ "./src/app/moduloemail/components/main-email/main-email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// importar componentes



var ModuloemailModule = /** @class */ (function () {
    function ModuloemailModule() {
    }
    ModuloemailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_guardar_email_guardar_email_component__WEBPACK_IMPORTED_MODULE_3__["GuardarEmailComponent"],
                _components_mostrar_email_mostrar_email_component__WEBPACK_IMPORTED_MODULE_4__["MostrarEmailComponent"],
                _components_main_email_main_email_component__WEBPACK_IMPORTED_MODULE_5__["MainEmailComponent"]
            ],
            exports: [_components_main_email_main_email_component__WEBPACK_IMPORTED_MODULE_5__["MainEmailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ]
        })
    ], ModuloemailModule);
    return ModuloemailModule;
}());



/***/ }),

/***/ "./src/app/services/admin.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/services/admin.guard.ts ***!
  \*****************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    AdminGuard.prototype.canActivate = function () {
        var identity = this._userService.get_identity();
        if (identity && identity.role == 'ROLE_ADMIN') {
            return true;
        }
        else {
            this._router.navigate(['/home']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/services/global.ts":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: GLOBAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
var GLOBAL = {
    url: "http://localhost:3789/api/"
};


/***/ }),

/***/ "./src/app/services/team.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/team.service.ts ***!
  \******************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamService = /** @class */ (function () {
    function TeamService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    TeamService.prototype.add_team = function (token, team) {
        var params = JSON.stringify(team);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'team', params, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    TeamService.prototype.get_teams = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.get(this.url + 'teams', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    TeamService.prototype.get_team = function (id) {
        return this._http.get(this.url + 'team/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    TeamService.prototype.edit_team = function (token, id, team) {
        var params = JSON.stringify(team);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'team/' + id, params, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    TeamService.prototype.delete_team = function (token, id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.delete(this.url + 'team/' + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    TeamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadService = /** @class */ (function () {
    function UploadService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    UploadService.prototype.make_file_request = function (url, params, files, token, name) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    UserService.prototype.register = function (user_to_register) {
        var params = JSON.stringify(user_to_register);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'register', params, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.sign_up = function (user_to_login, get_token) {
        if (get_token === void 0) { get_token = null; }
        if (get_token != null) {
            user_to_login.gettoken = get_token;
        }
        var params = JSON.stringify(user_to_login);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'login', params, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.get_identity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    UserService.prototype.get_token = function () {
        var token = localStorage.getItem('token');
        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    UserService.prototype.update_user = function (user_to_update) {
        var params = JSON.stringify(user_to_update);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': this.get_token()
        });
        return this._http.put(this.url + 'update-user/' + user_to_update._id, params, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.get_keepers = function () {
        return this._http.get(this.url + 'keepers')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! /Users/andres/code/fifa_test_app/fifa.frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map