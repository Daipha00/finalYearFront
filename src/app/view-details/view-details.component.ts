import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MemberService } from '../_services/member.service';
import { CoreService } from '../core/core.service';
import { CreateMemberComponent } from '../create-member/create-member.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent {


  constructor(
    private _fb: FormBuilder,
    private memberService: MemberService,
    private _dialogRef: MatDialogRef<CreateMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
    private sanitizer: DomSanitizer,
   
  ){
   
  }
}
