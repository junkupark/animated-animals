basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let 가로 = 0; 가로 <= 4; 가로++) {
        led.plot(가로, 0)
        basic.pause(500)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    for (let 세로 = 0; 세로 <= 4; 세로++) {
        led.plot(4, 세로)
        basic.pause(500)
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    for (let 가로 = 0; 가로 <= 4; 가로++) {
        led.plot(4 - 가로, 4)
        basic.pause(500)
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    for (let 세로 = 0; 세로 <= 3; 세로++) {
        led.plot(0, 4 - 세로)
        basic.pause(500)
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
    for (let 가로 = 0; 가로 <= 3; 가로++) {
        led.plot(가로, 1)
        basic.pause(500)
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    for (let 세로 = 0; 세로 <= 2; 세로++) {
        led.plot(3, 세로 + 1)
        basic.pause(500)
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    for (let 가로 = 0; 가로 <= 2; 가로++) {
        led.plot(3 - 가로, 3)
        basic.pause(500)
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
    for (let 세로 = 0; 세로 <= 1; 세로++) {
        led.plot(1, 3 - 세로)
        basic.pause(500)
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    led.plot(2, 2)
    basic.pause(500)
    music.playTone(587, music.beat(BeatFraction.Whole))
})
