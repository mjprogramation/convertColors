/**
 * Hsl class to manipulate and convert hsl inputs
 * 
 * 
 * Authored by Anass Boutaline
 */

const FromHsv = require('./FromHsv')

class FromHsl {

    constructor (hue, saturation, lightness) {
        this.hue = hue
        this.saturation = saturation
        this.lightness = lightness
        this.hsvInstance = new FromHsv(this.hue, this.saturation, this.lightness)
    }


    /**
     * Chek is valide hue
     * 
     * @returns { Boolean } 
     */
    isValideHue () {
        return this.hsvInstance.isValideHue()
    }

    /**
     * Check if given value is a percentage
     * 
     * @param { int } value 
     * @returns { Boolean }
     */
    isValidePercentage (value) {
        return FromHsv.isValidePercentage(value)
    } 


    /**
     * Valide hsl is the same as a valide hsv 
     * 
     * @returns { Boolean }
     */
    checkIsValide () {
        return this.hsvInstance.checkIsValide()
    }

    /**
     * Convert current HSL to RGB
     * 
     * @returns { red, green, blue} 
     */
    convertRgb () {
        let h = this.hue/360,
            s = this.saturation / 100,
            l = this.lightness / 100

        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs((h / 60) % 2 - 1)),
            m = l - c/2,
            r = 0,
            g = 0,
            b = 0;

        if (0 <= h && h < 60) {
            r = c; g = x; b = 0;  
        } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x;
        }

        return {
            red : Math.round((r + m) * 255),
            green: Math.round((g + m) * 255),
            blue: Math.round((b + m) * 255),
        }
        
    }



}

let hsl = new FromHsl(360, 11, 14)

console.log(hsl.isValidePercentage(150))