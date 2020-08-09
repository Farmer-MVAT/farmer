import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardbidderComponent } from './dashboardbidder/dashboardbidder.component';
import { DashboardfarmerComponent } from './dashboardfarmer/dashboardfarmer.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LoginbidderComponent } from './loginbidder/loginbidder.component';
import { LoginfarmerComponent } from './loginfarmer/loginfarmer.component';
import { RegisterbidderComponent } from './registerbidder/registerbidder.component';
import { RegisterfarmerComponent } from './registerfarmer/registerfarmer.component';
import { PlacerequestComponent } from './placerequest/placerequest.component';
import { ViewmarketplaceComponent } from './viewmarketplace/viewmarketplace.component';
import { ViewsoldhistoryComponent } from './viewsoldhistory/viewsoldhistory.component';
import { InsurancedashboardComponent } from './insurancedashboard/insurancedashboard.component';
import { ClaimpolicyComponent } from './claimpolicy/claimpolicy.component';
import { NewpolicyComponent } from './newpolicy/newpolicy.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardbidderComponent,
    DashboardfarmerComponent,
    LoginadminComponent,
    LoginbidderComponent,
    LoginfarmerComponent,
    RegisterbidderComponent,
    RegisterfarmerComponent,
    PlacerequestComponent,
    ViewmarketplaceComponent,
    ViewsoldhistoryComponent,
    InsurancedashboardComponent,
    ClaimpolicyComponent,
    NewpolicyComponent,
    DashboardadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
