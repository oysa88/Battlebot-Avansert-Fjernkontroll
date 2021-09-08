input.onButtonPressed(Button.AB, function () {
    if (AvPå == 0) {
        AvPå = 1
    } else {
        AvPå = 0
    }
})
let Roll = 0
let Pitch = 0
let AvPå = 0
radio.setGroup(1)
basic.forever(function () {
    basic.clearScreen()
    Pitch = input.rotation(Rotation.Pitch)
    Roll = input.rotation(Rotation.Roll)
    led.plot((45 + Roll) / 22.5, (45 + Pitch) / 22.5)
    radio.sendValue("P", Pitch)
    radio.sendValue("A", AvPå)
    radio.sendValue("R", Roll)
})
