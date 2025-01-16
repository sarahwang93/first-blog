import { Injectable, OnInit, inject, Output } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { GoogleAuth } from 'google-auth-library';
import { EventEmitter } from 'events';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  document: Document = new Document(); 

  private oAuthService = inject(OAuthService);

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() { 

  }

  ngOnInit(): void {    
  }

  initConfig(){
    // the redirect url does not work under china 
    const authURL = "https://accounts.google.com/o/oauth2/auth";
    const rootURl = "https://oauth2.googleapis.com/token";
    const clientId = "149780658224-7ps45qa55b959qf7dhkf844np519guhk.apps.googleusercontent.com";
    const clientSecret = "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";
    const redirectUrl = "http://localhost:4200/details";
    
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: "149780658224-7ps45qa55b959qf7dhkf844np519guhk.apps.googleusercontent.com",
      redirectUri: 'https://localhost:4200/details',
      scope: 'profile email openid',
      responseType: 'code',
    }
    this.oAuthService.configure(authConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndLogin();
  }
 

  loginAuthThird(){
    const token = this.oAuthService.initImplicitFlow();
    console.log(token)
  }

  logout(){
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
  }

  getProfile(){
    return this.oAuthService.getIdentityClaims();
  }

  getToken(){
    const accessToken = this.oAuthService.getAccessToken();
    localStorage.setItem('access_token', accessToken);
    console.log("accessToken: " + JSON.stringify(accessToken))
    return accessToken
  }

  isLoggedIn(){
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}

  
