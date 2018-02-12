import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MemberDetailsComponent } from "./member-details.component";
import { MemberEditComponent } from "../member-edit/member-edit.component";

@NgModule({
  imports: [CommonModule],
  declarations: [MemberDetailsComponent, MemberEditComponent]
})
export class MemberDetailsModule {}
