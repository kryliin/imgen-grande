let imagen_grande = images.createBigImage(`
    . . . # . . # . . .
    . . . # . . # . . .
    . . . # . . # . . .
    . . . # . . # . . .
    . . . . # # . . . .
    `)
imagen_grande.plotImage(3);
// imagen_grande.showImage(0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        imagen_grande.plotImage(-1);
    } else if (input.buttonIsPressed(Button.B)) {
  imagen_grande.plotImage(+1);
    }
    imagen_grande.plotImage(3);
})
