import { Component, OnInit } from '@angular/core';

import "@codetrix-studio/capacitor-google-auth";

import { Plugins } from '@capacitor/core';
const { SplashScreen, GoogleAuth } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';
  username: string;

  ngOnInit() {
    SplashScreen.hide();
  }

  async signIn() {
    let googleUser = await GoogleAuth.signIn();
    this.username = googleUser.name;
    console.log(googleUser);
  }

  async refreshToken() {
    let response = await GoogleAuth.refresh();
    console.log(response);
  }

  async signOut() {
    await GoogleAuth.signOut();
    this.username = "";
  }
}
