import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url: string = "http://localhost:5555/produits"; //on a indiqué l'adresse des données

  constructor(private http: HttpClient) { }
  getOneProduct(id: number) {
    return this.http.get<Produit>(this.url + "/" + id);
  }
  getAllProducts() {
    return this.http.get<Produit[]>(this.url); //récupérer tous les produits avec le get
  }
  addProduct(p: Produit) {
    return this.http.post<Produit>(this.url, p);
  }
  deleteProduct(id: number) {
    return this.http.delete<Produit>(this.url + "/" + id); //pour supprimer un produit on met aprés l'url "/"+id (qui est l'identifiant du produit à supprimer)

  }
  updateProduct(p: Produit) {
    return this.http.put<Produit>(this.url + "/" + p.id, p);
  }
  }








