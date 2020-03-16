import Paciente from "./paciente.js";
import Fecha from "./fecha.js";

export default class PacienteAsegurado extends Paciente {
    /**
     * @param {number} numeropoliza 
     * @param {Fecha} fechavigencia 
     * @param {string} compañia 
     */
    constructor ({nombre, fecha, telefono, numeropoliza, fechavigencia, compañia}) {
        super({nombre, fecha, telefono})
        this._nombre = nombre
        this._fecha = fecha
        this._telefono = telefono
        this._numeropoliza = numeropoliza
        this._fechavigencia = fechavigencia
        this._compañia = compañia
    }
    getPerfil() {
        return `${this._nombre.getNombreCompleto()}\nFecha de registro: ${this._fecha.getFecha()}\nNúmero de Teléfono: ${this._telefono}\nNúmero de Poliza: ${this._numeropoliza}\nFecha de Vigencia: ${this._fechavigencia.getFecha()}\nCompañia: ${this._compañia}`
    }
}