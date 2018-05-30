webpackJsonp([0],{

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__how_to_how_to__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leader_board_leader_board__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accounts_accounts__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(33);
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
        this.computerDifficulty = 5;
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
            enableComputer: this.checkboxEnableComputer.checked,
            computerDifficulty: this.computerDifficulty
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('checkboxEnableComputer'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "checkboxEnableComputer", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/tc/Documents/Programming/appdev/snake/src/pages/home/home.html"*/'<!--\n	Generated template for the SplashPage page.\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n	Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n<ion-content padding>\n\n	<!-- main content -->\n	<div class="page_content">\n		\n		<!-- big top title -->\n		<div class = "title">\n			King Snake\n		</div>\n\n		<!-- snake image -->\n		<div align="center" style="display:none;">\n			<img class = "snake" src="assets/imgs/snakepic.png">\n		</div>\n\n		<!-- main texual based content -->\n		<div class = "text">\n\n\n			<!-- user details -->\n			<table>\n				<tr>\n					<td>\n						<!-- greeting -->\n						Welcome {{account.username}}\n					</td>\n\n					<!-- avatar -->\n					<td align="right" rowspan="2">\n						<img class="avatar" src="{{account.avatar}}" (click)="onClickEditAccount()">\n					</td>\n				</tr>\n\n				<tr>\n					<!-- highcsore -->\n					<td>\n						Highscore: {{account.highscore}}\n					</td>\n				</tr>\n\n			</table>\n\n			<!-- user account edit button -->\n			<p>\n				<button ion-button color="blue1" (click)="onClickEditAccount()">Change</button>\n			</p>\n\n			<ion-list>\n				<!-- checkbox to enable bots -->\n				<ion-item>\n					<ion-label>Enable Computer</ion-label>\n					<ion-checkbox #checkboxEnableComputer></ion-checkbox>\n				</ion-item>\n\n				<!-- bots count -->\n				<ion-item>\n						<ion-label>Difficulty</ion-label>\n					<ion-input type="number" [(ngModel)]=\'computerDifficulty\' min="1" max="10" align="right"></ion-input>\n				</ion-item>\n			</ion-list>\n		</div>\n	</div>\n\n	<!-- bottom button layout -->\n	<div class="button_container">\n		<button ion-button color="blue1" (click)="onClickPlay()">Play</button>\n		<button ion-button color="blue2" (click)="onClickLeaderBoard()">Leader Board</button>\n		<button ion-button color="blue3" (click)="onClickHowToPlay()">How To Play</button>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/tc/Documents/Programming/appdev/snake/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lost_lost__ = __webpack_require__(205);
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
        //mouse = {x: 0, y: 0};
        this.fruit = { x: window.innerWidth / 5, y: innerHeight / 5, color: 'red', size: 20 };
        this.botColour = "#555555";
        this.lives = 3;
        this.fruitColorDegreeGap = 15;
        this.backgroundColor = { h: 257, s: 0.22, v: 0.84 };
        this.falshColor = { h: 257, s: 0.22, v: 0.84 };
        this.flashIntensity = 0;
        // all snakes including bots if any
        this.snakes = [];
        this.enableComputer = false;
        this.computerSpeed = this.screenHeight / 1000;
        var parameters = navParams.data;
        this.enableComputer = parameters.enableComputer;
        this.computerDifficulty = parameters.computerDifficulty;
        console.log("enableBots: " + this.enableComputer);
        console.log("botCount: " + this.computerDifficulty);
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
        //reset game to start
        this.setupGameState();
        this.updateBotTargets();
        //setup refresh interval
        this.updateInterval = setInterval(function () { _this.update(); }, 1000 / 60);
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
    //reset the games state and values
    GamePage.prototype.setupGameState = function () {
        this.points = 0;
        this.makeFruit();
        this.lives = 3;
        this.snakes[0] = [
            { x: window.innerWidth / 2, y: window.innerHeight / 2 },
            { x: window.innerWidth / 2, y: window.innerHeight / 2 },
            { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        ];
        if (this.enableComputer) {
            this.spawnBot(1);
        }
    };
    GamePage.prototype.spawnBot = function (index) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        this.snakes[index] =
            [
                { x: x, y: y },
                { x: x, y: y },
                { x: x, y: y }
            ];
    };
    GamePage.prototype.update = function () {
        this.render();
        if (this.checkIntercept())
            this.lives = 0;
        if (this.lives == 0) {
            //if player died
            //stop update interval
            clearInterval(this.updateInterval);
            clearInterval(this.updateAiInterval);
            //navigate to lost page
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lost_lost__["a" /* LostPage */], this.points);
        }
        else {
            this.updateBotTargets();
            for (var s = 0; s < this.snakes.length; s++) {
                for (var i = 1; i < this.snakes[s].length; i++) {
                    var speed = s > 0 && i == 1 ? (this.computerDifficulty / 1.5 + 5) * this.computerSpeed : 10;
                    //get and update next position of each snake
                    this.snakes[s][i] = this.getNextPosition(this.snakes[s][i - 1].x, this.snakes[s][i - 1].y, this.snakes[s][i].x, this.snakes[s][i].y, speed, s > 0 && i == 1);
                }
            }
            this.updateFruit();
            //shrink fruit item and draw it
            this.shrinkFruit();
        }
    };
    // update targets for bots
    GamePage.prototype.updateBotTargets = function () {
        //this.drawObsticaleMap();
        var pathPoints = this.getPathPoints();
        // for(let point of pathPoints){
        //   this.drawCircle(point.x, point.y, 2, "#888888");
        //   this.ctx.strokeWidth = 1;
        //   this.ctx.strokeStyle = '#888888';
        //   this.ctx.beginPath();
        //   this.ctx.moveTo(point.x, point.y);
        //   this.ctx.lineTo(point.sx, point.sy);
        //   this.ctx.stroke();
        // }
        for (var s = 1; s < this.snakes.length; s++) {
            //console.log("  for snake " + s);
            //Do A* path search using path points and avoid passing through snakes
            var head = this.snakes[s][1];
            var target = { x: this.fruit.x, y: this.fruit.y };
            var exit = { x: 0, y: 0 };
            var length = function (a, b) { return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)); };
            if (this.hasFreeLineOfSightTo(head, this.fruit, pathPoints)) {
                //console.log("    has direct view of fruit");
                //console.log("    target = fruit");
                //this.drawCircle(this.fruit.x, this.fruit.y, 3, "#ff0000");
                this.snakes[s][0] = { x: this.fruit.x, y: this.fruit.y };
                continue;
            }
            var queue = new PriorityQueue(function (a, b) { return a.lengthTotal < b.lengthTotal; });
            // possible starting points
            for (var _i = 0, pathPoints_1 = pathPoints; _i < pathPoints_1.length; _i++) {
                var start = pathPoints_1[_i];
                //console.log("    for start");
                // if head is practically at that point dont consider it as a start
                if (length(head, start) > 20) {
                    if (this.hasFreeLineOfSightTo(head, start, pathPoints)) {
                        queue.push({
                            x: start.x,
                            y: start.y,
                            inX: start.x,
                            inY: start.y,
                            lengthTotal: length(head, start) + length(start, this.fruit),
                            length: length(head, start)
                        });
                    }
                }
            }
            var looped = 0;
            // find all consequtive moves
            while (queue.size() > 0) {
                //console.log("    while has queue " + queue.size());
                var path = queue.pop();
                //console.log("    with first element " + path.lengthTotal);
                //if(queue.size() > 0)
                //  console.log("    with next element " + queue.peek().lengthTotal);
                //this.drawCircle(path.x, path.y, 3, "#00ff00");
                looped++;
                if (looped > 100) {
                    console.log("No path found");
                    //clearInterval(this.updateInterval);
                    //target = {x: this.snakes[s][0].x, y: this.snakes[s][0].y};
                    //break;
                }
                // check if current point leads directly to the fruit or no path is found
                if (this.hasFreeLineOfSightTo(path, this.fruit, pathPoints) || looped > 100) {
                    //console.log("      exit has line of sight to fruit");
                    //console.log("      target = queue element");
                    target.x = path.inX;
                    target.y = path.inY;
                    exit.x = path.x;
                    exit.y = path.y;
                    break;
                }
                for (var _a = 0, pathPoints_2 = pathPoints; _a < pathPoints_2.length; _a++) {
                    var next = pathPoints_2[_a];
                    //console.log("      for next");
                    if (this.hasFreeLineOfSightTo(path, next, pathPoints)) {
                        //console.log("        added " + (path.length + length(path, next) + length(next, this.fruit)));
                        queue.push({
                            x: next.x,
                            y: next.y,
                            inX: path.inX,
                            inY: path.inY,
                            lengthTotal: path.length + length(path, next) + length(next, this.fruit),
                            length: path.length + length(path, next)
                        });
                    }
                }
            }
            //console.log("target set");
            // this.drawCircle(target.x, target.y, 3, "#ff0000");
            // this.drawCircle(exit.x, exit.y, 3, "#0000ff");
            this.snakes[s][0] = target;
        }
    };
    GamePage.prototype.hasFreeLineOfSightTo = function (from, to, obsicales) {
        //console.log("hasFreeLineOfSight()");
        // check if line from head to start is to close to a snake body (between path points and 
        // corresponding snake body)
        for (var _i = 0, obsicales_1 = obsicales; _i < obsicales_1.length; _i++) {
            var obsical = obsicales_1[_i];
            if (this.instersects(from, to, obsical, { x: obsical.sx, y: obsical.sy })) {
                return false;
            }
        }
        // check if line from head to start passes through snake body
        for (var _a = 0, _b = this.snakes; _a < _b.length; _a++) {
            var snake = _b[_a];
            for (var i = 2; i < snake.length; i++) {
                var body1 = snake[i];
                var body2 = snake[i - 1];
                if (this.instersects(from, to, body1, body2)) {
                    return false;
                }
            }
        }
        return true;
    };
    // determine if line from a1 to a2 intersects with line from b1 to b2
    GamePage.prototype.instersects = function (a1, a2, b1, b2) {
        //                  (Bx   - Ax)   * (Y    - Ay)   - (By   - Ay)   * (X    - Ax)   > 0
        var determinantA1 = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x) > 0;
        var determinantA2 = (b2.x - b1.x) * (a2.y - b1.y) - (b2.y - b1.y) * (a2.x - b1.x) >= 0;
        var determinantB1 = (a2.x - a1.x) * (b1.y - a1.y) - (a2.y - a1.y) * (b1.x - a1.x) > 0;
        var determinantB2 = (a2.x - a1.x) * (b2.y - a1.y) - (a2.y - a1.y) * (b2.x - a1.x) >= 0;
        return determinantA1 != determinantA2 && determinantB1 != determinantB2;
    };
    //draw the games state to canvas
    GamePage.prototype.render = function () {
        //draw background color
        this.drawBackground();
        //for each body circle of player snake
        for (var i = 1; i < this.snakes[0].length; i++) {
            //draw body circle
            this.drawCircle(this.snakes[0][i].x, this.snakes[0][i].y, 5, this.getColor(i * this.fruitColorDegreeGap));
        }
        // for each snake for each circle of bots
        for (var s = 1; s < this.snakes.length; s++) {
            var prev = this.snakes[s][1];
            for (var i = 1; i < this.snakes[s].length; i++) {
                //draw body circle
                this.drawCircle(this.snakes[s][i].x, this.snakes[s][i].y, 5, this.botColour);
                // this.ctx.beginPath();
                // this.ctx.moveTo(prev.x, prev.y);
                // this.ctx.lineTo(this.snakes[s][i].x, this.snakes[s][i].y);
                // this.ctx.stroke();
                prev = this.snakes[s][i];
            }
        }
        this.drawFruit();
    };
    GamePage.prototype.getPathPoints = function () {
        var margin = 20;
        var marginSquared = margin * margin;
        // list of path and snake points pairs, x, y is point snake can travel, sx, sy is the snake 
        // body point it corresponds to
        var points = [];
        for (var s = 0; s < this.snakes.length; s++) {
            if (this.snakes[s].length <= 3)
                continue;
            // calculate three path points for each of start and end of snake
            var second = this.snakes[s][2];
            var third = this.snakes[s][3];
            var secondlast = this.snakes[s][this.snakes[s].length - 2];
            var last = this.snakes[s][this.snakes[s].length - 1];
            // vectorSecondOutStraight = (third - second) / 2
            var vectorSecondOutStraight = {
                x: (third.x - second.x) / -2,
                y: (third.y - second.y) / -2
            };
            var scale = Math.sqrt(marginSquared / (vectorSecondOutStraight.x * vectorSecondOutStraight.x + vectorSecondOutStraight.y * vectorSecondOutStraight.y));
            vectorSecondOutStraight.x *= scale;
            vectorSecondOutStraight.y *= scale;
            if (s > 0) {
                vectorSecondOutStraight.x *= 3;
                vectorSecondOutStraight.y *= 3;
            }
            // vectorSecondOutLeft = vectorSecondOutStraight rotated 90 degrees clockwise
            var vectorSecondOutLeft = {
                x: -vectorSecondOutStraight.y,
                y: vectorSecondOutStraight.x
            };
            // vectorSecondOutRight = vectorSecondOutStraight rotated 90 degrees counter clockwise
            var vectorSecondOutRight = {
                x: vectorSecondOutStraight.y,
                y: -vectorSecondOutStraight.x
            };
            // pointOutSecondStreight = second + vectorSecondOutStraight
            var pointOutSecondLeft = { x: second.x + vectorSecondOutLeft.x, y: second.y + vectorSecondOutLeft.y };
            var pointOutSecondStreight = { x: second.x + vectorSecondOutStraight.x, y: second.y + vectorSecondOutStraight.y };
            var pointOutSecondRight = { x: second.x + vectorSecondOutRight.x, y: second.y + vectorSecondOutRight.y };
            points.push({ x: pointOutSecondLeft.x, y: pointOutSecondLeft.y, sx: second.x, sy: second.y });
            if (s == 0)
                points.push({ x: pointOutSecondStreight.x, y: pointOutSecondStreight.y, sx: second.x, sy: second.y });
            points.push({ x: pointOutSecondRight.x, y: pointOutSecondRight.y, sx: second.x, sy: second.y });
            // vectorLastOutStraight = (secondlast - last) / 2
            var vectorLastOutStraight = {
                x: (secondlast.x - last.x) / -2,
                y: (secondlast.y - last.y) / -2
            };
            var scale = Math.sqrt(marginSquared / (vectorLastOutStraight.x * vectorLastOutStraight.x + vectorLastOutStraight.y * vectorLastOutStraight.y));
            vectorLastOutStraight.x *= scale;
            vectorLastOutStraight.y *= scale;
            // vectorLastOutLeft = vectorLastOutStraight rotated 90 degrees clockwise
            var vectorLastOutLeft = {
                x: -vectorLastOutStraight.y,
                y: vectorLastOutStraight.x
            };
            // vectorLastOutRight = vectorLastOutStraight rotated 90 degrees counter clockwise
            var vectorLastOutRight = {
                x: vectorLastOutStraight.y,
                y: -vectorLastOutStraight.x
            };
            // pointOutLastStreight = last + vectorLastOutStraight
            var pointOutLastLeft = { x: last.x + vectorLastOutLeft.x, y: last.y + vectorLastOutLeft.y };
            var pointOutLastStreight = { x: last.x + vectorLastOutStraight.x, y: last.y + vectorLastOutStraight.y };
            var pointOutLastRight = { x: last.x + vectorLastOutRight.x, y: last.y + vectorLastOutRight.y };
            points.push({ x: pointOutLastLeft.x, y: pointOutLastLeft.y, sx: last.x, sy: last.y });
            points.push({ x: pointOutLastStreight.x, y: pointOutLastStreight.y, sx: last.x, sy: last.y });
            points.push({ x: pointOutLastRight.x, y: pointOutLastRight.y, sx: last.x, sy: last.y });
            // for each body circle except first second and last
            for (var i = 3; i < this.snakes[s].length - 1; i++) {
                var previous = this.snakes[s][i - 1];
                var current = this.snakes[s][i];
                var next = this.snakes[s][i + 1];
                var vectorPrevious = { x: 1000 * current.x - 1000 * previous.x, y: 1000 * current.y - 1000 * previous.y };
                var vectorNext = { x: 1000 * current.x - 1000 * next.x, y: 1000 * current.y - 1000 * next.y };
                var distancePrevious = Math.sqrt(vectorPrevious.x * vectorPrevious.x + vectorPrevious.y * vectorPrevious.y);
                var distancNext = Math.sqrt(vectorNext.x * vectorNext.x + vectorNext.y * vectorNext.y);
                var unitVectorPrevious = { x: vectorPrevious.x / distancePrevious, y: vectorPrevious.y / distancePrevious };
                var unitVectorNext = { x: vectorNext.x / distancNext, y: vectorNext.y / distancNext };
                var vectorMiddleTimes2 = { x: unitVectorPrevious.x + unitVectorNext.x, y: unitVectorPrevious.y + unitVectorNext.y };
                var scale = Math.sqrt(marginSquared / (vectorMiddleTimes2.x * vectorMiddleTimes2.x + vectorMiddleTimes2.y * vectorMiddleTimes2.y));
                vectorMiddleTimes2.x *= scale;
                vectorMiddleTimes2.y *= scale;
                var midPoint = {
                    x: current.x + vectorMiddleTimes2.x,
                    y: current.y + vectorMiddleTimes2.y,
                };
                points.push({
                    x: midPoint.x,
                    y: midPoint.y,
                    sx: current.x,
                    sy: current.y
                });
            }
        }
        return points;
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
        var color = { h: this.backgroundColor.h, s: this.backgroundColor.s, v: this.backgroundColor.v };
        if (this.flashIntensity > 0.01) {
            var differences = { h: color.h - this.falshColor.h, s: color.s - this.falshColor.s, v: color.v - this.falshColor.v };
            differences.h *= this.flashIntensity;
            differences.s *= this.flashIntensity;
            differences.v *= this.flashIntensity;
            color.h -= differences.h;
            color.s -= differences.s;
            color.v -= differences.v;
            this.flashIntensity -= 0.1;
        }
        this.ctx.fillStyle = this.getColor(color.h, color.s, color.v);
        this.ctx.fillRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);
    };
    //draw a circle for the current fruit item
    GamePage.prototype.drawFruit = function () {
        this.drawCircle(this.fruit.x, this.fruit.y, this.fruit.size, this.fruit.color);
    };
    //process pan event (update global values)
    GamePage.prototype.panUpdate = function (x, y) {
        //this.mouse.x = x;
        //this.mouse.y = y;
        this.snakes[0][0].x = x;
        this.snakes[0][0].y = y;
    };
    //calculate next position of the snake circle 
    GamePage.prototype.getNextPosition = function (fx, fy, sx, sy, strength, constantmotion) {
        if (constantmotion === void 0) { constantmotion = false; }
        //setup relevant values
        var marginSquared = 100;
        var oldPos = { x: sx, y: sy };
        var target = { x: fx, y: fy };
        var difference = {
            x: target.x - oldPos.x,
            y: target.y - oldPos.y
        };
        var change = {
            x: difference.x / 100 * strength,
            y: difference.y / 100 * strength
        };
        var newPosSmooth = {
            x: oldPos.x + change.x,
            y: oldPos.y + change.y
        };
        var scale = Math.sqrt(strength * strength / (change.x * change.x + change.y * change.y));
        change.x *= scale;
        change.y *= scale;
        var newPosConstant = {
            x: oldPos.x + change.x,
            y: oldPos.y + change.y
        };
        if (constantmotion) {
            //distance between circle and target
            var newDistanceSquared = (newPosConstant.x - target.x) * (newPosConstant.x - target.x) + (newPosConstant.y - target.y) * (newPosConstant.y - target.y);
            //if its close enough, return original position
            if (newDistanceSquared <= marginSquared) {
                return newPosSmooth;
            }
            else {
                return newPosConstant;
            }
        }
        else {
            //distance between circle and target
            var newDistanceSquared = (newPosSmooth.x - target.x) * (newPosSmooth.x - target.x) + (newPosSmooth.y - target.y) * (newPosSmooth.y - target.y);
            //if its close enough, return original position
            if (newDistanceSquared <= marginSquared) {
                return oldPos;
            }
            else {
                return newPosSmooth;
            }
        }
    };
    //check if head of snake intercepts with any body parts
    GamePage.prototype.checkIntercept = function () {
        //setup relevant values
        var size = 10;
        //TODO change s=1 to 0!
        for (var s = 0; s < this.snakes.length; s++) {
            var head = this.snakes[s][1];
            // for every snake, for every body circle
            for (var t = 0; t < this.snakes.length; t++) {
                for (var i = 3; i < this.snakes[t].length; i++) {
                    var body = this.snakes[t][i];
                    var distanceQuad = (head.x - body.x) * (head.x - body.x) + (head.y - body.y) * (head.y - body.y);
                    if (distanceQuad <= (size * size)) {
                        // if the player hit anyone of rthem selves, exit game otherwhise reset corresponding bot
                        if (s == 0) {
                            return true;
                        }
                        else if (this.snakes[s].length > 3) {
                            //console.log(this.loop + " " + s + " intesects with " + t + " at " + i);
                            //clearInterval(this.updateInterval);
                            this.spawnBot(s);
                        }
                    }
                }
            }
        }
        return false;
    };
    //generate a new fruit item
    GamePage.prototype.makeFruit = function () {
        console.log("New fruit");
        //fruit properties
        this.fruit.x = this.getRandomInt(window.innerWidth / 10, (window.innerWidth / 10) * 9);
        this.fruit.y = this.getRandomInt(window.innerHeight / 10, (window.innerHeight / 10) * 9);
        this.fruit.size = 20;
        this.fruit.color = this.getColor(this.points * this.fruitColorDegreeGap + 3 * this.fruitColorDegreeGap);
        //other color selections
        //var randomNum = this.getRandomInt(0, this.colors.length -1);
        //this.fruitC = this.colors[randomNum];
        //var randomNum = this.getRandomInt(0, 359);
        //this.fruitC = this.getColor(randomNum)
    };
    //check if the current fruit item has been consumed
    GamePage.prototype.checkEat = function (snake) {
        //get relevant data
        var size = this.fruit.size + 5;
        var frontx = snake[1].x;
        var fronty = snake[1].y;
        //calculate distance between head and fruit
        var distanceQuad;
        distanceQuad = (this.fruit.x - frontx) * (this.fruit.x - frontx) + (this.fruit.y - fronty) * (this.fruit.y - fronty);
        //return if fruit is consumed
        return distanceQuad <= (size * size);
    };
    //reduce fruit size and spawn new one of needed
    GamePage.prototype.shrinkFruit = function () {
        if (this.fruit.size > 1) {
            // of fruit is bigger than 1px, shrink it
            this.fruit.size -= 0.05;
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
        for (var s = 0; s < this.snakes.length; s++) {
            //if fruit has been eaten
            if (this.checkEat(this.snakes[s])) {
                //append new body circle to snake
                var last = this.snakes[s].length - 1;
                var xSnake = this.snakes[s][last].x;
                var ySnake = this.snakes[s][last].y;
                this.snakes[s].push({ x: xSnake, y: ySnake });
                // if player go tthe fruit award the point
                if (s == 0) {
                    this.points += 1;
                    if (this.enableComputer) {
                        this.lives += 1;
                    }
                    //this.falshColor = {h: this.backgroundColor.h, s: 0.3, v: 0.90};
                    //this.flashIntensity = 1;
                    //this.falshColor = {h: this.backgroundColor.h, s: this.backgroundColor.s, v: 0.80};
                    //this.flashIntensity = 1;
                }
                else {
                    this.lives -= 1;
                    this.falshColor = { h: this.backgroundColor.h, s: this.backgroundColor.s, v: 0.75 };
                    this.flashIntensity = 1;
                }
                //generate new fruit and update points
                this.makeFruit();
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
        }
    };
    //generate a random number in the provided range
    GamePage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    //get rgb color string with specified hue
    GamePage.prototype.getColor = function (h, s, v) {
        if (s === void 0) { s = 0.65; }
        if (v === void 0) { v = 0.95; }
        var r, g, b, sector, hueInSector, p, q, t;
        h %= 360;
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
            selector: 'page-game',template:/*ion-inline-start:"/home/tc/Documents/Programming/appdev/snake/src/pages/game/game.html"*/'<!-- canvas to display the game -->\n<canvas (move)="test($event)" width={{screenWidth}} height={{screenHeight}} #myCanvas></canvas>\n\n<!-- score and lives display -->\n<p class="stats">\n	<span style="float:left;">Score: {{points}}</span>\n	<span style="float:right;">Lives: {{lives}}</span>\n</p>\n'/*ion-inline-end:"/home/tc/Documents/Programming/appdev/snake/src/pages/game/game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GamePage);
    return GamePage;
}());

var PriorityQueue = (function () {
    function PriorityQueue(comparator) {
        if (comparator === void 0) { comparator = function (a, b) { return a > b; }; }
        this.heap = [];
        this.indexParent = function (i) { return ((i + 1) >>> 1) - 1; };
        this.indexLeft = function (i) { return (i << 1) + 1; };
        this.indexRight = function (i) { return (i + 1) << 1; };
        this.comparator = comparator;
    }
    PriorityQueue.prototype.size = function () {
        return this.heap.length;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.size() == 0;
    };
    PriorityQueue.prototype.peek = function () {
        return this.heap[0];
    };
    PriorityQueue.prototype.push = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var value = values_1[_a];
            this.heap.push(value);
            this.siftUp();
        }
        return this.size();
    };
    PriorityQueue.prototype.pop = function () {
        var poppedValue = this.heap[0];
        var last = this.size() - 1;
        if (last > 0) {
            this.swap(0, last);
        }
        this.heap.pop();
        this.siftDown();
        return poppedValue;
    };
    PriorityQueue.prototype.greater = function (i, j) {
        return this.comparator(this.heap[i], this.heap[j]);
    };
    PriorityQueue.prototype.swap = function (i, j) {
        _a = [this.heap[j], this.heap[i]], this.heap[i] = _a[0], this.heap[j] = _a[1];
        var _a;
    };
    PriorityQueue.prototype.siftUp = function () {
        var node = this.size() - 1;
        while (node > 0 && this.greater(node, this.indexParent(node))) {
            this.swap(node, this.indexParent(node));
            node = this.indexParent(node);
        }
    };
    PriorityQueue.prototype.siftDown = function () {
        var node = 0;
        while ((this.indexLeft(node) < this.size() && this.greater(this.indexLeft(node), node)) ||
            (this.indexRight(node) < this.size() && this.greater(this.indexRight(node), node))) {
            var maxChild = (this.indexRight(node) < this.size() && this.greater(this.indexRight(node), this.indexLeft(node))) ? this.indexRight(node) : this.indexLeft(node);
            this.swap(node, maxChild);
            node = maxChild;
        }
    };
    return PriorityQueue;
}());
//# sourceMappingURL=game.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
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
                        _this.account.highscorehistory.push({ datetime: new Date().getDate() + "-" + (new Date().getMonth() + 1), highscore: _this.points });
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
            selector: 'page-lost',template:/*ion-inline-start:"/home/tc/Documents/Programming/appdev/snake/src/pages/lost/lost.html"*/'<!--\n	Generated template for the LostPage page.\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n	Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n<ion-content padding>\n\n	<!-- main page content except bottom buttons -->\n	<div class="page_content">\n\n		<!-- big top title -->\n		<div class = "title">\n			The End\n		</div>\n\n		<!-- main texual based content -->\n		<table class="text">\n			<tr>\n				<td>\n					<!-- score and highscore if user account is setup -->\n					<p>You Scored: {{points}}</p>\n					<p *ngIf="account != null"><small>Highscore: {{account.highscore}}</small></p>\n				</td>\n			</tr>\n		</table>\n	</div>\n\n	<!-- bottom buttons layout -->\n	<div class="button_container">\n		<button ion-button color="red1" (click)="onClickBack()">Back</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/tc/Documents/Programming/appdev/snake/src/pages/lost/lost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LostPage);
    return LostPage;
}());

//# sourceMappingURL=lost.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
            selector: 'page-how-to',template:/*ion-inline-start:"/home/tc/Documents/Programming/appdev/snake/src/pages/how-to/how-to.html"*/'<!--\n	Generated template for the HowToPage page.\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n	Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n\n<ion-content padding>\n\n	<!-- main content except bottom buttons -->\n	<div class="page_content">\n\n		<!-- big top buttons -->\n		<div class = "title">\n			How To Play\n		</div>\n\n		<!-- main text based content - how to instructions -->\n		<div class = "text">\n			<p>\n				Here you\'ll be tought how to play a basic af game\n			</p>\n			<p>\n				Drag you finger or cusor to the location your snake shall slithers to\n			</p>\n			<p>\n				You need to consume all points before they disappear\n			</p>\n			<p>\n				Once you\'ve gained a point it will be appended to you snake\n			</p>\n			<p>\n				But beware you cannot consume your self! Otherwise it would be way to simple\n			</p>\n		</div>\n\n\n	<div class = "title">\n		Play against AI\n	</div>\n\n	<div class = "text">\n		<p>\n			To play against an AI press the "ENABLE COMPUTER" button in the home screen\n		</p>\n		<p>\n			Choose difficulty of AI in home screen and then click play\n		</p>\n		<p>\n			Everytime you consume a point you gain a life, everytime the AI consumes a point you lose a life\n		</p>\n	</div>\n</div>\n	<!-- bottom button layout -->\n	<div class="button_container">\n		<button ion-button color="yellow1" (click)="onClickBack()">Back</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/tc/Documents/Programming/appdev/snake/src/pages/how-to/how-to.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HowToPage);
    return HowToPage;
}());

//# sourceMappingURL=how-to.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderBoardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
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
    function LeaderBoardPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        //dummy leader board list data
        this.staticLoeaderBoardData = [];
        this.playerScores = [];
        this.playerScoreDates = [];
        storage.get("activeuser").then(function (val) {
            _this.indexOfCurrentPlayer = val;
        });
        storage.get("accounts").then(function (val) {
            _this.staticLoeaderBoardData = val;
            _this.currentPlayer = _this.staticLoeaderBoardData[_this.indexOfCurrentPlayer];
            // console.log(this.staticLoeaderBoardData);
            _this.staticLoeaderBoardData = _this.staticLoeaderBoardData.sort(function (a, b) { return b.highscore - a.highscore; });
            _this.displayChart();
            console.log(_this.staticLoeaderBoardData);
        });
    }
    LeaderBoardPage.prototype.displayChart = function () {
        for (var i = 0; i < this.currentPlayer.highscorehistory.length; i++) {
            this.playerScores.push(this.currentPlayer.highscorehistory[i].highscore);
            this.playerScoreDates.push(this.currentPlayer.highscorehistory[i].datetime);
        }
        console.log(this.playerScoreDates);
        this.chart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.canvas.nativeElement, {
            type: 'line',
            data: {
                labels: this.playerScoreDates,
                datasets: [{
                        label: 'scores',
                        data: this.playerScores,
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    //insert leader board data into the page once html is loaded
    LeaderBoardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaderBoardPage');
    };
    //on back button pressed, pop to root
    LeaderBoardPage.prototype.onClickBack = function () {
        this.navCtrl.popToRoot();
    };
    //adds the leader board data to the html table
    LeaderBoardPage.prototype.populateTable = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scoreChart'),
        __metadata("design:type", Object)
    ], LeaderBoardPage.prototype, "canvas", void 0);
    LeaderBoardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leader-board',template:/*ion-inline-start:"/home/tc/Documents/Programming/appdev/snake/src/pages/leader-board/leader-board.html"*/'<!--\n	Generated template for the LeaderBoardPage page.\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n	Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n\n<ion-content padding>\n\n	<!-- main content except buttom buttons -->\n	<div class="page_content">\n\n		<!-- bit top title -->\n		<div class = "title">\n			Leader Board\n		</div>\n\n		<!-- main text based content -->\n		<div class="text">\n\n			<!-- section title -->\n			<h3>\n				Highscore chart\n			</h3>\n\n			<!-- chart -->\n			<canvas #scoreChart height=300></canvas>\n\n			<!-- section title -->\n			<h3>\n				Global highscores\n			</h3>\n\n			<!-- leader board output table with header row -->\n			<ion-list>\n				<ion-item>\n					<p style="float:left">USERNAME</p>\n					<p style="float:right">SCORE</p>\n				</ion-item>\n				<ion-item *ngFor=\'let leader of staticLoeaderBoardData; index as i\'>\n					<p style="float:left">{{i+1}} &nbsp; {{leader.username}}</p>\n					<p style="float:right">{{leader.highscore}}</p>\n				</ion-item>\n			</ion-list>\n		</div>\n	</div>\n\n	<!-- bottom button layout -->\n	<div class="button_container">\n		<button ion-button color="orange1" (click)="onClickBack()">Back</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/tc/Documents/Programming/appdev/snake/src/pages/leader-board/leader-board.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LeaderBoardPage);
    return LeaderBoardPage;
}());

//# sourceMappingURL=leader-board.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_account_edit_account__ = __webpack_require__(338);
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
                        if (i <= _this.activeuser && i > 0) {
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
            selector: 'page-accounts',template:/*ion-inline-start:"/home/tc/Documents/Programming/appdev/snake/src/pages/accounts/accounts.html"*/'<!--\n  Generated template for the AccountsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n\n<ion-content padding>\n	\n	<!-- all of the page content except for the buttons -->\n	<div class="page_content">\n\n		<!-- Big top title -->\n		<div class = "title">\n			Accounts\n		</div>\n		\n		<!-- contains middle text based content -->\n		<div class = "text">\n\n			<!-- list of inputs -->\n			<ion-list>\n\n        <ion-item-sliding *ngFor="let account of accounts; index as i" class="account_item">\n\n          <ion-item (click)="onClickSelect(i)">\n            <img src="{{account.avatar}}"/>\n            <div>\n              <p>{{account.username}}</p>\n              <p>{{account.birthday | date:"dd/MM/yyyy"}}</p>\n            </div>\n          </ion-item>\n\n          <ion-item-options>\n\n            <button ion-button color="turquoise1" (click)="onClickEdit(i)">\n              Edit\n            </button>\n\n            <button ion-button color="red1" *ngIf="accounts.length > 1" (click)="onClickDelete(i)">\n              Delete\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n        <ion-item-sliding  class="account_item">\n          \n          <ion-item (click)="onClickNew()">\n              <img src="assets/imgs/add.png"/>\n              <div>\n                <p>Add account</p>\n              </div>\n          </ion-item>\n\n        </ion-item-sliding>\n\n\n			</ion-list>\n		</div>\n	</div>\n\n	<!-- contains buttom buttons -->\n	<div class="button_container">\n		<button ion-button color="turquoise1" (click)="onClickBack()">Back</button>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/tc/Documents/Programming/appdev/snake/src/pages/accounts/accounts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AccountsPage);
    return AccountsPage;
}());

//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
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
                        { datetime: new Date().getDate() + "-" + (new Date().getMonth() + 1), highscore: 0 }
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
            // save image in local array but dont save to storage yet
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
            selector: 'page-edit-account',template:/*ion-inline-start:"/home/tc/Documents/Programming/appdev/snake/src/pages/edit-account/edit-account.html"*/'<!--\n	Generated template for the EditAccountPage page.\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n	Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n\n<ion-content padding>\n\n	<!-- all of the page content except for the buttons -->\n	<div class="page_content">\n\n		<!-- Big top title -->\n		<div class = "title">\n			Edit Account\n		</div>\n\n		<!-- contains middle text based content -->\n		<div class = "text">\n\n			<!-- list of inputs -->\n			<ion-list>\n\n				<!-- Name input -->\n				<ion-item>\n					<ion-label color="turquoise4" stacked>Name</ion-label>\n					<ion-input placeholder="Name" [(ngModel)]="account.username"></ion-input>\n				</ion-item>\n\n				<!-- date input -->\n				<ion-item>\n					<ion-label color="turquoise4" stacked>Birthday</ion-label>\n					<ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="account.birthday"></ion-datetime>\n				</ion-item>\n\n				<ion-item>\n					<ion-thumbnail item-end>\n						<img src="{{account.avatar}}"/>\n					</ion-thumbnail>\n\n					<ion-label color="turquoise4" stacked>Avatar</ion-label>\n\n					<div class="avatar">\n					</div>\n				</ion-item>\n\n			</ion-list>\n\n			<label class="myFakeUploadButton" for="myFileInput" ion-button>Change Photo</label>\n			<input\n				#fileInput\n				type="file"\n				accept="image/*"\n				(change)="avatarSelected(fileInput.files)"\n				id="myFileInput">\n\n		</div>\n	</div>\n\n	<!-- contains buttom buttons -->\n	<div class="button_container">\n		<button ion-button color="turquoise1" (click)="onClickCancel()">Cancel</button>\n		<button ion-button color="turquoise2" (click)="onClickSave()">Save</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/tc/Documents/Programming/appdev/snake/src/pages/edit-account/edit-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], EditAccountPage);
    return EditAccountPage;
}());

//# sourceMappingURL=edit-account.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_game_game__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_how_to_how_to__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lost_lost__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_leader_board_leader_board__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_account_edit_account__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_accounts_accounts__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_audio__ = __webpack_require__(465);
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

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(33);
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
                            { datetime: new Date().getDate() + "-" + (new Date().getMonth() + 1), highscore: 0 }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/tc/Documents/Programming/appdev/snake/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/tc/Documents/Programming/appdev/snake/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 214,
	"./af.js": 214,
	"./ar": 215,
	"./ar-dz": 216,
	"./ar-dz.js": 216,
	"./ar-kw": 217,
	"./ar-kw.js": 217,
	"./ar-ly": 218,
	"./ar-ly.js": 218,
	"./ar-ma": 219,
	"./ar-ma.js": 219,
	"./ar-sa": 220,
	"./ar-sa.js": 220,
	"./ar-tn": 221,
	"./ar-tn.js": 221,
	"./ar.js": 215,
	"./az": 222,
	"./az.js": 222,
	"./be": 223,
	"./be.js": 223,
	"./bg": 224,
	"./bg.js": 224,
	"./bm": 225,
	"./bm.js": 225,
	"./bn": 226,
	"./bn.js": 226,
	"./bo": 227,
	"./bo.js": 227,
	"./br": 228,
	"./br.js": 228,
	"./bs": 229,
	"./bs.js": 229,
	"./ca": 230,
	"./ca.js": 230,
	"./cs": 231,
	"./cs.js": 231,
	"./cv": 232,
	"./cv.js": 232,
	"./cy": 233,
	"./cy.js": 233,
	"./da": 234,
	"./da.js": 234,
	"./de": 235,
	"./de-at": 236,
	"./de-at.js": 236,
	"./de-ch": 237,
	"./de-ch.js": 237,
	"./de.js": 235,
	"./dv": 238,
	"./dv.js": 238,
	"./el": 239,
	"./el.js": 239,
	"./en-au": 240,
	"./en-au.js": 240,
	"./en-ca": 241,
	"./en-ca.js": 241,
	"./en-gb": 242,
	"./en-gb.js": 242,
	"./en-ie": 243,
	"./en-ie.js": 243,
	"./en-il": 244,
	"./en-il.js": 244,
	"./en-nz": 245,
	"./en-nz.js": 245,
	"./eo": 246,
	"./eo.js": 246,
	"./es": 247,
	"./es-do": 248,
	"./es-do.js": 248,
	"./es-us": 249,
	"./es-us.js": 249,
	"./es.js": 247,
	"./et": 250,
	"./et.js": 250,
	"./eu": 251,
	"./eu.js": 251,
	"./fa": 252,
	"./fa.js": 252,
	"./fi": 253,
	"./fi.js": 253,
	"./fo": 254,
	"./fo.js": 254,
	"./fr": 255,
	"./fr-ca": 256,
	"./fr-ca.js": 256,
	"./fr-ch": 257,
	"./fr-ch.js": 257,
	"./fr.js": 255,
	"./fy": 258,
	"./fy.js": 258,
	"./gd": 259,
	"./gd.js": 259,
	"./gl": 260,
	"./gl.js": 260,
	"./gom-latn": 261,
	"./gom-latn.js": 261,
	"./gu": 262,
	"./gu.js": 262,
	"./he": 263,
	"./he.js": 263,
	"./hi": 264,
	"./hi.js": 264,
	"./hr": 265,
	"./hr.js": 265,
	"./hu": 266,
	"./hu.js": 266,
	"./hy-am": 267,
	"./hy-am.js": 267,
	"./id": 268,
	"./id.js": 268,
	"./is": 269,
	"./is.js": 269,
	"./it": 270,
	"./it.js": 270,
	"./ja": 271,
	"./ja.js": 271,
	"./jv": 272,
	"./jv.js": 272,
	"./ka": 273,
	"./ka.js": 273,
	"./kk": 274,
	"./kk.js": 274,
	"./km": 275,
	"./km.js": 275,
	"./kn": 276,
	"./kn.js": 276,
	"./ko": 277,
	"./ko.js": 277,
	"./ky": 278,
	"./ky.js": 278,
	"./lb": 279,
	"./lb.js": 279,
	"./lo": 280,
	"./lo.js": 280,
	"./lt": 281,
	"./lt.js": 281,
	"./lv": 282,
	"./lv.js": 282,
	"./me": 283,
	"./me.js": 283,
	"./mi": 284,
	"./mi.js": 284,
	"./mk": 285,
	"./mk.js": 285,
	"./ml": 286,
	"./ml.js": 286,
	"./mn": 287,
	"./mn.js": 287,
	"./mr": 288,
	"./mr.js": 288,
	"./ms": 289,
	"./ms-my": 290,
	"./ms-my.js": 290,
	"./ms.js": 289,
	"./mt": 291,
	"./mt.js": 291,
	"./my": 292,
	"./my.js": 292,
	"./nb": 293,
	"./nb.js": 293,
	"./ne": 294,
	"./ne.js": 294,
	"./nl": 295,
	"./nl-be": 296,
	"./nl-be.js": 296,
	"./nl.js": 295,
	"./nn": 297,
	"./nn.js": 297,
	"./pa-in": 298,
	"./pa-in.js": 298,
	"./pl": 299,
	"./pl.js": 299,
	"./pt": 300,
	"./pt-br": 301,
	"./pt-br.js": 301,
	"./pt.js": 300,
	"./ro": 302,
	"./ro.js": 302,
	"./ru": 303,
	"./ru.js": 303,
	"./sd": 304,
	"./sd.js": 304,
	"./se": 305,
	"./se.js": 305,
	"./si": 306,
	"./si.js": 306,
	"./sk": 307,
	"./sk.js": 307,
	"./sl": 308,
	"./sl.js": 308,
	"./sq": 309,
	"./sq.js": 309,
	"./sr": 310,
	"./sr-cyrl": 311,
	"./sr-cyrl.js": 311,
	"./sr.js": 310,
	"./ss": 312,
	"./ss.js": 312,
	"./sv": 313,
	"./sv.js": 313,
	"./sw": 314,
	"./sw.js": 314,
	"./ta": 315,
	"./ta.js": 315,
	"./te": 316,
	"./te.js": 316,
	"./tet": 317,
	"./tet.js": 317,
	"./tg": 318,
	"./tg.js": 318,
	"./th": 319,
	"./th.js": 319,
	"./tl-ph": 320,
	"./tl-ph.js": 320,
	"./tlh": 321,
	"./tlh.js": 321,
	"./tr": 322,
	"./tr.js": 322,
	"./tzl": 323,
	"./tzl.js": 323,
	"./tzm": 324,
	"./tzm-latn": 325,
	"./tzm-latn.js": 325,
	"./tzm.js": 324,
	"./ug-cn": 326,
	"./ug-cn.js": 326,
	"./uk": 327,
	"./uk.js": 327,
	"./ur": 328,
	"./ur.js": 328,
	"./uz": 329,
	"./uz-latn": 330,
	"./uz-latn.js": 330,
	"./uz.js": 329,
	"./vi": 331,
	"./vi.js": 331,
	"./x-pseudo": 332,
	"./x-pseudo.js": 332,
	"./yo": 333,
	"./yo.js": 333,
	"./zh-cn": 334,
	"./zh-cn.js": 334,
	"./zh-hk": 335,
	"./zh-hk.js": 335,
	"./zh-tw": 336,
	"./zh-tw.js": 336
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 446;

/***/ })

},[339]);
//# sourceMappingURL=main.js.map