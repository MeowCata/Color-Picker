function myMax (a: number, b: number) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
function myMin (a: number, b: number) {
    if (a < b) {
        return a
    } else {
        return b
    }
}
input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.rgb(TCS3472X.getColorData(RGB.RED), TCS3472X.getColorData(RGB.GREEN), TCS3472X.getColorData(RGB.BLUE)))
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.show()
    basic.clearScreen()
})
function rgbToHsl (r: number, g: number, b: number) {
    r = r / 255
    g = g / 255
    b = b / 255
    Cmax = myMax(r, myMax(g, b))
    Cmin = myMin(r, myMin(g, b))
    delta = Cmax - Cmin
    if (delta != 0) {
        if (Cmax == r) {
            h = (g - b) / delta
        } else if (Cmax == g) {
            h = (b - r) / delta + 2
        } else if (Cmax == b) {
            h = (r - g) / delta + 4
        }
        h = h * 60 % 360
        if (h < 0) {
            h += 360
        }
    }
    l = (Cmax + Cmin) / 2
    if (delta != 0) {
        s = delta / (1 - Math.abs(2 * l - 1))
    }
}
let l = 0
let delta = 0
let Cmin = 0
let Cmax = 0
let b = 0
let g = 0
let r = 0
let strip: neopixel.Strip = null
let h = 0
let s = 0
s = 0
h = 0
TCS3472X.LCS_initialize()
strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
strip.clear()
strip.setBrightness(100)
strip.show()
