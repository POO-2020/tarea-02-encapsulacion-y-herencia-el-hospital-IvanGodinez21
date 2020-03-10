export default class Paciente {
    /**
     * @param {string} nombre
     * @param {number} fecha
     * @param {number} numero
     */
     constructor(nombre, fecha, numero) {
         this.nombre = nombre
         this.fecha = fecha
         this.numero = numero
     }
     getPerfil() {
        return `${this.nombre.getNombreCompleto()}\nFecha de registro: ${this.fecha.getFecha()}\nNúmero de Teléfono: ${this.numero}`
     }
}