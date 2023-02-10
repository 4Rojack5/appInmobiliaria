import { Component, OnInit } from '@angular/core';
import { InmobiliarioService } from 'src/app/services/inmobiliario.service';
import { Inmobiliario } from 'src/app/interfaces/inmobiliario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  inmueble: Inmobiliario = {
    id_propiedad: '',
    imagen: '',
    areatotal: '',
    ncuartos: '',
    nbanos: '',
    nparqueaderos: '',
    valor_propiedad: ''
  };

  constructor(private InmobiliarioService: InmobiliarioService,
              private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    delete this.inmueble.id_propiedad;
    this.InmobiliarioService.addInmobiliario(this.inmueble).subscribe();
    this.router.navigate(['/home']);
  }

}
