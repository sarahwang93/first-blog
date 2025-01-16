export type AccessStatus = "AccessGranted" | "AccessDenied" | "AccessPending" | "AccessAllowed" ;
export type Role = "MANAGER" | "ADMINMANAGER" | "READER" | "POSTER" ;


export interface User 
{
    name: string;
    isAdmin: boolean;
    roles: Role[];
    accessLevel: AccessStatus;
}

export const admin: User = {
    name: 'admin',
    isAdmin: true,
    roles: ['MANAGER', 'ADMINMANAGER'],
    accessLevel: 'AccessGranted'
}

export const manager: User = {
    name: 'manager',
    isAdmin: false,
    roles: ['MANAGER'],
    accessLevel: 'AccessDenied'
}

export const publish: User = {
    name: 'publish',
    isAdmin: false,
    roles: ['POSTER'],
    accessLevel: 'AccessGranted'
}

export const reader: User = {
    name: 'reader',
    isAdmin: false,
    roles: ['READER'],
    accessLevel: 'AccessPending'
}

