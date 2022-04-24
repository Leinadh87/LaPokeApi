import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PokemonDetail } from '../models/pokemonDetail';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseURL = 'https://pokeapi.co/api/v2'; //environment.baseURL;
  private urlPokemon  = '/pokemon/'
  public pokemon: PokemonDetail = new PokemonDetail;
  pokemons: PokemonDetail[] = []; 
  divIsVisible: boolean = true;
  search: string = '';
  Titulo:string = 'poke World'
  
  constructor(private http : HttpClient) { }

  getPokemons(id:number):Observable<PokemonDetail>{
    return this.http.get<PokemonDetail>(this.baseURL + this.urlPokemon + id)
  }

  getAbilities(pokemon:PokemonDetail): string {
    return pokemon.abilities.map(x => x.ability.name).join(', ');
  }

  getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }

  capturePokemon(pokemon : PokemonDetail){
    this.pokemons.push(pokemon);
  }

}
