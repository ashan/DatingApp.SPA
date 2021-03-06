import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { MemberEditResolver } from "./_resolvers/member-edit.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { UserService } from "./_services/user.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { BsDropdownModule } from "ngx-bootstrap";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { AlertifyService } from "./_services/alertify.service";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { ListsComponent } from "./lists/lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberCardComponent } from "./members/member-card/member-card.component";
import { AuthModule } from "./auth/auth.module";
import { MemberDetailsComponent } from "./members/member-details/member-details.component";
import { TabsModule } from "ngx-bootstrap/tabs/tabs.module";
import { NgxGalleryModule } from "ngx-gallery";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";
import { PreventUnsavedChanges } from "./_guards/prevent-unsaved-changes.guard";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberCardComponent,
    ListsComponent,
    MessagesComponent,
    MemberDetailsComponent,
    MemberEditComponent,
    PhotoEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AuthModule,
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    AuthService,
    AlertifyService,
    UserService,
    AuthGuard,
    MemberListResolver,
    MemberDetailResolver,
    MemberEditResolver,
    PreventUnsavedChanges
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
