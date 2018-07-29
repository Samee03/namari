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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/testimonial/testimonial.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"] },
    { path: 'About', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_4__["IntroComponent"] },
    { path: 'Services', component: _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"] },
    { path: 'Testimonials', component: _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialComponent"] },
    { path: 'Gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"] },
    { path: 'Clients', component: _client_client_component__WEBPACK_IMPORTED_MODULE_8__["ClientComponent"] },
    { path: 'Pricing', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__["PricingComponent"] },
    { path: 'Blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"] },
    { path: 'Post', component: _post_post_component__WEBPACK_IMPORTED_MODULE_11__["PostComponent"] },
    { path: 'Article/:id', component: _article_article_component__WEBPACK_IMPORTED_MODULE_12__["ArticleComponent"] },
    { path: '404', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundComponent"] },
    { path: '**', redirectTo: '/404' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\">\n  <div class=\"top-border wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\"></div>\n  <div class=\"right-border wow fadeInRight animated\" style=\"visibility: visible; animation-name: fadeInRight;\"></div>\n  <div class=\"bottom-border wow fadeInUp animated\" style=\"visibility: visible; animation-name: fadeInUp;\"></div>\n  <div class=\"left-border wow fadeInLeft animated\" style=\"visibility: visible; animation-name: fadeInLeft;\"></div>\n</div>\n\n<div id=\"wrapper\">\n  <!--Main Content Area-->\n  <main id=\"content\">\n    <app-navigation></app-navigation>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </main>\n  <!--End Main Content Area-->\n</div>\n\n"

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
        this.title = 'The Namari';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/testimonial/testimonial.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_intro_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/intro.service */ "./src/app/services/intro.service.ts");
/* harmony import */ var _services_testimonials_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/testimonials.service */ "./src/app/services/testimonials.service.ts");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/content.service */ "./src/app/services/content.service.ts");
/* harmony import */ var _services_gallery_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/gallery.service */ "./src/app/services/gallery.service.ts");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/clients.service */ "./src/app/services/clients.service.ts");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _services_pager_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/pager.service */ "./src/app/services/pager.service.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/blog.service */ "./src/app/services/blog.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialComponent"],
                _client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_12__["SocialComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_21__["BlogComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_22__["PostComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_23__["ArticleComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_24__["NotfoundComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_25__["PaginationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"]
            ],
            providers: [
                _services_config_service__WEBPACK_IMPORTED_MODULE_20__["ConfigService"],
                _services_intro_service__WEBPACK_IMPORTED_MODULE_14__["IntroService"],
                _services_testimonials_service__WEBPACK_IMPORTED_MODULE_15__["TestimonialsService"],
                _services_content_service__WEBPACK_IMPORTED_MODULE_16__["ContentService"],
                _services_gallery_service__WEBPACK_IMPORTED_MODULE_17__["GalleryService"],
                _services_clients_service__WEBPACK_IMPORTED_MODULE_18__["ClientsService"],
                _services_header_service__WEBPACK_IMPORTED_MODULE_19__["HeaderService"],
                _services_pager_service__WEBPACK_IMPORTED_MODULE_26__["PagerService"],
                _services_blog_service__WEBPACK_IMPORTED_MODULE_27__["BlogService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n        <!--Pricing Block-->\n        <div class=\"post-block col-1 wow fadeInUp\" data-wow-delay=\"0.4s\">\n            <app-post [post]=\"post\"></app-post>\n        </div>\n        <a (click)=\"getBack()\" class=\"button\">&larr; Back</a>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/blog.service */ "./src/app/services/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(route, blogService, location) {
        this.route = route;
        this.blogService = blogService;
        this.location = location;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.post = this.getPostById(id);
    };
    ArticleComponent.prototype.getPostById = function (id) {
        return this.blogService.getPostById(id);
    };
    ArticleComponent.prototype.getBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "post", void 0);
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n\n        <div class=\"section-heading\">\n            <h3>{{ blog.tagline }}</h3>\n            <h2 class=\"section-title\">{{ blog.title }}</h2>\n        </div>\n        <!--Pricing Block-->\n        <div class=\"post-block-content col-3 wow fadeInUp\" data-wow-delay=\"0.4s\" *ngFor=\"let post of pages\" [class.featured]=\"post.featured\">\n            <app-post [post]=\"post\">\n            </app-post>\n        </div>\n    </div>\n    <div class=\"row clearfix\">\n        <app-pagination [pager]=\"pager\" (setPage)=\"setPage($event)\"></app-pagination>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _services_pager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pager.service */ "./src/app/services/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogComponent = /** @class */ (function () {
    function BlogComponent(blogService, pagerService) {
        this.blogService = blogService;
        this.pagerService = pagerService;
        this.pageSize = 3;
        this.pager = {};
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.blog = this.blogService.getBlog();
        this.allItems = this.blog.posts;
        this.setPage(1);
    };
    BlogComponent.prototype.setPage = function (pageNumber) {
        //    Create a pager using paging service
        this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize);
        //    Current page posts
        this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _services_pager_service__WEBPACK_IMPORTED_MODULE_2__["PagerService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/client/client.component.html":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Clients-->\n<section id=\"clients\" class=\"scrollto clearfix\">\n  <div class=\"row clearfix\">\n\n    <div class=\"col-3\">\n\n      <div class=\"section-heading\">\n        <h3>{{ clients.tagline }}</h3>\n        <h2 class=\"section-title\">{{ clients.title}}</h2>\n        <p class=\"section-subtitle\">{{ clients.description }}</p>\n      </div>\n\n    </div>\n\n    <div class=\"col-2-3\">\n      <a href=\"#\" class=\"col-3\" *ngFor=\"let company of clients.companies\">\n        <img src=\"../../assets/images/company-images/{{ company.weblink }}\" alt=\"Company\"/>\n        <div class=\"client-overlay\"><span>{{ company.name }}</span></div>\n      </a>\n    </div>\n\n  </div>\n</section>\n<!--End of Clients-->"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/clients.service */ "./src/app/services/clients.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientComponent = /** @class */ (function () {
    function ClientComponent(clientsService) {
        this.clientsService = clientsService;
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.clients = this.clientsService.getClients();
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/client/client.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_clients_service__WEBPACK_IMPORTED_MODULE_1__["ClientsService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Content Section-->\n<div id=\"services\" class=\"scrollto clearfix\">\n\n  <div class=\"row no-padding-bottom clearfix\">\n\n\n    <!--Content Left Side-->\n    <div class=\"col-3\">\n      <!--User Testimonial-->\n      <blockquote class=\"testimonial text-right bigtest\">\n        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n          labore\n          et dolore magna aliqua</q>\n        <footer>— John Doe, Happy Customer</footer>\n      </blockquote>\n      <!-- End of Testimonial-->\n\n    </div>\n    <!--End Content Left Side-->\n\n    <!--Content of the Right Side-->\n    <div class=\"col-3\">\n      <div class=\"section-heading\">\n        <h3>{{ services.tagline }}</h3>\n        <h2 class=\"section-title\">{{ services.title }}</h2>\n        <p class=\"section-subtitle\">{{ services.description }}</p>\n      </div>\n      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n        dicta sunt explicabo.\n      </p>\n      <p>\n        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!\n      </p>\n      <!-- Just replace the Video ID \"UYJ5IjBRlW8\" with the ID of your video on YouTube (Found within the URL) -->\n      <a href=\"#\" data-videoid=\"UYJ5IjBRlW8\" data-videosite=\"youtube\" class=\"button video link-lightbox\">\n        WATCH VIDEO <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n    <!--End Content Right Side-->\n\n    <div class=\"col-3\">\n      <img src=\"../../assets/images/dancer.jpg\" alt=\"Dancer\"/>\n    </div>\n\n  </div>\n\n\n</div>\n<!--End of Content Section-->"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/content.service */ "./src/app/services/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = /** @class */ (function () {
    function ContentComponent(contentService) {
        this.contentService = contentService;
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.services = this.contentService.getService();
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer id=\"landing-footer\" class=\"clearfix\">\n  <div class=\"row clearfix\">\n\n    <p id=\"copyright\" class=\"col-2\">{{ footer.copyrightText }}\n        <strong>{{ footer.developer }}</strong><a href=\"#\"> </a>\n    </p>\n\n    <!--Social Icons in Footer-->\n    <ul class=\"col-2 text-right\">\n        <app-social></app-social>\n    </ul>\n    <!--End of Social Icons in Footer-->\n  </div>\n</footer>\n<!--End of Footer-->\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(configService) {
        this.configService = configService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.footer = this.configService.getConfig().footer;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Gallery-->\n<aside id=\"gallery\" class=\"row text-center scrollto clearfix\" data-featherlight-gallery\n       data-featherlight-filter=\"a\">\n    <h2>{{ images.title }}</h2>\n    <div *ngFor=\"let image of images.imagePath\">\n        <a href=\"../assets/images/gallery-images/{{ image.path }}\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n           data-wow-delay=\"0.1s\"><img src=\"../../assets/images/gallery-images/{{ image.path }}\" alt=\"Landing Page\"/></a>\n    </div>\n</aside>\n<!--End of Gallery-->"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gallery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/gallery.service */ "./src/app/services/gallery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(galleryService) {
        this.galleryService = galleryService;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.images = this.galleryService.getImages();
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_gallery_service__WEBPACK_IMPORTED_MODULE_1__["GalleryService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"banner\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\">\n  <!--Banner Content-->\n  <div id=\"banner-content\" class=\"row clearfix\">\n\n    <div class=\"col-38\">\n\n      <div class=\"section-heading\">\n        <h1>{{ header.heading }}</h1>\n        <h2>{{ header.headingText }}</h2>\n      </div>\n\n      <!--Call to Action-->\n      <a routerLink=\"{{ header.buttonLink }}\" class=\"button\">{{ header.buttonText }}</a>\n      <!--End Call to Action-->\n    </div>\n  </div><!--End of Row-->\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/header.service */ "./src/app/services/header.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(headerService) {
        this.headerService = headerService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.header = this.headerService.getHeader();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.html":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Introduction-->\n<section id=\"about\" class=\"introduction scrollto\">\n\n    <div class=\"row clearfix\">\n\n        <div class=\"col-3\">\n            <div class=\"section-heading\">\n                <h3>{{ intro.tagline }}</h3>\n                <h2 class=\"section-title\">{{ intro.title }}</h2>\n                <p class=\"section-subtitle\">{{ intro.description }}</p>\n            </div>\n        </div>\n\n        <div class=\"col-2-3\">\n            <!--Icon Block-->\n            <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\" *ngFor=\"let feature of intro.features\">\n                <!--Icon-->\n                <div class=\"icon\">\n                    <i class=\"fa fa-{{ feature.icon }} fa-2x\"></i>\n                </div>\n                <!--Icon Block Description-->\n                <div class=\"icon-block-description\">\n                    <h4>{{ feature.title }}</h4>\n                    <p>{{ feature.description }}</p>\n                </div>\n            </div>\n            <!--End of Icon Block-->\n            <!--Icon Block-->\n        </div>\n    </div>\n</section>\n<!--End of Introduction-->"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_intro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/intro.service */ "./src/app/services/intro.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntroComponent = /** @class */ (function () {
    function IntroComponent(introService) {
        this.introService = introService;
    }
    IntroComponent.prototype.ngOnInit = function () {
        this.intro = this.introService.getIntro();
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/intro/intro.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_intro_service__WEBPACK_IMPORTED_MODULE_1__["IntroService"]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start of Header-->\n<div id=\"header\" class=\"nav-collapse nav-solid\">\n  <div class=\"row clearfix\">\n    <div class=\"col-1\">\n      <!--Logo-->\n      <div id=\"logo\">\n        <!--Logo that is shown on the banner-->\n        <img src=\"../../assets/images/logo.png\" id=\"banner-logo\" alt=\"Landing Page\"/>\n        <!--End of Banner Logo-->\n        <!--The Logo that is shown on the sticky Navigation Bar-->\n        <img src=\"../../assets/images/logo-2.png\" id=\"navigation-logo\" alt=\"Landing Page\"/>\n        <!--End of Navigation Logo-->\n      </div>\n      <!--End of Logo-->\n\n      <aside>\n        <app-social></app-social>\n      </aside>\n\n      <!--Main Navigation-->\n      <nav id=\"nav-main\">\n        <ul>\n          <li>\n            <a routerLinkActive=\"active\" routerLink=\"/Home\">Home</a>\n          </li>\n          <li>\n            <a routerLinkActive=\"active\" routerLink=\"/About\">About</a>\n          </li>\n          <li>\n            <a routerLinkActive=\"active\" routerLink=\"/Gallery\">Gallery</a>\n          </li>\n          <li>\n            <a routerLinkActive=\"active\" routerLink=\"/Services\">Services</a>\n          </li>\n          <li>\n            <a routerLinkActive=\"active\" routerLink=\"/Testimonials\">Testimonials</a>\n          </li>\n          <li>\n            <a routerLinkActive=\"active\" routerLink=\"/Clients\">Clients</a>\n          </li>\n          <li>\n            <a routerLinkActive=\"active\" routerLink=\"/Pricing\">Pricing</a>\n          </li>\n            <li>\n                <a routerLinkActive=\"active\" routerLink=\"/Blog\">Blog</a>\n            </li>\n        </ul>\n      </nav>\n      <!--End of Main Navigation-->\n\n      <div id=\"nav-trigger\"><span></span></div>\n      <nav id=\"nav-mobile\"></nav>\n\n    </div>\n  </div>\n</div><!--End of Header-->"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-text {\r\n    font-size: 16em;\r\n}"

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n        <h1 class=\"big-text\">\n            404\n        </h1>\n        <h2>Nothing Found Here!! Try Out <a routerLink=\"/Home\">Home Page</a></h2>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
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

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagination/pagination.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination>li {\r\n    display: inline-block;\r\n    background: #ffffff;\r\n    border: 1px solid #dddddd;\r\n    margin-left: -0px;\r\n    padding: 10px 20px 10px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.pagination li {\r\n    text-decoration: none;\r\n}\r\n\r\n.pagination > li.active {\r\n    background: #005575;\r\n}\r\n\r\n.pagination > li.disabled {\r\n    background: #dddddd;\r\n    cursor: default;\r\n}"

/***/ }),

/***/ "./src/app/pagination/pagination.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"pager\" class=\"pagination\">\n    <li [class.disabled]=\"pager.currentPage == 1\"><a (click)=\"setCurrentPage(1)\">First</a></li>\n    <li [class.disabled]=\"pager.currentPage == 1\"><a (click)=\"setCurrentPage(pager.currentPage - 1)\">Previous</a></li>\n    <li *ngFor=\"let page of pager.pages\" [class.active]=\"pager.currentPage == page\" (click)=\"setCurrentPage(page)\">\n        <a>{{ page }}</a>\n    </li>\n    <li [class.disabled]=\"pager.currentPage == pager.totalPages\"><a (click)=\"setCurrentPage(pager.currentPage + 1)\">Next</a></li>\n    <li [class.disabled]=\"pager.currentPage == pager.totalPages\"><a (click)=\"setCurrentPage(pager.totalPages)\">Last</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
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

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.setPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.setCurrentPage = function (pageNumber) {
        this.setPage.emit(pageNumber);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pager", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "setPage", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-block-content:hover {\r\n    border-color: #d2b356;\r\n}\r\n.primary-color, .featured .post {\r\n    background-color: #d2b356;\r\n}\r\n.primary-color, .primary-color .section-title, .primary-color .section-subtitle, .post .featured {\r\n    color: #ffffff;\r\n}\r\n.post-block-content {\r\n    background: #ffffff;\r\n    padding: 25px 0 25px 0;\r\n    box-shadow: 0 1px 2px rbga(0, 0, 0, 0.07);\r\n    transition: all 0.2s ease-in-out 0s;\r\n    postion: relative;\r\n    border: 10px solid #ffffff;\r\n}\r\n.post-block ul {\r\n    list-style: none;\r\n    margin: 25px 0;\r\n}\r\n.post-block li {\r\n    padding: 14px 0;\r\n    border-bottom: 1px dotted#e1e1e1;\r\n}\r\n.post-block li:last-of-type {\r\n    border: none;\r\n}\r\n.post-block h3 {\r\n    font-size: 17px;\r\n    text-transform: uppercase;\r\n    padding-bottom: 0;\r\n}\r\n.post-sub {\r\n    font-style: italic;\r\n    color: #cccccc;\r\n    margin: 0 0 25px 0;\r\n}\r\n.post {\r\n    background-color: #f5f5f5;\r\n    padding: 25px;\r\n    position: relative;\r\n}\r\n.post-featured-image {\r\n    display: inline-block;\r\n    font-size: 62px;\r\n    font-weight: 700;\r\n    position: relative;\r\n}\r\n.post-featured-image span {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -20px;\r\n    font-size: 22px;\r\n}\r\n.post p {\r\n    font-style: italic;\r\n    color: #b4b4b4;\r\n    line-height: normal;\r\n    margin: 0;\r\n}"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block-content\" *ngIf=\"post != null; else noPost\">\n    <h3>{{ post.title }}</h3>\n    <p class=\"post-sub\">By {{ post.author }} | {{ post.publishDate | date: 'dd-MMM-yyyy'}}</p>\n    <div class=\"post-featured-image\">\n        <img src=\"../../assets/images/gallery-images/{{ post.image }}\">\n    </div>\n    <ul>\n        {{ post.excert }}\n    </ul>\n    <a routerLink=\"/Article/{{ post.id }}\">Read More...</a>\n</div>\n<ng-template #noPost>\n    <div class=\"clearfix\">\n        <h1 style=\"font-size: 10em;\">\n            404\n        </h1>\n        <h2>Nothing Found Here!! Try Out <a routerLink=\"/Home\">Home Page</a></h2>\n    </div>\n</ng-template>\n<!--End Pricing Block-->\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
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

var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/*!************************************************!*\
  !*** ./src/app/pricing/pricing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Pricing Tables-->\n<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n  <div class=\"row clearfix\">\n\n    <div class=\"section-heading\">\n      <h3>{{ pricing.tagline }}</h3>\n      <h2 class=\"section-title\">{{ pricing.title }}</h2>\n    </div>\n\n    <!--Pricing Block-->\n    <div class=\"pricing-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\" *ngFor=\"let plan of pricing.plans\" [class.featured]=\"plan.featured\">\n      <div class=\"pricing-block-content\">\n        <h3>{{ plan.title }}</h3>\n        <p class=\"pricing-sub\">{{ plan.subtitle }}</p>\n        <div class=\"pricing\">\n          <div class=\"price\"><span>{{ plan.currency }}</span>{{ plan.price }}</div>\n          <p>{{ plan.description }}</p>\n        </div>\n        <ul>\n          <li>{{ plan.feature.downloads }}</li>\n          <li>{{ plan.feature.extensions }}</li>\n          <li>{{ plan.feature.tutorials }}</li>\n          <li>{{ plan.feature.support }}</li>\n          <li>{{ plan.feature.updates }}</li>\n        </ul>\n        <a href=\"#\" class=\"button\">{{ plan.btnText}}</a>\n      </div>\n    </div>\n    <!--End Pricing Block-->\n  </div>\n</section>\n<!--End of Pricing Tables-->"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pricing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pricing.service */ "./src/app/services/pricing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PricingComponent = /** @class */ (function () {
    function PricingComponent(pricingService) {
        this.pricingService = pricingService;
    }
    PricingComponent.prototype.ngOnInit = function () {
        this.pricing = this.pricingService.getPricing();
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pricing/pricing.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_pricing_service__WEBPACK_IMPORTED_MODULE_1__["PricingService"]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/services/blog.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
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

var BlogService = /** @class */ (function () {
    function BlogService() {
        this.blog = {
            tagline: 'Concept Blog',
            title: 'Thoughts became things...',
            posts: [
                {
                    id: '1',
                    title: 'First Post',
                    author: 'Samee',
                    image: 'gallery-image-1.jpg',
                    publishDate: '2018-02-19T07:22Z',
                    excert: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aspernatur beatae blanditiis deleniti dolor dolores ex'
                },
                {
                    id: '2',
                    title: 'Second Post',
                    author: 'Samee',
                    image: 'gallery-image-2.jpg',
                    publishDate: '2018-02-19T07:22Z',
                    excert: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aspernatur beatae blanditiis deleniti dolor dolores ex'
                },
                {
                    id: '3',
                    title: 'Third Post',
                    author: 'Samee',
                    image: 'gallery-image-3.jpg',
                    publishDate: '2018-02-19T07:22Z',
                    excert: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aspernatur beatae blanditiis deleniti dolor dolores ex'
                },
                {
                    id: '4',
                    title: 'Fourth Post',
                    author: 'Samee',
                    image: 'gallery-image-4.jpg',
                    publishDate: '2018-02-19T07:22Z',
                    excert: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aspernatur beatae blanditiis deleniti dolor dolores ex'
                },
                {
                    id: '5',
                    title: 'Fifth Post',
                    author: 'Samee',
                    image: 'gallery-image-5.jpg',
                    publishDate: '2018-02-19T07:22Z',
                    excert: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aspernatur beatae blanditiis deleniti dolor dolores ex'
                },
                {
                    id: '6',
                    title: 'Sixth Post',
                    author: 'Samee',
                    image: 'gallery-image-6.jpg',
                    publishDate: '2018-02-19T07:22Z',
                    excert: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aspernatur beatae blanditiis deleniti dolor dolores ex'
                },
            ]
        };
    }
    BlogService.prototype.getBlog = function () {
        return this.blog;
    };
    BlogService.prototype.getPostById = function (id) {
        return this.blog.posts[id - 1];
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/services/clients.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/clients.service.ts ***!
  \*********************************************/
/*! exports provided: ClientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsService", function() { return ClientsService; });
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

var ClientsService = /** @class */ (function () {
    function ClientsService() {
        this.clients = {
            tagline: 'YOUR CHOICE',
            title: 'We have the right package for you',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
                '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
            companies: [
                {
                    name: 'Tree',
                    weblink: 'company-logo1.png',
                    logo: 'company-logo1.png'
                },
                {
                    name: 'Fingerprint',
                    weblink: 'company-logo2.png',
                    logo: 'company-logo2.png'
                },
                {
                    name: 'The Man',
                    weblink: 'company-logo3.png',
                    logo: 'company-logo3.png'
                },
                {
                    name: 'Mustache',
                    weblink: 'company-logo4.png',
                    logo: 'company-logo4.png'
                },
                {
                    name: 'Goat',
                    weblink: 'company-logo5.png',
                    logo: 'company-logo5.png'
                },
                {
                    name: 'Justice',
                    weblink: 'company-logo6.png',
                    logo: 'company-logo6.png'
                },
                {
                    name: 'Ball',
                    weblink: 'company-logo7.png',
                    logo: 'company-logo7.png'
                },
                {
                    name: 'Cold',
                    weblink: 'company-logo8.png',
                    logo: 'company-logo8.png'
                },
                {
                    name: 'Apple',
                    weblink: 'company-logo9.png',
                    logo: 'company-logo9.png'
                },
            ]
        };
    }
    ClientsService.prototype.getClients = function () {
        return this.clients;
    };
    ClientsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ClientsService);
    return ClientsService;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configurations */ "./src/app/services/configurations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.config = _configurations__WEBPACK_IMPORTED_MODULE_1__["configurations"];
    }
    ConfigService.prototype.getConfig = function () {
        return this.config;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/configurations.ts":
/*!********************************************!*\
  !*** ./src/app/services/configurations.ts ***!
  \********************************************/
/*! exports provided: configurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configurations", function() { return configurations; });
var configurations = {
    footer: {
        copyrightText: 'Made with love by',
        developer: 'M. Samee Ullah',
        developerLink: 'Concept Solution'
    },
    social: [
        { title: 'Facebook', target: '_blank', username: 'samee03', icon: 'facebook' },
        { title: 'Google', target: '_blank', username: 'samee03', icon: 'google-plus' },
        { title: 'Twitter', target: '_blank', username: 'samee03', icon: 'twitter' },
        { title: 'Instagram', target: '_blank', username: 'samee03', icon: 'instagram' },
        { title: 'Behance', target: '_blank', username: 'samee03', icon: 'behance' },
    ]
};


/***/ }),

/***/ "./src/app/services/content.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/content.service.ts ***!
  \*********************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
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

var ContentService = /** @class */ (function () {
    function ContentService() {
        this.services = {
            tagline: 'BELIEVING',
            title: 'How We Help You To Choose Best Course',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
                '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
        };
    }
    ContentService.prototype.getService = function () {
        return this.services;
    };
    ContentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ContentService);
    return ContentService;
}());



/***/ }),

/***/ "./src/app/services/gallery.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/gallery.service.ts ***!
  \*********************************************/
/*! exports provided: GalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
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

var GalleryService = /** @class */ (function () {
    function GalleryService() {
        this.images = {
            title: 'Our Top Photographers Capture this!',
            imagePath: [{
                    path: 'gallery-image-1.jpg'
                }, {
                    path: 'gallery-image-2.jpg'
                }, {
                    path: 'gallery-image-3.jpg'
                }, {
                    path: 'gallery-image-4.jpg'
                }, {
                    path: 'gallery-image-5.jpg'
                }, {
                    path: 'gallery-image-6.jpg'
                }, {
                    path: 'gallery-image-1.jpg'
                }, {
                    path: 'gallery-image-2.jpg'
                }, {
                    path: 'gallery-image-3.jpg'
                },
            ]
        };
    }
    GalleryService.prototype.getImages = function () {
        return this.images;
    };
    GalleryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "./src/app/services/header.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/header.service.ts ***!
  \********************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
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

var HeaderService = /** @class */ (function () {
    function HeaderService() {
        this.header = {
            heading: 'ConceptSolution',
            headingText: 'We are offering courses in IT & Computer Science field. ' +
                'Our best selling courses are Unity 3D, Web Development, Laravel',
            buttonText: 'Get Started',
            buttonLink: '/home'
        };
    }
    HeaderService.prototype.getHeader = function () {
        return this.header;
    };
    HeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./src/app/services/intro.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/intro.service.ts ***!
  \*******************************************/
/*! exports provided: IntroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroService", function() { return IntroService; });
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

var IntroService = /** @class */ (function () {
    function IntroService() {
        this.intro = {
            tagline: 'SUCCESS',
            title: 'Focusing On What Matters Most',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
                '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
            features: [{
                    icon: 'html5',
                    title: 'HTML5 &amp; CSS3',
                    description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro \n neglegentur iudico'
                }, {
                    icon: 'bolt',
                    title: 'Easy to Use',
                    description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro \n neglegentur iudico'
                }, {
                    icon: 'tablet',
                    title: 'Fully Responsive',
                    description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro \n neglegentur iudico'
                }, {
                    icon: 'rocket',
                    title: 'Parallax Effect',
                    description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro \n neglegentur iudico'
                }]
        };
    }
    IntroService.prototype.getIntro = function () {
        return this.intro;
    };
    IntroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], IntroService);
    return IntroService;
}());



/***/ }),

/***/ "./src/app/services/pager.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/pager.service.ts ***!
  \*******************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
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

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        var totalPages = Math.ceil(totalItems / pageSize);
        //    ensure that this do not fall out of bounds
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage;
        var endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            //    If more that 10 pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // If calculate start and end index Items
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min((startIndex + pageSize - 1), (totalItems - 1));
        // Current and array of pages
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/services/pricing.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pricing.service.ts ***!
  \*********************************************/
/*! exports provided: PricingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingService", function() { return PricingService; });
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

var PricingService = /** @class */ (function () {
    function PricingService(pricingService) {
        this.pricingService = pricingService;
        this.pricing = {
            tagline: 'YOUR CHOICE',
            title: 'We have the right package for you',
            description: '',
            plans: [
                {
                    title: 'PERSONAL',
                    subtitle: 'The standard version',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    price: '19',
                    currency: 'Rs',
                    feature: {
                        downloads: '5 Downloads',
                        extensions: '2 Extensions',
                        tutorials: 'Tutorials',
                        support: 'Forum Support',
                        updates: '1 Year Free Updates'
                    },
                    btnText: 'BUY TODAY', buttonLink: '', featured: true
                },
                {
                    title: 'Student',
                    subtitle: 'Most popular choice',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    price: '29',
                    currency: 'Rs',
                    feature: {
                        downloads: '15 Downloads',
                        extensions: '5 Extensions',
                        tutorials: 'Tutorials',
                        support: 'Forum Support',
                        updates: '2 Year Free Updates'
                    },
                    btnText: 'BUY TODAY', buttonLink: '', featured: true
                },
                {
                    title: 'Business',
                    subtitle: 'For the whole team',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    price: '49',
                    currency: 'Rs',
                    feature: {
                        downloads: 'Unlimited Downloads',
                        extensions: 'Unlimited Extensions',
                        tutorials: 'Hd Video Tutorials',
                        support: 'Chat Support',
                        updates: 'Life Time Free Updates'
                    },
                    btnText: 'BUY TODAY', buttonLink: '', featured: true
                },
            ]
        };
    }
    PricingService.prototype.getPricing = function () {
        return this.pricing;
    };
    PricingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [PricingService])
    ], PricingService);
    return PricingService;
}());



/***/ }),

/***/ "./src/app/services/testimonials.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/testimonials.service.ts ***!
  \**************************************************/
/*! exports provided: TestimonialsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsService", function() { return TestimonialsService; });
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

var TestimonialsService = /** @class */ (function () {
    function TestimonialsService() {
        this.testimonials = {
            tagline: 'FEEDBACK',
            title: 'What our customers are saying',
            description: '',
            feedbacks: [
                {
                    name: 'John Doe - Happy Customer',
                    userImage: 'user-1.jpg',
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                        '        labore\n' +
                        '        et dolore magna aliqua',
                    company: 'ABC',
                },
                {
                    name: 'Roslyn Doe - Happy Customer',
                    userImage: 'user-2.jpg',
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                        '        labore\n' +
                        '        et dolore magna aliqua',
                    company: 'DEF',
                },
                {
                    name: 'Thomas Doe - Happy Customer',
                    userImage: 'user-3.jpg',
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                        '        labore\n' +
                        '        et dolore magna aliqua',
                    company: 'GHI',
                },
                {
                    name: 'John Doe - Happy Customer',
                    userImage: 'user-1.jpg',
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                        '        labore\n' +
                        '        et dolore magna aliqua',
                    company: 'ABC',
                },
                {
                    name: 'Roslyn Doe - Happy Customer',
                    userImage: 'user-2.jpg',
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                        '        labore\n' +
                        '        et dolore magna aliqua',
                    company: 'DEF',
                },
                {
                    name: 'Thomas Doe - Happy Customer',
                    userImage: 'user-3.jpg',
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                        '        labore\n' +
                        '        et dolore magna aliqua',
                    company: 'GHI',
                },
            ]
        };
    }
    TestimonialsService.prototype.getTestimonials = function () {
        return this.testimonials;
    };
    TestimonialsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsService);
    return TestimonialsService;
}());



/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Social Icons in Header-->\n<ul class=\"social-icons\">\n  <li *ngFor=\"let site of socialSites\">\n    <a target=\"{{ site.target }}\" title=\"{{ site.title }}\" href=\"https://www.facebook.com/{{ site.username }}\">\n      <i class=\"fa fa-{{ site.icon }} fa-1x\"></i><span>{{ site.title }}</span>\n    </a>\n  </li>\n</ul>\n<!--End of Social Icons in Header-->"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_configurations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/configurations */ "./src/app/services/configurations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialComponent = /** @class */ (function () {
    function SocialComponent(configService) {
        this.configService = configService;
        this.socialSites = _services_configurations__WEBPACK_IMPORTED_MODULE_2__["configurations"].social;
    }
    SocialComponent.prototype.ngOnInit = function () {
        this.socialSites = this.configService.getConfig().social;
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/testimonial/testimonial.component.html":
/*!********************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Testimonials-->\n<aside id=\"testimonials\" class=\"scrollto text-center\" data-enllax-ratio=\".2\">\n\n    <div class=\"row clearfix\">\n\n        <div class=\"section-heading\">\n            <h3>{{ testimonials.tagline }}</h3>\n            <h2 class=\"section-title\">{{ testimonials.title }}</h2>\n        </div>\n\n        <!--User Testimonial-->\n        <blockquote class=\"col-3 testimonial classic\" *ngFor=\"let feedback of testimonials.feedbacks\">\n            <img src=\"../assets/images/user-images/{{ feedback.userImage }}\" alt=\"User\"/>\n            <q>{{ feedback.comments }}</q>\n            <footer>{{ feedback.name }}</footer>\n            <hr>\n        </blockquote>\n        <!-- End of User Testimonial-->\n    </div>\n\n</aside>\n<!--End of Testimonials-->"

/***/ }),

/***/ "./src/app/testimonial/testimonial.component.ts":
/*!******************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.ts ***!
  \******************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_testimonials_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/testimonials.service */ "./src/app/services/testimonials.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent(testimonialService) {
        this.testimonialService = testimonialService;
    }
    TestimonialComponent.prototype.ngOnInit = function () {
        this.testimonials = this.testimonialService.getTestimonials();
    };
    TestimonialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonial',
            template: __webpack_require__(/*! ./testimonial.component.html */ "./src/app/testimonial/testimonial.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_testimonials_service__WEBPACK_IMPORTED_MODULE_1__["TestimonialsService"]])
    ], TestimonialComponent);
    return TestimonialComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ultron\Desktop\Angular Apps\Namari\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map