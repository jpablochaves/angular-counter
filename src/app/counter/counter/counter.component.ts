import { Component } from '@angular/core';

@Component({
  selector:'app-counter',
  templateUrl: './counter.component.html' ,
})
export class CounterComponent{

  public title:string = 'Componente Contador';
  // Para trabajar el contador
  public contador:number = 0;
  public historialNumeros:number[] = [];

  // restar(){
  //   this.contador--;
  // }
  // sumar = () => this.contador++;

  modificar = (cantidad:number) => {
    this.contador += cantidad;
    this.historialNumeros.push(this.contador)
    console.log(this.historialNumeros);
  }


}
