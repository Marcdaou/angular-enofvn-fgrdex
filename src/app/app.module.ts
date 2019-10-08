import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FetchFromCsvComponent } from './fetch-from-csv/fetch-from-csv.component';
import { FormFirstComponent } from './form-first/form-first.component';
import { FormSecondComponent } from './form-second/form-second.component';
import { FormThirdComponent } from './form-third/form-third.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'samsung', component: ProductListComponent },
      { path: '', component: HomePageComponent },
      { path: 'csv', component: FetchFromCsvComponent },
      { path: 'form1', component: FormFirstComponent },

    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    HomePageComponent,
    FetchFromCsvComponent,
    FormFirstComponent,
    FormSecondComponent,
    FormThirdComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/