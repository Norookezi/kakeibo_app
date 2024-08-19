import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage  implements OnInit {

  recoveryForm: FormGroup = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    })
  });

  submit() {
    const url = "https://httpbin.org/post";
    const formdata = new FormData();
    formdata.append("email", this.recoveryForm.get('email')!.value)

    const requestOptions = {
      method: "POST",
      body: formdata
    };

    fetch(`${url}`, requestOptions).then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  }

  constructor() { }

  ngOnInit() {}

}
