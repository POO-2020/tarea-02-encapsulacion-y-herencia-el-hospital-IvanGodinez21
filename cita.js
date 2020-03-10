export default class Cita {
    /**
     * @param {string} fecha 
     * @param {string} hora 
     * @param {string} doctor 
     * @param {string} paciente 
     */
    constructor (fecha, hora, doctor, paciente) {
        this.fecha = fecha
        this.hora = hora
        this.doctor = doctor
        this.paciente = paciente
    }
    getCita() {
        return `Cita No. #${Math.trunc((Math.random() * (100 - 0) + 0))}\nFecha: ${this.fecha.getFecha()}\nHora: ${this.hora.getFormato24()}\nDoctor: ${this.doctor.nombre.getNombreCompleto()}\nPaciente: ${this.paciente.nombre.getNombreCompleto()}`
    }
}