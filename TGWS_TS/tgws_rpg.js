/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
//class Greeter {
//    element: HTMLElement;
//    span: HTMLElement;
//    timerToken: number;
//    constructor(element: HTMLElement) {
//        this.element = element;
//        this.element.innerHTML += "The time is: ";
//        this.span = document.createElement('span');
//        this.element.appendChild(this.span);
//        this.span.innerText = new Date().toUTCString();
//    }
//    start() {
//        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
//    }
//    stop() {
//        clearTimeout(this.timerToken);
//    }
//}
$(function () {
    //var el = document.getElementById('content');
    //var greeter = new Greeter(el);
    //greeter.start();
    var game = new TGWS_RPG.Game();
    game.start();
});
var TGWS_RPG;
(function (TGWS_RPG) {
    var Game = (function () {
        function Game() {
            this.gameWidth = 640;
            this.gameHeight = 480;
            this.actualGameWidth = this.gameWidth;
            this.actualGameHeight = this.gameHeight;
        }
        Game.prototype.start = function () {
            var md = new TGWS_RPG.MapData();
            var ml = new TGWS_RPG.MapLayer(md);
            var parent = document.getElementById('content');
            this.mainScreen = new HTMLDivElement();
            this.mainScreen.style.position = 'relative';
            this.mainScreen.style.width = this.actualGameWidth + 'px';
            this.mainScreen.style.height = this.actualGameHeight + 'px';
            this.mainScreen.style.overflow = '';
            $(parent).append(this.mainScreen);
            this.mapCanvas1 = this.createMapCanvas();
            this.mapCanvas2 = this.createMapCanvas();
            $(this.mainScreen).append(this.mapCanvas1).append(this.mapCanvas2);
            this.currentMapCanvas = this.mapCanvas1;
            this.mapCanvas2.style.left = '-' + this.actualGameWidth + 'px';
            var context = this.mapCanvas1;
            var image = new Image();
        };
        Game.prototype.createMapCanvas = function () {
            var canvas = new HTMLCanvasElement();
            canvas.width = this.gameWidth;
            canvas.height = this.gameHeight;
            canvas.style.position = 'absolute';
            canvas.style.left = '0';
            canvas.style.top = '0';
            return canvas;
        };
        return Game;
    })();
    TGWS_RPG.Game = Game;
})(TGWS_RPG || (TGWS_RPG = {}));
var TGWS_RPG;
(function (TGWS_RPG) {
    var MapData = (function () {
        function MapData() {
            this.width = 20;
            this.height = 15;
        }
        return MapData;
    })();
    TGWS_RPG.MapData = MapData;
})(TGWS_RPG || (TGWS_RPG = {}));
var TGWS_RPG;
(function (TGWS_RPG) {
    var MapLayer = (function () {
        function MapLayer(mapdata) {
            this.mapdata = mapdata;
        }
        return MapLayer;
    })();
    TGWS_RPG.MapLayer = MapLayer;
})(TGWS_RPG || (TGWS_RPG = {}));
//# sourceMappingURL=tgws_rpg.js.map