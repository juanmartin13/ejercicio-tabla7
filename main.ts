let variable7 = 0
let variable1 = 0
input.onButtonPressed(Button.A, function () {
    variable7 = 7
    basic.showNumber(variable7)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable7)
})
