import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-categoria',
    standalone: false,
    templateUrl: './categoria.component.html',
    styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

    camposForm: FormGroup;


    constructor() {
        this.camposForm = new FormGroup({
            nome: new FormControl('', Validators.required),
            descricao: new FormControl('', Validators.required)
        });
    }


    salvar() {


        this.camposForm.markAllAsTouched();

        if (this.camposForm.invalid) {
            console.log('Valores: ', this.camposForm.value);
        }

    }


    isCampoInvalido(campoNome: string) {
        const campo = this.camposForm.get(campoNome);
        return campo?.invalid
            && campo?.touched
            && campo?.errors?.['required'];
    }

}
