import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MymContactoComponent } from './components/mym-contacto/mym-contacto.component';
import { MymHomeComponent } from './components/mym-home/mym-home.component';
import { MymQuienessomosComponent } from './components/mym-quienessomos/mym-quienessomos.component';
import { MymTrabajosComponent } from './components/mym-trabajos/mym-trabajos.component';

const routes: Routes = [
    {path:'',component: MymHomeComponent},
    {path:'somos',component: MymQuienessomosComponent},
    {path:'contacto',component: MymContactoComponent},
    {path:'trabajos',component: MymTrabajosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
