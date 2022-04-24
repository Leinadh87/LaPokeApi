import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from '../../models/pokemonDetail';
import { PokemonService } from '../../services/pokemons.service';

@Component({
  selector: 'app-poke-world',
  templateUrl: './poke-world.component.html',
  styleUrls: ['./poke-world.component.scss']
})
export class PokeWorldComponent implements OnInit {

  pokemons  : PokemonDetail[] = [];

  constructor(public pokeService:PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
    this.pokeService.divIsVisible = true;
    this.pokeService.search = 'pi';
  }

  
  getPokemons() {
    let pokemonData: PokemonDetail;
    
    for (let i = 1; i <= 500; i++) {
      this.pokeService.getPokemons(i).subscribe(
        res => {
          this.pokemons.push(res);
        },
        err => {
          console.log(err);
        }
      );
    }

    //console.log(this.pokemons);
  }


}
