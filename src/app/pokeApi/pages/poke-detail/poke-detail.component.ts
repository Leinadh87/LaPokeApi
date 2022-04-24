import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PokemonDetail } from '../../models/pokemonDetail';
import { PokemonService } from '../../services/pokemons.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

  pokemon: PokemonDetail = new PokemonDetail;

  divIsVisible: boolean = false;

  constructor(public pokeService : PokemonService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.pokemon = this.pokeService.pokemon;
    this.divIsVisible =  this.pokeService.divIsVisible;
  }

  capturar(){    
    this.pokeService.capturePokemon(this.pokemon);
    this.toastr.success( this.pokemon.name + ' a sido capturado!', 'Poke Detail!');
    this.divIsVisible = false;
  } 
}
