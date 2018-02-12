import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MemberEditResolver } from "./_resolvers/member-edit.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { ListsComponent } from "./lists/lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { MemberListComponent } from "./members/member-list/member-list.component";

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberDetailsComponent } from "./members/member-details/member-details.component";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";

export const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      {
        path: "members",
        component: MemberListComponent,
        resolve: { users: MemberListResolver }
      },
      {
        path: "members/:id",
        component: MemberDetailsComponent,
        resolve: { user: MemberDetailResolver }
      },
      {
        path: "member/edit",
        component: MemberEditComponent,
        resolve: { user: MemberEditResolver },
        canDeactivate: [PreventUnsavedChanges]
      },
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: ListsComponent }
    ]
  },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];
