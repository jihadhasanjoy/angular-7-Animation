import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondExComponent } from './second-ex/second-ex.component';

const routes: Routes = [
  { path: '', redirectTo: 'examples-2', pathMatch: 'full' },
  { path: 'examples', component: ExamplesComponent },
  { path: 'examples-2', component: SecondExComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, BrowserAnimationsModule]
})
export class AppRoutingModule { }
