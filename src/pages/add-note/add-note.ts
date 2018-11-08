import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteserviceProvider } from '../../providers/noteservice/noteservice';
import { Note } from '../../models/note.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = "";
  content: string = "";



  constructor(public navCtrl: NavController,
    
    private noteService: NoteserviceProvider) {
      this.formGroup = new FormGroup({
        title: new FormControl(),
        content: new FormControl(),
        date: new FormControl(),
      })
  }

  saveNote(note: Note){
    this.noteService.saveNote(note);
    this.navCtrl.pop();
  }

}
