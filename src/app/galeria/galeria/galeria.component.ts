import {Component, OnInit} from '@angular/core';
import {Lugar} from "../../lugares/lugar";
import {Categoria} from "../../categorias/categoria";
import {LugarService} from "../../lugares/lugar.service";
import {CategoriaService} from "../../categorias/categoria.service";

@Component({
    selector: 'app-galeria',
    standalone: false,
    templateUrl: './galeria.component.html',
    styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit {

    lugares: Lugar[] = [];
    categoriasFiltro: Categoria[] = [];

    constructor(private lugarService: LugarService, private categoriaService: CategoriaService) {
    }

    ngOnInit(): void {
        this.categoriaService.obterTodos().subscribe(categoriasResponse => {
            this.categoriasFiltro = categoriasResponse;
        });

        this.lugarService.obterTodos().subscribe(lugaresResponse => {
            this.lugares = lugaresResponse;
        });
    }


}
