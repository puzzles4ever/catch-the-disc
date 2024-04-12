controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    blockSettings.clear()
})
info.onCountdownEnd(function () {
    if (info.score() > 25) {
        effects.confetti.startScreenEffect()
        game.gameOver(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(assets.image`ninjaImage`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.startCountdown(20)
forever(function () {
    music.play(music.stringPlayable("C5 A C5 E F D C G ", 120), music.PlaybackMode.UntilDone)
})
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(assets.image`starImage`, SpriteKind.Food)
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
    if (info.score() > info.highScore()) {
        forever(function() {
           mySprite.sayText("yes!")
        })
    }
})
