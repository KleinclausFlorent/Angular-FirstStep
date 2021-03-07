import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirsComponentComponent } from './my-firs-component/my-firs-component.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule} from "@angular/forms";
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-component/post-list-item-component/post-list-item-component.component';
import {AppareilService} from "./service/appareil.service";
import {AuthService} from "./service/auth.service";
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from "@angular/router";
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuard} from "./service/auth-guard.service";
import {ReactiveFormsModule} from "@angular/forms";
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import {UserService} from "./service/user.service";
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'users', component: UserListComponent},
  { path: 'new-user', component: NewUserComponent},
  { path: 'blog', component: PostListComponentComponent},
  { path: '', component: AuthComponent},
  { path: 'not-found', component: FourOhFourComponent},
  // { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    MyFirsComponentComponent,
    AppareilComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
