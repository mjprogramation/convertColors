
/**
 * This function expect a clean output 
 * Either 3 or 6 chars length
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
     * @returns Boolean
     */
    checkIsValid () {

        if(this.type === 3 || this.type === 6 ){
            return /^([a-f0-9]{3}){1,2}$/i.test(this.code)
        }
        
        return false

    }


    forceSixDigits () {
        this.code = this.code.split('').map(function (hex) {
                        return hex + hex;
                    }).join('');
    }


    convertToRgb () {

        if(this.type === 3) {
            this.forceSixDigits()
        }

        const decomposeHex = this.code.match(/.{1,2}/g)

        return this.returnRgbObject(decomposeHex)
    }


    returnRgbObject (hexObject) {
        return {
            red : parseInt(hexObject[0], 16),
            green: parseInt(hexObject[1], 16),
            blue : parseInt(hexObject[2], 16)
        }
    }




}


hex = new FromHex("A45000")


if(hex.checkIsValid()){
    console.table(hex.convertToRgb())
}