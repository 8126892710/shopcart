import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { AboutComponent } from './about/about.component';

const routes:Routes = [
     {
       path:'',redirectTo: '/home', pathMatch: 'full'
     },
     {
       path:'home',
       component:HomeComponent
     },
     {
      path:'list',
      component:ListComponent
    },
    {
      path:'about',
      component:AboutComponent
    }

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}


