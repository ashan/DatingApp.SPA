import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Observable } from "rxjs/Observable";
import { tokenNotExpired, JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthService {
  private static LOCAL_STORAGE_TOKEN = "token";
  baseUrl = "http://localhost:5000/api/auth/";
  decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http) {}

  login(model: any) {
    return this.http
      .post(this.baseUrl + "login", model, this.requestOptions)
      .map((response: Response) => {
        const user = response.json();
        if (user && user.tokenString) {
          localStorage.setItem(
            AuthService.LOCAL_STORAGE_TOKEN,
            user.tokenString
          );
          this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
          // this.userToken = user.tokenString;
        }
      })
      .catch(this.handleError);
  }

  register(model: any) {
    return this.http
      .post(this.baseUrl + "register", model, this.requestOptions)
      .catch(this.handleError);
  }

  loggedIn() {
    return tokenNotExpired("token");
  }

  loggedInUser(): string {
    const token = localStorage.getItem(AuthService.LOCAL_STORAGE_TOKEN);
    if (token) {
      this.decodedToken = this.jwtHelper.decodeToken(token);
      return this.decodedToken.unique_name;
    }
    return "";
  }

  private get requestOptions() {
    const headers = new Headers({ "Content-type": "application/json" });
    return new RequestOptions({ headers: headers });
  }

  private handleError(error: any) {
    if (error.status === 401) {
      return Observable.throw("Unauthorzied user");
    }

    const applicationError = error.headers.get("Application-Error");
    if (applicationError) {
      return Observable.throw(applicationError);
    }
    const serverError = error.json();
    let modelStateErrors = "";
    if (serverError) {
      for (const key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + "\n";
        }
      }
    }
    console.log("Model state errors", modelStateErrors);
    return Observable.throw(modelStateErrors || "Server error");
  }
}
