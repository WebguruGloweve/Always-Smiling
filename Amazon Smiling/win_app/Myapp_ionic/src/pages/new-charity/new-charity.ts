import { Component } from '@angular/core';
import { IonicPage,Platform, ViewController, NavParams, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NewCharityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-charity',
  templateUrl: 'new-charity.html',
})
export class NewCharityPage {
  New_Charity_Name:String;
  New_Charitys:any;
  charity_about;
  EIN;
  City;
  State;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private storage: Storage,
    public http: Http) {
      this.http.get('http://localhost:3000/api/getBeneficiaryCharity').pipe(
        map(res => res.json())
      ).subscribe(response => {
        if (response.error) {
          console.log("error");
        }
        else {
          this.New_Charitys = response;
          // console.log("new charities", this.New_Charitys);
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCharityPage');
  }
  showCharity(){
    // console.log("new charity name:",this.New_Charity_Name);
    this.http.get('http://localhost:3000/api/getBeneficiaryCharity?Name=' + this.New_Charity_Name).pipe(
        map(res => res.json())
      ).subscribe(response => {
        if (response.error) {
          console.log("error");
        }
        else {
          // this.charity_about = response.charity.charityAbout;
          this.City = response.charity.City;
          this.State = response.charity.State;
          this.EIN = response.charity.EIN;
        }
      });
  }
  createNewCharity(){
    this.storage.set('EIN', this.EIN);
    this.storage.set('Chairty_Name', this.New_Charity_Name);
    this.storage.set('DataConfigured', "request");
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
