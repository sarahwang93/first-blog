import { InjectionToken, Inject, Injectable } from '@angular/core';
import { AccessStatus, User } from '../model/user.model';
import { Role } from '../model/user.model';

export class Greeter implements User{
    name: string;
    isAdmin: boolean =  false;
    roles: Role[] = [];
    accessLevel: AccessStatus = 'AccessAllowed';
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}!`;
    }
}

export const GREETER: any = new InjectionToken<string>('greeter', {
    providedIn: 'root',
    factory: () => GREETER
  });
  