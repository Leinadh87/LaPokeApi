import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonDetail } from '../../models/pokemonDetail';
import { PokemonService } from '../../services/pokemons.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

  @Input() pokemones: PokemonDetail[] =[];
  public page: number = 0;
  public search: string = '';
  filterName:string = 'pik';
  public incremento:number =  50;
  constructor(public pokeService : PokemonService,private router :Router) { }

  ngOnInit(): void {
  }

  getPokemon(pokemon : PokemonDetail){
    //console.log(pokemon);
    //this.router.navigateByUrl(`/pokeDetail/${pokeId}`)
    this.pokeService.pokemon = pokemon;
    this.router.navigateByUrl("pokeDetail")
    this.pokeService.Titulo = 'Poke Detail';
  }

  nextPage() {
    this.page += this.incremento;
  }

  prevPage() {
    if ( this.page > 0 )
      this.page -= this.incremento;
  }

  onSearchPokemon( search: string ) {
    this.page = 0;
    this.search = search;    
    //console.log(search);
  }

}
