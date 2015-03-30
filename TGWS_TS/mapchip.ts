module TGWS_RPG {
    export enum MapHit {
        none = 0,
        stop = 1,
        counter = 2,
    }

    export class MapChipSet {
        public chipsize: number;
        public autotile: number;
        public hit: MapHit[];
    }

    export class MapChipManager {
        private mapchipset = {};
    }
}  