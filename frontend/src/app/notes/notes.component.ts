import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Note } from '../models/note.interface';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent implements OnInit {
  array: Note[] = new Array<Note>();
  noteFormGroup: FormGroup = new FormGroup({
    id: new FormControl<number>(+''),
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255)
    ]),
    body: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(255),
    ])
  });
  get title() {
    return this.noteFormGroup.get('title');
  }
  get body() {
    return this.noteFormGroup.get('body');
  }
  addOrPut = false;
  constructor(private noteService: NoteService) { }
  ngOnInit(): void {
    this.getNote();
  }
  getNote() {
    this.noteService.getAll()
    .subscribe((data: Note[]) =>{
      this.array = data;
    })
  }
  deleteNote(id: number){
    this.noteService.delete(id).subscribe(
      () => {this.array = this.array.filter( (aNote) => aNote.id != id)
      })
  }
  postNote(){
    //if(!confirm(`api.component.ts:58 -> Did you run the DJANGO-SERVER ? if yes please comment this line`)) alert(`You should run the django server  (read README file) ^^`);
    this.noteService.post(this.noteFormGroup.value)
    /*
      this.noteFormGroup.value is equivalent to:
      {
        title,
        body
      }
    */
    .subscribe(
      (eachNote: any)=>{
          this.array = [eachNote, ...this.array];
          this.clearInputs();
    })
  }
  // make inputs empty
  clearInputs(){
    this.noteFormGroup.reset({
      title: '',
      body: ''
    });
  }
  // edit noteService
  editNote(eachNote: Note){
    this.noteFormGroup.get('id')?.setValue(eachNote.id);
    this.noteFormGroup.get('title')?.setValue(eachNote.title);
    this.noteFormGroup.get('body')?.setValue(eachNote.body);
    this.addOrPut=true;
  }
  // update noteService
  putNote(){
    this.noteService.update(this.noteFormGroup.value)
   
    .subscribe( () => {
      this.clearInputs();
      this.getNote();
      this.addOrPut = false;
    })
  }
}
