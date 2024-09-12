controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . f f f . . . 
    . . . . . . . . . f f f . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f f f f f f f . . . 
    . . . . f f f f f f f f f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . f f f f f f f f f f . . 
    . f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f . 
    f f f f f f f f f f f f f f . . 
    f f f f f f f f f f f f f f f . 
    f f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . . f f f f f f f f f f f f . . 
    . . . f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level4`)
