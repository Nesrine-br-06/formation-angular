import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  rue= "";
  ville ="";
  codePostal="";

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((res) =>{
      
        this.rue=(res.get('rue') ?? "");
        this.ville=(res.get('ville') ?? "");
        this.codePostal=(res.get('codePostal') ?? "");
      
      
    })
  }

}
