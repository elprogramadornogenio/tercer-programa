import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  paises: Country[] = [];

  regionActiva: string = '';

  constructor(private paisService: PaisService) { }

  activarRegion (region: string) {
    this.regionActiva = region;
    this.paises = [];
    this.buscar(region);
  }

  getClassCss(region : string ): string {
    return (region===this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  buscar(region: string){
    this.paises = [];
    this.paisService.getRegion(region)
      .subscribe((paises) =>{
        //console.log(paises);
        this.paises = paises;

      }, (err) =>{
        this.paises = []
      });
  }


}
