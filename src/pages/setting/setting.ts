import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController, AlertController, ToastController} from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { Http,Headers, RequestOptions } from '@angular/http';
import { ContentPage } from '../content/content';
import { DetailPage } from '../detail/detail';
import { SearchPage } from '../search/search';
import { MapPage } from '../map/map';

import 'rxjs/add/operator/map'; 


/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  posts: any;
  public items : any = [];
  public items2 : any = [];
  
  constructor(public navCtrl: NavController, 
              public http   : Http) 
  {

  }


  ionViewWillEnter()
  {
    this.initializeItems();

    this.http.get('http://localhost/DB/retrieve-dat.php').map(res => res.json()).subscribe(data => {
      this.posts = data;
     // console.log(this.posts);

  });

     this.load();
     {
      this.load2();
    
      
   }
     
  }
  

  

  // Retrieve the JSON encoded data from the remote server
  // Using Angular's Http class and an Observable - then
  // assign this to the items array for rendering to the HTML template
  load()
  {
     this.http.get('http://localhost/DB/retrieve-dat.php')
     .map(res => res.json())
     .subscribe(data => 
     {
        this.items = data;         
     });
  }
  load2()
  {
     this.http.get('http://localhost/DB/retrieve-data.php')
     .map(res => res.json())
     .subscribe(data => 
     {
        this.items2 = data;         
     });
  }
  
  initializeItems() {
    this.items =this.posts;
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.startt.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  getItemss(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.endd.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  getItemsss(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.dated.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  // Allow navigation to the AddTechnology page for creating a new entry
  addEntry()
  {
     this.navCtrl.push('ContentPage');
  }


  // Allow navigation to the AddTechnology page for amending an existing entry
  // (We supply the actual record to be amended, as this method's parameter, 
  // to the AddTechnology page
  viewEntry(param)
  {
     this.navCtrl.push('ContentPage', param);
  }

  detail(){
    
      this.navCtrl.push(DetailPage);
 
   }
   search(){
      this.navCtrl.push(MapPage);
 
 
   }
   
}


  
  
    
    

