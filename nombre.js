export default class Nombre {
    /**
     * @param {string} nombres
     * @param {string} apePat
     * @param {string} apeMat
     */
    constructor (nombres, apePat, apeMat) {
        this._nombres = nombres
        this._apePat = apePat
        this._apeMat = apeMat
    }
    getNombreCompleto() {
        return `${this._nombres} ${this._apePat} ${this._apeMat}`
    }
    getApellidoNombre() {
        return `${this._apePat} ${this._apeMat} ${this._nombres}`
    }
    getIniciales() {
        return `${this._nombres.charAt(0)}${this._apePat.charAt(0)}${this._apeMat.charAt(0)}`
    }
}