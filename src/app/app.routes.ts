import { Routes } from '@angular/router';
import { LoginScreenComponent } from './login/login-screen/login-screen.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { FileManagerComponent } from './user/file-manager/file-manager.component';
import { LetterBoxComponent } from './user/letter-box/letter-box.component';
import { TasksComponent } from './user/tasks/tasks.component';
import { FaqComponent } from './user/faq/faq.component';
import { authentifyGuard } from './guard/authentify.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginScreenComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        title :'Dashboard',
        canActivate : [authentifyGuard]
    },
    {
        path:'fileManager',
        component:FileManagerComponent,
        title :'File Manager',
        canActivate : [authentifyGuard]
    },
    {
        path:'letterBox',
        component:LetterBoxComponent,
        title :'Letter Box',
        canActivate : [authentifyGuard]
    },
    {
        path:'tasks',
        component:TasksComponent,
        title :'Tasks',
        canActivate : [authentifyGuard]
    },
    {
        path:'faq',
        component:FaqComponent,
        title :'FAQ',
        canActivate : [authentifyGuard]
    }
];
