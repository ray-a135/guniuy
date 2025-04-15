controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`koi`, mySprite, 50, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    mySprite7 = sprites.create(assets.image`jgjeijjejejeijdijjjjjjjuejdjndjdfskfjnawjndjwndndwjdnfnjndjnnjdjcn`, SpriteKind.Player)
})
let mySprite7: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
info.setLife(9)
scene.setBackgroundImage(assets.image`jgughjhhsbxsjhbacjbchjsbksxh0iduihsdf`)
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
let mySprite9 = sprites.create(assets.image`mmmmmm9999iiiiiiooooopppppyyytytyggg`, SpriteKind.Projectile)
music.play(music.createSong(hex`0078000408020400001c00010a006400f401640000040000000000000000000000000005000004200008000c0002192214001800012424002800011d2c003000011b3400380002192403001c0001dc00690000045e010004000000000000000000000564000104000333000000040001270c00100001201000140001251c002000031e24272400280001272c00300002202934003800011e38003c00012a06001c00010a006400f4016400000400000000000000000000000000000000021e000000040001190c001000011b1400180001191c002000011924002800011e07001c00020a006400f401640000040000000000000000000000000000000003250000000400012208000c0002292c0c001000012c10001400012a14001800012a1c002000012c`), music.PlaybackMode.UntilDone)
let mySprite2 = sprites.create(assets.image`koi`, SpriteKind.Enemy)
mySprite2.setPosition(7, 18)
let mySprite3 = sprites.create(assets.image`koi`, SpriteKind.Projectile)
let mySprite4 = sprites.create(assets.image`xxxtentacion`, SpriteKind.Enemy)
mySprite4.setPosition(0, 0)
mySprite4.follow(mySprite)
controller.moveSprite(mySprite)
