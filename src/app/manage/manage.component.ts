import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from '../_model/member';
import { MemberService } from '../_services/member.service';
import { CoreService } from '../core/core.service';
import { CreateMemberComponent } from '../create-member/create-member.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent implements OnInit{
  member: Member[] = [];

  displayedColumns: string[] = ['id', 'memberName', 'gender', 'dob','issueDate', 'expiryDate', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( private _dialog: MatDialog, private memberService: MemberService, private _coreService: CoreService){
  }

  ngOnInit(): void {
    this.getMembersList();
  }

  openCreateMember(){
    const dialogRef =this._dialog.open(CreateMemberComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getMembersList();
        }
      },
    });
  }

  getMembersList() {
    this.memberService.getAllMembers().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
  deleteMember(id: number) {
    this.memberService.deleteMember(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getMembersList();
      },
      error: console.log,
    });
  }

  editMember(data: Member) {
    const dialogRef = this._dialog.open(CreateMemberComponent, {
      data: { ...data },
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getMembersList();
        }
      },
    });
  }
}
