import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public n1! :number;
  public n2! :number;
  public escolha! :number;


  

  constructor(private alertController: AlertController) {
  }
  
  cadastrar(): void {
    ///Esperando
     if(this.escolha == 0){
      if(!this.n2){
        this.presentAlert('RNão realizada', 'Está conta não pode ser realizada pois nem um numero e divisivel por 0')
      }else{this.presentAlert('Resultado da divisão é:', this.n1 / this.n2)}
    }else if(this.escolha == 1){
      this.presentAlert('Resultado da soma é:',( this.n1 + this.n2))
    }else if(this.escolha == 2){
      this.presentAlert('Resultado da multiplicar é:',(this.n1 * this.n2))
    }else if (this.escolha == 3){
      this.presentAlert('Resultado da subtração é:', (this.n1 - this.n2))
    }
  }
  async presentAlert(subHeader: string, message: any) {
    const alert = await this.alertController.create({
      header: 'Calculadora',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
