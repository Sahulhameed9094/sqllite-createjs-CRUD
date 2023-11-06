import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private sqlite: SQLite, public platform: Platform) {}
  createDb() {
    this.platform.ready().then(() => {
      // alert('ready to create database');
      // this.sqlite
      //   .create({
      //     name: 'sample.db',
      //     location: 'default',
      //   })
      //   .then((db: SQLiteObject) => {
      //     alert('db created successfully');
      //     db.executeSql('create table danceMoves(name VARCHAR(32))', [])
      //       .then(() => console.log('Executed SQL'))
      //       .catch((e) => console.log(e));
      //   })
      //   .catch((e) => {
      //     alert(JSON.stringify(e));
      //     console.log(e);
      //   });
    });
  }
}
