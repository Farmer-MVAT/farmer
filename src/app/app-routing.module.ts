import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginfarmerComponent } from './loginfarmer/loginfarmer.component';
import { LoginbidderComponent } from './loginbidder/loginbidder.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { RegisterfarmerComponent } from './registerfarmer/registerfarmer.component';
import { DashboardfarmerComponent } from './dashboardfarmer/dashboardfarmer.component';
import { PlacerequestComponent } from './placerequest/placerequest.component';
import { ViewmarketplaceComponent } from './viewmarketplace/viewmarketplace.component';
import { ViewsoldhistoryComponent } from './viewsoldhistory/viewsoldhistory.component';
import { InsurancedashboardComponent } from './insurancedashboard/insurancedashboard.component';
import { NewpolicyComponent } from './newpolicy/newpolicy.component';
import { ClaimpolicyComponent } from './claimpolicy/claimpolicy.component';
import { DashboardbidderComponent } from './dashboardbidder/dashboardbidder.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';


const routes: Routes = [
  {
    path:' ',component:HomeComponent
  },
  {
  path:'homelink',component:HomeComponent
  },
  {
    path:'loginfarmer',component:LoginfarmerComponent
  },
  {
    path:'loginbidder',component:LoginbidderComponent
  },
  {
    path:'loginadmin',component:LoginadminComponent
  },
  {
    path:'registerfarmer',component:RegisterfarmerComponent
  },
  {
    path:'dashboardfarmer',component:DashboardfarmerComponent
  },
  {
    path:'dashboardbidder',component:DashboardbidderComponent
  },
  {
    path:'dashboardadmin',component:DashboardadminComponent
  },
  {
    path:'placerequest',component:PlacerequestComponent
  },
  {
    path:'viewmarketplace',component:ViewmarketplaceComponent
  },
  {
    path:'viewsoldhistory',component:ViewsoldhistoryComponent
  },
  {
    path:'insurancedashboard',component:InsurancedashboardComponent
  },
  {
    path:'newpolicy',component:NewpolicyComponent
  },
  {
    path:'claimpolicy',component:ClaimpolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
