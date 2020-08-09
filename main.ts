let imagen_grande = images.createBigImage(`
    . . . . . . # . . .
    . . # . . # # . . .
    . . . # . # . . . .
    . . . . # # . . . .
    . . . . . . . . . .
    `)
imagen_grande = 3
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        imagen_grande += -1
    } else if (input.buttonIsPressed(Button.B)) {
        imagen_grande += 1
    }
    imagen_grande.showImage(0)
})
