import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';
import { NewComponent } from './components/new/new.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ArticleService} from './shared/article.service';
import{FormsModule} from '@angular/forms';

const appRoutes:Routes = [
  {path:'',component:IndexComponent},
  {path:'edit',component:EditComponent},
  {path:'show',component:ShowComponent},
  {path:'new',component:NewComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EditComponent,
    ShowComponent,
    NewComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
