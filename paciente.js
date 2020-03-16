export default class Paciente {
    /**
     * @param {string} nombre
     * @param {number} fecha
     * @param {number} telefono
     */
     constructor({nombre, fecha, telefono}) {
         this._nombre = nombre
         this._fecha = fecha
         this._telefono = telefono
     }
     getPerfil() {
        return `${this._nombre.getNombreCompleto()}\nFecha de registro: ${this._fecha.getFecha()}\nNúmero de Teléfono: ${this._telefono}`
     }
}