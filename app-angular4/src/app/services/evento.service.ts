import { IEvento } from "../interfaces/eventos.interface"
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class EventosService {
    public constructor(private _http: HttpClient) { }

    private url: string = "http://localhost:3000/data";

    public getEventosWS(){
        return this._http.get(this.url);
    }
    
    public postEventoWS(evento :IEvento):Observable<IEvento>{
        return this._http.post<IEvento>(this.url, evento);
    }
    
}