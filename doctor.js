export default class Doctor {
    /**
     * @param {number} cedula
     * @param {string} especialidad
     * @param {string} nombre
     * @param {number} telefono
     */
    constructor ({cedula, especialidad, nombre, telefono}) {
        this._cedula = cedula
        this._especialidad = especialidad
        this._nombre = nombre
        this._telefono = telefono
    }
    getPerfildoc() {
        return `Doctor: ${this._nombre.getNombreCompleto()}\nCedula: ${this._cedula}\nEspecialidad: ${this._especialidad}\nTeléfono: ${this._telefono}`
    }
    getCedula() {
        return `${this._cedula}`
    }
    esIgualA(doctor) {
        if (doctor.getCedula() === this._cedula) {
            return true;
        }
    }
}