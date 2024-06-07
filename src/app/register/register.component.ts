import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { response } from 'express';
import { error } from 'console';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  hide = true;
  emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  constructor(private userService: UserService, private router: Router){

  }

  ngOnInit(): void {
  }

  register(registerForm: NgForm) {
    console.log(registerForm.value);
    this.userService.register(registerForm.value).subscribe(
      (response) => {
        Swal.fire("Sccessfully!");
        this.router.navigate(["/"]);
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
    }
}
