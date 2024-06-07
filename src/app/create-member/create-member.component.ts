import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Member } from '../_model/member';
import { MemberService } from '../_services/member.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { FileHandle } from '../_model/file-handle';
import { format } from 'path';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrl: './create-member.component.css'
})
export class CreateMemberComponent {

  @ViewChild('memberForm', { static: true }) memberForm!: NgForm;
 

  ngOnInit(): void {  
    if (this.data) {
      // Make sure to spread the data object to avoid mutating it directly
      this.member = { ...this.data };
      // Parse the date strings into Date objects
      this.member.dob = new Date(this.member.dob);
      this.member.issueDate = new Date(this.member.issueDate);
      this.member.expiryDate = new Date(this.member.expiryDate);
    }
}

member: Member = {
   id: 0,
  memberName: '',
  gender: "",
  dob: new Date(),
  issueDate: new Date(),
  expiryDate: new Date(),
  image: []
};

constructor(
  private _fb: FormBuilder,
  private memberService: MemberService,
  private _dialogRef: MatDialogRef<CreateMemberComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private _coreService: CoreService,
  private sanitizer: DomSanitizer,
 
){
 
}

onFormSubmit(memberForm: NgForm) {

  const memberFormData = this.prepareFormData(this.member);

  const { memberName, dob, gender, issueDate, expiryDate } = this.member;

  if (!memberName || !dob || !gender || !issueDate || !expiryDate ) {
    alert('Please fill out all fields in the form.');
    return;
  }

  if (memberForm.invalid) {
    alert('Invalid form. Please check your inputs.');
    return;
  }

  this.memberService.addnewMember(memberFormData).subscribe(
    () => {
      memberForm.reset();
      
      // this.product.image = null; 
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
  );


}

resetMember(): void {
  this.member = {
    id: 0,
    memberName: '',
    gender: '',
    dob: new Date(),
    issueDate: new Date(),
    expiryDate: new Date(),
    image: []
  };

  // Reset form fields using NgForm API
  this.memberForm.resetForm();
}

// prepareFormData(member: Member): FormData
// {
//   const formData = new FormData();

//   formData.append(
//     'member',
//     new Blob([JSON.stringify(this.member)], {type: 'application/JSON'})
//   );

//   for(var i = 0; i<this.member.image.length; i++){
//     formData.append(
//       'imageFile',
//       this.member.image[i].file,
//       this.member.image[i].file.name
//     );
//   }

//   return formData;
// }

prepareFormData(member: Member): FormData {
  const formData = new FormData();

  formData.append(
      'member',
      new Blob([JSON.stringify(member)], { type: 'application/json' })
  );

  for (let i = 0; i < member.image.length; i++) {
      formData.append(
          'memberFile',
          member.image[i].file,
          member.image[i].file.name
      );
  }

  return formData;
}



  onFileSelected(event: any) {
if(event.target.files){
  const file = event.target.files[0];

  const fileHandle: FileHandle = {
    file: file,
    url: this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(file)
    )
  }
  console.log(fileHandle);

this.member.image.push(fileHandle);

console.log(this.member.image);

}
}

  removeImage(i: number){
   this.member.image.splice(i, 1)
}

}
