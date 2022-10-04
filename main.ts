input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            point.change(LedSpriteProperty.X, -1)
            basic.pause(100)
        }
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            point.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
            point.change(LedSpriteProperty.X, 1)
        }
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            point.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            point.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
            point.change(LedSpriteProperty.X, -1)
        }
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            point.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
    }
})
let point: game.LedSprite = null
point = game.createSprite(4, 0)
basic.forever(function () {
	
})
