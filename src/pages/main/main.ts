import { Component } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { IonicPage, NavController, NavParams,App ,AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { QueuePage } from '../queue/queue';
import { HistoryPage } from '../history/history';
import { ProfilePage } from '../profile/profile';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {CanclePage} from '../cancle/cancle'
import {TranslateService} from '@ngx-translate/core';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  public userDetails : any;
  posts: any;
  public items : any = [];

  constructor(private translate: TranslateService,public alertCtrl:AlertController ,public navCtrl: NavController, public navParams: NavParams,public app : App,public http   : Http) {
                          const data = JSON.parse(localStorage.getItem('userData'));
                          this.userDetails = data.userData; 
                          
                          
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
 
 
  switchEN() {
    this.translate.use('en');
  }

  switchTH() {
    this.translate.use('th');
  }
  

  // Retrieve the JSON encoded data from the remote server
  // Using Angular's Http class and an Observable - then
  // assign this to the items array for rendering to the HTML template
 
  
  
  
  

  // Allow navigation to the AddTechnology page for creating a new entry



  // Allow navigation to the AddTechnology page for amending an existing entry
  // (We supply the actual record to be amended, as this method's parameter, 
  // to the AddTechnology page
  viewEntry(param)
  {
     this.navCtrl.push('ProfilePage', param);
  }
  queuePage(){
    this.navCtrl.push(QueuePage);
            
           
 }
  historyPage(){
  this.navCtrl.push(HistoryPage);
}

canclePage(){
  this.navCtrl.push(CanclePage);
          
         
}


profilePage(param)
  {
     this.navCtrl.push('ProfilePage', param);
  }
  home() {
    let confirm = this.alertCtrl.create({
      title: 'ออกจากระบบ',
      message: 'คุณต้องการออกจากระบบหรือไม่?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
          this.navCtrl.setRoot(HomePage);
          let nav = this.app.getRootNav();
          nav.setRoot(HomePage);

          }
        }
      ]
    });
    confirm.present();
  }
}
