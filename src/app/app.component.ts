import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="flex">

      <article class="dark:bg-slate-800 dark:text-slate-50 h-screen p-3" id="sidebar">
        <h3 class="text-center text-4xl font-bold">{{title}}</h3>
        <hr class="my-3">
        <nav class="flex flex-col bg-slate-100 text-black rounded-sm">
          <a href="#" class="p-2 border-b border-slate-800">
            dashboard
          </a>
        </nav>
      </article>

      <article class="basis-full">

        <div class="px-6 pt-6">
          <h3 class="text-lg">Buscar:</h3>
          <input type="text" placeholder="Buscar.." class="outline-none pl-4 py-2 w-full border border-slate-600 rounded-sm">
        </div>

        <div class="p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia incidunt neque architecto velit. Error sunt quidem eum saepe quasi hic impedit, ullam beatae cumque.
          </p>
        </div>

      </article>

    </section>`,
})
export class AppComponent {

  public title: string = 'gifsapp';
}
