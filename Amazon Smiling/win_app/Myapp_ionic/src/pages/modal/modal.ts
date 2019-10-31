import { Component } from '@angular/core';
import { IonicPage,Platform, ViewController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  character;
  charity_name;
  charity_about;
  // Charity_Name:any;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public http: Http
  ) {
    // console.log("charityname:", Charity_Name);
    this.charity_name = navParams.get('item');
    this.http.get('http://localhost:3000/api/getEnabledCharity?charityName='+this.charity_name).pipe(
      map(res => res.json())
    ).subscribe(response => {
      if (response.error) {
        console.log("error");
      }
      else {
        this.charity_about = response.charity.charityAbout;
      }
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
