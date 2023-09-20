import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!: UntypedFormGroup;
  submitted: boolean = false;

  @Output() submitForm = new EventEmitter<any>();
  @Input() title!: string;
  @Input() isRegistationForm!: boolean;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      displayName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
        
        ],
      ],
    });
  }

  takeData() {
    this.submitForm.emit(this.form.value);
    this.form.reset();
  }
}
