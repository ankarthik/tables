import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(private barcodeScanner: BarcodeScanner) {
    
  }

  openBarCodeScanner() {
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log("scanned");
      // Success! Barcode data is here
    }, (err) => {
      // An error occurred
    });
  }
}
