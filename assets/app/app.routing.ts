import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import {ThongthanComponent} from "./thongthan/thongthan.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/thongthan1', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
    { path: 'thongthan1', component: ThongthanComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);