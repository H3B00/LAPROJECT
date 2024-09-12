let mySprite = sprites.create(img`
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
controller.moveSprite(mySprite)
