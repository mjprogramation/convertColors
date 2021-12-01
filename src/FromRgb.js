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

    getMaxMinValue (value1, value2, value3) {

        return {
            min : Math.min(value1, value2, value3),
            max : Math.max(value1, value2, value3)
        }
    }


    calculateHue (max, delta, {red, blue, green}) {
        if(delta == 0){
            return 0
        }

        if(max == red) {
            return ((green - blue) / delta) % 6
        }

        if(max == green) {
            return (blue - red) / delta + 2
        }

        return (red- green) / delta + 4

    }

    convertToHsl () {
        let h = 0,
            s = 0,
            l = 0


        const red   = this.red/255,
              green = this.green/255,
              blue  = this.blue/255

        const { min, max } = this.getMaxMinValue(red, green, blue)

        const delta = max - min


        // Hue
        h = this.calculateHue(max, delta, {
            red: red,
            green: green,
            blue: blue
        })

        h = Math.round(h * 60);
    
        
        (h < 0) ? h = (h + 360).toFixed(1) : null

        // Ligntness
        l = (max + min) / 2
        

        // Saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
        s = +(s * 100).toFixed(1)
        l = +(l * 100).toFixed(1)

        return {
            h: h,
            s: s,
            l: l
        }

    }


}


const rgb = new FromRgb(0,1,0)

console.log(rgb.convertToHsl())