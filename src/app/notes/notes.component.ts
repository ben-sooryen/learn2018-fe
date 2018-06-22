import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(private noteService: NotesService) { }

  ngOnInit() {

  }

  postNote() {
    this.noteService.postNote(this.form.getRawValue()['text']);
  }
}
