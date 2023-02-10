import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Datos para hacer binding al component.html

  inmobiliaria = '../../../assets/pictures/Inmobiliaria.png';
  aptoc1 = '../../../assets/pictures/aptoc1.jpg';

  constructor() { }

  ngOnInit(): void {
  }
}

/* Created By: Juan Felipe Rodríguez Rendón */
