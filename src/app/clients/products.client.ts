import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { HttpHeaders } from '@angular/common/http';
import { CacheService } from "../services/cache.service";

const PROTOCOL = "http";
const PORT = 3500;
@Injectable()
export class ProductsClient {
    baseUrl: string;    
    constructor(private http: HttpClient, private cache: CacheService) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + "products");
    }
    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl + "products",
            product, this.getOptions());
    }
    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.baseUrl}products/${product.id}`,
            product, this.getOptions());
    }
    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.baseUrl}products/${id}`,
            this.getOptions());
    }
    private getOptions() {
        var auth_token: string = this.cache.load("auth_token");
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer<${auth_token}>`
            })
        }
    }
}