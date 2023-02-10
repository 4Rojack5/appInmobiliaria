import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inmobiliario } from '../interfaces/inmobiliario';

@Injectable({
  providedIn: 'root'
})
export class InmobiliarioService {

  //Se agrega el url del localhost de la api
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //Get Inmobiliarios
  getInmobiliarios(){
    return this.http.get(this.url);
  }

  //Get Inmobiliario
  getInmobiliario(id:string){
    return this.http.get(this.url+'/'+id);
  }

  //Add Inmobiliario
  addInmobiliario(inmobiliario:Inmobiliario){
    return this.http.post(this.url, inmobiliario); 
  }

  //Delete Inmobiliario
  deleteInmobiliario(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //Modify Inmobiliario
  modifyInmobiliario(id:string | any, inmobiliario:Inmobiliario){
    return this.http.put(this.url+'/'+id, inmobiliario);
  }
}

/* Created By: Juan Felipe Rodríguez Rendón */
