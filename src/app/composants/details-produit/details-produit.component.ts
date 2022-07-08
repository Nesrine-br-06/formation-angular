import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produit } from 'src/app/interfaces/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit { 
  id =0;
produit: Produit ={};
  constructor(private route: ActivatedRoute, //activer la route
              private ps: ProduitService,    //activer le produit service
              private router: Router ) {}    // pour faire la redirection

  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>{
      this.id =Number(res.get('id'));
      this.ps.getOneProduct(this.id).subscribe(res => {
        this.produit =res;
      console.log(this.produit)
    })
  })
}
 
    modifierProduit() {
      this.ps.updateProduct(this.produit).subscribe(res => {
        this.router.navigateByUrl('/produit');
      })
    }
  }
    


