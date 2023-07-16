import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { DrinkDetailResolver } from './_core/resolvers/drink-detail.resolver';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: DetailComponent,
    resolve: {
      drink : DrinkDetailResolver
    },
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
