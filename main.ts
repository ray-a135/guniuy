controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`bullet bill`, mySprite, 50, 50)
    mySprite10 = sprites.create(img`
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
        `, SpriteKind.Player)
})
scene.onOverlapTile(SpriteKind.Player, assets.image`juce wlrd`, function (sprite, location) {
    mySprite7 = sprites.create(assets.image`jgjeijjejejeijdijjjjjjjuejdjndjdfskfjnawjndjwndndwjdnfnjndjnnjdjcn`, SpriteKind.Player)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`koi`, mySprite, 50, 50)
    projectile = sprites.createProjectileFromSprite(assets.image`koi`, mySprite, 50, 50)
})
let mySprite7: Sprite = null
let mySprite10: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
info.setLife(9)
scene.setBackgroundImage(assets.image`jgughjhhsbxsjhbacjbchjsbksxh0iduihsdf`)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.setCurrentTilemap(tilemap`level3`)
let mySprite5 = sprites.create(assets.image`ivo`, SpriteKind.Enemy)
mySprite = sprites.create(assets.image`snopp dogg`, SpriteKind.Player)
let mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f . . . . . . . f f f . . . 
    . . . f f . . . . f f . f f f f 
    . . . . f f . . 5 5 f f 5 . . . 
    . . . . . 5 5 5 5 5 . . 5 5 f f 
    . . . . . 5 5 f e e e f . . . . 
    . . . . . e e e e e e . . . . . 
    f f f f 5 e f e e f e . . . f f 
    f . . . 5 e e e f f f f f f . f 
    . . . . . e f f f e f f . . f . 
    . . . . . f f f f f f f . f . f 
    . . . . . f d d d d d d . f f f 
    . . f f f f d f d f f d f f . . 
    f f . . . f f d f d f d . . . . 
    . . . . f f f f f f f f . . . . 
    `, SpriteKind.Enemy)
let mySprite8 = sprites.create(assets.image`oip`, SpriteKind.Player)
let sprite10 = sprites.create(assets.image`oipo`, SpriteKind.Player)
let mySprite9 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f . . . . . . . f f f . . . 
    . . . f f . . . . f f . f f f f 
    . . . . f f . . 5 5 f f 5 . . . 
    . . . . . 5 5 5 5 5 . . 5 5 f f 
    . . . . . 5 5 f e e e f . . . . 
    . . . . . e e e e e e . . . . . 
    f f f f 5 e f e e f e . . . f f 
    f . . . 5 e e e f f f f f f . f 
    . . . . . e f f f e f f . . f . 
    . . . . . f f f f f f f . f . f 
    . . . . . f d d d d d d . f f f 
    . . f f f f d f d f f d f f . . 
    f f . . . f f d f d f d . . . . 
    . . . . f f f f f f f f . . . . 
    `, SpriteKind.Projectile)
mySprite.setPosition(40, 26)
controller.player2.moveSprite(mySprite8)
controller.player3.moveSprite(sprite10)
music.play(music.createSong(assets.song`ppp999vl`), music.PlaybackMode.UntilDone)
mySprite5.follow(mySprite, 25)
mySprite6.follow(mySprite, 25)
let mySprite2 = sprites.create(img`
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
    `, SpriteKind.Player)
mySprite2.setPosition(7, 18)
let mySprite3 = 0
let mySprite4 = sprites.create(assets.image`dababy`, SpriteKind.Enemy)
mySprite4.setPosition(0, 0)
controller.moveSprite(mySprite)
mySprite5.setPosition(22, 28)
mySprite6.setPosition(34, 42)
scene.cameraFollowSprite(mySprite)
forever(function () {
	
})
