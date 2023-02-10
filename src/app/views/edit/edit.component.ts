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

  constructor(private InmobiliarioService: InmobiliarioService,
              private router: Router,
              private activedRoute: ActivatedRoute) { }

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

  edit(){
    this.InmobiliarioService.modifyInmobiliario(this.inmueble.id_propiedad, this.inmueble).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );

      this.router.navigate(['/home']);

  }

}
