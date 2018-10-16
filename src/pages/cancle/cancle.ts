import { Component } from '@angular/core';
import {  IonicPage, NavController, NavParams , LoadingController, AlertController, ToastController  } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';
import { Http,Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map'; 


/**
 * Generated class for the CanclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancle',
  templateUrl: 'cancle.html',
})
export class CanclePage {

  public userDetails : any;
    userPostData = {"user_id":"","token":"",
    "license":"","province":"","tel": "","booking_id": "","lastCreated":""};
    public dataSet : any;
    public resposeData : any;
    public lastCreated : any;
    public noRecords: boolean;

  
  
    
    // Flag to be used for checking whether we are adding/editing an entry
    public isEdited               : boolean = false;
    // Flag to hide the form upon successful completion of remote operation
    public hideForm               : boolean = false;
    // Property to help ste the page title
    public pageTitle              : string;
    // Property to store the recordID for when an existing entry is being edited
    public recordID               : any      = null;
    private baseURI               : string  = "http://localhost/DB123/";
     
    public items : any = [];
      constructor( //public angularfire :AngularFireDatabase,
                   public alertCtrl   :AlertController,
                   public http        :Http,
                   public loadingCtrl :LoadingController,
                   public navCtrl     :NavController, 
                   public NP          :NavParams,
                   public loginCtrl   :LoginProvider,
                   public fb          :FormBuilder,
                   public toastCtrl   :ToastController
                   //public common      :CommonProvider,
                   )
                    {
                     
                          const data = JSON.parse(localStorage.getItem('userData'));
                          this.userDetails = data.userData;
                          this.userPostData.user_id = this.userDetails.user_id;
                          this.userPostData.token = this.userDetails.token;
                          this.userPostData.lastCreated="";
                          this.getFeed();
                          this.noRecords = false

                        
      }
    
      ionViewWillEnter()
      {
        
      }
      
    


      getFeed() {
        
        this.loginCtrl.postData(this.userPostData, "feed").then(
        result => {
           this.resposeData = result;
           if (this.resposeData.feedData) {
              
              this.dataSet = this.resposeData.feedData;
              // Data set length
              
            } else {
             console.log("No data");
           }
      },
      err => {
         //Connection failed message
      }
      );
      }

            

           /* feedUpdate() {
              if (this.userPostData.startt,this.userPostData.endd,this.userPostData.brand) {
                //this.common.presentLoading();
                this.loginCtrl.postData(this.userPostData, "feedUpdate")
                  .then((result) => {
                    this.resposeData = result;
                    if (this.resposeData.feedData) {
                     // this.common.closeLoading();
                      this.dataSet.unshift(this.resposeData.feedData);
                      this.userPostData.startt = "";
                      this.userPostData.endd = "";
                    } else {
                      console.log("No access");
                    }
          
                  }, (err) => {
                    //Connection failed message
                  });
              }
          
            }*/
            
          
feedDelete(booking_id, msgIndex) {
  if (booking_id > 0) {
    let alert = this.alertCtrl.create({
        title: 'Delete Feed',
        message: 'Do you want to buy this feed?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }, {
            text: 'Delete',
            handler: () => {
              this.userPostData.booking_id = booking_id;
              this.loginCtrl.postData(this.userPostData, "feedDelete")
                .then((result) => {
                  this.resposeData = result;
                  if (this.resposeData.success) {
                    this.dataSet.splice(msgIndex, 1);
                  } else {
                    console.log("No access");
                  }
                }, (err) => {
                  //Connection failed message
                });
            }
          }
        ]
      });
    alert.present();
  }
}
            

      load()
      {
         this.http.get('http://localhost/DB123/retrieve-data3.php')
         .map(res => res.json())
         .subscribe(data => 
         {
            this.items = data;         
         });
      }
    
      // Assign the navigation retrieved data to properties
      // used as models on the page's HTML form
     
    
    
    
      // Manage notifying the user of the outcome
      // of remote operations
     

}
