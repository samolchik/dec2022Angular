import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {UsersPageComponent} from "./modules/users/pages/users-page/users-page.component";
import {UserDetailsComponent} from "./modules/users/components/user-details/user-details.component";
import {CarsPageComponent} from "./modules/cars/pages/cars-page/cars-page.component";

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [
            {
                path: '', redirectTo: 'users', pathMatch: 'full'
            },
            {
                path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
            },
            {
                path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(m => m.CarsModule)
            }
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
