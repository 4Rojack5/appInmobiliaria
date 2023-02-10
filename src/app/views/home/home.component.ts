import { Component, OnInit } from '@angular/core';
import { Inmobiliario } from 'src/app/interfaces/inmobiliario';
import { InmobiliarioService } from 'src/app/services/inmobiliario.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListInmueble: Inmobiliario[] | any;

  constructor(private InmobiliarioService: InmobiliarioService,
              private router:Router) { }

  ngOnInit(): void {
    this.showInmobiliario();
  }

  showInmobiliario(){
    this.InmobiliarioService.getInmobiliarios().subscribe(
      res => {
        console.log(res);
        this.ListInmueble = <any>res;
      },
      err => console.log(err)
      );
  }

  delete(id:string){
    this.InmobiliarioService.deleteInmobiliario(id).subscribe(
      res => {
        console.log('Inmobiliario Eliminado');
        this.showInmobiliario();
      },
      err => console.log(err)
      );
  }

  modify(id:string){
    this.router.navigate(['/edit/'+id]);
  }

}
