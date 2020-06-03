namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Temp = SpriteKind.create()
    export const Door = SpriteKind.create()
    export const LaserOrb = SpriteKind.create()
    export const Laser = SpriteKind.create()
    export const Spikes = SpriteKind.create()
    export const primedSpike = SpriteKind.create()
    export const activatedSpikes = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const Decoration = SpriteKind.create()
    export const damagedPlayer = SpriteKind.create()
    export const fallingPlayer = SpriteKind.create()
    export const Timer = SpriteKind.create()
    export const MessageBubble = SpriteKind.create()
    export const Pitfall = SpriteKind.create()
    export const crumblingPitfall = SpriteKind.create()
    export const Treasure = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
c b b c c c c c c c c c c c c c 
c f f f b b c f f f f f f f f c 
c f f f f f f f f f f f f f b c 
c f f f f f f f f f f f f f b c 
c b f f f f f f f f f f f f c c 
c b f f f f f f f f f f f f b c 
c c f f f f f f f f f f f f b c 
c b f f f f f f f f f f f f f c 
c b f f f f f f f f f f f f f c 
c f f f f f f f f f f f f f f c 
c f f f f f f f f f f f f f f c 
c f f f f f f f f f f f f f f c 
c f f f f f f f f f f f f f f c 
c b f f f f f f f f f f f f f c 
c b f f f b b b b c c c b b b c 
c c c c c c c c c c c c c c c c 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 4 . . . . 
. . . . . . . . . . . 4 4 . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . . . . . . . . . . 4 4 . . . 
. . . . . . . . . . . 4 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 4 . . . . . . . . . . . 
. . . 4 4 . . . . . . . . . . . 
. . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . . 4 4 . . . . . . . . . . . 
. . . . 4 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
b b b b 1 b b b b b b b 1 b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b d 1 1 b b b b b d 1 1 b b 
b b b d 1 1 b b b b b d 1 1 b b 
b b d 1 1 1 1 b b b d 1 1 1 1 b 
b f d 1 1 1 1 f b f d 1 1 1 1 f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b d 1 1 b b b b b d 1 1 b b 
b b b d 1 1 b b b b b d 1 1 b b 
b b d 1 1 1 1 b b b d 1 1 1 1 b 
b f d 1 1 1 1 f b f d 1 1 1 1 f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
b b b b b b b b b b b b b b b b 
f b b b b b b b f b b b b b b b 
f f f f f f f f f f f f f f f f 
b b f b b b b b b b f b b b b b 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f b f f f f b f f f f f 
f f f f f f b f f b f f f f f f 
f f f f f f f b b f f f f f f f 
f f f f f f f b b f f f f f f f 
f f f f f f b f f b f f f f f f 
f f f f f b f f f f b f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile10 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f b f f f f f f b f f f f 
f f f f f b f f f f b f f f f f 
f f f f f f b f f b f f f f f f 
f f f f f f f b b f f f f f f f 
f f f f f f f b b f f f f f f f 
f f f f f f b f f b f f f f f f 
f f f f f b f f f f b f f f f f 
f f f f b f f f f f f b f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
b b b b b b b b b b b b b b b b 
f b b b b b b b f b b b b b b b 
f f f f f f f f f f f f f f f f 
b b f b b b b b b b f b b b b b 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 4 4 4 4 f f f f f f f 
f f f f f 4 f f f f f f f f f f 
f f f f f 4 f f f f f f f f f f 
f f f f f 4 4 4 4 f f f f f f f 
f f f f f 4 f f f f f f f f f f 
f f f f f 4 f f f f f f f f f f 
f f f f f 4 f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile12 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f 4 4 4 4 f f f f f f 
f f f f f f 4 f f f f f f f f f 
f f f f f f 4 f f f f f f f f f 
f f f f f f 4 4 4 f f f f f f f 
f f f f f f 4 f f f f f f f f f 
f f f f f f 4 f f f f f f f f f 
f f f f f f 4 f f f f f f f f f 
f f f f f f 4 f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
}
function createLaser (col: number, row: number, direction: number) {
    temp2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 5 5 6 6 6 . . . . 
. . . 7 7 7 7 6 6 6 6 6 6 . . . 
. . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
. . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
. 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
. 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
. 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
. 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
. . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
. . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.LaserOrb)
    temp2.z = direction
    tiles.placeOnTile(temp2, tiles.getTileLocation(col, row))
}
function createStatue (x: number, y: number) {
    temp = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 . . . . . . 
. . . . . . 1 3 3 3 . . . . . . 
. . . . . . 1 3 1 1 . . . . . . 
. . . . . . 3 1 1 1 . . . . . . 
. . . . . . 3 b 1 3 1 . . . . . 
. . . . . . b 3 b 3 1 1 . . . . 
. . . . . . 3 1 3 1 3 1 . . . . 
. . . . . b 3 1 3 1 b 1 . . . . 
. . . . . b 3 3 3 1 1 3 . . . . 
. . . . . b c 3 1 3 1 1 . . . . 
. . . . 3 b c 3 1 1 3 1 . . . . 
. . . . 3 b c 1 1 1 1 . . . . . 
. . . . 3 c 3 1 1 1 1 . . . . . 
. . . 3 3 c 1 1 1 1 1 3 . . . . 
. . . 1 b 3 1 1 1 1 1 1 . . . . 
. . . . . 3 1 1 1 1 1 1 . . . . 
. . . . . 3 1 1 3 1 1 1 . . . . 
. . . . . 3 1 1 3 1 1 1 3 . . . 
. b b b b 3 1 1 3 1 1 1 1 b b . 
b 1 1 1 3 3 1 3 3 1 1 1 1 3 1 b 
3 1 1 3 1 3 1 3 3 1 1 3 1 3 1 3 
3 1 1 3 1 1 1 3 3 1 1 3 3 3 1 3 
3 1 1 1 3 1 1 3 3 1 1 3 3 1 1 3 
3 1 1 1 1 3 3 3 3 3 3 3 3 1 1 3 
3 1 1 1 1 1 3 3 3 3 3 1 1 1 1 3 
b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
3 b b 1 1 1 1 1 1 1 1 1 1 b b 3 
1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 
1 3 3 3 3 b b b b b b 3 3 3 3 1 
b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b 
c b b b b b b b b b b b b b b c 
`, SpriteKind.Decoration)
    temp.setFlag(SpriteFlag.Ghost, true)
    temp.setPosition(x, y)
}
function loadRoomObjects () {
    temp = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Temp)
    temp.setFlag(SpriteFlag.Ghost, true)
    for (let value of tiles.getTilesByType(myTiles.tile2)) {
        tiles.placeOnTile(temp, value)
        createLaser(Math.idiv(temp.x, 16), Math.idiv(temp.y, 16), 1)
        tiles.setTileAt(value, sprites.dungeon.floorDark0)
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(myTiles.tile4)) {
        tiles.placeOnTile(temp, value)
        createLaser(Math.idiv(temp.x, 16), Math.idiv(temp.y, 16), 2)
        tiles.setTileAt(value, sprites.dungeon.floorDark0)
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(myTiles.tile3)) {
        tiles.placeOnTile(temp, value)
        createLaser(Math.idiv(temp.x, 16), Math.idiv(temp.y, 16), 3)
        tiles.setTileAt(value, sprites.dungeon.floorDark0)
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(myTiles.tile5)) {
        tiles.placeOnTile(temp, value)
        createLaser(Math.idiv(temp.x, 16), Math.idiv(temp.y, 16), 4)
        tiles.setTileAt(value, sprites.dungeon.floorDark0)
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(myTiles.tile6)) {
        tiles.placeOnTile(temp, value)
        createSpikes(Math.idiv(temp.x, 16), Math.idiv(temp.y, 16))
    }
    for (let value of tiles.getTilesByType(myTiles.tile9)) {
        tiles.placeOnTile(temp, value)
        coverTileHoleUpper()
    }
    for (let value of tiles.getTilesByType(myTiles.tile10)) {
        tiles.placeOnTile(temp, value)
        coverTileHole()
    }
    for (let value of tiles.getTilesByType(myTiles.tile11)) {
        tiles.placeOnTile(temp, value)
        createPitfall(temp.x, temp.y)
    }
    for (let value of tiles.getTilesByType(myTiles.tile12)) {
        tiles.placeOnTile(temp, value)
        createPitfall(temp.x, temp.y)
    }
    temp.destroy()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    temp2 = sprites.create(img`
. . . 5 5 5 . . 5 5 5 5 
. 5 . . . . 5 . 5 . . . 
5 5 5 . . 5 . . 5 5 5 . 
. 5 . . 5 . . . . . . 5 
. . . 5 5 5 5 . 5 5 5 . 
`, SpriteKind.Decoration)
    temp2.setPosition(thePlayer.x, thePlayer.top)
    temp2.lifespan = 500
    temp2.z = 80
    temp2.setVelocity(0, -30)
    temp2.setFlag(SpriteFlag.Ghost, true)
    animation.runImageAnimation(
    temp2,
    [img`
. . . 5 5 5 . . 5 5 5 5 
. 5 . . . . 5 . 5 . . . 
5 5 5 . . 5 . . 5 5 5 . 
. 5 . . 5 . . . . . . 5 
. . . 5 5 5 5 . 5 5 5 . 
`, img`
. . . 4 4 4 . . 4 4 4 4 
. 4 . . . . 4 . 4 . . . 
4 4 4 . . 4 . . 4 4 4 . 
. 4 . . 4 . . . . . . 4 
. . . 4 4 4 4 . 4 4 4 . 
`, img`
. . . 2 2 2 . . 2 2 2 2 
. 2 . . . . 2 . 2 . . . 
2 2 2 . . 2 . . 2 2 2 . 
. 2 . . 2 . . . . . . 2 
. . . 2 2 2 2 . 2 2 2 . 
`],
    50,
    true
    )
    cash += 25
    updateTimer()
})
function advanceMonkeyText () {
    if (monkeyTextIndex < monkeyText.length) {
        monkeyTextAdvanceTime = 0
        monkeyTextIndex += 2
        if (monkeyTextIndex / 2 % 2 == 0) {
            animation.runImageAnimation(
            theMonkey,
            [img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e f c . . . . 
. f d d d d e e e f f . . . . . 
. . f f f f f e e e e f . . . . 
. . . . f f e e e e e e f . f f 
. . . f e e f e e f e e f . e f 
. . f e e f e e f e e e f . e f 
. f b d f d b f b b f e f f e f 
. f d d f d d f d d b e f f f f 
. . f f f f f f f f f f f f f . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e f c . . . . 
. . c c c c e e e f f . . . . . 
. f d d d d e e e e e f . . . . 
. . f f f f f e e e e e f . f f 
. . . f e e f e e f e e f . e f 
. . f e e f e e f e e e f . e f 
. f b d f d b f b b f e f f e f 
. f d d f d d f d d b e f f f f 
. . f f f f f f f f f f f f f . 
`],
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            theMonkey,
            [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. . f d d d d d e e f f . . . . 
. c d d d f f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c f f d d c d d e e b d c . . . 
f d d f e f f f e e e f . . . . 
f d d f e e e f f f f f . . . . 
f f f f f e e e e e f f . f f . 
. f f f e f f e e e f f . e f . 
. f b d f e f f b b f f f e f . 
. f d d f e e f d d b f f e f . 
. f f f f f f f f f f f f f . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. . f d d f d d e e f f . . . . 
. c d d d f d d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . . . 
c f f f f d d d e e f c f . . . 
. f b d f f f e e e e f . . . . 
. f d d f e f f f e e f . . . . 
. . f f f e e e e f f f . f f . 
. . f e e f e e e e f f . e f . 
. f f e e e f f f f f f f e f . 
. f b d f e e f b b f f f e f . 
. f d d f f e e d d b f f f f . 
. f f f f f f f f f f f f f . . 
`],
            100,
            true
            )
        }
        lineIndex = 0
        textIndex = 0
    }
}
function unloadRoom () {
    for (let value of sprites.allOfKind(SpriteKind.LaserOrb)) {
        if (value.z == 1) {
            tempTile = myTiles.tile2
        } else if (value.z == 2) {
            tempTile = myTiles.tile4
        } else if (value.z == 3) {
            tempTile = myTiles.tile3
        } else {
            tempTile = myTiles.tile5
        }
        tiles.setTileAt(tiles.getTileLocation(Math.idiv(value.x, 16), Math.idiv(value.y, 16)), tempTile)
        value.destroy()
    }
    destroyKind(SpriteKind.Laser)
    destroyKind(SpriteKind.primedSpike)
    destroyKind(SpriteKind.activatedSpikes)
    destroyKind(SpriteKind.Spikes)
    destroyKind(SpriteKind.Button)
    destroyKind(SpriteKind.Coin)
    destroyKind(SpriteKind.Decoration)
    destroyKind(SpriteKind.Door)
    destroyKind(SpriteKind.Pitfall)
    destroyKind(SpriteKind.crumblingPitfall)
    cutsceneStarted = false
    cutsceneEnded = false
    monkeyTextAdvanceTime = 0
    monkeyTextIndex = 0
    textIndex = 0
    lineIndex = 0
    messageLower.say("")
    messageUpper.say("")
}
function setTilemap (room: number, roomKind: number) {
    if (room == 1) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c01010101010101010a0c01010101010101010b0c01010101010113010a0c01010101010101010a0d01010101010101010a0c01010101010101010a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1b1901010101191b0a0c19190101010119190b0c1c0101010101131c0a0c1d0101010101011d0a0d19190101010119190a0c1b191c1c1c1c191b0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,sprites.dungeon.hazardHole,sprites.builtin.forestTiles10,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c01010101010101010a0c01011901011901010b0c01011901011901010a0c01011901011901010a0d1e011919191901010a0c1d130101010101010a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.floorLightMoss,sprites.dungeon.floorDark5,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c01010101010101010a0c01010101010101010b0c2121210101011b010a0c011e1d01010121210a0d011d0101010101010a0c01010101010101010a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.floorMixed,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight3,myTiles.tile8,sprites.dungeon.hazardHole,myTiles.tile9,sprites.dungeon.buttonOrange,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c01010101010101010a0c01010101010101010b0c01010122010113010a0c1c1c010101011c1c0a0d01010101010101010a0c01010101010101010a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.chestClosed,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1c0101010101011c0a0c01010101010101010b0c01010101010101010a0c01010101010101010a0d21010101010101010a0c1c0101010101131c0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 2 . . . . . . 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardSpike,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.floorDark4],
            TileScale.Sixteen
        ))
        }
    } else if (room == 2) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c01010101010101010a0d0120202020202001110c0101011c1c212101010c0101011c1c212101010d0120202020212101150c01010101010101010a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c26262626262626260a0d1c1e212121211e01110c1c21232222222101010c1c211f2022222101010d1c1e212121211e01150c26262626262626260a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorDark2,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c25010101010101010a0d012b2b2b2b2b2b01110c011d1c1c1c1c1d01010c011d1c1c1c1c1d01010d251d2b2b2b2b1d01150c2413012a010101250a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorDark2,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.floorMixed,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c13011e262a0101010a0d01011e1d01010101110c1c1c1e1d01010101010c1c1c1e1d01010101010d01011e1d01010101150c25011e1d010101130a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorDark2,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c1f222e22222222220a0d22221d2222222727110c1c1c1d2222222727010c1c1c1d2222222725010d22221d2222222727150c27222b22222223280a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorDark2,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.floorMixed,sprites.dungeon.floorLight3,sprites.dungeon.floorLight5,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c1b1b010101011b1b0a0d1b2e2e2e012e2e1b110c011d1c1c01011d01010c011d1c1c01131d01010d1b1d2e2e2e2e1d1b150c1b1b010101011b1b0a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorDark2,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.floorMixed,sprites.dungeon.floorLight3,sprites.dungeon.floorLight5,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        }
    } else if (room == 3) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040303040e03050c20011c1c1c1c01200a0c01012222222201010b0c1b1b1b1b1b1b1b1b0a0c1b1b1b1b1b1b1b1b0a0d2222221b1b2222220a0c1d1d1d01011d1d1d0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040303040e03050c01010101010101010a0c011e1f1f1f1f1e010b0c011f011c1c0120010a0c011f011c1c011f010a0d011e1f1f1f1f1e010a0c21220101010101010a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040303040e03050c26262626262626260a0c01202121212120010b0c1c2126262626211c0a0c1c211d1d1d1d211c0a0d01202121212120010a0c01010101010101010a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.floorMixed,sprites.dungeon.floorLight3,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040303040e03050c0101010101011c1c0a0c0101010101011c1c0b0c1e211e1e1e1e1e1e0a0c01250101242424240a0d01010101012424240a0c20010101010124240a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.chestClosed,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040303040e03050c271b1b1b1b1b1b1b0a0c2828282828281b1b0b0c1b1b1b1c1c011b1b0a0c1b1b1b1c1c01011b0a0d1b1b0101010101010a0c1b010101010101010a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.floorMixed,sprites.dungeon.floorLight2,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLight3,sprites.dungeon.floorLight0,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.buttonOrange,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040303040e03050c26261b1c1c1b26260a0c1d1b1b1c1c1b1b1d0b0c1d1b1b26261b1b1d0a0c1d1b1b1d1d1b1b1d0a0d1d1b1b1b1b1b1b1d0a0c1d261b01011b261d0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.floorMixed,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        }
    } else if (room == 4) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c22222222222222220a121c211b01011b211c0b01010101222222131c0a0101011c1c1c01011c0a1422211b01011b211c0a0c1c2222222222221c0a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.buttonOrange,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c01262021212026260a12012021262621201b0b010121261c1c26211b0a0101211c1c1c1c211b0a140120211c1c21201b0a0c1e1f2021212026260a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.builtin.forestTiles22,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c13010128280101010a120120211c1c28201b0b010121281c1c1c211b0a01012122252525211b0a140120211c2321201b0a0c0101011c280101010a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.builtin.forestTiles22,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorMixed,sprites.dungeon.floorDark5,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c1d011a1a1a1a1a1d0a1201011d22221a1a010b0101011d1c1c221b1b0a0101011d1c1c1c1b1b0a1401011d1c1c2120010a0c1d0121212121211d0a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 2 
2 . . 2 . . . . . 2 
. . . 2 . . . . . 2 
. . . 2 . . . . . 2 
2 . . 2 . . . . . 2 
2 2 . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardSpike,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c24010125200101240a12010101202101011b0b010101241c1c24011b0a0101011c1c1c1c011b0a140101011c1c01011b0a0c240101011c0101240a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040303030e03050c1e0101010101011e0a1201212121212121010b010122222222221b1b0a010122222222221b1b0a1401222222222221010a0c1e0101010101011e0a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.floorDark5,sprites.dungeon.floorDarkDiamond,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        }
    } else if (room == 5) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1a1a1a01012121210a0c1a1a1a01011c1c1c110c1a1a2121211c1301010c1a1a1c1c1c1c0101010d1a1a1a1a1a1a1a1a140c1a1a1a1a1a1a1a1a0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c01010101011d1d1d0a0c01011d1d1d1c1c1c110c011a1c1c1c1a1301010c011d1c1c1c010101010d011c1c1c1a011d1d140c0101010101011c1c0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1d010101011d1d1d0a0c1c1d010101011c1c110c1c01011d01131e01010c1c01010101010101010d1c1d01011d01011d140c1c1c1d1d1c1d011c0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1a1a1a01011a1a1a0a0c1a1a1a01011a1a1a110c1b1b1a0101011301010c1b1b1a0101010101010d1a1a1a1a1a1a1a1a140c1a1a1a1a1a1a1a1a0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1c1c1c01011d1d1d0a0c1c1c1c1d011c1c1c110c0101011c011c1c01010c011d1e1c011c1c01010d201c1d1c011c1c01140c1f130101010101010a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c17171701010101010a0c0101010101012222110c0101010122220101010c0101222201010101010d0101010101010101140c01010101161616010a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . 2 2 2 
2 . . . . 2 2 . . . 
2 . . 2 2 . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.hazardSpike,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        }
    } else if (room == 6) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1f1f240101241f1f0a0c1f1f1f24241f1f1f0b0c1f1f1f25251f1f1f0a0c1f1f1f25251f1f1f0a0d1f1f1f25251f1f1f0a0c1f1f250101251f1f0a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTealDepressed,myTiles.tile8,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c27271b01011b27270a0c1f1f271b1b271f1f0b0c1f1f1f1b1b1f1f1f0a0c1f1f1f1b1b1f1f1f0a0d1f1f1f1b1b1f1f1f0a0c1f1f1b01011b1f1f0a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTealDepressed,myTiles.tile8,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c23232301012323230a0c1f1b1b1b1b1b1b1f0b0c1f1b232323231b1f0a0c1f1b1f1f1f1f1b1f0a0d1f1b1b1b1b1b1b1f0a0c1f2323010123231f0a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTealDepressed,myTiles.tile8,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.hazardHole,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c21010101010101010a0c01011a27271901010b0c011a2727272719010a0c011a2727272719010a0d13011a27271901210a0c01010101010101130a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . 2 2 . . . 2 
2 . . 2 2 2 2 . . 2 
2 . . 2 2 2 2 . . 2 
2 . . . 2 2 . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTealDepressed,myTiles.tile8,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.floorMixed,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight1,sprites.dungeon.floorLight3,sprites.dungeon.hazardSpike,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c23232301012323230a0c1d1b1b1b1b1b1b1d0b0c2323231c1c2323230a0c1f1f1f1c1c1f1f1f0a0d1d1b1b1b1b1b1b1d0a0c23232301012323230a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTealDepressed,myTiles.tile8,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.hazardHole,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c13010101010101230a0c01222224222201010b0c011f1f251f1f22010a0c011f1f251f1f1f010a0d011f1f251f1f1f010a0c20210101010101010a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTealDepressed,myTiles.tile8,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.hazardHole,sprites.dungeon.hazardSpike,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        }
    } else if (room == 7) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1f1f1f01011f1f1f0a122020201a1a1a1a200b01011a201f1f1f1a200a01011a2020201a1a200a141f1a2020201a1f200a0c201a1a1a1a1a20200a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1d1d201f010101200a121c1c011d1d1d1d130b01011c011c1c1c1c010a01011c1a1a1a1e1c010a14011c1d1d1d1d1c010a0c20010101010101200a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1a011a1f01011a010a121a1a1a011a1a1a1a0b01011a011a011a011a0a01011a1a1a1a1a1a1a0a141a011a011a011a010a0c1a1a011a1a1a011a0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c011e0101011a1a1a0a1201011e01011a1a1a0b0101011f1e1f1a1a1a0a0101011c1f1e1a1a1a0a141a1a1a1a1a1a1a1a0a0c1a1a1a1a1a1a1a1a0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . 2 . . . . . . 2 
2 . . 2 . . . . . 2 
. . . . 2 . . . . 2 
. . . . . 2 . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.floorDark3,sprites.dungeon.hazardSpike,sprites.dungeon.hazardHole,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1d1d1d010101201e0a121d252501010122200b01010101011f2525250a0101011301010101260a1420212525252521200a0c1e2026262626201e0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardSpike,sprites.dungeon.buttonOrange,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1d1d0101010101010a121c1c1d1d1d1d1a010b01011c1c1b1b1c1d010a01011c1c1b1b1c1c010a14011a1c211d1c1a010a0c20010125010101200a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        }
    } else if (room == 8) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040304030e03050c22222222222222220a0c1d1d1d1d1d1d1d1d110c1d1d1d2121212101010c1d1d1d2121212101010d1d1d1d2121211d22150c1d1d1d01011d1d1d0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040304030e03050c13010101011c1c1c0a0c01011e01011e1e1e110c01011d0101011f01010c01011d0101010101010d01011d1e1e1e1e1e150c1f010101011d1d1d0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040304030e03050c241b1e1e1e1e1e1e0a0c1b1b1d1d1d1d1d1d110c1b1b1b1b1b1b1b01010c1b1b1b1b1b1b1b01010d1e1e1e1b1b1e1e1e150c1d1d1d01011d1d1d0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.buttonOrange],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040304030e03050c18181e1e1e1e1e1e0a0c24241d1d1d1d1d1d110c01011d1d1d1d1f01010c01011d1d1d1d0101010d0101230101010101150c1f010101010101010a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.buttonOrange],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040304030e03050c1b0101010123011b0a0c0101010101010101110c01011e1e1e1e1f01010c01011d1d1d1d0101010d01010101231d1e1e150c1b010101011d1d1d0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e040304030e03050c241b1b1b1b1b1b1b0a0c1b1b1b1b1b010101110c1b1b1b1b01011f01010c1b1b1b1b01010101010d1b1b010101011e1e150c1b010101011e1d1d0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.buttonOrange],
            TileScale.Sixteen
        ))
        }
    } else if (room == 9) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c1b0101010101011b0a1201222222222222011101011d1d1d1d1d1d010101011d1d1d1d1d1d010114011d1d1d1d1d1d01150c1b0101010101011b0a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c22240101222222220a120101010101211d1d11010101220101010101010101221d22222201010114221d1d2101010101150c25010101010123130a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.buttonOrange],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c20202020202020200a122121212121212121110101011d1d1d1d0101010101011d1d1d1d010101141b1b1b1b1b1b1b1b150c1b1b1b1b1b1b1b1b0a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c1b1b1b1b1b2222220a121b1b1b1b1b1d1d1d11010101221b1b1d0101010101011d1b1b1d0101011422221d1b1b1b1b1b150c1d1d1d1b1b1b1b1b0a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c01010122220121010a120101211d1d01010111010101011d1d01010101010101011d1d01010101140101011f1f230101150c0101231f1f0101010a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c22222222222222220a12011d1d1d1d1d1d0111010121212121212101010101212121212121010114011d1d1d1d1d1d01150c221d1d1d1d1d1d220a07080909090909090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        }
    } else if (room == 10) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c1b1b1b1b1b1b1b1b0a121b1b1b1b1b1b1b1b0a010101222222221b1b0a0101011d1b1b1b1b1b0a1422221d1b1b1b1b1b0b0c1d1d1d01012222220a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c23232323221b23220a121d1d1d1d231b1b1b0a0101011d1d1b1b1b1b0a0101011d1b1b1b1b220a1401010101011b23230b0c0101010101231d1d0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.buttonOrange,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c20202020202020200a1221212121212121210a0101011d1d1d1d21210a0101011d1d1d1d21210a1422221d01012121210b0c1d1d1d01012121210a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c22222222222301010a121d1d1d1d1d2201010a0101011d1d1d1d1b1b0a0101011d1d1d1d1b1b0a141b1b1b01011b1b1b0b0c1b1b1b01011b1b1b0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c2222222222221c1c0a121d1d1d1d1d1d221c0a0101011d1d1d1d1d1e0a0101011d1d1d1d1d010a141b1b1b01011d01010b0c1b1b1b01011f23010a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c01010101011b22010a1201012201220101010a0101221b01010122010a01010101012201011b0a1401012001010101220b0c0101010101221b010a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        }
    } else if (room == 11) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c26010101010101010a0c0101201b1b200126110c01261b1b1b1b0101010c01011b1b1b1b0101010d2301201b1b202601140c22230101010101130a07080915010114090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1b1b1b01011b1b010a0c1b1e1e1b1b1e1e01110c1b1f1d01011d1301010c1b011d01011d1f01010d1b1e1d1b1b1d1e1b140c1b1b1b01011b1b1b0a07080915010114090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1e1e1e01011e1e1e0a0c1d1d1d1b1b1d1d1d110c011b1b1b1b270101010c1f1b1b1b1b010101010d1e1e1e1b1b1e1e1e140c1d1d1d01011d1d1d0a07080915010114090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c01012001012126260a0c2601200101202121110c0101202601262601010c0126202726272701010d2301200101202121140c22232001012126130a07080915010114090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c27010101011e1e1e0a0c01010101011d1d1d110c01011e1e1e1d2701010c01011d1d1d1d0101010d2301010101010101140c22230101010101130a07080915010114090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c18181801011e1e1e0a0c1f012001011d1d1d110c0101200101010101010c0101200101010101010d1f012001011e1e1e140c17171701011d1d1d0a07080915010114090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        }
    } else if (room == 12) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c22222201012222220a121d1d1d1b1b1d1d1d1101011b1b1b1b1b1b010101011b1b1b1b1b1b0101142222221b1b222222150c1d1d1d22221d1d1d0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1b1b1b01011b1b1b0a121b1b1b01011b1b1b11010101231b1b231301010101011d22221d010101141b1b1d23231d1b1b150c1b221d1d1d1d221b0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.buttonOrange,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c22222201012222220a121d1d1d1b1b1d1d1d110101211d1b1b1d1301010101011d1b1b1d010101141b1b1b1b1b1b1b1b150c1b1b1b1b1b1b1b1b0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c20202001010101010a122121210101202001110101012120202113010101012021212121200101140121010101012101150c01010120200101010a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c22222201012222220a121d1d1d01011d1d1d11010101210101210101010101011d22221d0101011422011d1d1d1d0122150c1d011b1b1b1b011d0a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c22222201012222220a121d1d1d01011d1d1d110101010101011d1301010101010101011d010101142222220101010101150c1d1d1d01010101010a07080909090909090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        }
    } else if (room == 13) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c22220101012222220a12011b22010101211d0b0101011d221b01131d0a0101011b1d222201210a1401010101211d01010a0c01010101010101010a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c22221b01010122220a121d1b011b011b011d0b0101011b011b011b010a01011b011b011b011b0a1422011b011b011b220a0c1d220101011b221d0a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c01010101012222220a1201010101231f1f1c0b0101012222221d1d1c0a0101011d1d1d1d1d1c0a1401010101231f1f1c0a0c01010101011d1d220a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c20010101010101010a1201010101010101200b0101012222222201010a0101011d1d1d1d20010a1422221d21010101010a0c1d1d1d01010101010a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1b1b1b01011b1b1b0a121b1b1b01011b1b1b0b0101011b1b1b1b20200a0101011b1b1b1b21210a141b1b1b01011b1b1b0a0c1b1b1b01011b1b1b0a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c22222201012222220a121d1d1d1b1b1d1d1d0b01011b1b1b1b1d1d1d0a01011b1b1b1b1d1d1d0a142222221b1b1d1d1d0a0c1d1d1d01011d1d1d0a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . 2 
. . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        }
    } else if (room == 14) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c24242424242424240a121f1f1f1f1f1f1f1f110101232323232323010101012323232323230101141f1f1f23231f1f1f150c1f1f1f01011f1f1f0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c1b1b1b1b1b1b1b1b0a121b1b1b1b1b1b1b1b11010101242424241301010101011f1f1f1f010101141b1b1b01011f2424150c1b1b1b01011f1f1f0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c261b272727271b260a121b1b1b1f1f1b1b1b1101011b1b1b1b1b1b250101131b1b1b1b1b1b0101141b1b1b1b1b1b1b1b150c1b1b1b01011b1b1b0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.buttonOrange,sprites.dungeon.hazardHole],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c0101201c1c2401010a120101211c1c1f0101110101012124241f130101010101211f1f1f010101140101250101010101150c01010101010101010a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole,sprites.dungeon.floorMixed],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c1b1b222222221b1b0a121b1b1b1b1b1b1b1b110101011b22221b1301010101011b23231b010101141b1b1b1b1b1b1b1b150c1b1b010101011b1b0a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e030303030e03050c011b1b1b1b1b1b010a120124241b1b2424011101011f1f1b1b1f1f010101011f1f25251f1f010114011f1f24241f1f01150c01010101010101010a07080914010115090806`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrange],
            TileScale.Sixteen
        ))
        }
    } else if (room == 15) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c22010101010101010a12011f202020201f0111010120010101012001010101210101010120010114011f202020201f01150c01010101010101130a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.floorDark4,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        if (roomKind == 1) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c24010101010101240a12252223232323230111010101011e1e1301010101010101011e23010101142323010101010101150c241e2301010101240a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 2 . . . . . . 2 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 2 . . . . . . 2 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.floorDark4,sprites.dungeon.hazardHole,sprites.dungeon.hazardSpike,sprites.dungeon.floorDark3,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1b2201010101011b0a120123232323231a011101011e171c1c1723010101011e181c1c181e0101140119232323231e01150c1b0101010101131b0a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.floorDark4,sprites.dungeon.hazardHole,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 3) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c23230101010123230a121e1f202020201f1e11010120232323232001010101201e1e1e1e20010114231f202020201f23150c1e2301010101231e0a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.floorDark4,sprites.dungeon.hazardHole,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 4) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c1b1b1b01011b1b1b0a121b1b1b1b1b1b1b1b1101011b1b23231b1b010101011b1b1e1e1b1b0101141b1b1b1b1b1b1b1b150c1b1b1b01011b1b1b0a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.floorDark4,sprites.dungeon.hazardHole,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        } else if (roomKind == 5) {
            tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e120101110e03050c22010101010101010a12011f202020201f0111010121232323232001010113231e1e1e1e20010114231e1e1e1e201f01150c1e1e1e22010101240a07080914010115090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.buttonOrange,myTiles.tile8,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.floorDark4,sprites.dungeon.hazardHole,sprites.dungeon.floorDark3,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
        }
    } else {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a00080002030e121616110e03050c16171d16161616180a12291616161616161e11162a1c16161f162e1616162b19161a1b16161616142c25262427161616150c162d2d16161616160a07080914161615090806`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.castle.tileGrass2,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorClosedEast,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedSouth,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.dungeon.stairLarge,sprites.builtin.crowd2,sprites.dungeon.buttonOrange,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.buttonPink,sprites.dungeon.buttonPinkDepressed,sprites.dungeon.buttonTealDepressed,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12],
            TileScale.Sixteen
        ))
    }
}
function createCoin (col: number, row: number) {
    temp2 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.Coin)
    temp2.setPosition(col * 16 + 8, row * 16 + 8)
    temp2.z = 2
    animation.runImageAnimation(
    temp2,
    [img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`,img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`,img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`,img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`,img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`,img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`],
    100,
    true
    )
}
function loadRoom (entranceDirection: number) {
    unloadRoom()
    if (dungeonMap.getPixel(loadedCol, loadedRow) != 2) {
        tempNumber = rooms[loadedCol][loadedRow]
        setTilemap(tempNumber % 16, Math.idiv(tempNumber, 32))
        if (entranceDirection == 1) {
            thePlayer.top = 5
        } else if (entranceDirection == 2) {
            thePlayer.right = scene.screenWidth() - 5
        } else if (entranceDirection == 3) {
            thePlayer.bottom = scene.screenHeight() - 5
        } else if (entranceDirection == 4) {
            thePlayer.left = 5
        } else {
            thePlayer.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
        }
        loadRoomObjects()
        roomCleared = visited[loadedCol][loadedRow]
        loadRoomObstacles(roomCleared)
        if (!(roomCleared)) {
            visited[loadedCol][loadedRow] = true
            if (obstacleCount > 0) {
                lockUnlockDoors(true)
            }
        }
    } else {
        loadEnd()
    }
}
function drawMap () {
    tempCol = 0
    for (let value of visited) {
        tempRow = 0
        tempList = value
        for (let value of tempList) {
            tempRow += 1
        }
        tempCol += 1
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pitfall, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.crumblingPitfall)
    otherSprite.lifespan = 700
    animation.runImageAnimation(
    otherSprite,
    [img`
b d d d d d d c b d d d d d d c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b b d b b b b b b b 
c c c c c c b a c c c c c c b a 
b d d d d d d c b d d d d d d c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b b d b b b b b b b 
c c c c c c b a b c c c c c c a 
`,img`
c c c c c c c c b d d d d d d c 
c c c c c c c c d b b b b b b c 
c c c c c c c c d b b b b b b c 
c c c c c c c c d b b b b b b c 
c c c c c c c c d b b b b b b c 
c c c c c c c c d b b b b b b c 
c c c c c c c c d b b b b b b b 
c c c c c c c c c c c c c c b a 
b d d d d d d c b d d d d d d c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b b d b b b b b b b 
c c c c c c b a b c c c c c c a 
`,img`
f f f f f f f f c c c c c c c c 
f c c c c c c f c c c c c c c c 
f c c c c c c f c c c c c c c c 
f c c c c c c f c c c c c c c c 
f c c c c c c f c c c c c c c c 
f c c c c c c f c c c c c c c c 
f c c c c c c f c c c c c c c c 
f f f f f f f f c c c c c c c c 
b d d d d d d c b d d d d d d c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b b d b b b b b b b 
c c c c c c b a b c c c c c c a 
`,img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f c c c c c c f 
f f c c c c f f f c c c c c c f 
f f c c c c f f f c c c c c c f 
f f c c c c f f f c c c c c c f 
f f c c c c f f f c c c c c c f 
f f f f f f f f f c c c c c c f 
f f f f f f f f f f f f f f f f 
b d d d d d d c c c c c c c c c 
d b b b b b b c c c c c c c c c 
d b b b b b b c c c c c c c c c 
d b b b b b b c c c c c c c c c 
d b b b b b b c c c c c c c c c 
d b b b b b b c c c c c c c c c 
d b b b b b b b c c c c c c c c 
c c c c c c b a c c c c c c c c 
`,img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f c c c c f f 
f f f f f f f f f f c c c c f f 
f f f f f f f f f f c c c c f f 
f f f f f f f f f f c c c c f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
c c c c c c c c f f f f f f f f 
c c c c c c c c f c c c c c c f 
c c c c c c c c f c c c c c c f 
c c c c c c c c f c c c c c c f 
c c c c c c c c f c c c c c c f 
c c c c c c c c f c c c c c c f 
c c c c c c c c f c c c c c c f 
c c c c c c c c f f f f f f f f 
`,img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f c c c c c c f f f f f f f f f 
f c c c c c c f f f c c c c f f 
f c c c c c c f f f c c c c f f 
f c c c c c c f f f c c c c f f 
f c c c c c c f f f c c c c f f 
f c c c c c c f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`,img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f c c c c f f f f f f f f f f 
f f c c c c f f f f f f f f f f 
f f c c c c f f f f f f f f f f 
f f c c c c f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`],
    100,
    false
    )
})
function updateTimer () {
    lowerSeconds.setImage(digitImages[Math.idiv(cash, 100)])
    upperDigit.setImage(digitImages[Math.idiv(cash % 100, 10)])
    lowerDigit.setImage(digitImages[cash % 10])
}
function createMessageSprites () {
    messageUpper = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.MessageBubble)
    messageUpper.setFlag(SpriteFlag.Ghost, true)
    messageLower = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.MessageBubble)
    messageLower.setFlag(SpriteFlag.Ghost, true)
    messageUpper.top = 90
    messageLower.top = 100
    messageUpper.z = 9999
    messageLower.z = 9999
}
function loadDungeon () {
    temp = sprites.create(dungeonMap, SpriteKind.Enemy)
    dungeonWidth = temp.width
    dungeonHeight = temp.height
    temp.destroy()
    rooms = []
    visited = []
    roomIndices = []
    for (let index = 0; index < 16; index++) {
        roomIndices.push(randint(0, 5))
    }
    for (let col = 0; col <= dungeonWidth - 1; col++) {
        rooms[col] = []
        visited[col] = []
        for (let row = 0; row <= dungeonHeight - 1; row++) {
            getRoomType(col, row)
            if (dungeonMap.getPixel(col, row) == 7) {
                loadedCol = col
                loadedRow = row
                roomModifier = 0
            } else {
                roomModifier = roomIndices[roomType]
                roomIndices[roomType] = (roomModifier + 1) % 6
            }
            rooms[col][row] = roomType + roomModifier * 32
            visited[col][row] = false
        }
    }
    loadRoom(-1)
}
function createTimer () {
    cash = 284
    digitImages = [img`
. c c . . 
c . . c . 
c . . c . 
c . . c . 
c . . c . 
. c c . . 
`,img`
. c . . . 
c c . . . 
. c . . . 
. c . . . 
. c . . . 
c c c . . 
`,img`
. c c . . 
c . . c . 
. . . c . 
. . c . . 
. c . . . 
c c c c . 
`,img`
c c c c . 
. . c . . 
. c c . . 
. . . c . 
. . . c . 
c c c . . 
`,img`
. . . c . 
. . c c . 
. c . c . 
c . . c . 
c c c c c 
. . . c . 
`,img`
c c c c . 
c . . . . 
c c c . . 
. . . c . 
. . . c . 
c c c . . 
`,img`
. c c . . 
c . . . . 
c c c . . 
c . . c . 
c . . c . 
. c c . . 
`,img`
c c c c . 
. . . c . 
. . . c . 
. . c . . 
. c . . . 
. c . . . 
`,img`
. c c . . 
c . . c . 
. c c . . 
c . . c . 
c . . c . 
. c c . . 
`,img`
. c c . . 
c . . c . 
c . . c . 
. c c c . 
. . . c . 
. c c . . 
`]
    temp = sprites.create(img`
. c c c c c c c c c c c c c c c c c c c c c . 
c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c 
c b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b c 
c b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b c 
c b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b c 
c b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b c 
c b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b c 
c b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b c 
c b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b c 
c c b b b b b b b b b b b b b b b b b b b c c 
c c c c c c c c c c c c c c c c c c c c c c c 
. c c c c c c c c c c c c c c c c c c c c c . 
`, SpriteKind.Timer)
    temp.z = 98
    temp.setPosition(141, 7)
    temp.setFlag(SpriteFlag.Ghost, true)
    temp.setFlag(SpriteFlag.RelativeToCamera, true)
    lowerSeconds = sprites.create(digitImages[0], SpriteKind.Timer)
    lowerSeconds.z = 99
    lowerSeconds.setPosition(135, 6)
    lowerSeconds.setFlag(SpriteFlag.Ghost, true)
    lowerSeconds.setFlag(SpriteFlag.RelativeToCamera, true)
    upperDigit = sprites.create(digitImages[0], SpriteKind.Timer)
    upperDigit.z = 99
    upperDigit.setPosition(141, 6)
    upperDigit.setFlag(SpriteFlag.Ghost, true)
    upperDigit.setFlag(SpriteFlag.RelativeToCamera, true)
    lowerDigit = sprites.create(digitImages[0], SpriteKind.Timer)
    lowerDigit.z = 99
    lowerDigit.setPosition(147, 6)
    lowerDigit.setFlag(SpriteFlag.Ghost, true)
    lowerDigit.setFlag(SpriteFlag.RelativeToCamera, true)
    updateTimer()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Laser, function (sprite, otherSprite) {
    dealDamage(otherSprite, 1)
    otherSprite.destroy()
})
function loadEnd () {
    thePlayer.setPosition(128, 360)
    tiles.setTilemap(tiles.createTilemap(
            hex`1000180017181818181818181818181818181816140f0f0f0f0f0f0f0f0f0f0f0f0f0f1514210f0f0f0f0f0f0f0f0f0f0f0f23151422210f0f0f0f0f0f0f0f0f0f232515142722210f0f0f0f0f0f0f0f23252615140f2722210f0f0f0f0f0f2325260f1514210f2722210f0f0f0f2325260f23151422210f2722210f0f2325260f232515142222210f2722191925260f2325251514222222210f271919260f231e25251514222222221919191919191e25252515142222221d191919191919251e25251514222222221919191919191e252525151422221d22191919191919251e25251514222222221a1a1a1a1a1a2525252515142222221d1919191919191e1e2525151422221d1f1b1a1a1a1a1c20252525151422221f1b1d191919191e1c2025251514221f1b1d1f1b1a1a1c201e1c202515141f1b1d1f1b2219191e1c20251c2015141b1d1f1b1d1d19191e1e1c20251c15141d1f1b222222191925251e1c202515141f1b221d1d1d19191e1e25251c20151211111011110e19190d111111111113`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark0,sprites.dungeon.stairNorth,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.hazardHole,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest],
            TileScale.Sixteen
        ))
    scene.centerCameraAt(128, 380)
    inTheEnd = true
    temp = sprites.create(img`
. . b b b b b b b b b b b b . . 
. b e 4 4 4 4 4 4 4 4 4 4 e b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b b b b b b b d d b b b b b b b 
c b b b b b b c c b b b b b b c 
c c c c c c b c c b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.Treasure)
    temp.setFlag(SpriteFlag.Ghost, true)
    temp.setPosition(128, 136)
    createStatue(88, 168)
    createStatue(168, 200)
    createStatue(88, 200)
    createStatue(168, 168)
    destroyKind(SpriteKind.Timer)
}
function fireLasers () {
    for (let value of sprites.allOfKind(SpriteKind.LaserOrb)) {
        animation.runImageAnimation(
        value,
        [img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 5 5 6 6 6 . . . . 
. . . 7 7 7 7 6 6 6 6 6 6 . . . 
. . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
. . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
. 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
. 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
. 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
. 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
. . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
. . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`],
        200,
        false
        )
        value.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        if (value.z == 1) {
            temp = sprites.create(img`
2 2 
2 2 
2 2 
2 2 
2 2 
2 2 
`, SpriteKind.Laser)
            temp.setVelocity(0, -70)
            temp.setPosition(value.x, value.top - 8)
        } else if (value.z == 2) {
            temp = sprites.create(img`
2 2 2 2 2 2 
2 2 2 2 2 2 
`, SpriteKind.Laser)
            temp.setVelocity(70, 0)
            temp.setPosition(value.right + 8, value.y)
        } else if (value.z == 3) {
            temp = sprites.create(img`
2 2 
2 2 
2 2 
2 2 
2 2 
2 2 
`, SpriteKind.Laser)
            temp.setVelocity(0, 70)
            temp.setPosition(value.x, value.bottom + 8)
        } else {
            temp = sprites.create(img`
2 2 2 2 2 2 
2 2 2 2 2 2 
`, SpriteKind.Laser)
            temp.setVelocity(-70, 0)
            temp.setPosition(value.left - 8, value.y)
        }
        temp.setFlag(SpriteFlag.AutoDestroy, true)
        temp.setFlag(SpriteFlag.DestroyOnWall, true)
        temp.startEffect(effects.trail, 500)
    }
}
function coverTilePi2 () {
    temp2 = sprites.create(sprites.dungeon.floorDark0, SpriteKind.Decoration)
    temp2.setFlag(SpriteFlag.Ghost, true)
    tiles.placeOnTile(temp2, tiles.getTileLocation(Math.idiv(temp.x, 16), Math.idiv(temp.y, 16)))
}
sprites.onDestroyed(SpriteKind.crumblingPitfall, function (sprite) {
    tiles.setTileAt(tiles.getTileLocation(Math.idiv(sprite.x, 16), Math.idiv(sprite.y, 16)), sprites.builtin.forestTiles10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Spikes, function (sprite, otherSprite) {
    activateSpikes(otherSprite)
})
function startDungeon () {
    list = [img`
3 . . . . . 2 . 
3 . . 3 . . 3 . 
3 3 3 3 3 3 3 3 
. 3 . . 3 . . 3 
3 3 3 . . . . . 
. 3 . . 3 3 . . 
. 3 3 3 3 3 3 . 
. 7 . 3 . 3 . . 
. . . . . . . . 
`, img`
. 3 3 3 3 3 . . 
. 3 . 3 . 3 . . 
. 3 . 7 . 3 3 . 
. 3 . . . 3 . . 
. 3 3 3 3 3 . . 
. . . 3 . . . . 
. . 3 3 3 . . 2 
. 3 3 . 3 3 3 3 
. . . . . 3 . . 
`, img`
. . . . 3 . . . 
. . 3 . 3 3 3 . 
3 3 3 3 3 . 7 . 
3 . . . 3 . . . 
3 . 3 . 3 3 3 3 
3 3 3 3 3 . . . 
. . 3 . . . 2 . 
. . 3 3 3 3 3 . 
. . . . . . . . 
`, img`
. . . . . 3 . . 
. 3 3 3 3 3 . . 
. . . 3 . . 2 . 
. . 3 3 3 . 3 . 
. 3 3 . 3 3 3 3 
3 3 . . . . . . 
. 3 3 . 3 3 3 . 
. . 3 3 3 . 7 . 
. . . . . . . . 
`]
    dungeonMap = list[randint(0, list.length - 1)]
    loadDungeon()
    dungeonStarted = true
    monkeyText = ["In your head", "you hear a voice", "Nothing is free,", "time is money", "Hold A or B", "to run"]
    cutsceneStarted = true
    createTimer()
    mapSeed = 0
}
function createPlayerFrames () {
    idleLeftFrames = [img`
. . . . . . . . . . . . . . 
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`,img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f d f . f d f f d f . . . 
. f f . . f f . f f . . . . 
`]
    walkingLeftFrames = [img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`,img`
. . . . . . . . . . . . . . 
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e b f b . 
f d d f d d f d d f f d f . 
f b d d b b d d 2 b f d f . 
. f 2 2 2 2 2 2 d b d b f . 
. f d d d d d d d f f f . . 
. f d b d f f f d f . . . . 
. . f f f f . . f f . . . . 
`,img`
. . . . . . . . . . . . . . 
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 b f f d f 
. f 2 2 2 2 2 2 d b b d b f 
. f d d d d d d d f f f f . 
. . f d b d f d f . . . . . 
. . . f f f f f f . . . . . 
`]
    idleRightFrames = []
    for (let value of idleLeftFrames) {
        tempImage = value.clone()
        tempImage.flipX()
        idleRightFrames.push(tempImage)
    }
    walkingRightFrames = []
    for (let value of walkingLeftFrames) {
        tempImage = value.clone()
        tempImage.flipX()
        walkingRightFrames.push(tempImage)
    }
}
sprites.onDestroyed(SpriteKind.activatedSpikes, function (sprite) {
    temp2 = sprites.create(img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f f f f f b b b f f f f f b 
b f f f f f f f b f f f f f f f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f f f f f b b b f f f f f b 
b f f f f f f f b f f f f f f f 
b b f f f f f b b b f f f f f b 
`, SpriteKind.Spikes)
    temp2.setPosition(sprite.x, sprite.y)
})
sprites.onDestroyed(SpriteKind.fallingPlayer, function (sprite) {
    createPlayer(playerCol * 16 + 8, playerRow * 16 + 8)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.activatedSpikes, function (sprite, otherSprite) {
    dealDamage(otherSprite, 1)
})
function updateMessageText () {
    if (monkeyTextIndex < monkeyText.length && !(cutsceneEnded)) {
        tempString = monkeyText[monkeyTextIndex + lineIndex].substr(0, textIndex - 1)
        while (tempString.length < 16) {
            tempString = "" + tempString + " "
        }
        if (tempString.length > 16) {
            tempString = tempString.substr(0, 16)
        }
        if (lineIndex == 0) {
            messageUpper.say(tempString)
            messageLower.say("                ")
        } else if (lineIndex == 1) {
            messageLower.say(tempString)
        }
    }
}
/**
 * Room types (directions indicate doors):
 * 
 * 1 - North
 * 
 * 2 - East
 * 
 * 3 - South
 * 
 * 4 - West
 * 
 * 5 - North East
 * 
 * 6 - North South
 * 
 * 7 - North West
 * 
 * 8 - East South
 * 
 * 9 - East West
 * 
 * 10 - South West
 * 
 * 11 - North East South
 * 
 * 12 - North East West
 * 
 * 13 - North South West
 * 
 * 14 - East South West
 * 
 * 15 - North East South West
 */
function getRoomType (col: number, row: number) {
    hasNorth = 0 < row && 0 < dungeonMap.getPixel(col, row - 1)
    hasSouth = row < dungeonHeight - 2 && 0 < dungeonMap.getPixel(col, row + 1)
    hasWest = 0 < col && 0 < dungeonMap.getPixel(col - 1, row)
    hasEast = col < dungeonWidth - 2 && 0 < dungeonMap.getPixel(col + 1, row)
    if (hasNorth && (hasEast && (hasSouth && hasWest))) {
        roomType = 15
    } else if (hasEast && (hasSouth && hasWest)) {
        roomType = 14
    } else if (hasNorth && (hasSouth && hasWest)) {
        roomType = 13
    } else if (hasNorth && (hasEast && hasWest)) {
        roomType = 12
    } else if (hasNorth && (hasEast && hasSouth)) {
        roomType = 11
    } else if (hasSouth && hasWest) {
        roomType = 10
    } else if (hasEast && hasWest) {
        roomType = 9
    } else if (hasEast && hasSouth) {
        roomType = 8
    } else if (hasNorth && hasWest) {
        roomType = 7
    } else if (hasNorth && hasSouth) {
        roomType = 6
    } else if (hasNorth && hasEast) {
        roomType = 5
    } else if (hasWest) {
        roomType = 4
    } else if (hasSouth) {
        roomType = 3
    } else if (hasEast) {
        roomType = 2
    } else if (hasNorth) {
        roomType = 1
    } else {
        roomType = 0
    }
}
function movePlayerIntro () {
    if (animationEndTime == 0) {
        thePlayer.x += controller.dx(70)
        thePlayer.y += controller.dy(70)
    }
    if (!(cutsceneStarted)) {
        scene.centerCameraAt(0, thePlayer.y)
    } else {
        scene.centerCameraAt(0, 60)
    }
    if (thePlayer.y < 60 && !(cutsceneStarted)) {
        startCutscene()
    } else if (thePlayer.top < 5) {
        cutsceneEnded = true
        animationEndTime = 0
        monkeyTextAdvanceTime = 0
        messageLower.say("")
        messageUpper.say("")
        startDungeon()
    }
    if (animationEndTime > 0 && game.runtime() > animationEndTime) {
        animation.stopAnimation(animation.AnimationTypes.All, theMonkey)
        animationEndTime = 0
        animation.runImageAnimation(
        theMonkey,
        [img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e f c . . . . 
. f d d d d e e e f f . . . . . 
. . f f f f f e e e e f . . . . 
. . . . f f e e e e e e f . f f 
. . . f e e f e e f e e f . e f 
. . f e e f e e f e e e f . e f 
. f b d f d b f b b f e f f e f 
. f d d f d d f d d b e f f f f 
. . f f f f f f f f f f f f f . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e f c . . . . 
. . c c c c e e e f f . . . . . 
. f d d d d e e e e e f . . . . 
. . f f f f f e e e e e f . f f 
. . . f e e f e e f e e f . e f 
. . f e e f e e f e e e f . e f 
. f b d f d b f b b f e f f e f 
. f d d f d d f d d b e f f f f 
. . f f f f f f f f f f f f f . 
`],
        100,
        true
        )
    }
}
function startCutscene () {
    cutsceneStarted = true
    theMonkey = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . f f 
c c c c c d d d e e f c . f e f 
. f d d d d d e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f e f 
. . . f e f f e f e e e e f f . 
. . . f e f f e f e e e e f . . 
. . . f d b f d b f f e f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Decoration)
    theMonkey.setPosition(170, 50)
    animation.runMovementAnimation(
    theMonkey,
    "q -10 -10 -20 0 q -10 -10 -20 0 q -5 -5 -15 0 ",
    2000,
    false
    )
    animation.runImageAnimation(
    theMonkey,
    [img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . f f 
c c c c c d d d e e f c . f e f 
. f d d d d d e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f e f 
. . . f e f f e f e e e e f f . 
. . . f e f f e f e e e e f . . 
. . . f d b f d b f f e f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f . . . . . 
. c d f d d f d e e f f . . . . 
c d e e d d d d e e d d f . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e b d c . f f 
. f d d d d e e e f f c . f e f 
. f f f f f f e e e e f . f e f 
. f f f f e e e e e e e f f e f 
f d d f d d f e f e e e e f f . 
f d b f d b f e f e e e e f . . 
f f f f f f f f f f f f e f . . 
. . . . . . . . . f c d d f . . 
. . . . . . . . . . f f f f . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f f . . . . 
. c d d d d d d e e d d f . . . 
. c d f d d f d e e b d c . . . 
c d d f d d f d e e b d c . f f 
c d e e d d d d e e f c . f e f 
c d d d d c d e e e f . . f e f 
. f c c c d e e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . f f e f e e f e e e e f . . 
. f e f f e e f f f e e e f . . 
f d d b d d c f f f f f f b f . 
f d d c d d d f . . f c d d f . 
. f f f f f f f . . . f f f . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f f f . . . . 
. . f d d d e e e e d d f . . . 
. c d d d d d e e e b d c . . . 
. c d d d d d d e e b d c . . . 
c d d f d d f d e e f c . f f . 
c d d f d d f d e e f . . f e f 
c d e e d d d d e e f . . f e f 
. f d d d c d e e f f . . f e f 
. . f f f d e e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . . . f f e e e e e b f f . . 
. . . f e f f e e c d d f f . . 
. . f d d b d d c f f f . . . . 
. . f d d c d d d f f . . . . . 
. . . f f f f f f f . . . . . . 
`],
    200,
    true
    )
    animationEndTime = game.runtime() + 2000
    for (let index = 0; index <= 9; index++) {
        tiles.setWallAt(tiles.getTileLocation(index, 8), true)
    }
}
function dealDamage (source: Sprite, amount: number) {
    if (thePlayer.kind() == SpriteKind.Player) {
        thePlayer.setKind(SpriteKind.damagedPlayer)
        damageAngle = Math.atan2(thePlayer.y - source.y, thePlayer.x - source.x)
        thePlayer.setVelocity(50 * Math.cos(damageAngle), 50 * Math.sin(damageAngle))
        animation.runImageAnimation(
        thePlayer,
        [img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`,img`
2 2 2 . . . . 2 2 2 . . . . 
2 2 2 2 . . 2 2 2 2 . . . . 
2 2 2 2 2 2 2 2 2 2 . . . . 
2 2 2 2 2 2 2 2 2 2 . . . . 
2 2 2 2 2 2 2 2 2 2 . . . . 
2 2 2 2 2 2 2 2 2 2 . . . . 
2 2 f 2 2 2 2 f 2 2 . 2 2 2 
2 2 2 f 2 2 f 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 . . . 
. 2 2 . . 2 2 . . 2 2 . . . 
`,img`
5 5 5 . . . . 5 5 5 . . . . 
5 5 5 5 . . 5 5 5 5 . . . . 
5 5 5 5 5 5 5 5 5 5 . . . . 
5 5 5 5 5 5 5 5 5 5 . . . . 
5 5 5 5 5 5 5 5 5 5 . . . . 
5 5 5 5 5 5 5 5 5 5 . . . . 
5 5 f 5 5 5 5 f 5 5 . 5 5 5 
5 5 5 f 5 5 f 5 5 5 . 5 5 5 
5 5 5 5 5 5 5 5 5 5 . 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 . . 5 5 . . 5 5 . . . 
`],
        100,
        true
        )
        thePlayer.lifespan = 500
    }
}
function createButton (col: number, row: number) {
    temp2 = sprites.create(img`
b b b b b b b b b b b b b b b b 
b c b e 4 4 4 4 4 4 4 4 e b c b 
b b e 4 4 4 4 4 4 4 4 4 4 e b b 
b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
b b d 4 4 4 4 4 4 4 4 4 4 d b b 
b b d 4 4 4 4 4 4 4 4 4 4 d b b 
b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
b b 4 4 d d d d d d d d 4 4 b b 
b b c 4 4 4 4 4 4 4 4 4 4 c b b 
b b b c c c c c c c c c c b b b 
b c b b b b b b b b b b b b c b 
b b b b b b b b b b b b b b b b 
`, SpriteKind.Button)
    temp2.z = 2
    tiles.placeOnTile(temp2, tiles.getTileLocation(col, row))
    obstacleCount += 1
}
function createSpikes (col: number, row: number) {
    temp2 = sprites.create(img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f f f f f b b b f f f f f b 
b f f f f f f f b f f f f f f f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f f f f f b b b f f f f f b 
b f f f f f f f b f f f f f f f 
b b f f f f f b b b f f f f f b 
`, SpriteKind.Spikes)
    tiles.placeOnTile(temp2, tiles.getTileLocation(col, row))
}
function createPitfall (x: number, y: number) {
    temp2 = sprites.create(sprites.dungeon.floorDark0, SpriteKind.Pitfall)
    temp2.setPosition(x, y)
    temp2.z = 4
}
sprites.onDestroyed(SpriteKind.primedSpike, function (sprite) {
    temp2 = sprites.create(img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b f f 1 f f b b b f f 1 f f b 
b f f 1 1 1 f f b f f 1 1 1 f f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b f f 1 f f b b b f f 1 f f b 
b f f 1 1 1 f f b f f 1 1 1 f f 
b b f f f f f b b b f f f f f b 
`, SpriteKind.activatedSpikes)
    temp2.setPosition(sprite.x, sprite.y)
    temp2.lifespan = 400
    animation.runImageAnimation(
    temp2,
    [img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b f f 1 f f b b b f f 1 f f b 
b f f 1 1 1 f f b f f 1 1 1 f f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b f f 1 f f b b b f f 1 f f b 
b f f 1 1 1 f f b f f 1 1 1 f f 
b b f f f f f b b b f f f f f b 
`,img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b b 1 b b b b b b b 1 b b b 
b b f 1 1 1 f b b b f 1 1 1 f b 
b f f 1 1 1 f f b f f 1 1 1 f f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b b 1 b b b b b b b 1 b b b 
b b f 1 1 1 f b b b f 1 1 1 f b 
b f f 1 1 1 f f b f f 1 1 1 f f 
b b f f f f f b b b f f f f f b 
`,img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b 1 1 1 b b b b b 1 1 1 b b 
b b f 1 1 1 f b b b f 1 1 1 f b 
b f 1 1 1 1 1 f b f 1 1 1 1 1 f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b 1 1 1 b b b b b 1 1 1 b b 
b b f 1 1 1 f b b b f 1 1 1 f b 
b f 1 1 1 1 1 f b f 1 1 1 1 1 f 
b b f f f f f b b b f f f f f b 
`,img`
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b 1 1 1 b b b b b 1 1 1 b b 
b b b 1 1 1 b b b b b 1 1 1 b b 
b b 1 1 1 1 1 b b b 1 1 1 1 1 b 
b f 1 1 1 1 1 f b f 1 1 1 1 1 f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b 1 1 1 b b b b b 1 1 1 b b 
b b b 1 1 1 b b b b b 1 1 1 b b 
b b 1 1 1 1 1 b b b 1 1 1 1 1 b 
b f 1 1 1 1 1 f b f 1 1 1 1 1 f 
b b f f f f f b b b f f f f f b 
`,img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b 1 1 1 b b b b b 1 1 1 b b 
b b f 1 1 1 f b b b f 1 1 1 f b 
b f 1 1 1 1 1 f b f 1 1 1 1 1 f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b 1 1 1 b b b b b 1 1 1 b b 
b b f 1 1 1 f b b b f 1 1 1 f b 
b f 1 1 1 1 1 f b f 1 1 1 1 1 f 
b b f f f f f b b b f f f f f b 
`,img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b b 1 b b b b b b b 1 b b b 
b b f 1 1 1 f b b b f 1 1 1 f b 
b f f 1 1 1 f f b f f 1 1 1 f f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b b b 1 b b b b b b b 1 b b b 
b b f 1 1 1 f b b b f 1 1 1 f b 
b f f 1 1 1 f f b f f 1 1 1 f f 
b b f f f f f b b b f f f f f b 
`,img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b f f 1 f f b b b f f 1 f f b 
b f f 1 1 1 f f b f f 1 1 1 f f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b 1 b b b b b b b 1 b b b 
b b f f 1 f f b b b f f 1 f f b 
b f f 1 1 1 f f b f f 1 1 1 f f 
b b f f f f f b b b f f f f f b 
`,img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f f 1 f f b b b f f 1 f f b 
b f f f 1 f f f b f f f 1 f f f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f f 1 f f b b b f f 1 f f b 
b f f f 1 f f f b f f f 1 f f f 
b b f f f f f b b b f f f f f b 
`,img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f f f f f b b b f f f f f b 
b f f f 1 f f f b f f f 1 f f f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f f f f f b b b f f f f f b 
b f f f 1 f f f b f f f 1 f f f 
b b f f f f f b b b f f f f f b 
`,img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f f f f f b b b f f f f f b 
b f f f f f f f b f f f f f f f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f f f f f b b b f f f f f b 
b f f f f f f f b f f f f f f f 
b b f f f f f b b b f f f f f b 
`],
    50,
    false
    )
})
function decrementObstacles () {
    obstacleCount += -1
    if (obstacleCount == 0) {
        lockUnlockDoors(false)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite, otherSprite) {
    otherSprite.destroy()
    decrementObstacles()
})
function createPlayer (x: number, y: number) {
    thePlayer = sprites.create(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`, SpriteKind.Player)
    thePlayer.z = 10
    thePlayer.x = x
    thePlayer.y = y
}
function movePlayer () {
    if (controller.A.isPressed() || controller.B.isPressed()) {
        thePlayer.x += controller.dx(80)
        thePlayer.y += controller.dy(80)
    } else {
        thePlayer.y += controller.dy(60)
        thePlayer.x += controller.dx(60)
    }
    if (!(inTheEnd)) {
        if (thePlayer.right > scene.screenWidth() - 5) {
            loadedCol += 1
            loadRoom(4)
        } else if (thePlayer.left < 5) {
            loadedCol += -1
            loadRoom(2)
        } else if (thePlayer.top < 5) {
            loadedRow += -1
            loadRoom(3)
        } else if (thePlayer.bottom > scene.screenHeight() - 5) {
            loadedRow += 1
            loadRoom(1)
        } else if (thePlayer.tileKindAt(TileDirection.Center, sprites.dungeon.hazardHole) || thePlayer.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles10)) {
            thePlayer.setKind(SpriteKind.fallingPlayer)
            animation.runImageAnimation(
            thePlayer,
            [img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`,img`
. . . . . . . . . . . . . . 
. b b . . . . b b . . . . . 
. b d b . . b d b . . . . . 
. b b d d b d b b . . . . . 
. b 3 d d d d 3 b . . . . . 
. b d d d d d d b . . . . . 
. b d d d d d d b . . . . . 
. b d f d d f d b . . . b . 
. b d d b b d d 2 . . . b . 
. . 2 2 2 2 2 2 b b . . b . 
. . b d d d d d d b b b b . 
. . b b b b b b b b . . . . 
. . b . . . b . . b . . . . 
. . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . b . . . b b . . . . . . 
. . b b b b b b . . . . . . 
. . b b d d d b . . . . . . 
. . b d d d d b . . . . . . 
. . b d d d d b . . . . . . 
. . b d d d d b . . . . . . 
. . b b d d d b . b . . . . 
. . . b d d d b b b . . . . 
. . . b b b b b . . . . . . 
. . . b . . b . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . b . . b . . . . . . . 
. . . b b b b . . . . . . . 
. . . b b b b . . . . . . . 
. . . b b b b . . . . . . . 
. . . . b b b b . . . . . . 
. . . . b . b . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . b b b . . . . . . . 
. . . . b b b . . . . . . . 
. . . . b b b . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
`],
            100,
            false
            )
            thePlayer.lifespan = 1000
            thePlayer.setPosition(Math.imul(Math.idiv(thePlayer.x, 16), 16) + 8, Math.imul(Math.idiv(thePlayer.y, 16), 16) + 8)
        } else if (!(thePlayer.tileKindAt(TileDirection.Center, sprites.dungeon.hazardHole) || thePlayer.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles10) || (thePlayer.tileKindAt(TileDirection.Center, myTiles.tile6) || (thePlayer.tileKindAt(TileDirection.Center, myTiles.tile11) || thePlayer.tileKindAt(TileDirection.Center, myTiles.tile12))) || (thePlayer.tileKindAt(TileDirection.Center, myTiles.tile9) || thePlayer.tileKindAt(TileDirection.Center, myTiles.tile10)))) {
            playerCol = Math.idiv(thePlayer.x, 16)
            playerRow = Math.idiv(thePlayer.y, 16)
        } else {
        	
        }
    } else {
        scene.centerCameraAt(128, thePlayer.y)
    }
}
function destroyKind (num: number) {
    sprite_list = sprites.allOfKind(num)
    for (let value of sprite_list) {
        value.destroy()
    }
}
function coverTileHole () {
    temp2 = sprites.create(myTiles.tile8, SpriteKind.Decoration)
    temp2.setFlag(SpriteFlag.Ghost, true)
    tiles.placeOnTile(temp2, tiles.getTileLocation(Math.idiv(temp.x, 16), Math.idiv(temp.y, 16)))
}
function coverTileHoleUpper () {
    temp2 = sprites.create(sprites.dungeon.hazardHole, SpriteKind.Decoration)
    temp2.setFlag(SpriteFlag.Ghost, true)
    tiles.placeOnTile(temp2, tiles.getTileLocation(Math.idiv(temp.x, 16), Math.idiv(temp.y, 16)))
}
function loadRoomObstacles (alreadyVisited: boolean) {
    temp = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Temp)
    temp.setFlag(SpriteFlag.Ghost, true)
    for (let value of tiles.getTilesByType(sprites.dungeon.buttonOrange)) {
        tiles.placeOnTile(temp, value)
        if (!(alreadyVisited)) {
            createButton(Math.idiv(temp.x, 16), Math.idiv(temp.y, 16))
        }
        temp2 = sprites.create(img`
b b b b b b b b b b b b b b b b 
b c b b b b b b b b b b b b c b 
b b b c 6 6 6 6 6 6 6 6 c b b b 
b b c 6 6 6 6 6 6 6 6 6 6 c b b 
b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
b b 6 9 6 6 6 6 6 6 6 6 9 6 b b 
b b c 6 9 9 9 9 9 9 9 9 6 c b b 
b b b c c c c c c c c c c b b b 
b c b b b b b b b b b b b b c b 
b b b b b b b b b b b b b b b b 
`, SpriteKind.Decoration)
        temp2.setPosition(temp.x, temp.y)
    }
    for (let value of tiles.getTilesByType(myTiles.tile7)) {
        tiles.placeOnTile(temp, value)
        coverTilePi2()
        if (!(alreadyVisited)) {
            createCoin(Math.idiv(temp.x, 16), Math.idiv(temp.y, 16))
        }
    }
    temp.destroy()
}
function activateSpikes (spikeSprite: Sprite) {
    spikeSprite.setKind(SpriteKind.primedSpike)
    spikeSprite.setImage(img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f f 1 f f b b b f f 1 f f b 
b f f f 1 f f f b f f f 1 f f f 
b b f f f f f b b b f f f f f b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f f 1 f f b b b f f 1 f f b 
b f f f 1 f f f b f f f 1 f f f 
b b f f f f f b b b f f f f f b 
`)
    spikeSprite.lifespan = 1000
    spikeSprite.setFlag(SpriteFlag.Ghost, true)
}
function loadIntro () {
    scene.setBackgroundColor(7)
    tiles.setTilemap(tiles.createTilemap(
            hex`0a0010001215110e14140d1215111c240e0d0a0a0e0d241e1c26262426242424241e1c24242424242624241f0d26252426242425240e2624242424242624262424242424242624252424262426242424242424240c0c2424262426240c0c0c17242424242424170c0c2624242525242426171724242524262524240c172426252424252424170c26242425252424260c0c172426242424260c170c170c0c170c1717170c`,
            img`
2 2 2 2 . . 2 2 2 2 
2 . 2 2 . . 2 2 . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.castle.saplingPine,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.floorDark0,sprites.castle.saplingOak,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.doorOpenNorth,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterEast2,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tilePath8],
            TileScale.Sixteen
        ))
    createPlayer(80, 188)
    temp = sprites.create(sprites.dungeon.purpleOuterNorth0, SpriteKind.Decoration)
    tiles.placeOnTile(temp, tiles.getTileLocation(4, 0))
    temp.z = 20
    temp = sprites.create(sprites.dungeon.purpleOuterNorth0, SpriteKind.Decoration)
    tiles.placeOnTile(temp, tiles.getTileLocation(5, 0))
    temp.z = 20
    monkeyText = ["debug", ""]
    if (info.highScore() == 0) {
        monkeyText = ["I wouldn't go", "further, cat...", "Didn't your mom", "teach you?", "It's a weird", "forest temple!", "It's obviously", "a trap!", "Do yourself a", "favor, friend.", "Don't get lost", "in this place!"]
    }
    if (info.highScore() == 1) {
        monkeyText = ["Oh hey, it's you!", "You're back!", "Didn't make it to", "the end, huh?", "But how'd you get", "back out here?", "I guess cats do", "have nine lives!", "Must be nice...", "A second chance...", "Better not waste", "it by going in!"]
    }
    if (info.highScore() == 2) {
        monkeyText = ["Back again, huh?", "Have a nice time?", "It's not going to", "get any easier.", "And there probably", "isn't a reward!", "This place is old", "as heck!", "I bet hundreds of", "folks have tried!", "You should find a", "different hobby..."]
    }
    if (info.highScore() == 8) {
        monkeyText = ["Hey there, how's", "it going cat?", "You know this is", "the last one...", "Attempt number", "nine...", "I know I can't ", "stop you.", "Why do you care", "about this place?", "It doesn't make", "any sense!!!", "But hey, have a", "good time!", "It was nice to", "know you, I guess!"]
    }
}
function lockUnlockDoors (lock: boolean) {
    destroyKind(SpriteKind.Door)
    temp = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Temp)
    temp.setFlag(SpriteFlag.Ghost, true)
    tiles.placeOnTile(temp, tiles.getTileLocation(4, 0))
    if (temp.tileKindAt(TileDirection.Center, sprites.dungeon.floorDark0)) {
        tiles.setWallAt(tiles.getTileLocation(4, 0), lock)
        tiles.setWallAt(tiles.getTileLocation(5, 0), lock)
        if (lock) {
            temp2 = sprites.create(sprites.dungeon.purpleOuterNorth1, SpriteKind.Door)
            tiles.placeOnTile(temp2, tiles.getTileLocation(4, 0))
            temp2 = sprites.create(sprites.dungeon.purpleOuterNorth1, SpriteKind.Door)
            tiles.placeOnTile(temp2, tiles.getTileLocation(5, 0))
        }
    }
    tiles.placeOnTile(temp, tiles.getTileLocation(4, 7))
    if (temp.tileKindAt(TileDirection.Center, sprites.dungeon.floorDark0)) {
        tiles.setWallAt(tiles.getTileLocation(4, 7), lock)
        tiles.setWallAt(tiles.getTileLocation(5, 7), lock)
        if (lock) {
            temp2 = sprites.create(sprites.dungeon.purpleOuterSouth0, SpriteKind.Door)
            tiles.placeOnTile(temp2, tiles.getTileLocation(4, 7))
            temp2 = sprites.create(sprites.dungeon.purpleOuterSouth0, SpriteKind.Door)
            tiles.placeOnTile(temp2, tiles.getTileLocation(5, 7))
        }
    }
    tiles.placeOnTile(temp, tiles.getTileLocation(0, 3))
    if (temp.tileKindAt(TileDirection.Center, sprites.dungeon.floorDark0)) {
        tiles.setWallAt(tiles.getTileLocation(0, 3), lock)
        tiles.setWallAt(tiles.getTileLocation(0, 4), lock)
        if (lock) {
            temp2 = sprites.create(sprites.dungeon.purpleOuterWest1, SpriteKind.Door)
            tiles.placeOnTile(temp2, tiles.getTileLocation(0, 3))
            temp2 = sprites.create(sprites.dungeon.purpleOuterWest1, SpriteKind.Door)
            tiles.placeOnTile(temp2, tiles.getTileLocation(0, 4))
        }
    }
    tiles.placeOnTile(temp, tiles.getTileLocation(9, 3))
    if (temp.tileKindAt(TileDirection.Center, sprites.dungeon.floorDark0)) {
        tiles.setWallAt(tiles.getTileLocation(9, 3), lock)
        tiles.setWallAt(tiles.getTileLocation(9, 4), lock)
        if (lock) {
            temp2 = sprites.create(sprites.dungeon.purpleOuterEast0, SpriteKind.Door)
            tiles.placeOnTile(temp2, tiles.getTileLocation(9, 3))
            temp2 = sprites.create(sprites.dungeon.purpleOuterEast0, SpriteKind.Door)
            tiles.placeOnTile(temp2, tiles.getTileLocation(9, 4))
        }
    }
    temp.destroy()
}
sprites.onDestroyed(SpriteKind.damagedPlayer, function (sprite) {
    createPlayer(thePlayer.x, thePlayer.y)
})
let textClearTime = 0
let playerFacingLeft = false
let playerIsWalking = false
let isMoving = false
let shouldUpdateAnimation = false
let sprite_list: Sprite[] = []
let damageAngle = 0
let animationEndTime = 0
let hasEast = false
let hasWest = false
let hasSouth = false
let hasNorth = false
let tempString = ""
let playerRow = 0
let playerCol = 0
let walkingRightFrames: Image[] = []
let tempImage: Image = null
let idleRightFrames: Image[] = []
let walkingLeftFrames: Image[] = []
let idleLeftFrames: Image[] = []
let mapSeed = 0
let dungeonStarted = false
let list: Image[] = []
let inTheEnd = false
let roomType = 0
let roomModifier = 0
let roomIndices: number[] = []
let dungeonHeight = 0
let dungeonWidth = 0
let lowerDigit: Sprite = null
let upperDigit: Sprite = null
let digitImages: Image[] = []
let lowerSeconds: Sprite = null
let tempList: boolean[] = []
let tempRow = 0
let tempCol = 0
let obstacleCount = 0
let visited: boolean[][] = []
let roomCleared = false
let rooms: number[][] = []
let tempNumber = 0
let loadedRow = 0
let loadedCol = 0
let dungeonMap: Image = null
let messageUpper: Sprite = null
let messageLower: Sprite = null
let cutsceneEnded = false
let cutsceneStarted = false
let tempTile: Image = null
let textIndex = 0
let lineIndex = 0
let theMonkey: Sprite = null
let monkeyTextAdvanceTime = 0
let monkeyText: string[] = []
let monkeyTextIndex = 0
let cash = 0
let thePlayer: Sprite = null
let temp: Sprite = null
let temp2: Sprite = null
createPlayerFrames()
loadIntro()
createMessageSprites()
game.onUpdate(function () {
    if (dungeonStarted) {
        if (!(cutsceneStarted) || cutsceneEnded) {
            if (thePlayer.kind() == SpriteKind.Player) {
                movePlayer()
            }
        }
    } else {
        movePlayerIntro()
    }
    if (monkeyTextAdvanceTime > 0 && game.runtime() > monkeyTextAdvanceTime) {
        advanceMonkeyText()
    }
})
game.onUpdate(function () {
    if (thePlayer.kind() == SpriteKind.Player) {
        shouldUpdateAnimation = false
        isMoving = controller.dx() != 0 || controller.dy() != 0
        if (isMoving != playerIsWalking) {
            playerIsWalking = isMoving
            shouldUpdateAnimation = true
        }
        if (controller.dx() < 0) {
            if (!(playerFacingLeft)) {
                playerFacingLeft = true
                shouldUpdateAnimation = true
            }
        } else if (controller.dx() > 0) {
            if (playerFacingLeft) {
                playerFacingLeft = false
                shouldUpdateAnimation = true
            }
        }
        if (shouldUpdateAnimation) {
            animation.stopAnimation(animation.AnimationTypes.All, thePlayer)
            if (playerIsWalking) {
                if (playerFacingLeft) {
                    animation.runImageAnimation(
                    thePlayer,
                    walkingLeftFrames,
                    100,
                    true
                    )
                } else {
                    animation.runImageAnimation(
                    thePlayer,
                    walkingRightFrames,
                    100,
                    true
                    )
                }
            } else {
                if (playerFacingLeft) {
                    animation.runImageAnimation(
                    thePlayer,
                    idleLeftFrames,
                    200,
                    true
                    )
                } else {
                    animation.runImageAnimation(
                    thePlayer,
                    idleRightFrames,
                    200,
                    true
                    )
                }
            }
        }
    }
})
game.onUpdateInterval(250, function () {
    if (dungeonStarted && !(inTheEnd)) {
        cash += -1
        updateTimer()
    }
})
game.onUpdateInterval(40, function () {
    if (cutsceneStarted && animationEndTime == 0 && monkeyTextAdvanceTime == 0 && !(cutsceneEnded)) {
        music.playMelody("@20,10,0,0 c5:1", 99999999999)
        textIndex += 1
        if (textIndex > monkeyText[monkeyTextIndex + lineIndex].length + 1) {
            textIndex = 0
            lineIndex += 1
            if (lineIndex > 1) {
                if (monkeyTextIndex + 2 < monkeyText.length) {
                    monkeyTextAdvanceTime = game.runtime() + 1500
                } else {
                    monkeyTextAdvanceTime = 0
                    animation.stopAnimation(animation.AnimationTypes.All, theMonkey)
                    cutsceneEnded = true
                    animation.runImageAnimation(
                    theMonkey,
                    [img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . f f 
c c c c c d d d e e f c . f e f 
. f d d d d d e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f e f 
. . . f e f f e f e e e e f f . 
. . . f e f f e f e e e e f . . 
. . . f d b f d b f f e f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f . . . . . 
. c d f d d f d e e f f . . . . 
c d e e d d d d e e d d f . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e b d c . f f 
. f d d d d e e e f f c . f e f 
. f f f f f f e e e e f . f e f 
. f f f f e e e e e e e f f e f 
f d d f d d f e f e e e e f f . 
f d b f d b f e f e e e e f . . 
f f f f f f f f f f f f e f . . 
. . . . . . . . . f c d d f . . 
. . . . . . . . . . f f f f . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f f . . . . 
. c d d d d d d e e d d f . . . 
. c d f d d f d e e b d c . . . 
c d d f d d f d e e b d c . f f 
c d e e d d d d e e f c . f e f 
c d d d d c d e e e f . . f e f 
. f c c c d e e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . f f e f e e f e e e e f . . 
. f e f f e e f f f e e e f . . 
f d d b d d c f f f f f f b f . 
f d d c d d d f . . f c d d f . 
. f f f f f f f . . . f f f . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f f f . . . . 
. . f d d d e e e e d d f . . . 
. c d d d d d e e e b d c . . . 
. c d d d d d d e e b d c . . . 
c d d f d d f d e e f c . f f . 
c d d f d d f d e e f . . f e f 
c d e e d d d d e e f . . f e f 
. f d d d c d e e f f . . f e f 
. . f f f d e e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . . . f f e e e e e b f f . . 
. . . f e f f e e c d d f f . . 
. . f d d b d d c f f f . . . . 
. . f d d c d d d f f . . . . . 
. . . f f f f f f f . . . . . . 
`],
                    200,
                    true
                    )
                    animation.runMovementAnimation(
                    theMonkey,
                    "q -10 -10 -20 0 q -10 -10 -20 0 q -5 -5 -15 0 q -10 -10 -20 0 q -10 -10 -20 0 q -5 -5 -15 0 q -10 -10 -20 0 q -5 -5 -15 0 ",
                    3000,
                    false
                    )
                    textClearTime = game.runtime() + 1500
                }
            }
        }
        updateMessageText()
    }
    if (textClearTime > 0 && textClearTime < game.runtime()) {
        textClearTime = 0
        messageUpper.say("")
        messageLower.say("")
    }
})
game.onUpdateInterval(2000, function () {
    if (dungeonStarted) {
        fireLasers()
    }
})
