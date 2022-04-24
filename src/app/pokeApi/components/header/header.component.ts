import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router :Router,public pokeService: PokemonService) { }

  //public titulo:string= "poke World";

  ngOnInit(): void {
  }

  home(){
    this.router.navigateByUrl('/home')
    //this.titulo = "poke World";
    this.pokeService.Titulo = "poke World";
  }

  captures(){
    this.router.navigateByUrl('/pokeCaptures')
    //this.titulo = "poke Captures";
    this.pokeService.Titulo = "poke Captures";
  }


}
