import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getVehiculoByPlaca(placa:string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'vehiculo/placa/'+placa, { headers: headers });
  }

  getImpuestoByVehiculoId(id:string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'impuesto/vehiculo/'+id, { headers: headers });
  }

  getPredialByNit(nit:string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'predial/nit/'+nit, { headers: headers });
  }

  getImpuestoByPredialId(id:string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'impuesto/predial/'+id, { headers: headers });
  }

  getIndustriaByNit(nit:string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'industria/nit/'+nit, { headers: headers });
  }

  getImpuestoByIndustriaId(id:string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'impuesto/industria/'+id, { headers: headers });
  }
}
