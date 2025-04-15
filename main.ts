controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`mmmmmm9999iiiiiiooooopppppyyytytyggg`, mySprite, 50, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.image`juce wlrd`, function (sprite, location) {
    mySprite7 = sprites.create(assets.image`jgjeijjejejeijdijjjjjjjuejdjndjdfskfjnawjndjwndndwjdnfnjndjnnjdjcn`, SpriteKind.Player)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`koi`, mySprite, 50, 50)
})
let mySprite7: Sprite = null
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
controller.moveSprite(mySprite)
music.play(music.createSong(assets.song`ppp999vl`), music.PlaybackMode.UntilDone)
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
mySprite4.follow(mySprite)
mySprite2.follow(mySprite)
mySprite5.follow(mySprite)
controller.moveSprite(mySprite)
mySprite5.setPosition(22, 28)
mySprite6.setPosition(34, 42)
forever(function () {
	
})
