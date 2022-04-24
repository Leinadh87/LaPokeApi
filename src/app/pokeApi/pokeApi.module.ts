import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PokeWorldComponent } from './pages/poke-world/poke-world.component';
import { PokeDetailComponent } from './pages/poke-detail/poke-detail.component';
import { PokeCapturesComponent } from './pages/poke-captures/poke-captures.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { InputPokemonComponent } from './components/input-pokemon/input-pokemon.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
    declarations: [
        PokeWorldComponent,
        PokeDetailComponent,
        PokeCapturesComponent,
        FooterComponent,
        HeaderComponent,
        PokeTableComponent,
        InputPokemonComponent,
        ProgressBarComponent,
        FiltroPipe
    ],
    exports: [
        PokeWorldComponent,
        PokeDetailComponent,
        PokeCapturesComponent,
        FooterComponent,
        HeaderComponent,
        PokeTableComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule
    ]
  })
  export class PokeModule { }