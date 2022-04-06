let lit = false
let flicker = 0
input.onButtonPressed(Button.A, function () {
    lit = true
})
input.onSound(DetectedSound.Loud, function () {
    basic.clearScreen()
})
basic.forever(function () {
    if (lit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        flicker = randint(1, 3)
        if (flicker != 0) {
            led.unplot(2, 0)
            led.plot(flicker, 0)
        }
        basic.pause(200)
    } else {
        basic.clearScreen()
    }
})
