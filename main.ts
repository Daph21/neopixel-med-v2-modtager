radio.onReceivedNumber(function (receivedNumber) {
    strip.setBrightness(receivedNumber)
    for (let indeks = 0; indeks <= 8; indeks++) {
        strip.setPixelColor(indeks, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    led.plotBarGraph(
    receivedNumber,
    255
    )
})
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.clear()
strip.show()
