import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student/student';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TechnicalTest_DianaReyes';
  career:string[]=["Ingeniería de Sistemas", "Ingeniería Industrial", "Ingeniería en Automatización"];
  level:string[]=["A1", "A2", "B1", "B2", "C1"];
  student:any[] = [];
  person:any = {};

  studentModel = new Student(this.person.name, "", "");

  ngOnInit() {

  }

  formularioEnviado(){
    console.log("El formulario fue enviado y el estudiante es: ", this.studentModel)
    alert("El formulario fue enviado");
    this.student.push(this.person);

    // se crea un nuevo objeto para almacenar nuevos datos
    this.person = {};
  }
}
