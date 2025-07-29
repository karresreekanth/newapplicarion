import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new User();
  Rolesdata: any[] = []
  usersavedata: any[] = [];
  serverresponse: any[] = [];

  constructor(private userservice: UserService, private http: HttpClient, act: ActivatedRoute) { }
  ngOnInit() {
    this.getRoles();
  }

  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  resisterdata: User = {
    userName: '',
    email: '',
    passwordHash: '',
    roleId: 0,
    createdAt: ''
  }
  Nullarray() {

    this.user.userName = "";
    this.user.email = "";
    this.user.roleId = 0;
    this.user.passwordHash = "";
    this.user.createdAt=""
  }

  getRoles() {
    this.userservice.getRoles().subscribe(result => {
      this.Rolesdata = result.entity;
      console.log(this.Rolesdata, "this.Rolesdata");

    })
  }


  UserRegistration()
  {
    this.resisterdata.userName=this.user.userName;
    this.resisterdata.email = this.user.email;
    this.resisterdata.passwordHash = this.user.passwordHash;
    this.resisterdata.roleId =this.user.roleId;
    this.resisterdata.createdAt =new Date().toISOString();

    console.log('Registering:', this.resisterdata);

    this.userservice.saveUser(this.resisterdata).subscribe({
      next: (res) => {
        this.serverresponse = res.entity;
        // Assuming res.message is returned from server
        if (this.serverresponse.length > 0) {
          
          alert(res.message);  // Displays "User registered successfully"
     
        } else {
          alert(res.message);
        }
      },

    });
    this.Nullarray();
   
  }

  filearray: File[] = [];
  filename: string = '';
  count: number = 0;

  uploadExcel(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.filearray = Array.from(input.files);  // capture all selected files
      this.count = this.filearray.length;

      const formData = new FormData();
      this.filearray.forEach((file, index) => {
        formData.append('files', file);
        console.log(`File ${index + 1}: ${file.name}`);
      });

      alert(`Total files selected: ${this.count}`);
      // Now you can send formData to backend
    }
  }

  

    
  


}

