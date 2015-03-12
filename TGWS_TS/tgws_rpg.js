/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
})();
$(function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
});
var MapLayer = (function () {
    function MapLayer() {
        this.width = 10;
    }
    return MapLayer;
})();
//# sourceMappingURL=tgws_rpg.js.map