import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {}; // To specify empty object
  @Output() cancelRegister = new EventEmitter();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('success');
    }, error => {
      console.log('failed');
    });
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.cancel();
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
