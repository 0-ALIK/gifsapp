import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  template: `
    <h3 class="text-lg">Buscar:</h3>
    <input type="text" placeholder="Buscar.." class="outline-none pl-4 py-2 w-full border border-slate-600 rounded-sm" (keyup.enter)="buscar(refInput.value)" #refInput>`,
})
export class BusquedaComponent {

  //Constructor
  constructor(private _gifsService: GifsService) {}


  @ViewChild('refInput')
  public txtBuscar!: ElementRef<HTMLInputElement>;

  public buscar (value: string): void {
    this._gifsService.guardarEnHistorial(value);
    this._gifsService.realizarPeticion(value);
    this.txtBuscar.nativeElement.value= '';
  }

}




/*
===== APUNTES =====
(keyup) -> evento
(keyup.{tecla})
  => evento asincrono que se emite cuando se presiona alguna tecla


<etiqueta  #referenciaLocal ></etiqueta> -> ElementRef
  => hace referencia a todas las propiedades del elemento HTML al
  que se añade


@ViewChild -> decorador
  => se utiliza para acceder a una directiva o propiedad de alguna
  etiqueta del DOM
*/
