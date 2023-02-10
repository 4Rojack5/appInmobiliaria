import { Component, OnInit } from '@angular/core';
import { Inmobiliario } from 'src/app/interfaces/inmobiliario';
import { InmobiliarioService } from 'src/app/services/inmobiliario.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //Se crea una array para almacenar los datos

  ListInmueble: Inmobiliario[] | any;

  //En el constructor se declaran los servicios importados
  constructor(private InmobiliarioService: InmobiliarioService,
              private router:Router) { }

  //ngOnInit para que al iniciar la app muestre los inmuebles (Ciclos de vida)           
  ngOnInit(): void {
    this.showInmobiliario();
  }

  //Función para mostrar el mobiliario
  showInmobiliario(){
    this.InmobiliarioService.getInmobiliarios().subscribe(
      res => {
        console.log(res);
        this.ListInmueble = <any>res;
      },
      err => console.log(err)
      );
  }

  //Función para eliminar un inmueble por id
  delete(id:string){
    this.InmobiliarioService.deleteInmobiliario(id).subscribe(
      res => {
        console.log('Inmobiliario Eliminado');
        this.showInmobiliario();
      },
      err => console.log(err)
      );
  }

  //Función para redireccionar al formulario de modificación
  modify(id:string){
    this.router.navigate(['/edit/'+id]);
  }

}

/* Created By: Juan Felipe Rodríguez Rendón */