export default class Paciente {
    /**
     * @param {string} nombre
     * @param {number} fecha
     * @param {number} numero
     */
     constructor(nombre, fecha, numero) {
         this._nombre = nombre
         this._fecha = fecha
         this._numero = numero
     }
     getPerfil() {
        return `${this._nombre.getNombreCompleto()}\nFecha de registro: ${this._fecha.getFecha()}\nNúmero de Teléfono: ${this._numero}`
     }
}