import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  answers = [{
    type: 'yes',
    text: 'да'
  }, {
    type: 'no',
    text: 'нет'
  }];

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('Email', [Validators.required, Validators.email]),
        pass: new FormControl('', Validators.required),
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {
    console.log('Submited', this.form);
  }
}
