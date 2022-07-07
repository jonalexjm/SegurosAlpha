import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User, UserDetail } from 'src/app/shared/interfaces/general.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  RUTA_BACKEND : string = ""; 
  $modal = new EventEmitter<any>();

  constructor(private _httpClient: HttpClient) { 
    this.RUTA_BACKEND = environment.urlWebApi.principal;
  }

  getAllUser(): Observable<any> {
    const ruta = `/Acceso`;
    return this._httpClient.get<User[]>(ruta);
    
  }

  getDetailUser(idUser : string): Observable<any> {
    const ruta = `/Acceso/${idUser}/ideusr`;
    return this._httpClient.get<UserDetail>(ruta);
    
  }


}
