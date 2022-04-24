import { Pipe, PipeTransform } from '@angular/core';
import { PokemonDetail } from '../models/pokemonDetail';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pokemones: PokemonDetail [],page: number = 0, search: string = ''): PokemonDetail [] {
    
    if ( search.length === 0 )
      return pokemones.slice(page, page + 50);
    
    const filteredPokemons = pokemones.filter( poke => poke.name.includes( search ) );
    return filteredPokemons.slice(page, page + 50);

  }

}
