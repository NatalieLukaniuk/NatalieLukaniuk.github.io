import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaPageComponent } from './components/pizza-page/pizza-page.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'main',
},
{
  path: 'main',
  component: MainComponent
},
{
  path: 'playground-pizza',
  component: PizzaPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
