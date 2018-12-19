import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../task'
import { TaskService } from '../task.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'add-task-dialog',
  templateUrl: 'add-task-dialog.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponentDialog implements OnInit {

  addtask(task : Task) : void{
    this.taskservice.addTask(task as Task).
    subscribe( Task => {
      Task;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  constructor( private taskservice : TaskService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddTaskComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public task: Task
    ) { }
}

