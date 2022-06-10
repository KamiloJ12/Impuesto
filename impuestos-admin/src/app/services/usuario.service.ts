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

  getToken(): string|null {
    return localStorage.getItem('token');
  }

  login(data: Object): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'administrador/login', data, { headers: headers });
  }

  getUsuarios(token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'usuario', { headers: headers });
  }

  getUsuarioById(id:string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'usuario/'+id, { headers: headers });
  }

  addUsuario(data: Object, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.post(this.url + 'usuario/add', data, { headers: headers });
  }

  updateUsuario(data: Object, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.put(this.url + 'usuario/update', data, { headers: headers });
  }

  getPrediales(token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'predial', { headers: headers });
  }

  addPredial(data: Object, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.post(this.url + 'predial/add', data, { headers: headers });
  }

  getPredialById(id:string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'predial/'+id, { headers: headers });
  }

  updatePredial(data: Object, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.put(this.url + 'predial/update', data, { headers: headers });
  }

  getIndustrias(token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'industria', { headers: headers });
  }

  addIndustria(data: Object, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.post(this.url + 'industria/add', data, { headers: headers });
  }

  getIndustriaById(id:string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'industria/'+id, { headers: headers });
  }

  updateIndustria(data: Object, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.put(this.url + 'industria/update', data, { headers: headers });
  }

  getVehiculos(token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'vehiculo', { headers: headers });
  }

  addVehiculo(data: Object, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.post(this.url + 'vehiculo/add', data, { headers: headers });
  }

  getVehiculoById(id:string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'vehiculo/'+id, { headers: headers });
  }

  updateVehiculo(data: Object, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.put(this.url + 'vehiculo/update', data, { headers: headers });
  }

  getImpuestosIndustrias(token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'impuesto/industrias', { headers: headers });
  }

  getImpuestosPrediales(token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'impuesto/prediales', { headers: headers });
  }

  getImpuestosVehiculos(token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'impuesto/vehiculos', { headers: headers });
  }
}
