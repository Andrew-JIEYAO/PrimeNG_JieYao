import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-first-test-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule, CalendarModule, ChipModule],
  templateUrl: './first-test-demo.component.html',
  styleUrls: ['./first-test-demo.component.css']
})
export class FirstTestDemoComponent {
  public player?: string;

  public testDemoForm = new FormGroup({
    name: new FormControl()
    , birthDay: new FormControl()
  });

  public setValue() {
    this.testDemoForm.setValue({
      name: this.testDemoForm.get('name')?.value,
      birthDay: this.testDemoForm.get('birthDay')?.value
    });

    this.player = `Name: ${this.testDemoForm.get('name')?.value}
    Birthday: ${this.testDemoForm.get('birthDay')?.value}`;
  }
}
