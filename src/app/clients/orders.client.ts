import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from "../models/order.model";
import { HttpHeaders } from '@angular/common/http';
import { CacheService } from "../services/cache.service";

const PROTOCOL = "http";
const PORT = 3500;
@Injectable()
export class OrdersClient {
    baseUrl: string;
    auth_token: string;
    constructor(private http: HttpClient, private cache: CacheService) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + "orders", order);
    }
    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.baseUrl + "orders", this.getOptions());
    }
    deleteOrder(id: number): Observable<Order> {
        return this.http.delete<Order>(`${this.baseUrl}orders/${id}`,
            this.getOptions());
    }
    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`,
            order, this.getOptions());
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