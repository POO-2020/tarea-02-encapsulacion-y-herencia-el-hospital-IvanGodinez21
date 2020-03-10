import Doctor from "./doctor.js";
export default class Hospital {
    /**
     * @param {string} nombre 
     * @param {direccion} direccion 
     */
    constructor (nombre, direccion) {
        this.nombre = nombre
        this.direccion = direccion
        this.listadocs = new Array()
        this.listacita = new Array()
    }
    registrarDoctor(doctor) {
        this.listadocs.push(doctor)
    }
    listarDoctores() {
        console.log("---Doctores---")
        this.listadocs.forEach((doctor, i) => {
            console.log(`${i+1}. ${doctor.getPerfildoc()}`)
        })
    }
    registrarCita(cita) {
        this.listacita.push(cita)
    }
    listarCitas() {
        console.log("---Citas---")
        this.listacita.forEach((cita, i) => {
            console.log(`${i+1}. ${cita.getCita()}`)
        })
    }
}