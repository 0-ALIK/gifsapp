import { Component } from '@angular/core';
import { IGifs } from '../interfaces/ISearchGifsResponse';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  template: `
    <div class="w-full bg-slate-900 rounded-md" *ngFor="let gif of resultados">
      <img class="h-auto w-full object-cover rounded-t-md"
      [src]="gif.images.downsized_medium.url" alt="gif">
      <article class="p-4 text-slate-100">
        <h2>{{gif.title}}</h2>
      </article>
    </div>
  `,
  styles: [
  ]
})
export class ResultadoComponent {

  public get resultados(): IGifs[] {
    return this._gifsService.resultados;
  }

  constructor(private _gifsService: GifsService) { }


}

