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
        this._listadocs.push(doctor)
    }
    listarDoctores() {
        console.log("---Doctores---")
        this._listadocs.forEach((doctor, i) => {
            console.log(`${i+1}. ${doctor.getPerfildoc()}`)
        })
    }
    registrarCita(cita) {
        this._listacita.push(cita)
    }
    listarCitas() {
        console.log("---Citas---")
        this._listacita.forEach((cita, i) => {
            console.log(`${i+1}. ${cita.getCita()}`)
        })
    }
}