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
    buscarDoctor(doctor) {
        let result = this._listadocs.find(e => e.esIgualA(doctor));
    }
    registrarDoctor(doctor) {
        if (this.buscarDoctor(doctor) != null) {
            return false;
        }
        this._listadocs.push(doctor)
        return true;
    }
    eliminarDoctor(doctor) {
        let result = this.buscarDoctor(doctor)

        if (result < 0) {
            return false 
        }
        this._listadocs.splice(result, 1)
        return true
    }
    actualizarDoctor(doctor, nuevoDoctor) {
        let result = this.buscarDoctor(doctor)
        
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
    buscarCita(cita) {
        let result = this._listacita.find(c => c.esIgualA(cita));
    }
    registrarCita(cita) {
        if (this.buscarCita(cita) != null) {
            return false
        }
        this._listacita.push(cita)
        return true
    }
    eliminarCita(cita) {
        let result = this.buscarCita(cita)

        if (result < 0) {
            return false 
        }
        this._listacita.splice(result, 1)
        return true
    }
    actualizarCita(cita, nuevaCita) {
        let result = this.buscarCita(cita)

        if (result < 0) {
            return false 
        }
        this._listacita.splice(result, 1, nuevaCita)
        return true
    }
    listarCitas() {
        console.log("---Citas---")
        this._listacita.forEach((cita, i) => {
            console.log(`${i+1}. ${cita.getCita()}`)
        })
    }
}