/**
 * Rgb class to manipulate and convert RGB inputs
 * 
 * 
 * Authored by Anass Boutaline
 */
const MIN = -1,
      MAX = 256

class FromRgb {

    constructor (red, green, blue) {
        this.red  = parseInt(red)
        this.green = parseInt(green)
        this.blue = parseInt(blue)
    }

    /**
     * Check given value in interval between 0 & 255
     * 
     * @param {int} value 
     * @returns {Boolean}
     */
    inInterval(value) {
        return (value > MIN && value < MAX)
    }

    checkIsValide () {
        return this.inInterval(this.red) && this.inInterval(this.blue) && this.inInterval(this.green)
    }

    singleToHex (value) {
        const hex = value.toString(16)
        return (hex.length === 1 ? "0" + hex : hex).toString()
    }

    convertToHex () {
        return (this.singleToHex(this.red) + this.singleToHex(this.green) + this.singleToHex(this.blue)).toUpperCase()
    }


}


const rgb = new FromRgb(0,10,255)

console.log(rgb.convertToHex())
