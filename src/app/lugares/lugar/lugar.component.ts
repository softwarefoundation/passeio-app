import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Categoria} from "../../categorias/categoria";
import {CategoriaService} from "../../categorias/categoria.service";
import {LugarService} from "../lugar.service";

@Component({
    selector: 'app-lugar',
    standalone: false,
    templateUrl: './lugar.component.html',
    styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit {

    camposForm: FormGroup;
    categorias: Categoria[] = [];


    constructor(private categoriaService: CategoriaService, private lugarService: LugarService) {
        this.camposForm = new FormGroup({
            nome: new FormControl('', Validators.required),
            categoria: new FormControl('', Validators.required),
            localizacao: new FormControl('', Validators.required),
            urlFoto: new FormControl('', Validators.required),
            avaliacao: new FormControl('', Validators.required)
        });
    }

    ngOnInit(): void {
        this.categoriaService.obterTodos().subscribe(categorias => this.categorias = categorias);
    }

    protected salvar() {

        this.camposForm.markAllAsTouched();

        this.lugarService.salvar(this.camposForm.value).subscribe({
            next: value => {
                console.log('Sucesso: ', value);
                this.camposForm.reset();
            },
            error: err => {
                console.error('Erro: ', err);
            }
        });
    }

    protected isCampoInvalido(nome: string) {
        return true;
    }
}
