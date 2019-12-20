try {
    const Cuenta = require('./cuentamesa');
} catch(e){}

class Mesa{
    constructor(id, cuenta){
        this.id = id;
        cuenta = new Cuenta();
        this.cuenta = cuenta;
    }
}

try {
    module.exports = Mesa;
 } catch (e) {}
