/**
 * This Is CMYK class convert CMYK inputs
 * 
 * 
 * Authored by Boutaline Anass
 */

const FromHsv = require("./FromHsv")

class FromCmyk {

    constructor (cyan, magenta, yellow, key) {
        this.cyan = parseInt(cyan)
        this.magenta = parseInt(magenta)
        this.yellow = parseInt(yellow)
        this.key = parseInt(key)
    }

    /**
     * Check given value is valide percentage
     * 
     * @param { integer }
     * @returns { Boolean }
     */
    isValidePercentage (value) {
        return FromHsv.isValidePercentage(value)
    }

    /**
     * Check current object is a valide CMYK percentages
     * 
     * @returns { Boolean }
     */
    checkIsValide () {
        return this.isValidePercentage(this.cyan) && this.isValidePercentage(this.magenta) && this.isValidePercentage(this.yellow) && this.isValidePercentage(this.key)
    }


    /**
     * Convert current Cmyk object to RGB object
     * 
     * 
     * @returns { red, green, blue}
     */
    convertRgb () {
        let c = (this.cyan / 100),
            m = (this.magenta / 100),
            y = (this.yellow / 100),
            k = (this.key / 100)
        
        c = c * (1 - k) + k
        m = m * (1 - k) + k
        y = y * (1 - k) + k
        
        let r = 1 - c,
            g = 1 - m,
            b = 1 - y
        
        r = Math.round(255 * r)
        g = Math.round(255 * g)
        b = Math.round(255 * b)

        return {
            red: r,
            green: g,
            blue: b
        }
    }


}


let cmyk = new FromCmyk(50,20,18,30)

console.log(cmyk.convertRgb())