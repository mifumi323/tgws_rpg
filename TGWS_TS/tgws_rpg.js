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
        }
        Game.prototype.start = function () {
            var ml = new TGWS_RPG.MapLayer();
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
        function MapLayer() {
        }
        return MapLayer;
    })();
    TGWS_RPG.MapLayer = MapLayer;
})(TGWS_RPG || (TGWS_RPG = {}));
//# sourceMappingURL=tgws_rpg.js.map