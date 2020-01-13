import {MAT_DIALOG_DATA} from '@angular/material';
import { Component, Inject } from '@angular/core';

@Component({
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {message: string}
  ) {}
}
