import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import pt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app-root/app.component';
import { IngredientsModule } from './ingredients/ingredients.module';
import { OrderModule } from './order/order.module';
import { RecipesModule } from './recipes/recipes.module';
import { TotalModule } from './total/total.module';
import { UtilsModule } from './utils/utils.module';

registerLocaleData(pt, 'pt-BR');

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    IngredientsModule,
    OrderModule,
    RecipesModule,
    TotalModule,
    UtilsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
