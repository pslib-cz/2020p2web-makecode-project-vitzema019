// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1e001e000303030303030303030303030303030303030303030303030303030303030307070707070707070707070707070707070707070707070707070707030307030303030307070303030303030303030303030703030303030307030307030303030307070303030303030303030303030703070707070307030307030303030307070303030303030303030303030703070303070307030307070703070707070303030303030303030303030703070703070307030307030303030307070303030303030303030303030703030303070307030307070703070707070b030303030303030303030307070707070703070303070a0703070303090303030303030303030303030303030303030307030307030703070307070707070707070707070707070707070707070b070303070307080703070703070303030703030307030b03070303030703070303070307030703070703070307030703070b07030703070307030703070303070303030303070703030307030303070b0303070303030703030307030307070707070707070b0707070707070707070707070707070707070703030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030103030303030303030303030303030303030303030303030303030403030205050505050505050505050505050505050505050505050505050603030303030303030303030303030303030303030303030303030303030303`, img`
222222222222222222222222222222
222222222222222222222222222222
22.....22............2......22
22.....22............2.2222.22
22.....22............2.2..2.22
2222.2222............2.22.2.22
22.....22............2....2.22
2222.2222............222222.22
22.2.2......................22
22.2.2.22222222222222222222.22
22.2.2.22.2...2...2...2...2.22
22.2.2.22.2.2.2.2.2.2.2.2.2.22
22.....22...2...2...2...2...22
222222222.22222222222222222222
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.floorLight0,sprites.dungeon.buttonTealDepressed,sprites.dungeon.buttonOrange,sprites.builtin.field1,sprites.dungeon.darkGroundNorthWest1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
