import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../task'
import { TaskService } from '../task.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Form } from '@angular/forms';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponentDialog implements OnInit {

  edittask(form : NgForm) : void{
    this.task.QuoteType = form.value.QuoteType;
    this.task.DueDate = form.value.DueDate;
    this.task.TaskType = form.value.TaskType
    this.task.QuoteNum = form.value.QuoteNum;
    this.task.Customer = form.value.Customer;
    this.task.Contact = form.value.Contact;
    this.taskservice.editTask(this.task as Task).
    subscribe( Task => {
      Task;
    })
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.task);
  }

  constructor( private taskservice : TaskService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<EditTaskComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public task: Task
  ) { }

  

}
