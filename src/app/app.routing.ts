import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path: '', redirectTo: '/', pathMatch: 'full',
    data: { 
      title: 'Angular Test',
      metaDescription: '',
      metaKeyword: ''
    }
  },
  {path: '', component: HomeComponent,
    data: { 
        title: 'Angular Test',
        metaDescription: '',
        metaKeyword: ''
    }
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
