export default class Doctor {
    /**
     * @param {number} cedula
     * @param {string} especialidad
     * @param {string} nombre
     * @param {number} telefono
     */
    constructor (cedula, especialidad, nombre, telefono) {
        this.cedula = cedula
        this.especialidad = especialidad
        this.nombre = nombre
        this.telefono = telefono
    }
    getPerfildoc() {
        return `Doctor: ${this.nombre.getNombreCompleto()}\nCedula: ${this.cedula}\nEspecialidad: ${this.especialidad}\nTeléfono: ${this.telefono}`
    }
}