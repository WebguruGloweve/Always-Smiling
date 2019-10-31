import { Component } from '@angular/core';
import { Platform, ModalController, NavController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { ModalPage } from '../modal/modal';
import { NewCharityPage } from '../new-charity/new-charity';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  language:String;
  Tab1:String;
  Tab2:String;
  Tab3:String;
  Tab4:String;
  HeadingText1:String;
  HeadingText2:String;
  HeadingText3_1:String;
  HeadingText3_2:String;
  HeadingText3_3:String;
  HeadingText3_4:String;
  HeadingText3_5:String;
  HeadingText4_1:String;
  HeadingText4_2:String;
  HeadingText4_3:String;
  active_tab:String;
  HtmlText1:String;
  HtmlText2:String;
  HtmlText3_1:String;
  HtmlText3_2:String;
  HtmlText3_3:String;
  HtmlText3_4:String;
  HtmlText3_5:String;
  HtmlText4_1:String;
  HtmlText4_2:String;
  HtmlText4_3:String;
  Button1:String;
  Button2:String;
  Button3:String;
  Button4:String;
  Label1:String;
  Label2:String;
  Label3:String;
  Label4:String;
  Label5:String;
  Label6:String;
  Label7:String;
  
  browsers;
  browserForm;
  shouldHide:boolean;
  tab: string = "home";
  isAndroid: boolean = false;
  EIN;
  is_configured;
  Charitys: any;
  charity_about;
  UserNameFirst;
  UserNameLast;
  UserEmail;
  browser;
  Language: { title: string, subTitle: string };
  City;
  State;
  UUID;
  public EIN_0:String;
  public userNameFirst_0:String;
  public userNameLast_0:String;
  public userEmail_0:String;
  public entryType_0:String;
  public platform_0:String;
  public browser_0:String;
  public Charity_Name: any;
  selectedIndex: number;
  // appTexts:any;
  // step:number;

  AboutCharity: String;
  public ionicons: string = '<ion-icon name="help"></ion-icon>';
  constructor(platform: Platform, public http: Http, public modalCtrl: ModalController, public navCtrl: NavController, private storage: Storage, ) {
      this.Language = {
      title: 'Language',
      subTitle: 'Select language please'
    };
    this.shouldHide = true;
    this.isAndroid = platform.is('android');
    // this.selectedIndex = localStorage.getItem('index');
    this.http.get('http://localhost:3000/api/getEnabledCharity').pipe(
      map(res => res.json())
    ).subscribe(response => {
      if (response.error) {
        console.log("error");
      }
      else {
        this.Charitys = response;
        // console.log("configured charity",this.Charitys);
      }
    });

    this.http.get('http://localhost:3000/api/getAppText?language=English').pipe(
      map(res => res.json())
    ).subscribe(response => {
      if (response.error) {
        console.log("error");
      }
      else {
        this.Tab1= response.appText.Tab1;
        this.Tab2= response.appText.Tab2;
        this.Tab3= response.appText.Tab3;
        this.Tab4= response.appText.Tab4;
        this.HeadingText1= response.appText.HeadingText1;
        this.HeadingText2= response.appText.HeadingText2;
        this.HeadingText3_1= response.appText.HeadingText3_1;
        this.HeadingText3_2= response.appText.HeadingText3_2;
        this.HeadingText3_3= response.appText.HeadingText3_3;
        this.HeadingText3_4= response.appText.HeadingText3_4;
        this.HeadingText3_5= response.appText.HeadingText3_5;
        this.HeadingText4_1= response.appText.HeadingText4_1;
        this.HeadingText4_2= response.appText.HeadingText4_2;
        this.HeadingText4_3= response.appText.HeadingText4_3;
        this. active_tab= response.appText.active_tab;
        this.HtmlText1= response.appText.HtmlText1;
        this.HtmlText2= response.appText.HtmlText2;
        this.HtmlText3_1= response.appText.HtmlText3_1;
        this.HtmlText3_2= response.appText.HtmlText3_2;
        this.HtmlText3_3= response.appText.HtmlText3_3;
        this.HtmlText3_4= response.appText.HtmlText3_4;
        this.HtmlText3_5= response.appText.HtmlText3_5;
        this.HtmlText4_1= response.appText.HtmlText4_1;
        this.HtmlText4_2= response.appText.HtmlText4_2;
        this.HtmlText4_3= response.appText.HtmlText4_3;
        this.Button1= response.appText.Button1;
        this.Button2= response.appText.Button2;
        this.Button3= response.appText.Button3;
        this.Button4= response.appText.Button4;
        this.Label1= response.appText.Label1;
        this.Label2= response.appText.Label2;
        this.Label3= response.appText.Label3;
        this.Label4= response.appText.Label4;
        this.Label5= response.appText.Label5;
        this.Label6= response.appText.Label6;
        this.Label7= response.appText.Label7;
      }
    });
  }
  openModal(item) {
    this.navCtrl.push(ModalPage, {
      item: item
    });
  }

  selectLanguage(){
    this.http.get('http://localhost:3000/api/getAppText?language=' + this.language).pipe(
      map(res => res.json())
    ).subscribe(response => {
      if (response.error) {
        console.log("error");
      }
      else {
        // console.log(this.language);
        this.Tab1= response.appText.Tab1;
        this.Tab2= response.appText.Tab2;
        this.Tab3= response.appText.Tab3;
        this.Tab4= response.appText.Tab4;
        this.HeadingText1= response.appText.HeadingText1;
        this.HeadingText2= response.appText.HeadingText2;
        this.HeadingText3_1= response.appText.HeadingText3_1;
        this.HeadingText3_2= response.appText.HeadingText3_2;
        this.HeadingText3_3= response.appText.HeadingText3_3;
        this.HeadingText3_4= response.appText.HeadingText3_4;
        this.HeadingText3_5= response.appText.HeadingText3_5;
        this.HeadingText4_1= response.appText.HeadingText4_1;
        this.HeadingText4_2= response.appText.HeadingText4_2;
        this.HeadingText4_3= response.appText.HeadingText4_3;
        this. active_tab= response.appText.active_tab;
        this.HtmlText1= response.appText.HtmlText1;
        this.HtmlText2= response.appText.HtmlText2;
        this.HtmlText3_1= response.appText.HtmlText3_1;
        this.HtmlText3_2= response.appText.HtmlText3_2;
        this.HtmlText3_3= response.appText.HtmlText3_3;
        this.HtmlText3_4= response.appText.HtmlText3_4;
        this.HtmlText3_5= response.appText.HtmlText3_5;
        this.HtmlText4_1= response.appText.HtmlText4_1;
        this.HtmlText4_2= response.appText.HtmlText4_2;
        this.HtmlText4_3= response.appText.HtmlText4_3;
        this.Button1= response.appText.Button1;
        this.Button2= response.appText.Button2;
        this.Button3= response.appText.Button3;
        this.Label1= response.appText.Label1;
        this.Label2= response.appText.Label2;
        this.Label3= response.appText.Label3;
        this.Label4= response.appText.Label4;
        this.Label5= response.appText.Label5;
        this.Label6= response.appText.Label6;
        this.Label7= response.appText.Label7;
      }
    });
  }
  continue_1() {
    this.tab = "charity";
  }

  showCharity() {
    this.charity_about = "";
    this.shouldHide = true;
    this.http.get('http://localhost:3000/api/getEnabledCharity?charityName=' + this.Charity_Name).pipe(
      map(res => res.json())
    ).subscribe(response => {
      if (response.error) {
        console.log("error");
      }
      else {
        this.charity_about = response.charity.charityAbout;
        this.EIN = response.charity.EIN;
        this.storage.set('DataConfigured', "configured");
      }
    });
    this.http.get('http://localhost:3000/api/getBeneficiaryCharity?Name=' + this.Charity_Name).pipe(
      map(res => res.json())
    ).subscribe(response => {
      if (response.error) {
        console.log("error");
      }
      else {
        // this.charity_about = response.charity.charityAbout;
        this.shouldHide = false;
        this.City = response.charity.City;
        this.State = response.charity.State;
        this.EIN = response.charity.EIN;
        this.charity_about = "";
        this.storage.set('DataConfigured', "request");
      }
    });
    // console.log(this.Charity_Name);
  }

  continue_3() {
    this.storage.set('EIN', this.EIN);
    this.storage.set('Chairty_Name', this.Charity_Name);
    this.storage.get('DataConfigured').then((val) => {      
      this.EIN_0 = val;
    });
    this.tab = "configuration";
  }

  continue_4() {
    this.storage.set('userNameFirst', this.UserNameFirst);
    this.storage.set('userNameLast', this.UserNameLast);
    this.storage.set('userEmail', this.UserEmail);
    this.storage.set('browser', this.browser);
    this.storage.set('platform', "windows");
    this.tab = "about";
  }

  request_new_charity() {
    this.navCtrl.push(NewCharityPage, {
    });
  }
  Finish() {
    
    this.storage.get('EIN').then((val) => {
      this.EIN_0 = val;
    });
    this.storage.get('userNameFirst').then((val) => {
      this.userNameFirst_0 = val;
    });
    this.storage.get('userNameLast').then((val) => {
      this.userNameLast_0 = val;
    });
    this.storage.get('userEmail').then((val) => {
      this.userEmail_0 = val;
    });
    this.storage.get('DataConfigured').then((val) => {
      this.entryType_0 = val;
    });
    this.storage.get('platform').then((val) => {
      this.platform_0 = val;
    });
    this.storage.get('browser').then((val) => {
      this.browser_0 = val;
      this.http.get('http://localhost:3000/api/getUserRegistration?EIN=' + this.EIN_0 +"&userNameFirst=" + this.userNameFirst_0 + "&userNameLast=" + this.userNameLast_0
       + "&userEmail=" + this.userEmail_0  +"&entryType=" + this.entryType_0 + "&platform=" + this.platform_0 + "&browser=" + this.browser_0).pipe(
        map(res => res.json())
      ).subscribe(response => {
        if (response.error) {
          console.log("error");
        }
        else {
          // console.log("response =================>", response);
          this.UUID = response.UUID;
          console.log("success", response);
          Cookie.set('UUID', this.UUID);
          Cookie.set('EIN', response.EIN);
          Cookie.set('Config', response.entryType);
          // Cookie.set('MyUrl', "localhost");
          // let myCookie = Cookie.get('Config');
          console.log("browser cookie--------------->", document.cookie);
        }
      });
    });
  }
}