import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGifs, ISearchGifsResponse } from '../interfaces/ISearchGifsResponse';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = '41HCi2lboI1u8F4EbpuRIdHrNAgFl0gu';
  private _apiHost: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  private _resultados: IGifs[] = [];

  constructor (private _http: HttpClient) {
    this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
    this._resultados = JSON.parse( localStorage.getItem('resultados')! ) || [];
  }

  public get historial(): string[] {
    return [...this._historial];
  }

  public get resultados(): IGifs[] {
    return this._resultados;
  }

  public guardarEnHistorial (query: string): void {

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query) && query !== '') {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
  }

  public realizarPeticion (query: string): void {
    if(query !== '') {

      const params: HttpParams  = new HttpParams()
        .set('api_key', this._apiKey)
        .set('q', query)
        .set('limit', '10');

      this._http.get<ISearchGifsResponse>(`${this._apiHost}/search`, {params: params})
        .subscribe( (resp: ISearchGifsResponse) => {
          this._resultados = resp.data;
          localStorage.setItem('resultados', JSON.stringify(this._resultados));
        });
    }
  }

}
