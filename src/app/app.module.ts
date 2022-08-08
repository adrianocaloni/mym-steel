import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MymNavbarComponent } from './mym-navbar/mym-navbar.component';
import { MymHomeComponent } from './components/mym-home/mym-home.component';
import { MymQuienessomosComponent } from './components/mym-quienessomos/mym-quienessomos.component';
import { MymContactoComponent } from './components/mym-contacto/mym-contacto.component';
import { MymTrabajosComponent } from './components/mym-trabajos/mym-trabajos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MymFooterComponent } from './components/mym-footer/mym-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MymNavbarComponent,
    MymHomeComponent,
    MymQuienessomosComponent,
    MymContactoComponent,
    MymTrabajosComponent,
    MymFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
