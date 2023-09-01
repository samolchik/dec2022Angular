import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './components/app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {UsersPageComponent} from './pages/users-page/users-page.component';
import {UserDetailsPageComponent} from './pages/user-details-page/user-details-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [
            {
                path: '', redirectTo: 'users', pathMatch: 'full'
            },
            {
                path: 'users', component: UsersPageComponent, children: [
                    {
                        path: ':id', component: UserDetailsComponent
                    }
                ]
            },
            {
                path: 'posts', component: PostsPageComponent
            }
        ]
    }
]

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserComponent,
        UserDetailsComponent,
        MainLayoutComponent,
        HeaderComponent,
        UsersPageComponent,
        UserDetailsPageComponent,
        PostsPageComponent,
        PostsComponent,
        PostComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
