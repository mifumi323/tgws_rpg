/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
$(function () {
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
            var _this = this;
            var md = new TGWS_RPG.MapData();
            var ml = new TGWS_RPG.MapLayer(md);
            var parent = document.getElementById('content');
            this.mainScreen = document.createElement('div');
            this.mainScreen.style.position = 'relative';
            this.mainScreen.style.width = this.actualGameWidth + 'px';
            this.mainScreen.style.height = this.actualGameHeight + 'px';
            this.mainScreen.style.overflow = 'hidden';
            $(parent).append(this.mainScreen);
            this.mapCanvas1 = this.createMapCanvas();
            this.mapCanvas2 = this.createMapCanvas();
            $(this.mainScreen).append(this.mapCanvas1).append(this.mapCanvas2);
            this.currentMapCanvas = this.mapCanvas1;
            this.mapCanvas2.style.left = '-' + this.actualGameWidth + 'px';
            var image = new Image();
            image.src = 'image/Ice.png?' + new Date().getTime();
            image.onload = function () {
                var context1 = _this.mapCanvas1.getContext('2d');
                context1.drawImage(image, 0, 0);
                var context2 = _this.mapCanvas2.getContext('2d');
                context2.drawImage(image, 32, 32);
            };
        };
        Game.prototype.createMapCanvas = function () {
            var canvas = document.createElement('canvas');
            canvas.width = this.gameWidth;
            canvas.height = this.gameHeight;
            canvas.style.position = 'absolute';
            canvas.style.left = '0';
            canvas.style.top = '0';
            canvas.style.width = this.gameWidth + 'px';
            canvas.style.height = this.gameHeight + 'px';
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
            this.data = new Array(this.width * this.height);
        }
        return MapData;
    })();
    TGWS_RPG.MapData = MapData;
})(TGWS_RPG || (TGWS_RPG = {}));
var TGWS_RPG;
(function (TGWS_RPG) {
    var MapChip = (function () {
        function MapChip() {
        }
        return MapChip;
    })();
    TGWS_RPG.MapChip = MapChip;
    var MapLayer = (function () {
        function MapLayer(mapdata) {
            this.mapdata = mapdata;
        }
        return MapLayer;
    })();
    TGWS_RPG.MapLayer = MapLayer;
})(TGWS_RPG || (TGWS_RPG = {}));
//# sourceMappingURL=tgws_rpg.js.map