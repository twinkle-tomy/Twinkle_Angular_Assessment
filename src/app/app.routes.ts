import { Routes } from '@angular/router';
import { LoginScreenComponent } from './login/login-screen/login-screen.component';
import { authentifyGuard } from './guard/authentify.guard';
import { OtrComponent } from './home/otr/otr.component';
import { NpdComponent } from './home/npd/npd.component';
import { ITOComponent } from './home/ito/ito.component';
import { DigitalComponent } from './home/digital/digital.component';
import { BrushComponent } from './home/brush/brush.component';

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
        path:'otr',
        component:OtrComponent,
        title :'OTR',
        canActivate : [authentifyGuard]
    },
    {
        path:'npd',
        component:NpdComponent,
        title :'NPD',
        canActivate : [authentifyGuard]
    },
    {
        path:'ito',
        component:ITOComponent,
        title :'ITO',
        canActivate : [authentifyGuard]
    },
    {
        path:'digital',
        component:DigitalComponent,
        title :'DIGITAL',
        canActivate : [authentifyGuard]
    },
    {
        path:'brush',
        component:BrushComponent,
        title :'BRUSH',
        canActivate : [authentifyGuard]
    }
];
