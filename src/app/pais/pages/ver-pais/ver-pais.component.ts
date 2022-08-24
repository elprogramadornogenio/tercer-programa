import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, Translation } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais: Country[] =[];

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    /* this.activatedRoute.params
      .subscribe(({ id }) => {
        console.log(id);
        this.paisService.getPaisCodigo(id).subscribe(pais => {
          console.log(pais);
        })
      }) */

      this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.paisService.getPaisCodigo(id)), 
        tap((pais:Country[])=>console.log(pais[0].translations["deu"].common))
      )
      .subscribe(pais=>{
        this.pais = pais;
      })
  }

}
