input.onButtonPressed(Button.AB, function () {
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.clearScreen()
    on = true
})
input.onGesture(Gesture.Shake, function () {
    monsteron = false
})
let timeswon = 0
let monsteron = false
let on = false
on = false
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
game.setLife(3)
basic.showString("A+B to start")
basic.forever(function () {
    while (on) {
        basic.pause(3000 - timeswon * 10)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.pause(800)
        if (!(input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.A)) || input.buttonIsPressed(Button.B)) {
            game.removeLife(1)
            timeswon += 1
        } else {
            game.addScore(1)
        }
    }
})
