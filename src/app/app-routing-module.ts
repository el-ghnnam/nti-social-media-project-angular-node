import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostService } from './services/post';
import { Login } from './login/login';
import { Posts } from './posts/posts';
import { NotFound } from './not-found/not-found';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: Posts, canActivate: [AuthGuard] },
  { path: 'login', component: Login },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
