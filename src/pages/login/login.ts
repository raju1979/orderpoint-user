import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  inputType:string = 'password';
  inputToggleIcon = 'eye';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public navCtrl: NavController, public navParams: NavParams, private _platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  getImageFromAssets(img):string{
    let assetImg = '';

    if(this._platform.is('mobile')){
      assetImg = `assets/imgs/${img}`
    }else{
      assetImg = `../../assets/imgs/${img}`;
    }

    // console.log(assetImg)
    return assetImg;
  };//

  getLoadingImg() {
    if (this._platform.is('core')) {
      return "../assets/imgs/loading.svg";
    } else if (this._platform.is('android')) {
      return "assets/imgs/loading.svg";
    } else {
      return "assets/imgs/loading.svg";
    }
  };//

  toggleInputType() {
    if(this.inputType === 'text') {
      this.inputType = 'password';
      this.inputToggleIcon = 'eye';
    } else {
      this.inputType = 'text';
      this.inputToggleIcon = 'eye-off';
    }
  }

  onLoginSubmit(f) {
    if(f.valid) {
      console.log(f);
    }
  }

  forgotPassword() {
    window.open("https://google.com", "_system");
  }

}
