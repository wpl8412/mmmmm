input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    if (input.compassHeading() > 355 && input.compassHeading() <= 0) {
        basic.showArrow(ArrowNames.North)
    }
    if (input.compassHeading() > 350 && input.compassHeading() >= 14) {
        basic.showArrow(ArrowNames.North)
    }
    if (input.compassHeading() > 15 && input.compassHeading() <= 84) {
        basic.showArrow(ArrowNames.NorthEast)
    }
    if (input.compassHeading() > 85 && input.compassHeading() <= 104) {
        basic.showArrow(ArrowNames.East)
    }
    if (input.compassHeading() > 105 && input.compassHeading() <= 184) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (input.compassHeading() > 185 && input.compassHeading() <= 194) {
        basic.showArrow(ArrowNames.South)
    }
    if (input.compassHeading() > 195 && input.compassHeading() <= 264) {
        basic.showArrow(ArrowNames.SouthWest)
        if (input.compassHeading() > 265 && input.compassHeading() <= 274) {
            basic.showArrow(ArrowNames.West)
        }
    }
    if (input.compassHeading() > 275 && input.compassHeading() <= 354) {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
