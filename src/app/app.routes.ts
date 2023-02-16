import { Routes } from "@angular/router";

export const AppRotas: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('../app/pages/login/login.module').then(x => x.LoginModule)
    }
]