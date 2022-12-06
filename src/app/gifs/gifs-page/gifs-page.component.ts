import { Component } from '@angular/core';

@Component({
  selector: 'app-gifs-page',
  template: `
    <div class="px-6 pt-6 colum">
      <app-busqueda></app-busqueda>
    </div>

    <div class="p-4">
      <app-resultado class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-4 items-start"></app-resultado>
    </div>`,
})
export class GifsPageComponent {


}
