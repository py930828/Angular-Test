import { Injectable } from '@angular/core';
import { Task } from './task'
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  
  private taskUrl = 'http://localhost:63115/api/Default';

  getTasklist(): Observable<Task[]>{
    return this.http.get<Task[]>(this.taskUrl);
  }

  addTask( task : Task ): Observable<Task> {
    console.log(task);
    console.log("the one above is in server");
    return this.http.post<Task>(this.taskUrl, task);
  }

  editTask( task : Task ): Observable<Task> {
    return this.http.put<Task>(this.taskUrl, task);
  }

  constructor( private http: HttpClient) { }
}
