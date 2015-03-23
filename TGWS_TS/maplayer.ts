module TGWS_RPG {
    export class MapChip {
    }

    export class MapLayer {
        private mapdata: MapData;

        constructor(mapdata: MapData) {
            this.mapdata = mapdata;
        }
    }
}