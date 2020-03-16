export default class Cita {
    /**
     * @param {string} nocita
     * @param {string} fecha 
     * @param {string} hora 
     * @param {string} doctor 
     * @param {string} paciente 
     */
    constructor ({nocita, fecha, hora, doctor, paciente}) {
        this._nocita = nocita
        this._fecha = fecha
        this._hora = hora
        this._doctor = doctor
        this._paciente = paciente
    }
    getCita() {
        return `Cita No. #${this._nocita}\nFecha: ${this._fecha.getFecha()}\nHora: ${this._hora.getFormato24()}\nDoctor: ${this._doctor._nombre.getNombreCompleto()}\nPaciente: ${this._paciente._nombre.getNombreCompleto()}`
    }
    getNoCita(){
        return `${this.nocita}`
    }
    esIgualA(cita) {
        if (cita.getNoCita() === this._nocita) {}
        return true;
    }
}