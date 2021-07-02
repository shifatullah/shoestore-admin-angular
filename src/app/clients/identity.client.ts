import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { CacheService } from "../services/cache.service";

const PROTOCOL = "http";
const PORT = 3500;
@Injectable()
export class IdentityClient {
    baseUrl: string;    
    constructor(private http: HttpClient, private cache: CacheService) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "login", {
            name: user, password: pass
        }).pipe(map(response => {
            var auth_token: string = response.success ? response.token : null;
            this.cache.save({
                key: "auth_token",
                data: auth_token,
                expirationMins: 30
            });
            return response.success;
        }));
    }
}