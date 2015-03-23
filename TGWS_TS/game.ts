module TGWS_RPG {
    export class Game {
        mainScreen: HTMLDivElement;
        mapCanvas1: HTMLCanvasElement;
        mapCanvas2: HTMLCanvasElement;
        currentMapCanvas: HTMLCanvasElement;

        gameWidth = 640;
        gameHeight = 480;
        actualGameWidth = this.gameWidth;
        actualGameHeight = this.gameHeight;

        start() {
            var md = new MapData();
            var ml = new MapLayer(md);

            var parent = <HTMLDivElement>document.getElementById('content');

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
            image.onload = () => {
                var context1 = this.mapCanvas1.getContext('2d');
                context1.drawImage(image, 0, 0);
                var context2 = this.mapCanvas2.getContext('2d');
                context2.drawImage(image, 32, 32);
            };
        }

        createMapCanvas() {
            var canvas = document.createElement('canvas');

            canvas.width = this.gameWidth;
            canvas.height = this.gameHeight;
            canvas.style.position = 'absolute';
            canvas.style.left = '0';
            canvas.style.top = '0';
            canvas.style.width = this.gameWidth + 'px';
            canvas.style.height = this.gameHeight + 'px';

            return canvas;
        }
    }
} 