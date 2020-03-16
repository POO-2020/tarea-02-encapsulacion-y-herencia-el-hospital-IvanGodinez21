import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Paciente from "./paciente.js";
import Doctor from "./doctor.js";
import Cita from "./cita.js";
import Hospital from "./hospital.js";
import PacienteAsegurado from "./pacienteasegurado.js"

//DOCTORES
const docA = new Doctor ({
    cedula: 3123123,
    especialidad: "Pediatra",
    nombre: new Nombre("Manuel", "Ramirez", "Ortega"),
    telefono: 31212059347
});
const docB = new Doctor ({
    cedula: 23435032,
    especialidad:"Cirujano",
    nombre: new Nombre("Ramon", "Castro", "Campos"),
    telefono: 31256371
});
//PACIENTES
const pacA = new Paciente ({
    nombre: new Nombre("Juan", "Perez", "Ortega"),
    fecha: new Fecha(21, 12, 2000),
    numero: 3121205571
});
const pacB = new Paciente({
    nombre: new Nombre("Antonio", "Gonzales", "Velazques"),
    fecha: new Fecha (10, 11, 1997),
    numero: "312445673",
});

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
        let paciente = new Paciente({
            nombre: new Nombre("Juan", "Perez", "Ortega"),
            fecha: new Fecha(19, 2 , 2000),
            telefono: 3121206971
        });
        console.log(`${paciente.getPerfil()}`);
    }
    probarPacienteAsegurado() {
        console.log(`<---------Paciente Asegurado--------->`)
        let pacienteasegurado = new PacienteAsegurado({
            nombre: new Nombre("Juan", "Perez", "Dias"),
            fecha: new Fecha(21, 12, 2000),
            telefono: 3121205979,
            numeropoliza: "20161101",
            fechavigencia: new Fecha(21, 12, 2020),
            compañia: "MyMind"
        });
        console.log(`${pacienteasegurado.getPerfil()}`)
    }
    probarDoctor() {
        console.log(`<---------Doctor--------->`)
        let doctor = new Doctor({
            cedula: 3124305, 
            especialidad: "Traumatologo", 
            nombre: new Nombre("Manuel", "Ramirez", "Ortega"),
            telefono: 3121205571
        });
        console.log(`${doctor.getPerfildoc()}`)
    }
    probarCita() {
        console.log(`<---------Cita--------->`)
        let cita = new Cita({
            nocita: Math.trunc((Math.random() * (100 - 0) + 0)),
            fecha: new Fecha(23, 2, 2020), 
            hora: new Tiempo(10, 30, "am"), 
            doctor: docA,
            paciente: pacA
        });
        console.log(`${cita.getCita()}`)
    }
    probarHospital() {
        console.log(`<---------Hospital--------->`)
        let hospital = new Hospital("Puerta de cobre", "Bosques 1120")
        let doctor1 = docA;
        let doctor2 = docB;
        let cita1 = new Cita({
            nocita: 1,
            fecha: new Fecha(23, 2, 2020), 
            hora: new Tiempo(10, 30, "am"), 
            doctor: docA,
            paciente: pacA
        });
        let cita2 = new Cita({
            nocita: 2,
            fecha: new Fecha(20, 3, 2020), 
            hora: new Tiempo(10, 30, "am"), 
            doctor: docA,
            paciente: pacA
        });

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
app.probarPacienteAsegurado();
app.probarDoctor();
app.probarCita();
app.probarHospital();