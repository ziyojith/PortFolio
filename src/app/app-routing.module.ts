import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StoreProjectsComponent } from './store-projects/store-projects.component';
import { EducationComponent } from './education/education.component';
import { GamingComponent } from './gaming/gaming.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'store_projects',component:StoreProjectsComponent},
  {path:'education',component:EducationComponent},
  {path:'gaming',component:GamingComponent  },
  {path:'Contact',component:ContactComponent}
];
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled' // Optional: restores scroll when navigating back
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
