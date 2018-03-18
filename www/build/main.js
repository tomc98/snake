webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashPage = (function () {
    function SplashPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    SplashPage.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/home/tc/Documents/Programming/appdev/snake/src/pages/splash/splash.html"*/'<!--\n  Generated template for the SplashPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n<ion-content padding>\n  <img class = "snakepic"src="assets/imgs/snakepic.png">\n  <div class = "title">\n    <font color="red">K</font><font color="blue">i</font><font color="green">n</font><font color="purple">g </font>\n  </div>\n  <div class = "title2">\n    <font color="yellow">S</font><font color="white">n</font><font color="lime">a</font><font color="pink">k</font><font color="aqua">e</font>\n  </div>\n\n<button class="startBtn" ion-button (click)="onClick()">Play</button>\n</ion-content>\n'/*ion-inline-end:"/home/tc/Documents/Programming/appdev/snake/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splash_splash__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Firebase } from '@ionic-native/firebase';
var HomePage = (function () {
    function HomePage(navCtrl, nativeAudio, plt) {
        this.navCtrl = navCtrl;
        this.nativeAudio = nativeAudio;
        this.plt = plt;
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.points = 0;
        this.fruitX = window.innerWidth / 5;
        this.fruitY = innerHeight / 5;
        this.fruitC = "blue";
        this.fruitS = 20;
        this.lives = 3;
        this.down = false;
        this.snake = [[window.innerWidth / 2, window.innerHeight / 2, "red"], [window.innerWidth / 2, window.innerHeight / 2, "red"]];
    }
    HomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ctx = this.myCanvas.nativeElement.getContext("2d");
        var hammer = new window['Hammer'](this.myCanvas.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
        hammer.on('pan', function (event) {
            _this.clickUpdate(event.center.x, event.center.y);
        });
        this.theInt = setInterval(function () { _this.render(); }, 1000 / 60);
        this.restart();
        this.loadSound();
    };
    HomePage.prototype.loadSound = function () {
        if (this.plt.is('android')) {
            this.nativeAudio.preloadSimple('pop', '../../assets/sounds/pop.mp3').then();
            this.nativeAudio.preloadSimple('1bite', '../../assets/sounds/1bite.mp3').then();
            this.nativeAudio.preloadSimple('2bite', '../../assets/sounds/2bite.mp3').then();
            this.nativeAudio.preloadSimple('3bite', '../../assets/sounds/3bite.mp3').then();
        }
    };
    HomePage.prototype.render = function () {
        if (!this.checkLose() && this.lives > 0) {
            this.background();
            if (this.posx != null) {
                var yo = this.movement(this.posx, this.posy, this.snake[0][0], this.snake[0][1], 10);
                this.snake[0][0] = yo[0];
                this.snake[0][1] = yo[1];
                this.ball(this.snake[0][0], this.snake[0][1], 5, this.snake[0][2]);
                for (var i = 1; i < this.snake.length; i++) {
                    yo = this.movement(this.snake[i - 1][0], this.snake[i - 1][1], this.snake[i][0], this.snake[i][1], 10);
                    this.snake[i][0] = yo[0];
                    this.snake[i][1] = yo[1];
                    this.ball(this.snake[i][0], this.snake[i][1], 5, this.snake[i][2]);
                }
            }
            this.fruitProcess();
            this.displayPoints();
            this.displayLives();
        }
        else {
            console.log(this.points);
            clearInterval(this.theInt);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__splash_splash__["a" /* SplashPage */]);
        }
    };
    HomePage.prototype.restart = function () {
        this.points = 0;
        this.makeFruit();
        this.lives = 3;
        this.snake = [[window.innerWidth / 2, window.innerHeight / 2, "red"], [window.innerWidth / 2, window.innerHeight / 2, "red"]];
    };
    HomePage.prototype.background = function () {
        this.ctx.fillStyle = "#18ed09";
        this.ctx.fillRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);
    };
    HomePage.prototype.clickUpdate = function (x, y) {
        this.posx = x;
        this.posy = y;
    };
    HomePage.prototype.ball = function (x, y, r, c) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = c;
        this.ctx.fill();
        this.ctx.stroke();
    };
    HomePage.prototype.movement = function (fx, fy, sx, sy, strength) {
        //radius
        var size = 10;
        var xmove = fx - sx;
        var ymove = fy - sy;
        xmove = sx + xmove / 100 * strength;
        ymove = sy + ymove / 100 * strength;
        var distanceQuad = (xmove - fx) * (xmove - fx) + (ymove - fy) * (ymove - fy);
        if (distanceQuad <= (size * size)) {
            return [sx, sy];
        }
        return [xmove, ymove];
    };
    HomePage.prototype.checkLose = function () {
        var size = 10;
        var frontx = this.snake[0][0];
        var fronty = this.snake[0][1];
        var x;
        var y;
        var distanceQuad;
        for (var i = 2; i < this.snake.length; i++) {
            x = this.snake[i][0];
            y = this.snake[i][1];
            distanceQuad = (x - frontx) * (x - frontx) + (y - fronty) * (y - fronty);
            if (distanceQuad <= (size * size)) {
                console.log("you lose");
                // this.nativeAudio.preloadSimple('dead', 'assets/sounds/dead.mp3').then();
                // this.nativeAudio.play('dead', () => console.log('uniqueId1 is done playing'));
                return 1;
            }
        }
        return 0;
    };
    HomePage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    HomePage.prototype.makeFruit = function () {
        this.fruitX = this.getRandomInt(window.innerWidth / 10, (window.innerWidth / 10) * 9);
        this.fruitY = this.getRandomInt(window.innerHeight / 10, (window.innerHeight / 10) * 9);
        this.fruitS = 20;
        var cNum = this.getRandomInt(0, 10);
        switch (cNum) {
            case 0:
                this.fruitC = "blue";
                break;
            case 1:
                this.fruitC = "orange";
                break;
            case 2:
                this.fruitC = "red";
                break;
            case 3:
                this.fruitC = "green";
                break;
            case 4:
                this.fruitC = "yellow";
                break;
            case 5:
                this.fruitC = "purple";
                break;
            case 6:
                this.fruitC = "teal";
                break;
            case 7:
                this.fruitC = "black";
                break;
            case 8:
                this.fruitC = "grey";
                break;
            case 9:
                this.fruitC = "white";
                break;
            case 10:
                this.fruitC = "pink";
                break;
        }
    };
    HomePage.prototype.displayFruit = function () {
        this.ball(this.fruitX, this.fruitY, this.fruitS, this.fruitC);
    };
    HomePage.prototype.checkEat = function () {
        var size = this.fruitS + 5;
        var frontx = this.snake[0][0];
        var fronty = this.snake[0][1];
        var distanceQuad;
        distanceQuad = (this.fruitX - frontx) * (this.fruitX - frontx) + (this.fruitY - fronty) * (this.fruitY - fronty);
        if (distanceQuad <= (size * size)) {
            return 1;
        }
        return 0;
    };
    HomePage.prototype.displayPoints = function () {
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.points, window.innerWidth / 6 * 5, 50);
        this.ctx.stroke();
    };
    HomePage.prototype.displayLives = function () {
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.lives, window.innerWidth / 6, 50);
        this.ctx.stroke();
    };
    HomePage.prototype.fruitDisapear = function () {
        if (this.fruitS > 1) {
            this.fruitS -= 0.05;
        }
        else {
            this.makeFruit();
            this.lives -= 1;
            this.nativeAudio.play('pop', function () { return console.log('1bite is done playing'); });
        }
    };
    HomePage.prototype.fruitProcess = function () {
        if (this.checkEat()) {
            var last = this.snake.length - 1;
            var xSnake = this.snake[last][0];
            var ySnake = this.snake[last][1];
            this.snake.push([xSnake, ySnake, this.fruitC]);
            this.makeFruit();
            this.points += 1;
            switch (this.getRandomInt(1, 3)) {
                case 1:
                    this.nativeAudio.play('1bite', function () { return console.log('1bite is done playing'); });
                    break;
                case 2:
                    this.nativeAudio.play('2bite', function () { return console.log('uniqueId1 is done playing'); });
                    break;
                case 3:
                    this.nativeAudio.play('3bite', function () { return console.log('uniqueId1 is done playing'); });
            }
        }
        this.fruitDisapear();
        this.displayFruit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "myCanvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/tc/Documents/Programming/appdev/snake/src/pages/home/home.html"*/'<script src="lib/ionic/js/ionic.bundle.js"></script>\n<script src="lib/ngCordova/dist/ng-cordova.js"></script>\n<script src="cordova.js"></script>\n<canvas (move)="test($event)" width={{screenWidth}} height={{screenHeight}} #myCanvas></canvas>\n'/*ion-inline-end:"/home/tc/Documents/Programming/appdev/snake/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_splash_splash__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { Camera } from '@ionic-native/camera';



//import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_splash_splash__["a" /* SplashPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_splash_splash__["a" /* SplashPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                //SmartAudioProvider
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__["a" /* NativeAudio */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_splash_splash__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Camera } from '@ionic-native/camera';
//import { HomePage } from '../pages/home/home';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_splash_splash__["a" /* SplashPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/tc/Documents/Programming/appdev/snake/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/tc/Documents/Programming/appdev/snake/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map