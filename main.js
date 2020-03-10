import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Paciente from "./paciente.js";
import Doctor from "./doctor.js";
import Cita from "./cita.js";
import Hospital from "./hospital.js";

class Main {
    probarFecha() {
        console.log(`<---------Fecha--------->`);
        //let dia = prompt("Ingresa el dia")
        //let mes = prompt("Ingresa el mes")
        //let año = prompt("Ingresa el año")
        //let fecha = new Fecha(dia, mes, año);
        let fecha = new Fecha(19, 2, 2000);
        console.log(`La fecha indicada es: ${fecha.getFecha()}`);
        console.log(`El día fue: ${fecha.getDiaFecha()}`);
        console.log(`Han pasado ${fecha.getAños()} años`);
        console.log(`Han pasado ${fecha.getMeses()} meses`);
        console.log(`Han pasado ${fecha.getSemanas()} semanas`);
        console.log(`Han pasado ${fecha.getDias()} días`);
    }
    probarTiempo() {
        console.log(`<---------Tiempo--------->`);
        let tiempo = new Tiempo(11, 11, "PM");
        console.log(`La hora en el formato 24HRS es: ${tiempo.getFormato24()}`);
        console.log(`La hora en el formato AM/PM es: ${tiempo.getFormato12()}`);
    }
    probarNombre() {
        console.log(`<---------Nombres--------->`)
        let nombre = new Nombre("Jesus Ivan", "Godinez", "Martinez");
        console.log(`Nombre completo: ${nombre.getNombreCompleto()}`);
        console.log(`Nombre completo por apellidos: ${nombre.getApellidoNombre()}`);
        console.log(`Iniciales: ${nombre.getIniciales()}`);
        var nombre1 = new Nombre("Juan", "Perez", "Ortega");
        console.log(`Nombre completo: ${nombre1.getNombreCompleto()}`);
        console.log(`Nombre completo por apellidos: ${nombre1.getApellidoNombre()}`);
        console.log(`Iniciales: ${nombre1.getIniciales()}`);
    }
    probarPaciente() {
        console.log(`<---------Pacientes--------->`)
        let fecha = new Fecha(19, 2 , 2000);
        let nombre = new Nombre("Juan", "Perez", "Ortega")
        let paciente = new Paciente(nombre, fecha, 3121206971);
        console.log(`${paciente.getPerfil()}`);
    }
    probarDoctor() {
        console.log(`<---------Doctor--------->`)
        let doctor = new Doctor(3124305, "Traumatologo", new Nombre("Manuel", "Ramirez", "Ortega"), 3121205571);
        console.log(`${doctor.getPerfildoc()}`)
    }
    probarCita() {
        console.log(`<---------Cita--------->`)
        let cita = new Cita(
            new Fecha(23, 2, 2020), 
            new Tiempo(10, 30, "am"), 
            new Doctor (3123123, "Pediatra", new Nombre("Manuel", "Ramirez", "Ortega"), 31212059347),
            new Paciente (new Nombre("Juan", "Perez", "Ortega"), new Fecha(21, 12, 2000), 3121205571)
        );
        console.log(`${cita.getCita()}`)
    }
    probarHospital() {
        console.log(`<---------Hospital--------->`)
        let hospital = new Hospital("Puerta de cobre", "Bosques 1120")
        let doctor1 = new Doctor(3124305, "Traumatologo", new Nombre("Raul", "Gonzalez", "Hernandez"), 3121205571);
        let doctor2 = new Doctor(3124306, "Traumatologo", new Nombre("Enrique", "Ramirez", "Torres"), 3121205572);
        let cita1 = new Cita(
            new Fecha(21, 12, 2000), 
            new Tiempo(10,30, "am"), 
            new Doctor(3124307, "Cirujano", new Nombre("Alberto", "Roamon", "Ramirez"), 3121205971), 
            new Paciente(new Nombre ("Luis", "Eduardo", "Leyva"), new Fecha(21, 12, 2000), 3121205978)
        );
        let cita2 = new Cita(
            new Fecha(21, 12, 2000), 
            new Tiempo(10,30, "am"), 
            new Doctor(3124307, "Traumatologo", new Nombre("Jose", "Roamon", "Godínez"), 3121205971), 
            new Paciente(new Nombre ("Luis", "Eduardo", "Leyva"), new Fecha(21, 12, 2000), 3121205978)
        );

        hospital.registrarDoctor(doctor1);
        hospital.registrarDoctor(doctor2);
        hospital.listarDoctores();
        hospital.registrarCita(cita1);
        hospital.registrarCita(cita2);
        hospital.listarCitas();
    }
}

let app = new Main
app.probarFecha();
app.probarTiempo();
app.probarNombre();
app.probarPaciente();
app.probarDoctor();
app.probarCita();
app.probarHospital();