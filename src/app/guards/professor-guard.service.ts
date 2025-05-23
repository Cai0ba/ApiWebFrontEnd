import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,
         CanActivate, RouterStateSnapshot } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class ProfessorGuard implements CanActivate {
    constructor(private rota: Router,
                private auth: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
        if (this.auth.isAutenticado()) {
            return true;
        } else {
            this.rota.navigate(['/home']);

            return false;
        }

    }
}
