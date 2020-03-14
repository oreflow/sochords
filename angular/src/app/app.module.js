"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var button_1 = require("@angular/material/button");
var form_field_1 = require("@angular/material/form-field");
var autocomplete_1 = require("@angular/material/autocomplete");
var toolbar_1 = require("@angular/material/toolbar");
var input_1 = require("@angular/material/input");
var icon_1 = require("@angular/material/icon");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("app/appcomponent/app.component");
var animations_1 = require("@angular/platform-browser/animations");
var home_component_1 = require("app/components/home/home.component");
var song_component_1 = require("app/components/song/song.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                song_component_1.SongComponent,
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                button_1.MatButtonModule,
                autocomplete_1.MatAutocompleteModule,
                form_field_1.MatFormFieldModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                toolbar_1.MatToolbarModule,
                forms_1.ReactiveFormsModule,
            ],
            providers: [],
            bootstrap: [
                app_component_1.AppComponent,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
