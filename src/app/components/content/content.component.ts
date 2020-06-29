import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  editMode = false;

  formInfo: FormGroup;

  genderListSelect = '- Select -';
  genderList = ['Male', 'Female', 'Others', 'I do not wish to say']
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.formInfo = this.fb.group({
      name: ['Test Name', Validators.required],
      email: ['a1212sadas213@gmail.com',
              [Validators.required, checkEmail]],
      contact: ['0123456789',
              [Validators.required, checkContact]],
      gender: [this.genderList[0], checkGender],
      notes: ['Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', Validators.required]
    });

  }

  onSubmit(){
    this.editMode = !this.editMode;
  }

}


function checkEmail(form: FormControl){
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email = form.value;

  if(emailRegex.test(email)){
    return null;
  }else{
    return {email: true};
  }
}

function checkContact(form: FormControl){
  let contactRegex = /^\d{8,12}$/;
  let contact = form.value;
  if(contactRegex.test(contact)){
    return null
  }
  return {contact: true}

}

function checkGender(form: FormControl){
  if(form.value == ''){
    return { gender: true };
  }else{
    return null
  }
}
