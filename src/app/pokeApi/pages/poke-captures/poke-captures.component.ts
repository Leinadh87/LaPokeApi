import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from '../../models/pokemonDetail';
import { PokemonService } from '../../services/pokemons.service';

@Component({
  selector: 'app-poke-captures',
  templateUrl: './poke-captures.component.html',
  styleUrls: ['./poke-captures.component.scss']
})
export class PokeCapturesComponent implements OnInit {

  pokemons  : PokemonDetail[] = [];
  
  constructor(private pokeService : PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
    this.pokeService.divIsVisible = false;
  }

  getPokemons(){
    this.pokemons = this.pokeService.pokemons;
  }

}
