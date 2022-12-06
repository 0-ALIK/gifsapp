import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="flex min-h-screen">

      <app-sidebar class="dark:bg-slate-900 hidden sm:flex flex-col gap-4 dark:text-slate-50 p-3" id="sidebar"></app-sidebar>

      <app-gifs-page class="basis-full bg-slate-50"></app-gifs-page>

    </section>`,
})
export class AppComponent {

  public title: string = 'gifsapp';
}
