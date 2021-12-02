/**
 * Rgb class to manipulate and convert RGB inputs
 * 
 * 
 * Authored by Anass Boutaline
 */


class FromHsv {


    constructor(hue, saturation, value) {
        this.hue = parseInt(hue)
        this.saturation = parseInt(saturation)
        this.value = parseInt(value)
    }


    /**
     * Check hue value in correct range
     * 
     * @returns { Boolean }
     */
    isValideHue () {
        return this.hue < 361 && this.hue > -1
    }

    /**
     * 
     * Check given value is a percentage
     * 
     * @param { Int } value 
     * @returns { Boolean }
     */
    isValidePercentage (value) {
        return value > -1 && value < 101
    }

    /**
     * Check current HSV is valide
     * 
     * @returns { Boolean }
     */
    checkIsValide () {
        return this.isValideHue() && this.isValidePercentage(this.saturation) && this.isValidePercentage(this.value)
    }

    /**
     * Convert current HSV to RGB
     * 
     * @returns { red, green, blue }
     */
    convertRgb () {

        let h = this.hue/360,
            s = this.saturation/100,
            v = this.value/100
        let r, g, b, i, f, p, q, t;
       
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return {
            red: Math.round(r * 255),
            green: Math.round(g * 255),
            blue: Math.round(b * 255)
        };
    }


}

