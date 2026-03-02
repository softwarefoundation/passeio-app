import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriaService} from "../categoria.service";

@Component({
    selector: 'app-categoria',
    standalone: false,
    templateUrl: './categoria.component.html',
    styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

    camposForm: FormGroup;


    constructor(private categoriaService: CategoriaService) {
        this.camposForm = new FormGroup({
            nome: new FormControl('', Validators.required),
            descricao: new FormControl('', Validators.required)
        });
    }


    salvar() {

        this.camposForm.markAllAsTouched();

        if (this.camposForm.valid) {
            console.log('Valores: ', this.camposForm.value);
            this.categoriaService.salvar(this.camposForm.value)
                .subscribe({
                    next: value => {
                        console.log('Sucesso: ', value);
                        this.camposForm.reset();
                    },
                    error: err => console.error('Erro: ', err)
                });
        }
    }


    isCampoInvalido(campoNome: string) {
        const campo = this.camposForm.get(campoNome);
        return campo?.invalid
            && campo?.touched
            && campo?.errors?.['required'];
    }

}
