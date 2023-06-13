import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Anuncio } from '../anuncio';
import { AnuncioService } from '../anuncio.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent  implements OnInit{

  anuncios: Anuncio[] = [];
  formGroupAnuncio : FormGroup;

  constructor(private  anuncioService: AnuncioService, private formBuilder: FormBuilder){
    this.formGroupAnuncio = formBuilder.group({
      id : [''],
      img: [''],
      titulo: [''],
      textA: [''],
      preco: ['']
    })
  }

  ngOnInit(): void {
    this.LoadClient();
  }

  LoadClient(){
    this.anuncioService.getAnuncio().subscribe({
      next: data => this.anuncios = data,
      error: msg => console.log("Erro ao chamar o endpont " + msg)
    });
  }

  save(){
    this.anuncioService.save(this.formGroupAnuncio.value).subscribe({
      next: data => {
        this.anuncios.push(data);
        this.formGroupAnuncio.reset();
      }
    })
  }

}
