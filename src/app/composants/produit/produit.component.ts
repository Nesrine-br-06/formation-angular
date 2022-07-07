import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
produit : Produit = {};
produits: Produit[]=[];
  constructor() { }

  ngOnInit(): void {
  }
afficherTout(){

  this.produits.push({...this.produit}); //push c ajouter, ... spread operator
  this.produit = {};

}
}
