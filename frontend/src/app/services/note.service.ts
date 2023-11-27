// src/app/note.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private apiUrl = `${environment.api}notes/`;

  constructor(private http: HttpClient) {}

  // GET all
  getAll(): Observable<any[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }
  // DELETE one
  delete(id: number){
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
  // CREATE one
  post(note: Note){
      return this.http.post<Note>(this.apiUrl, note);
  }
  // UPDATE one
  update(note: Note){
    return this.http.put(`${this.apiUrl}${note.id}/`, note);
  }
  // search by id
  search(id: number){
      return this.http.get<Note>(`${this.apiUrl}${id}/`); //${id}
  }
  
}
