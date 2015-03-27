module TGWS_RPG {
    export class MapHit {
        public hit: number[][];
    }

    export class MapData {
        public width: number;
        public height: number;
        private data: number[];

        constructor() {
            this.width = 20;
            this.height = 15;
            this.data = new Array<number>(this.width * this.height);
        }
    }
} 