import { NoteserviceProvider } from './../../providers/noteservice/noteservice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../models/note.model';


@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  note:Note;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private NoteserviceProvider: NoteserviceProvider) {
      this.note = this.navParams.get('note');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewNotePage');
  }

  deleteNote(createDate: number) {
    this.NoteserviceProvider.deleteNote(createDate);
    this.navCtrl.pop();

  }
}
