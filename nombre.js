export default class Nombre {
    /**
     * @param {string} nombres
     * @param {string} apePat
     * @param {string} apeMat
     */
    constructor (nombres, apePat, apeMat) {
        this.nombres = nombres
        this.apePat = apePat
        this.apeMat = apeMat
    }
    getNombreCompleto() {
        return `${this.nombres} ${this.apePat} ${this.apeMat}`
    }
    getApellidoNombre() {
        return `${this.apePat} ${this.apeMat} ${this.nombres}`
    }
    getIniciales() {
        return `${this.nombres.charAt(0)}${this.apePat.charAt(0)}${this.apeMat.charAt(0)}`
    }
}