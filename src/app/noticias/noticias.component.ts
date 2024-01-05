import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: any[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.noticiasService.getNoticias().subscribe((data: any) => {
      this.noticias = data;
    });
  }
}