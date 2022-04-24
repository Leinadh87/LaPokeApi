import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokeWorldComponent } from './pokeApi/pages/poke-world/poke-world.component';
import { PokeDetailComponent } from './pokeApi/pages/poke-detail/poke-detail.component';
import { PokeCapturesComponent } from './pokeApi/pages/poke-captures/poke-captures.component';


const routes: Routes = [
  {path: 'home', component: PokeWorldComponent},
  //{path: 'pokeDetail/:id', component: PokeDetailComponent},
  {path: 'pokeDetail', component: PokeDetailComponent},
  {path: 'pokeCaptures', component: PokeCapturesComponent},
  {path: '',pathMatch: 'full',redirectTo: 'home'},
  {path: '**',pathMatch: 'full',redirectTo: 'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
