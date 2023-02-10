import { Component, OnInit } from '@angular/core';
import { InmobiliarioService } from 'src/app/services/inmobiliario.service';
import { Inmobiliario } from 'src/app/interfaces/inmobiliario';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  //Se crea una array pero esta vez vacia con cada elemento la tabla

  inmueble: Inmobiliario = {
    id_propiedad: '',
    imagen: '',
    areatotal: '',
    ncuartos: '',
    nbanos: '',
    nparqueaderos: '',
    valor_propiedad: ''
  };

  array: any;

  //Se declaran en el constructor los servicios
  constructor(private InmobiliarioService: InmobiliarioService,
              private router: Router,
              private activedRoute: ActivatedRoute) { }

  //El ngOnInit muestra los datos en cada input de los datos con esto se puede editar solo lo que hay
  ngOnInit(): void {
    const id_enter = this.activedRoute.snapshot.params['id'];
    console.log('id de entrada es: '+id_enter);

    if(id_enter){
      this.InmobiliarioService.getInmobiliario(id_enter).subscribe(
        res => {
          this.array = res;
          this.inmueble = this.array[0];
        },
        err => console.log(err)
      );
    }
  }

  //Función para que al dar click se editen los datos

  edit(){
    this.InmobiliarioService.modifyInmobiliario(this.inmueble.id_propiedad, this.inmueble).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );

      this.router.navigate(['/search']);

  }

}

/* Created By: Juan Felipe Rodríguez Rendón */
