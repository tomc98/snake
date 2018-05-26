webpackJsonp([0],{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_how_to__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leader_board_leader_board__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accounts_accounts__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        //values to be displayed on the page
        this.botCount = 3;
        this.account = { username: '', highscore: 0 };
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.loadPreferences();
    };
    HomePage.prototype.loadPreferences = function () {
        var _this = this;
        this.storage.get('activeuser').then(function (activeuser) {
            console.log(activeuser);
            _this.storage.get('accounts').then(function (accounts) {
                _this.account = accounts[activeuser];
            });
        });
    };
    //on play button pressed, go to game
    HomePage.prototype.onClickPlay = function () {
        var parameters = {
            enableBots: true,
            botCount: this.botCount
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__game_game__["a" /* GamePage */], parameters);
    };
    //on leader board button pressed, go there
    HomePage.prototype.onClickLeaderBoard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__leader_board_leader_board__["a" /* LeaderBoardPage */]);
    };
    //on how to play pressed, go there
    HomePage.prototype.onClickHowToPlay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__how_to_how_to__["a" /* HowToPage */]);
    };
    //on edit (account) pressed, go there
    HomePage.prototype.onClickEditAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__accounts_accounts__["a" /* AccountsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\home\home.html"*/'<!--\n\n	Generated template for the SplashPage page.\n\n\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n\n	Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n	<!-- main content -->\n\n	<div class="page_content">\n\n		\n\n		<!-- big top title -->\n\n		<div class = "title">\n\n			King Snake\n\n		</div>\n\n\n\n		<!-- snake image -->\n\n		<div align="center">\n\n			<img class = "snake" src="assets/imgs/snakepic.png">\n\n		</div>\n\n\n\n		<!-- main texual based content -->\n\n		<div class = "text">\n\n\n\n\n\n			<!-- user details -->\n\n			<table>\n\n				<tr>\n\n					<td>\n\n						<!-- greeting -->\n\n						Welcome {{account.username}}\n\n					</td>\n\n\n\n					<!-- avatar -->\n\n					<td align="right" rowspan="2">\n\n						<img class="avatar" src="{{account.avatar}}" (click)="onClickEditAccount()">\n\n					</td>\n\n				</tr>\n\n\n\n				<tr>\n\n					<!-- highcsore -->\n\n					<td>\n\n						Highscore: {{account.highscore}}\n\n					</td>\n\n				</tr>\n\n\n\n			</table>\n\n\n\n			<!-- user account edit button -->\n\n			<p>\n\n				<button ion-button color="blue1" (click)="onClickEditAccount()">Change</button>\n\n			</p>\n\n\n\n			<!-- bots option -->\n\n			<table>\n\n				<tr>\n\n					<td>\n\n						<!-- checkbox to enable bots -->\n\n						<ion-item>\n\n							<ion-label>Enable Bots</ion-label>\n\n							<ion-checkbox [(ngModel)]="bots"></ion-checkbox>\n\n						</ion-item>\n\n					</td>\n\n					<td align="right">\n\n						<!-- bots count -->\n\n						<ion-item>\n\n							<ion-input type="number" [(ngModel)]=\'botCount\' min="1" max="10" align="right"></ion-input>\n\n						</ion-item>\n\n					</td>\n\n				</tr>\n\n			</table>\n\n		</div>\n\n	</div>\n\n\n\n	<!-- bottom button layout -->\n\n	<div class="button_container">\n\n		<button ion-button color="blue1" (click)="onClickPlay()">Play</button>\n\n		<button ion-button color="blue2" (click)="onClickLeaderBoard()">Leader Board</button>\n\n		<button ion-button color="blue3" (click)="onClickHowToPlay()">How To Play</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lost_lost__ = __webpack_require__(197);
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
var GamePage = (function () {
    function GamePage(navCtrl, /*private nativeAudio: NativeAudio,*/ plt, navParams) {
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.navParams = navParams;
        //globally used values
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.points = 0;
        this.fruitX = window.innerWidth / 5;
        this.fruitY = innerHeight / 5;
        this.fruitC = "blue";
        this.fruitS = 20;
        this.colors = ["#FF8800", "#0088FF", "#88FF88", "rgb(88, 0, 255)"];
        this.botColour = "#555555";
        this.lives = 3;
        this.down = false;
        this.userSnake = [[window.innerWidth / 2, window.innerHeight / 2, this.getColor(0)], [window.innerWidth / 2, window.innerHeight / 2, this.getColor(0)]];
        this.snakes = [this.userSnake];
        var parameters = navParams.data;
        this.username = parameters.username;
        this.highScore = parameters.highScore;
        this.enableBots = parameters.enableBots;
        this.botCount = parameters.botCount;
    }
    //executes once all views have been initialised 
    GamePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        //init canvas
        this.ctx = this.myCanvas.nativeElement.getContext("2d");
        //init mouse/touch inputs
        var hammer = new window['Hammer'](this.myCanvas.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
        hammer.on('pan', function (event) {
            //process pan event
            _this.panUpdate(event.center.x, event.center.y);
        });
        //setup refresh interval
        this.theInt = setInterval(function () { _this.render(); }, 1000 / 60);
        //reset game to start
        this.setupGameState();
        this.loadSound();
    };
    //load sounds
    //TODO implement
    GamePage.prototype.loadSound = function () {
        //if (this.plt.is('android')) {
        //    this.nativeAudio.preloadSimple('pop', '../../assets/sounds/pop.mp3').then();
        //    this.nativeAudio.preloadSimple('1bite', '../../assets/sounds/1bite.mp3').then();
        //    this.nativeAudio.preloadSimple('2bite', '../../assets/sounds/2bite.mp3').then();
        //    this.nativeAudio.preloadSimple('3bite', '../../assets/sounds/3bite.mp3').then();
        //}
    };
    //draw the games state to canvas
    GamePage.prototype.render = function () {
        if (!this.checkSelfIntercept() && this.lives > 0) {
            //if still alive
            //draw background color
            this.drawBackground();
            //if position is defined
            if (this.posx != null) {
                //get and update next position
                var yo = this.getNextPosition(this.posx, this.posy, this.userSnake[0][0], this.userSnake[0][1], 10);
                this.userSnake[0][0] = yo[0];
                this.userSnake[0][1] = yo[1];
                //draw head
                this.drawCircle(this.userSnake[0][0], this.userSnake[0][1], 5, this.userSnake[0][2]);
                //for each following body circle
                for (var i = 1; i < this.userSnake.length; i++) {
                    //get and update next position
                    yo = this.getNextPosition(this.userSnake[i - 1][0], this.userSnake[i - 1][1], this.userSnake[i][0], this.userSnake[i][1], 10);
                    this.userSnake[i][0] = yo[0];
                    this.userSnake[i][1] = yo[1];
                    //draw body circle
                    this.drawCircle(this.userSnake[i][0], this.userSnake[i][1], 5, this.userSnake[i][2]);
                }
            }
            this.updateFruit();
        }
        else {
            //if player died
            //stop update interval
            clearInterval(this.theInt);
            //console.log(this.points);
            //this.navCtrl.pop();
            //navigate to lost page
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lost_lost__["a" /* LostPage */], this.points);
        }
    };
    //reset the games state and values
    GamePage.prototype.setupGameState = function () {
        this.points = 0;
        this.makeFruit();
        this.lives = 3;
        this.userSnake = [[window.innerWidth / 2, window.innerHeight / 2, this.getColor(0)], [window.innerWidth / 2, window.innerHeight / 2, this.getColor(0)]];
        this.snakes = [this.userSnake];
        if (this.enableBots) {
            for (var i = 0; i < this.botCount; i++) {
                var snake = [[window.innerWidth / 2, window.innerHeight / 2, this.botColour], [window.innerWidth / 2, window.innerHeight / 2, this.botColour]];
            }
        }
    };
    //draw circle onto canvas
    GamePage.prototype.drawCircle = function (x, y, r, c) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = c;
        this.ctx.fill();
        this.ctx.stroke();
    };
    //draw thebackground onto canvas
    GamePage.prototype.drawBackground = function () {
        this.ctx.fillStyle = "#b4a7d6";
        this.ctx.fillRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);
    };
    //draw a circle for the current fruit item
    GamePage.prototype.drawFruit = function () {
        this.drawCircle(this.fruitX, this.fruitY, this.fruitS, this.fruitC);
    };
    //process pan event (update global values)
    GamePage.prototype.panUpdate = function (x, y) {
        this.posx = x;
        this.posy = y;
    };
    //calculate next position of the snake circle 
    GamePage.prototype.getNextPosition = function (fx, fy, sx, sy, strength) {
        //setup relevant values
        var margin = 10;
        var xmove = fx - sx;
        var ymove = fy - sy;
        xmove = sx + xmove / 100 * strength;
        ymove = sy + ymove / 100 * strength;
        //distance between circle and target
        var distanceQuad = (xmove - fx) * (xmove - fx) + (ymove - fy) * (ymove - fy);
        //if its close enough, return target position
        if (distanceQuad <= (margin * margin)) {
            return [sx, sy];
        }
        //new position
        return [xmove, ymove];
    };
    //check of head of snake intercepts it self
    GamePage.prototype.checkSelfIntercept = function () {
        //setup relevant values
        var size = 10;
        var frontx = this.userSnake[0][0];
        var fronty = this.userSnake[0][1];
        var x;
        var y;
        var distanceQuad;
        //test if each of the body circles touch the first head circle
        for (var i = 2; i < this.userSnake.length; i++) {
            x = this.userSnake[i][0];
            y = this.userSnake[i][1];
            distanceQuad = (x - frontx) * (x - frontx) + (y - fronty) * (y - fronty);
            if (distanceQuad <= (size * size)) {
                //console.log("you lose")
                // this.nativeAudio.preloadSimple('dead', 'assets/sounds/dead.mp3').then();
                // this.nativeAudio.play('dead', () => console.log('uniqueId1 is done playing'));
                return true;
            }
        }
        return false;
    };
    //generate a new fruit item
    GamePage.prototype.makeFruit = function () {
        //fruit properties
        this.fruitX = this.getRandomInt(window.innerWidth / 10, (window.innerWidth / 10) * 9);
        this.fruitY = this.getRandomInt(window.innerHeight / 10, (window.innerHeight / 10) * 9);
        this.fruitS = 20;
        this.fruitC = this.getColor(this.points * 13);
        //other color selections
        //var randomNum = this.getRandomInt(0, this.colors.length -1);
        //this.fruitC = this.colors[randomNum];
        //var randomNum = this.getRandomInt(0, 359);
        //this.fruitC = this.getColor(randomNum)
    };
    //check if the current fruit item has been consumed
    GamePage.prototype.checkEat = function () {
        //get relevant data
        var size = this.fruitS + 5;
        var frontx = this.userSnake[0][0];
        var fronty = this.userSnake[0][1];
        //calculate distance between head and fruit
        var distanceQuad;
        distanceQuad = (this.fruitX - frontx) * (this.fruitX - frontx) + (this.fruitY - fronty) * (this.fruitY - fronty);
        //return if fruit is consumed
        return distanceQuad <= (size * size);
    };
    //reduce fruit size and spawn new one of needed
    GamePage.prototype.shrinkFruit = function () {
        if (this.fruitS > 1) {
            // of fruit is bigger than 1px, shrink it
            this.fruitS -= 0.05;
        }
        else {
            //if fruit is too small, spawn new one and subtract a life
            this.makeFruit();
            this.lives -= 1;
            //this.nativeAudio.play('pop', () => console.log('1bite is done playing'));
        }
    };
    //update the fruit properties if its eaten
    GamePage.prototype.updateFruit = function () {
        //if fruit has been eaten
        if (this.checkEat()) {
            //append new body circle to snake
            var last = this.userSnake.length - 1;
            var xSnake = this.userSnake[last][0];
            var ySnake = this.userSnake[last][1];
            this.userSnake.push([xSnake, ySnake, this.fruitC]);
            //generate new fruit and update points
            this.makeFruit();
            this.points += 1;
            //TODO audio
            //switch(this.getRandomInt(1,3)){
            //  case 1:
            //      this.nativeAudio.play('1bite', () => console.log('1bite is done playing'));
            //    break
            //  case 2:
            //      this.nativeAudio.play('2bite', () => console.log('uniqueId1 is done playing'));
            //    break
            //  case 3:
            //      this.nativeAudio.play('3bite', () => console.log('uniqueId1 is done playing'));
            //}
        }
        //shrink fruit item and draw it
        this.shrinkFruit();
        this.drawFruit();
    };
    //generate a random number in the provided range
    GamePage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    //get rgb color string with specified hue
    GamePage.prototype.getColor = function (h) {
        var r, g, b, s, v, sector, hueInSector, p, q, t;
        h %= 360;
        s = 0.75;
        v = 1;
        h /= 60;
        sector = Math.floor(h);
        hueInSector = h - sector;
        p = v * (1 - s);
        q = v * (1 - s * hueInSector);
        t = v * (1 - s * (1 - hueInSector));
        switch (sector) {
            case 0:
                r = v;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = v;
                b = p;
                break;
            case 2:
                r = p;
                g = v;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = v;
                break;
            case 4:
                r = t;
                g = p;
                b = v;
                break;
            case 5:
            default:
                r = v;
                g = p;
                b = q;
        }
        r = Math.floor(r * 255);
        g = Math.floor(g * 255);
        b = Math.floor(b * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myCanvas'),
        __metadata("design:type", Object)
    ], GamePage.prototype, "myCanvas", void 0);
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\game\game.html"*/'<!-- canvas to display th egame -->\n\n<canvas (move)="test($event)" width={{screenWidth}} height={{screenHeight}} #myCanvas></canvas>\n\n\n\n<!-- score and lives display -->\n\n<p class="stats">\n\n	<span style="float:left;">Score: {{points}}</span>\n\n	<span style="float:right;">Lives: {{lives}}</span>\n\n</p>\n\n'/*ion-inline-end:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\game\game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LostPage = (function () {
    function LostPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        //public variable to show points scored and highscore in html
        this.points = '0';
        this.highscore = null;
        this.account = null;
        //retrieve data from navigation params
        this.points = navParams.data;
        this.storage.get('activeuser').then(function (activeuser) {
            if (activeuser != null) {
                _this.storage.get('accounts').then(function (accounts) {
                    _this.account = accounts[activeuser];
                    if (_this.points > _this.account.highscore) {
                        _this.account.highscore = _this.points;
                        var historyObject = { datetime: new Date().toISOString(), highcore: _this.points };
                        _this.account.highscorehistory.push(historyObject);
                        _this.storage.set('accounts', accounts);
                    }
                });
            }
        });
    }
    //on back button click pop navigation stack to root
    LostPage.prototype.onClickBack = function () {
        this.navCtrl.popToRoot();
    };
    LostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lost',template:/*ion-inline-start:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\lost\lost.html"*/'<!--\n\n	Generated template for the LostPage page.\n\n\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n\n	Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<!-- main page content except bottom buttons -->\n\n	<div class="page_content">\n\n\n\n		<!-- big top title -->\n\n		<div class = "title">\n\n			The End\n\n		</div>\n\n\n\n		<!-- main texual based content -->\n\n		<table class="text">\n\n			<tr>\n\n				<td>\n\n					<!-- score and highscore if user account is setup -->\n\n					<p>You Scored: {{points}}</p>\n\n					<p *ngIf="account != null"><small>Highscore: {{account.highscore}}</small></p>\n\n				</td>\n\n			</tr>\n\n		</table>\n\n	</div>\n\n\n\n	<!-- bottom buttons layout -->\n\n	<div class="button_container">\n\n		<button ion-button color="red1" (click)="onClickBack()">Back</button>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\lost\lost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LostPage);
    return LostPage;
}());

//# sourceMappingURL=lost.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HowToPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HowToPage = (function () {
    function HowToPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    //not currently used
    HowToPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad HowToPage');
    };
    //on back button pressed, pop to root
    HowToPage.prototype.onClickBack = function () {
        this.navCtrl.popToRoot();
    };
    HowToPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-how-to',template:/*ion-inline-start:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\how-to\how-to.html"*/'<!--\n\n	Generated template for the HowToPage page.\n\n\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n\n	Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n	<!-- main content except bottom buttons -->\n\n	<div class="page_content">\n\n\n\n		<!-- big top buttons -->\n\n		<div class = "title">\n\n			How To Play\n\n		</div>\n\n		\n\n		<!-- main text based content - how to instructions -->\n\n		<div class = "text">\n\n			<p>\n\n				Here you\'ll be tought how to play a basic af game\n\n			</p>\n\n			<p>\n\n				Drag you finger or cusor to the location your snake shall slithers to\n\n			</p>\n\n			<p>\n\n				You need to consume all points before they disappear\n\n			</p>\n\n			<p>\n\n				Once you\'ve gained a point it will be appended to you snake\n\n			</p>\n\n			<p>\n\n				But beware you cannot consume your self! Otherwise it would be way to simple\n\n			</p>\n\n		</div>\n\n	</div>\n\n\n\n	<!-- bottom button layout -->\n\n	<div class="button_container">\n\n		<button ion-button color="yellow1" (click)="onClickBack()">Back</button>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\how-to\how-to.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HowToPage);
    return HowToPage;
}());

//# sourceMappingURL=how-to.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderBoardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LeaderBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaderBoardPage = (function () {
    function LeaderBoardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //dummy leader board list data
        this.staticLoeaderBoardData = [
            ["Jennifer", "121"],
            ["Amy", "117"],
            ["Joseph", "117"],
            ["Robert", "117"],
            ["Amba", "111"],
            ["Matthew", "110"],
            ["James", "108"],
            ["Jason", "108"],
            ["Justin", "107"],
            ["Stephanie", "107"],
            ["Lauren", "105"],
            ["Melissa", "103"],
            ["Daniel", "101"],
            ["Joshua", "99"],
            ["Sarah", "99"],
            ["David", "97"],
            ["Amanda", "89"],
            ["Nicole", "83"],
            ["Ashly", "82"],
            ["John", "70"],
            ["Andrew", "32"],
            ["Jessica", "32"],
            ["Micheal", "32"]
        ];
    }
    //insert leader board data into the page once html is loaded
    LeaderBoardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaderBoardPage');
        this.populateTable();
    };
    //on back button pressed, pop to root
    LeaderBoardPage.prototype.onClickBack = function () {
        this.navCtrl.popToRoot();
    };
    //adds the leader board data to the html table
    LeaderBoardPage.prototype.populateTable = function () {
        var table = document.getElementById("leader_board_table");
        //for data entry
        this.staticLoeaderBoardData.forEach(function (element) {
            var row = table.insertRow();
            var name = row.insertCell();
            name.innerHTML = element[0];
            var score = row.insertCell();
            score.innerHTML = element[1];
        });
    };
    LeaderBoardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leader-board',template:/*ion-inline-start:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\leader-board\leader-board.html"*/'<!--\n\n	Generated template for the LeaderBoardPage page.\n\n\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n\n	Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	\n\n	<!-- main content except buttom buttons -->\n\n	<div class="page_content">\n\n\n\n		<!-- bit top title -->\n\n		<div class = "title">\n\n			Leader Board\n\n		</div>\n\n\n\n		<!-- main text based content -->\n\n		<div class="text">\n\n\n\n			<!-- section title -->\n\n			<h3>\n\n				Highscore chart\n\n			</h3>\n\n			\n\n			<!-- chart image -->\n\n			<img src="assets/imgs/chart.png">\n\n\n\n			<!-- section title -->\n\n			<h3>\n\n				Global highscores\n\n			</h3>\n\n\n\n			<!-- leader board output table with header row -->\n\n			<table id="leader_board_table">\n\n				<tr>\n\n					<td>\n\n						Name\n\n					</td>\n\n					<td>\n\n						Score\n\n					</td>\n\n				</tr>\n\n			</table>\n\n		</div>\n\n	</div>\n\n\n\n	<!-- bottom button layout -->\n\n	<div class="button_container">\n\n		<button ion-button color="orange1" (click)="onClickBack()">Back</button>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\leader-board\leader-board.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LeaderBoardPage);
    return LeaderBoardPage;
}());

//# sourceMappingURL=leader-board.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_account_edit_account__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountsPage = (function () {
    function AccountsPage(navCtrl, navParams, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.accounts = [];
        this.activeuser = null;
    }
    AccountsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('accounts').then(function (accounts) {
            _this.accounts = accounts;
        });
        this.storage.get('activeuser').then(function (activeuser) {
            _this.activeuser = activeuser;
        });
    };
    AccountsPage.prototype.onClickBack = function () {
        this.navCtrl.pop();
    };
    AccountsPage.prototype.onClickSelect = function (i) {
        this.storage.set('activeuser', i);
        this.navCtrl.pop();
    };
    AccountsPage.prototype.onClickEdit = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_account_edit_account__["a" /* EditAccountPage */], i);
    };
    AccountsPage.prototype.onClickNew = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_account_edit_account__["a" /* EditAccountPage */], -1);
    };
    AccountsPage.prototype.onClickDelete = function (i) {
        var _this = this;
        //create comfirmation dialog
        var alert = this.alertCtrl.create({
            title: "Delete " + this.accounts[i].username + "'s account",
            subTitle: "Do you really want to delete " + this.accounts[i].username + "'s account and remove it from the leader board?",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                }, {
                    text: 'Delete',
                    handler: function () {
                        //delete username, birthday, highscores and leaderboard entry
                        _this.accounts.splice(i, 1);
                        _this.storage.set('accounts', _this.accounts);
                        // if removed account was above removed account, shift selected index up
                        if (i <= _this.activeuser) {
                            _this.storage.set('activeuser', _this.activeuser - 1);
                        }
                    }
                }
            ]
        });
        //show dialog
        alert.present();
    };
    AccountsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accounts',template:/*ion-inline-start:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\accounts\accounts.html"*/'<!--\n\n  Generated template for the AccountsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	\n\n	<!-- all of the page content except for the buttons -->\n\n	<div class="page_content">\n\n\n\n		<!-- Big top title -->\n\n		<div class = "title">\n\n			Accounts\n\n		</div>\n\n		\n\n		<!-- contains middle text based content -->\n\n		<div class = "text">\n\n\n\n			<!-- list of inputs -->\n\n			<ion-list>\n\n\n\n        <ion-item-sliding *ngFor="let account of accounts; index as i" class="account_item">\n\n\n\n          <ion-item (click)="onClickSelect(i)">\n\n            <img src="{{account.avatar}}"/>\n\n            <div>\n\n              <p>{{account.username}}</p>\n\n              <p>{{account.birthday | date:"dd/MM/yyyy"}}</p>\n\n            </div>\n\n          </ion-item>\n\n\n\n          <ion-item-options>\n\n\n\n            <button ion-button color="turquoise1" (click)="onClickEdit(i)">\n\n              Edit\n\n            </button>\n\n\n\n            <button ion-button color="red1" *ngIf="accounts.length > 1" (click)="onClickDelete(i)">\n\n              Delete\n\n            </button>\n\n\n\n          </ion-item-options>\n\n\n\n        </ion-item-sliding>\n\n\n\n        <ion-item class="account_item" (click)="onClickNew()">\n\n            <p>Add user</p>\n\n        </ion-item>\n\n\n\n			</ion-list>\n\n		</div>\n\n	</div>\n\n\n\n	<!-- contains buttom buttons -->\n\n	<div class="button_container">\n\n		<button ion-button color="turquoise1" (click)="onClickBack()">Back</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\accounts\accounts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AccountsPage);
    return AccountsPage;
}());

//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditAccountPage = (function () {
    function EditAccountPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        //values to be displayed on page
        this.activeaccount = -1;
        this.account = { username: '', birthday: '' };
        this.activeaccount = navParams.data;
        storage.get('accounts').then(function (accounts) {
            _this.accounts = accounts;
            // if new account
            if (_this.activeaccount == -1) {
                // default account
                _this.account = {
                    username: 'player' + (_this.accounts.length + 1),
                    birthday: new Date().toISOString(),
                    avatar: "assets/imgs/default_avatar.png",
                    highscore: 0,
                    highscorehistory: [
                        { datetime: new Date().toISOString(), highscore: 0 }
                    ]
                };
                _this.accounts.push(_this.account);
            }
            else {
                _this.account = _this.accounts[_this.activeaccount];
            }
        });
    }
    EditAccountPage.prototype.avatarSelected = function (files) {
        var _this = this;
        if (files.length >= 1) {
            var file = files[0];
            var fileReader_1 = new FileReader();
            fileReader_1.onload = function (e) {
                _this.account.avatar = fileReader_1.result;
            };
            fileReader_1.readAsDataURL(file);
        }
    };
    //on save button pressed
    EditAccountPage.prototype.onClickSave = function () {
        this.storage.set('accounts', this.accounts);
        this.navCtrl.pop();
    };
    //on cancel button pressed
    EditAccountPage.prototype.onClickCancel = function () {
        this.navCtrl.pop();
    };
    EditAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-account',template:/*ion-inline-start:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\edit-account\edit-account.html"*/'<!--\n\n	Generated template for the EditAccountPage page.\n\n\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n\n	Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	\n\n	<!-- all of the page content except for the buttons -->\n\n	<div class="page_content">\n\n\n\n		<!-- Big top title -->\n\n		<div class = "title">\n\n			Edit Account\n\n		</div>\n\n		\n\n		<!-- contains middle text based content -->\n\n		<div class = "text">\n\n\n\n			<!-- list of inputs -->\n\n			<ion-list>\n\n\n\n				<!-- Name input -->\n\n				<ion-item>\n\n					<ion-label color="turquoise4" stacked>Name</ion-label>\n\n					<ion-input placeholder="Name" [(ngModel)]="account.username"></ion-input>\n\n				</ion-item>\n\n\n\n				<!-- date input -->\n\n				<ion-item>\n\n					<ion-label color="turquoise4" stacked>Birthday</ion-label>\n\n					<ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="account.birthday"></ion-datetime>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n					<ion-thumbnail item-end>\n\n						<img src="{{account.avatar}}"/>\n\n					</ion-thumbnail>\n\n\n\n					<ion-label color="turquoise4" stacked>Avatar</ion-label>\n\n\n\n					<div class="avatar">\n\n					</div>\n\n				</ion-item>\n\n\n\n			</ion-list>\n\n						\n\n			<input \n\n				#fileInput \n\n				type="file" \n\n				accept="image/*"\n\n				(change)="avatarSelected(fileInput.files)">\n\n\n\n		</div>\n\n	</div>\n\n\n\n	<!-- contains buttom buttons -->\n\n	<div class="button_container">\n\n		<button ion-button color="turquoise1" (click)="onClickCancel()">Cancel</button>\n\n		<button ion-button color="turquoise2" (click)="onClickSave()">Save</button>\n\n	</div>\n\n</ion-content>\n\n	'/*ion-inline-end:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\pages\edit-account\edit-account.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
    ], EditAccountPage);
    return EditAccountPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=edit-account.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_game_game__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_how_to_how_to__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lost_lost__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_leader_board_leader_board__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_account_edit_account__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_accounts_accounts__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_audio__ = __webpack_require__(281);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_how_to_how_to__["a" /* HowToPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lost_lost__["a" /* LostPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_leader_board_leader_board__["a" /* LeaderBoardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_account_edit_account__["a" /* EditAccountPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_accounts_accounts__["a" /* AccountsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_how_to_how_to__["a" /* HowToPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lost_lost__["a" /* LostPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_leader_board_leader_board__["a" /* LeaderBoardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_account_edit_account__["a" /* EditAccountPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_accounts_accounts__["a" /* AccountsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                //SmartAudioProvider
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_audio__["a" /* NativeAudio */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(32);
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
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // accounts holds a list of all accounts
            // [
            //   {
            //     username:'name', 
            //     birthday:'bday', 
            //     avatar:image, 
            //     highscore:x, 
            //     highscorehistory:[
            //       {
            //         datetime:time,
            //         highscore:x
            //       },
            //       ...
            //     ]
            //   },
            //   ...
            // ]
            storage.get('accounts').then(function (val) {
                if (val == null) {
                    var defaultUser = {
                        username: 'player1',
                        birthday: new Date().toISOString(),
                        avatar: "assets/imgs/default_avatar.png",
                        highscore: 0,
                        highscorehistory: [
                            { datetime: new Date().toISOString(), highscore: 0 }
                        ]
                    };
                    storage.set('accounts', [defaultUser]);
                    storage.set('activeuser', 0);
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"X:\OneDrive\University\Interactive App Development 2701ICT\Assignment 2\snake\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map