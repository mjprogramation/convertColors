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


    /**
     * Check if all colors values are between 0 and 255
     * 
     * 
     * @returns { Boolean } 
     */
    checkIsValide () {
        return this.inInterval(this.red) && this.inInterval(this.blue) && this.inInterval(this.green)
    }


    /**
     * Convert Single Value to Hex
     * 
     * @param { Integer } value 
     * @returns { String }
     */
    singleToHex (value) {
        const hex = value.toString(16)
        return (hex.length === 1 ? "0" + hex : hex).toString()
    }


    /**
     * Convert All Values To Hex String
     * 
     * @returns { String } 
     */
    convertToHex () {
        return (this.singleToHex(this.red) + this.singleToHex(this.green) + this.singleToHex(this.blue)).toUpperCase()
    }


    /**
     * 
     * Return Min and Max values as { Object } from given values
     * 
     * @param { integer } value1 
     * @param { integer } value2 
     * @param { integer } value3 
     * 
     * @returns { Object }
     */
    getMaxMinValue (value1, value2, value3) {

        return {
            min : Math.min(value1, value2, value3),
            max : Math.max(value1, value2, value3)
        }
    }

    /**
     * Calculate Hue for HSL
     * 
     * @param { integer } max 
     * @param { integer } delta 
     * @param { Object } ColorsRatios 
     * 
     * @returns { integer }
     */
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


    /**
     * Convert Current RGB object to HSL
     * 
     * @returns {
     *  h, s, l
     * } 
     */
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

    /**
     * Convert Current Object To HSV
     * 
     * @returns {h, s, v}
     */
    convertToHsv () {
        let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
        rabs = this.red / 255;
        gabs = this.green / 255;
        babs = this.blue / 255;
        v = Math.max(rabs, gabs, babs),
        diff = v - Math.min(rabs, gabs, babs);
        diffc = c => (v - c) / 6 / diff + 1 / 2;
        percentRoundFn = num => Math.round(num * 100) / 100;
        if (diff == 0) {
            h = s = 0;
        } else {
            s = diff / v;
            rr = diffc(rabs);
            gg = diffc(gabs);
            bb = diffc(babs);
    
            if (rabs === v) {
                h = bb - gg;
            } else if (gabs === v) {
                h = (1 / 3) + rr - bb;
            } else if (babs === v) {
                h = (2 / 3) + gg - rr;
            }
            if (h < 0) {
                h += 1;
            }else if (h > 1) {
                h -= 1;
            }
        }
        return {
            h: Math.round(h * 360),
            s: percentRoundFn(s * 100),
            v: percentRoundFn(v * 100)
        };
    }



    convertToCmyk(){
        var c = 1 - (this.red / 255);
        var m = 1 - (this.green/ 255);
        var y = 1 - (this.blue / 255);
        var k = Math.min(c, Math.min(m, y));
        
        c = (c - k) / (1 - k);
        m = (m - k) / (1 - k);
        y = (y - k) / (1 - k);
        
        
        c = Math.round(c * 10000) / 100;
        m = Math.round(m * 10000) / 100;
        y = Math.round(y * 10000) / 100;
        k = Math.round(k * 10000) / 100;
       
        
        c = isNaN(c) ? 0 : c;
        m = isNaN(m) ? 0 : m;
        y = isNaN(y) ? 0 : y;
        k = isNaN(k) ? 0 : k;
        
        return {
            c: Math.ceil(c),
            m: Math.ceil(m),
            y: Math.ceil(y),
            k: Math.ceil(k)
        }
    }


}


const rgb = new FromRgb(255, 50, 13)

console.log(rgb.convertToCmyk())
