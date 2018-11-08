import { Note } from './../../models/note.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteserviceProvider } from '../../providers/noteservice/noteservice';
import { ViewNotePage } from '../view-note/view-note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private notes: Promise<Note[]>;
  private note: Note;


  constructor(public navCtrl: NavController, private noteServiceProvider: NoteserviceProvider) {

  }
 
  ionViewWillEnter() {
    this.notes = this.getAllNotes();
  }

  addNote(){
   this.navCtrl.push(AddNotePage);
  }

  getNote(createDate: number){
    this.noteServiceProvider.getNote(createDate).then((n) => {
      this.note=n;
      this.navCtrl.push(ViewNotePage, { note: this.note})
    })

  }

  getAllNotes() {
      return this.noteServiceProvider.getAllNotes();
    }
}
