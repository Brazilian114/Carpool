import { Component, ViewChild ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage  {




  @ViewChild('map')mapElement;
  map:any;

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,) {
    
  }

  
    }



