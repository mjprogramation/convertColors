/**
 * Expect 3 or 6 digits hex code 
 * 
 * 
 * Authored by Anass Boutaline
 */


class FromHex {

    constructor (hexCode) {
        this.code = hexCode.replace(/#/g, "")
        this.type = this.code.length
    }



    /**
     * Check current hex code is valide 
     * 
     * @returns {Boolean}
     */
    checkIsValid () {

        if(this.type === 3 || this.type === 6 ){
            return /^([a-f0-9]{3}){1,2}$/i.test(this.code)
        }
        
        return false

    }


    /**
     * Force 3 hex code digits to 6
     * 
     * @returns {Void}
     */
    forceSixDigits () {
        this.code = this.code.split('').map(function (hex) {
                        return hex + hex;
                    }).join('');
    }

    /**
     * Convert To RGB
     * 
     * @returns {this.returnRGBobject()}
     */
    convertToRgb () {

        if(this.type === 3) {
            this.forceSixDigits()
        }

        const decomposeHex = this.code.match(/.{1,2}/g)

        return this.returnRgbObject(decomposeHex)
    }


    /**
     * Return RGB object
     * 
     * @param {Array} hexObject 
     * @returns {Object}
     */
    returnRgbObject (hexObject) {
        return {
            red : parseInt(hexObject[0], 16),
            green: parseInt(hexObject[1], 16),
            blue : parseInt(hexObject[2], 16)
        }
    }




}
