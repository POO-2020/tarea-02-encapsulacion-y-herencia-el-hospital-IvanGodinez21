export default class Cita {
    /**
     * @param {string} fecha 
     * @param {string} hora 
     * @param {string} doctor 
     * @param {string} paciente 
     */
    constructor (fecha, hora, doctor, paciente) {
        this._fecha = fecha
        this._hora = hora
        this._doctor = doctor
        this._paciente = paciente
    }
    getCita() {
        return `Cita No. #${Math.trunc((Math.random() * (100 - 0) + 0))}\nFecha: ${this._fecha.getFecha()}\nHora: ${this._hora.getFormato24()}\nDoctor: ${this._doctor._nombre.getNombreCompleto()}\nPaciente: ${this._paciente._nombre.getNombreCompleto()}`
    }
}