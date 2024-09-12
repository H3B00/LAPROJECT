let mySprite = sprites.create(img`
    . . . . . . . . . . f f f . . . 
    . . . . . . . . . f f f . . . . 
    . . . . . . f f f f 2 f . . . . 
    . . . . . f f f f f 2 f f . . . 
    . . . . f f f f 2 2 2 2 2 f . . 
    . . . . f f f f f f 2 f f f . . 
    . . . . f f f f f f 2 f f f . . 
    . f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f . 
    f f f f f f f f f f f f f f . . 
    f f f f f f f f f f f f f f f . 
    f f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . . f f f f f f f f f f f f . . 
    . . . f f f f f f f f f f . . . 
    . . . . . 4 . . . . 4 . . . . . 
    . . . . 4 4 4 . . 4 4 4 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
