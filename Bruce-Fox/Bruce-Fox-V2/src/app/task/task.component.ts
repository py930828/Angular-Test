import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../task'
import { TaskService } from '../task.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , Sort, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AddTaskComponentDialog } from '../add-task/add-task.component'
import  { EditTaskComponentDialog } from '../edit-task/edit-task.component'
//  import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  mystr : string;
  tasklist : Task[];
  sortedData: Task[];
  task : Task = new Task;
  dataSource :  MatTableDataSource<Task>;
  displayedColumns: string[] = ['QuoteType', 'Quote#', 'Contact', 'Task', 'DueDate', 'TaskType', '???'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  getTaskList() : void{
    this.taskservice.getTasklist().
    subscribe(Tasklist => {
      this.tasklist=Tasklist;
      this.dataSource = new MatTableDataSource(this.tasklist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskComponentDialog, {
      width: '550px',
      data: {task: this.task}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getTaskList();
    });
  }

  openEditTaskDialog(task : Task) : void {
    // task successfully passed into this func
    const dialogRef = this.dialog.open(EditTaskComponentDialog, {
      width: '550px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getTaskList();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortData(sort: Sort) {
    const data = this.tasklist.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'QuoteType': return compare(a.QuoteType, b.QuoteType, isAsc);
        case 'QuoteNum': return compare(a.QuoteNum, b.QuoteNum, isAsc);
        case 'Contact': return compare(a.Contact, b.Contact, isAsc);
        case 'QuoteType': return compare(a.QuoteType, b.QuoteType, isAsc);
        case 'DueDate': return compare(a.DueDate, b.DueDate, isAsc);
        case 'TaskType': return compare(a.TaskType, b.TaskType, isAsc);
        default: return 0;
      }
    });
  }

  ngOnInit() {
    this.getTaskList();
  }

  constructor( private taskservice: TaskService,
               public dialog: MatDialog,
    ) { 
      this.mystr = "test";
    }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
