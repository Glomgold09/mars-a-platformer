namespace SpriteKind {
    export const item = SpriteKind.create()
    export const Plant = SpriteKind.create()
    export const Rocket = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (thePlayer.vy == 0) {
        thePlayer.vy = -140
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.item, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.baDing.play()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Plant, function (sprite, otherSprite) {
    otherSprite.destroy()
    Fly = sprites.create(img`
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
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Fly,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f . . f f f . . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . . 1 1 f f 1 1 . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f b e e e e b f . . . . 
        . . . . f f b e e b f f . . . . 
        . . . . f b b e e b b f . . . . 
        . . . f e f f f f f f e f . . . 
        . . . f b f . f f . f b f . . . 
        . . . . f . 2 f f 2 . f . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f b e e e e b f . . . . 
        . . . . f f b e e b f f . . . . 
        . . . . f b b e e b b f . . . . 
        . . . f e f f f f f f e f . . . 
        . . . f b f . f f . f b f . . . 
        . . . . f . 2 f f 2 . f . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    Fly.setPosition(thePlayer.x + 80, thePlayer.y - 80)
    Fly.follow(thePlayer, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rocket, function (sprite, otherSprite) {
    game.over(true)
})
function Level () {
    controller.moveSprite(thePlayer, 100, 0)
    if (current_Level == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (current_Level == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (current_Level == 2) {
        tiles.setCurrentTilemap(tilemap`level5`)
    } else if (current_Level == 3) {
        tiles.setCurrentTilemap(tilemap`level6`)
    } else if (current_Level == 4) {
        tiles.setCurrentTilemap(tilemap`level9`)
    } else if (current_Level == 5) {
        tiles.setCurrentTilemap(tilemap`level10`)
    } else if (current_Level == 6) {
        tiles.setCurrentTilemap(tilemap`level7`)
    }
    thePlayer.ay = 300
    scene.cameraFollowSprite(thePlayer)
    tiles.placeOnRandomTile(thePlayer, assets.tile`myTile14`)
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Plant)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.item)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        item = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 7 7 7 f . . . . . . 
            . . . . . f 7 7 7 f . . . . . . 
            . . . . . f 7 7 7 f . . . . . . 
            . . . . . f 7 7 7 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.item)
        animation.runImageAnimation(
        item,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        150,
        true
        )
        tiles.placeOnTile(item, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
        item = sprites.create(img`
            ........................................
            ........................................
            ........................................
            ........................................
            ................ffffff..................
            ................f2222f..................
            ...............f222222f.................
            ..............ff8bbbb8ff................
            .............ff8bbbbbb8ff...............
            .............f8bbbbbbbb8f...............
            .............f8bbbbbbbb8f...............
            .............f8bbbbbbbb8f...............
            .............f8bbbbbbbb8f...............
            ..............f88888888f................
            ..............ffffffffff................
            .............fccccccccccf...............
            ..............ffffffffff................
            .............fccccccccccf...............
            ..............ffffffffff................
            ............ff8888888888ff..............
            ............f88bbbbbbbb88f..............
            ............f8bbbbbbbbbb8f..............
            ...........ff8bbbbbbbbbb8ff.............
            ...........f88bbbbbbbbbb88f.............
            ...........f8bbbbbbbbbbbb8f.............
            ...........f88bbbbbbbbbb88f.............
            .........ffff888888888888ffff...........
            ........fcccffffffffffffffcccf..........
            ........fcccff2ff2ff2ff2ffcccf..........
            ........fcccf8f88f88f88f8fcccf..........
            ........fcccf288888888882fcccf..........
            ........fcccf222222222222fcccf..........
            ........fcccf2bbbbbbbbbb2fcccf..........
            ........fcccf8bbbbbbbbbb8fcccf..........
            ........fcccf8bbbbbbbbbb8fcccf..........
            ........fcfff8bbbbbbbbbb8fffcf..........
            ........fcf.f8bbbbbbbbbb8f.fcf..........
            .........ff.f8bbbbbbbbbb8f.ff...........
            ............f8bbbbbbbbbb8f..............
            ...........ff888bbbbbb888ff.............
            ..........f1fff8bbbbbb8fff1fff..........
            ........fff111f8bbbbbb8f11111f..........
            ........f11111f88888888f11111f..........
            ........f111ffffffffffffff111f..........
            ........f1fff.fccccccccf.fff1f..........
            ........f1f....ffffffff....f1f..........
            ........f1f...fccccccccf...f1f..........
            ........f1f....ffffffff....f1f..........
            .........f..................f...........
            ........................................
            `, SpriteKind.Rocket)
        tiles.placeOnTile(item, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
        Martian_Flower = sprites.create(img`
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
            . . . . . . . . . . 7 . . . . . 
            . . . . 7 . . . . 7 6 7 . . . . 
            . . . 7 6 7 . . 7 6 . 7 . . . . 
            . . . 7 . 6 7 7 7 6 . . . . . . 
            . . . 7 . . 6 7 6 . . . . . . . 
            . . . . . . 6 7 . . . . . . . . 
            `, SpriteKind.Plant)
        tiles.placeOnTile(Martian_Flower, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    current_Level += 1
    Level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    current_Level += 1
    Level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (thePlayer.y < otherSprite.y) {
        info.changeScoreBy(3)
        music.powerUp.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
})
let Martian_Flower: Sprite = null
let item: Sprite = null
let Fly: Sprite = null
let current_Level = 0
let thePlayer: Sprite = null
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbb222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbb22222222bbbbbbbbb222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbb22222222222bbbbb222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbb222222222222bbb2222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbb2222222222222bbb2222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbb222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbb2222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbb2222222b22222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22222222222222222222222222222222222bbbbbbbbbbbbbbbbbbbb
    bbbbbbb22222222b22222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222222222222222222222222222222222bbbbbbbbbbbbbbbbbbb
    bbbbbbb22222222b22222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222222222222222222222222222222222bbbbbbbbbbbbbbbbbbb
    bbbbbbb22222222b22222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22222222222222222222222222222222222222bbbbbbbbbbbbbbbbbbb
    bbbbbb222222222b22222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22222222222222222222222222222222222222bbbbbbbbbbbbbbbbbbb
    bbbbb222222222bbb2222222222b22222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22222222222222222222222222222222222222bbbbbbbbbbbbbbbbbbb
    bbbbb222222222bbb2222222222b22222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22bbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222222222bbbbbbbb22222222222222222bbbbbbbbbbbbbbbbbbb
    bbbbb222222222bbb2222222222b222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222bbbbbbbbbbbbbbbbbbbbbbbbbbb222222222bbbbbbbbbbbbbbbbbbb2222222222bbbbbbbbbbbbbbbbbbb
    bbbbb222222222bbb2222222222b222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222222bbbbbbbbbbbbbbbbbbbbbbbbbb22222222bbbbbbbbbbbbbbbbbbbbbbb2222222bbbbbbbbbbbbbbbbbbb
    bbbbb222222222bbb2222222222b222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222bbbb2222222bbbbbbbbbbbbbb2222222bbbbbbbbbbbbbbbbbbbbbbbbbb222bbbbbbbbbbbbbbbbbbbbb
    bbbbb22222222bbbb2222222222b222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222bb2222222222222bbbbbbbbbb222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbb22222222bbbbb22222222bb222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22222222222222222222222bbbbbbbbb222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbb22222222bbbbb22222222bb222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222222222222222222222222bbbbbbbb222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbb22222222bbbbb22222222bb222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222222222222222222222bbbbbbb222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbb22222222bbbbb22222222bb222222222bbbbbbbbccccccccccccccccccbbbbbbbb22222222222222222222222222bbbbbb222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbb22222222bbbbbb2222222bb222222222bbbbccccccccccccccccccccccccccbbbb22222222222222222222222222bbbbbb222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbb22222222bbbbbb222222bbb222222222bbccccccccccccccccccccccccccccccbb22222222222222222222222222bbbbbbb22222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
    bbbbb22222222bbbbbb222222bbb222222222ccccccccfffffffffffffffffccccccccc22222222222222222222222222bbbbbbb22222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccc
    bbbbb22222222bbbbbb222222bbb222222222cccccfffffffffffffffffffffffcccccc2222222222222bbbb2222222bbbbbbbbb22222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccc
    bbbbb22222222bbbbbb222222bbb222222222ccfffffffffffffffffffffffffffffccc222222222222bbbbbbbbbbbbbbbbbbbbbb22222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
    bbbbb22222222bbbbbbb22222bbb222222222fffffffffffffffffffffffffffffffffc22222222222bbbbbbbbbbbbbbbbbbbbbbbb2222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccffffffff
    bbbbb22222222bbbbbbb22222bbb222222222bfffffffffffffffffffffffffffffffff22222222222bffbbbbbbbbbbbbbbbbbbbbb22222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccfffffffffff
    bbbbb22222222bbbbbbb22222bbb222222222bbbfffffffffffffffffffffffffffffff22222222222ffffffffffffbbbbbbbbbbbbb222222bbbbbbbbbbbbbbbbbbbbbbbbbbbccccccffffffffffffff
    bbbbb222222222bbbbbb22222bbb2222222244bbbbfffffffffffffffffffffffffffff2222222222211111111111fffbbbbbbbbbbb2222222bbbbbbbbbbbbbbbbbbbbbbbbcccccccfffffffffffffff
    bbbbb222222222bbbbbbb2222bbc222222224444bbdd55555555fffffffffffffffffff222222222221111111111111fffbbbbbbbbbb2222222222bbbbbbbbbbbbbbbbbbbccccccfffffffffffffffff
    bbbbb222222222bbbbbbb2222bcc222222224444444dd222255555fffffffffffffffff22222222221111111111111111ffbbbbbbbbbb22222222222bbbbbbbbbbbbbbbbcccccfffffffffffffffffff
    bbbbb222222222bbbbbbbb222ccc222222224444442222222222555ffffffffffffffff2222222222111111111111111111ffbbbbbbbb2222222222222bbbbbbbbbbbbbcccccffffffffffffffffffff
    bbbbb222222222bbbbbbbb222ccc2222222244444222222222222555fffffffffffffff22222222221111111111111111111ffbbbbbbbb2222222222222bbbbbbbbbbbbccccfffffffffffffffffffff
    bbbbb222222222bbbbbbbb2c2cc422222222444422222222222222555ffffffffffffff222222222211111111111111111111ffbbbbbbbb2222222222222bbbbbbbbbbccccffffffffffffffffffffff
    bbbbb222222222bbbbbbbbb22c4422222222444222222222222222255ffffffffffffff2222222222111111111111111111111ffbbbbbbbb2222222222222bbbbbbbbccccfffffffffffffffffffffff
    bbbbb222222222bbbbbbbbc22444222222224ee2222222222222222255fffffffffffff22222222222111111111111111111111fbbbbbbbbb222222222222bbbbbbbccccffffffffffffffffffffffff
    bbbbb222222222bbbbbbbcc2244422222222eee2222222222222222225fffffffffffff22222222222111111111111111111111ffbbbbbbbbb222222222222bbbbbbccccffffffffffffffffffffffff
    bbbbb222222222bbbbbbbcc2244422222222eee2222222222222222225fffffffffffff222222222221111111111111111111111fbbbbbbbbbb2222222222222bbbccccfffffffffffffffffffffffff
    bbbb2222222222bbbbbbccc4244422222222eee2222222222222222222fffffffffffff222222222221111111111111111111111fbbbbbbbbbbb222222222222bbbccccfffffffffffffffffffffffff
    bbbb2222222222bbbbbbccc4444422222222eeee222222444422222222dffffffffffff2222222222211111111111111111111111fbbbbbbbbbb22222222222222ccccffffffffffffffffffffffffff
    bbbb2222222222bbbbbccc44444422222222eeee2222244444222222222bfffffffffff2222222222211111111111111111111111fbbbbbbbbbbb2222222222222cccfffffffffffffffffffffffffff
    bbbb2222222222bbbbbccc44444422222222eeee2222244444222222222bbffffffffff2222222222211111111111111111111111fbbbbbbbbbbb22222222222222ccfffffffffffffffffffffffffff
    bbbb2222222222bbbbccc444444442222222eeee22222444422222222224bbfffffffff2222222222221111111111111111111111ffbbbbbbbbbb22222222222222ccfffffffffffffffffffffffffff
    bbbb2222222222bbbbccc444444ee2222222eee4222222444222222222244bbbfffffff22222222222211111111111111111111111fbbbbbbbbbbb22222222222222ffffffffffffffffffffffffffff
    bbbb2222222222bbbcccc444444ee2222222ee442222222442222222222444bbbffffff22222222222211111111111111111111111fbbbbbbbbbbb22222222222222ffffffffffffffffffffffffffff
    bbbb2222222222bbbccc44444eeee2222222ee44222222222222222222244444bbfffff22222222222f11111111111111111111111fbbbbbbbbbbb22222222222222ffffffffffffffffffffffffffff
    bbbb2222222222bbbccc44444eeee2222222ee442222222222222222222444444bbffff22222222222f11111111111111111111111fbbbbbbbbbbb22222222222222ffffffffffffffffffffffffffff
    bbbb2222222222bbbccc44444eeee2222222ee4442222222222222222244444444bbfff22222222222f11111111111111111111111ffbbbbbbbbb222222222222222ffffffffffffffffffffffffffff
    bbbb2222222222bbccc444444eeee2222222ee44422222222222222222224444444bfff22222222222f111111111111111111111111fbbbbbb222222222222222222ffffffffffffffffffffffffffff
    bbbbb22222222bbbccc444444eeee2222222ee44422222222222222222224444444bbff22222222222ff11111111111111111111111f222222222222222222222222ffffffffffffffffffffffffffff
    bbbbb22222222bbbccc44444eeeee2222222e4444222222222222222222224444444bbf222222222229f111111111111111111111222222222222222222222222222ffffffffffffffffffffffffffff
    bbbbb22222222bbbccc4444eeeeee2222222444444222222222222222222224444444bb222222222229f111111111111111111112222222222222222222222222222ffffffffffffffffffffffffffff
    bbbbb22222222bbbccc44eeeeeeee22222224444444222222222222222222224444444b222222222229f111111111111111111112222222222222222222222222222ffffffffffffffffffffffffffff
    bbbbb22222222bbbccc44eeeeeeee2222222444444442222222224e2222222244444444222222222299f11111111111111111111122222222222222222222222222fffffffffffffffffffffffffffff
    bbbbbb2222222bbbccc4eeeeeeeee22222224444444422222224444e222222224444444222222222999f1111111111111111111112222222222222222222222222cfffffffffffffffffffffffffffff
    bbbbbb2222222bbbccceeeeeeeeeee22222244444444442444444444222222222444444222222229999f111111111111111111111122222222222222222222222ccfffffffffffffffffffffffffffff
    bbbbbb2222222bbbccceeeeeeeeeee22222444444444444444444444422222222444444222222299999f11111111111111111111111f22222222222222222222cccfffffffffffffffffffffffffffff
    bbbbbbb222222bbbccceeeeeeeeeee22222444444444444444444444442222222444444222222999999f11111111111111111111111fbbb2222222222222222bcccfffffffffffffffffffffffffffff
    bbbbbbbb22222bbbccceeeeeeeeeeee2222444444444444444444444444422222444444422229999999f11111111111111111111111fbbbbbbbb2222222bbbbbcccfffffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbccceeeeeeeeeeee444444444444444444444444444444eee444444444f999999999f11111111111111111111111fbbbbbbbbbbbbbbbbbbbbcccfffffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbccceeeeeeeeeeee44444444444444444444444444433334ee44444444f999999999f11111111111111111111111fbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbccceeeeeeeeeeeee44444444444444444444444443333333e44444444f999999999f11111113333331111111111fbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbccceeeeeeeeeeeee444444444444444344444444333333333ee433334f999999999f1111111333333331111133333bbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbccceeeee4eeeeeeee4444444444444333444444433444333334e33334f99999999ff133333333333333311133333333bbbbbbbbbbbbbbbbbbccccfffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbccceeee444eeeeeee4444444444444333444444333444433333433333fff999999f11333333333333331fff33333333bbbbbbbbbbbbbbbbbbbcccfffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbcccee4444eeeeeee4444444444444333344444333444433333433333fff3333fff11333333333333ffffff33333333bbbbbbbbbbbbbbbbbbbcccfffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbccc444444eeeeeee4444444444444333344444333444433333433333ff3333333fffff33333333ffffffff33333333fffbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbccc4444444eeeeee4444444444444333334444333444433333433333f33333333fffffff333333ffffffff3333333111ffbbbbbbbb33333bbbccccfffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbcccc444444eeeeeee4444444444443333344443334443333334333331333333333ffffff33333fffffffff33331111111f3333bbbb333333bbbcccfffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbccc4444444eeeeeee444444444443333344443333433333344433333133311333ffffff33333ffffff11133333311111333333bbb333333bb3333cf3333fffffffffffffffffff
    bbbbbbbbbbbbbbbbbbccc4444444eeeeeee444444444443344344443333333333344f33333113311133111fff33333f1111111133333331113333333bbb333333bb33333333333fffffffffffff33fff
    bbbbbbbbbbbbbbbbbbbccc444444eeeeeeee444444444334443444433333333334fff333331133333331111113333311111111133333331113333333fbb3333bbb3333333333333fff33fffff33333ff
    bbbbbbbbbbbbbbbbbbbccc444444eeeeeeee444444444334443344433333333ffff22333331113333333111113333311111111133333311113331133ffb3333bbb33333333333333f333333ff33333ff
    bbbbbbbbbbbbbbbbbbbbccc444444eeeeeeee44444444333333344433334ee4f11f223333311113333331111133333111111111333311111133111331ff3333bbb33333333333333f33ff33ff333ffff
    bbbbbbbbbbbbbbbbbbbbccc444444eeeeeeeee444444433333333ee333344ff111ff233333111113333311111333331111111113333111111333333111f3333bbb333333cc333333f33333fff333ffff
    bbbbbbbbbbbbbbbbbbbbbccc444444eeeeeeee44444443334433344433344f11111f23333311111ff3333ffff33333fffff11113333111111333331111f3333bbb3333333c333333f33ffffff333ffff
    bbbbbbbbbbbbbbbbbbbbbcccc44444eeeeeeeee444444333443333443334f111111ff3333f1fffff1113311113333111111fff13333111111133311111f3333bbb3333333b333333f3333ffff333ffff
    bbbbbbbbbbbbbbbbbbbbbbccc44444eeeeeeeee444444433444444444333fff11111f33322f111111111111111111111111111ff3311111111111111111fbbbbbb3333bbbbb333ccf33333ffff33ffff
    bbbbbbbbbbbbbbbbbbbbbbbccc44444eeeeeeee44444444444444444444fffff111111ff22ff11111111111111111111111111111fff111111111111111ffbbbbbb333bbbbbbbccccc3333ffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbcccc4444eeeeeeee44444444444444444444f8888ff11111ff222ff111111111111111111111111111111fff1111111111111fbbbbbbbbbbbbbbbbbcccccccfffff3fffff
    bbbbbbbbbbbbbbbbbbbbbbbbcccc4444eeeeee44444444444444444444ff88888fff1111ff222fff111111111111111111111111111111ff111111111111fbbbbbbbbbbbbbbbbbbbccccccccffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbcccc444eeeee444444444444444444444fff888888fff1ffff22222ff111111111111111111111111111111f11111111111fbbbbbbbbbbbbbbbbbbbbbcccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbcccc44eeee4444444444444444444444f1ff8888888fff11ff222222fff1111111ff1111111111111111111f1111111111ffbbbbbbbbbbbbbbbbbbbbbbcccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbcccc4eee4444444444444444444444ff11ff88888888fff1ff2222222fff111fffff111111111111111111f11111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc4444444444444444444444444f1111ff888888888fffff22222222fff1ffffff11111111111111111ff1111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc4444444444444444444444ff11111ff8888888888888ff222222222fffffff111111111111111111f1111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc444444444444444444444f1111111fff888888888888fff222222222fffff111111111111111111f1111111111ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc4444444444444444444f111111111ff8888888888888ffff222222fffff111111111111111111f11111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc4444444444444e444f11111111111ffff888888888888ffffffffffff111111111111111111f11111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc4444444444e44ff111111111111f1ffff88888888888888888ffff111111111111111111f11111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc4444444e44f1111111111111f11111ffff88888888888fffff1ffff11111111111111f11111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccf1111111111111f11111111ffffffffffffffffffffffffff1111111111f11111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccff1111111111111f111111111ffffffffffffffffffffffffff111111111f11111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccf11111111111111f111111111fffffffffffffffffffffffffff11111111f11111111111ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff11111111111111f111111111fffffffffffffffffffffffffff11111111f111111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111111111111111f11111111ffffffffffffffffffffffffffff11111111f111111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff111111111111111f11111111fffffffffffffffffffffffffffff1111111f111111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff111111111111111ff11111111fffffffffffffffffffffffffffff1111111f111111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1111111111111111ff11111111fffffffffffffffffffffffffffff1111111f111111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111111111111111fbf11111111fffffffffffffffffffffffffffff1111111ff11111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111111111111111fbf11111111fffffffffffffffffffffffffffff1111111ff11111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf11111111111111ffbf11111111ffffffffffffffffffffffffffffff111111fbf1111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf11111111111111fbbf11111111ffffffffffffffffffffffffffffff111111fbf1111111111ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1111111111111ffbbbf1111111ffffffffffffffffffffffffffffff111111fbf11111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1111111111111fbbbbf1111111ffffffffffffffffffffffffffffff111111fbff1111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1111111111111fbbbbf1111111ffffffffffffffffffffffffffffff111111fbbf1111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1111111111111fbbbbf1111111ffffffffffffffffffffffffffffff111111fbbf1111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1111111111111fbbbbf1111111ffffffffffffffffffffffffffffff111111fbbff111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111111111111ffbbbbf1111111ffffffffffffffffffffffffffffff111111fbbbf111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111111111111fbbbbbf1111111ffffffffffffffffffffffffffffff111111fbbbf111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111111111111fbbbbbf1111111ffffffffffffffffffffffffffffff111111fbbbf111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf111111111111fbbbbbf1111111ffffffffffffffffffffffffffffff111111fbbbf111111111fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
music.playMelody("A F E F D F E F ", 80)
pause(500)
thePlayer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f b 1 1 1 f f f f f . . . 
    . . f f b 1 1 f 9 9 9 9 9 f . . 
    . f b f b 1 1 f 9 9 9 9 9 f . . 
    . f b f b 1 1 f 9 9 9 9 9 f . . 
    . f b f b 1 1 1 f f f f f . . . 
    . f b f b 1 f 1 1 1 1 1 f . . . 
    . f b f b b f 1 1 1 1 b f . . . 
    . f b f f f b b b b b b f . . . 
    . f b f b b b f f f f b f . . . 
    . . f f b b f . . f b b f . . . 
    . . . f b b f . . f b b f . . . 
    . . . . f f . . . . f f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundImage(img`
    ..............................................................................................................cc................................................
    .............................................................................................................cccc...............................................
    ............................................................................................................ccccccc.............................................
    ...........................................................................................................ccccccccc............................................
    ..........................................................................................................ccccccccccc...........................................
    ..........................................................................................................cccccccccccc..........................................
    .........................................................................................................cccccccccccccc.........................................
    ........................................................................................................ccccccccccccccccc.......................................
    .......................................................................................................ccccccccccccccccccc......................................
    ......................................................................................................ccccccccccccccccccccc.....................................
    ....................................................................................................ccccccccccccccccccccccccc...................................
    ..................................................................................................cccccccccccccccccccccccccccc..................................
    .................................................................................................ccccccccccccccccccccccccccccccc................................
    ...............................................................................................cccccccccccccccccccccccccccccccccc...............................
    ..............................................................................................ccccccccccccccccccccccccccccccccccccc.............................
    ............................................................................................ccccccccccccccccccccccccccccccccccccccc.............................
    ....................................................bbbbbbb.............................cccccccccccccccccccccccccccccccccccccccccccc............................
    ..................................................bbbbbbbbbbbbbb.....................cccccccccccccccccccccccccccccccccccccccccccccccc...........................
    .....................................bbb........bbbbbbbbbbbbbbbbb...................cccccccccccccccccccccccccccccccccccccccccccccccccc..........................
    ....................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................ccccccccccccccccccccccccccccccccccccccccccccccccccccc........................
    ..................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................ccccccccccccccccccccccccccccccccccccccccccccccccccccccc......................
    .................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...................
    ...............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.................
    .............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...............
    ............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.............
    ...........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc............
    ...........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..........
    ..........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.........
    ........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc........
    ........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.......
    .......................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.......
    ......................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc......
    ......................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc......
    .......................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.....
    ......................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc....
    ......................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..
    .....................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..
    ...................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    .................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ...............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccc
    ............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc
    ............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccc
    ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccc
    .........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccc
    ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccc
    .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccc
    .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccc
    .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccc
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccc
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
scene.setBackgroundColor(4)
current_Level = 0
Level()
info.setLife(5)
info.setScore(0)
game.onUpdate(function () {
    thePlayer.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . f b 1 1 1 f f f f f . . . 
        . . f f b 1 1 f 9 9 9 9 9 f . . 
        . f b f b 1 1 f 9 9 9 9 9 f . . 
        . f b f b 1 1 f 9 9 9 9 9 f . . 
        . f b f b 1 1 1 f f f f f . . . 
        . f b f b 1 f 1 1 1 1 1 f . . . 
        . f b f b b f 1 1 1 1 b f . . . 
        . f b f f f b b b b b b f . . . 
        . f b f b b b f f f f b f . . . 
        . . f f b b f . . f b b f . . . 
        . . . f b b f . . f b b f . . . 
        . . . . f f . . . . f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (thePlayer.vy < 0) {
        thePlayer.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f f f b 1 1 1 1 f . . . . 
            . . . f b b f 1 f f f f f . . . 
            . . f f b 1 f f 9 9 9 9 9 f . . 
            . f b f b 1 1 f 9 9 9 9 9 f . . 
            . f b f b 1 1 f 9 9 9 9 9 f . . 
            . f b f b 1 1 1 f f f f f . . . 
            . f b f b 1 1 1 1 1 1 1 f . . . 
            . f b f b 1 1 1 1 1 1 b f . . . 
            . f b f b b b b b b b b f . . . 
            . f f f b b f f f f b b f . . . 
            . . . f b b f . . f b b f . . . 
            . . . . f f . . . . f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (thePlayer.vy > 0) {
        thePlayer.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f b 1 1 1 f f f f f . . . 
            . . f f b 1 1 f 9 9 9 9 9 f . . 
            . f b f b 1 1 f 9 9 9 9 9 f . . 
            . f b f b 1 1 f 9 9 9 9 9 f . . 
            . f b f b 1 1 1 f f f f f . . . 
            . f b f b 1 f 1 1 1 1 1 f . . . 
            . f b f b b f 1 1 1 1 b f . . . 
            . f b f f f b b b b b b f . . . 
            . f b f b b b f f f f b f . . . 
            . . f f b b f . . f b b f . . . 
            . . . f b b f . . f b b f . . . 
            . . . . f f . . . . f f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (thePlayer.vx < 0) {
        thePlayer.image.flipX()
    }
})
