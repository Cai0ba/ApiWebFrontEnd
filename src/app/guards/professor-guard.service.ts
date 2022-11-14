import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,
         CanActivate, RouterStateSnapshot } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class CursoGuard implements CanActivate {
    constructor(private rota: Router,
                private auth: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {

        console.log('canActivate');

        if (this.auth.isAutenticado()) {
            return true;
        } else {
            this.rota.navigate(['/home']);

            return false;
        }

    }
}
