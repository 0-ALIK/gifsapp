import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  template: `
    <h3 class="text-center text-4xl font-bold">{{title}}</h3>
    <hr>
    <nav class="flex flex-col bg-slate-100 text-black rounded-sm">
      <a href="#"
        class="p-2 border-b border-slate-800 hover:underline active:scale-110"
        *ngFor="let historia of historial"
        (click)="cargarBusquedaHistorial(historia)">{{historia | titlecase}}</a>
    </nav>`
})
export class SidebarComponent {

  private _title: string = 'Gifsapp';

  constructor (private _gifsService: GifsService) {}

  get historial (): string[] {
    return this._gifsService.historial;
  }

  public cargarBusquedaHistorial (query: string): void {
    this._gifsService.realizarPeticion(query);
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

}
