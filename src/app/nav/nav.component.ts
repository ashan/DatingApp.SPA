import { AlertifyService } from "./../_services/alertify.service";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      data => {
        this.alertifyService.success("logged in successfully");
      },
      error => {
        this.alertifyService.error(error);
      }
    );
  }

  logout() {
    // this.authService.userToken = null;
    localStorage.removeItem("token");
    this.alertifyService.message("logged out");
  }

  get loggedIn() {
    return this.authService.loggedIn();
  }

  get loggedInUser(): string {
    return this.authService.loggedInUser();
  }
}
