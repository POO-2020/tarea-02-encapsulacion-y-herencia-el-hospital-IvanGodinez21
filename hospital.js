import Doctor from "./doctor.js";
export default class Hospital {
    /**
     * @param {string} nombre 
     * @param {direccion} direccion 
     */
    constructor (nombre, direccion) {
        this._nombre = nombre
        this._direccion = direccion
        this._listadocs = new Array()
        this._listacita = new Array()
    }
    registrarDoctor(doctor) {
        if (this._buscarDoctor(doctor) != null) {
            return false;
        }
        this._listadocs.push(doctor)
        return true;
    }
    _buscarDoctor(doctor) {
        let result = this._listadocs.find(e => e.esIgualA(doctor));
    }
    eliminarDoctor(doctor) {
        let result = this._buscarDoctor(doctor)

        if (result < 0) {
            return false 
        }
        this._listadocs.splice(result, 1)
        return true
    }
    actualizarDoctor(doctor, nuevoDoctor) {
        let result = this._buscarDoctor(doctor)
        
        if (result < 0) {
            return false
        }
        this._listadocs.splice(result, 1, nuevoDoctor)
        return true
    }
    listarDoctores() {
        console.log("---Doctores---")
        this._listadocs.forEach((doctor, i) => {
            console.log(`${i+1}. ${doctor.getPerfildoc()}`)
        })
    }
    registrarCita(cita) {
        if (this._buscarCita(cita) != null) {
            return false
        }
        this._listacita.push(cita)
        return true;
    }
    _buscarCita(cita) {
        let result = this._listacita.find(c => c.esIgualA(cita));
    }
    listarCitas() {
        console.log("---Citas---")
        this._listacita.forEach((cita, i) => {
            console.log(`${i+1}. ${cita.getCita()}`)
        })
    }
}