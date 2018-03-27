import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MemberDetailsComponent } from "./member-details.component";
import { MemberEditComponent } from "../member-edit/member-edit.component";
import { PhotoEditorComponent } from "../photo-editor/photo-editor.component";

@NgModule({
  imports: [CommonModule],
  declarations: [MemberDetailsComponent, MemberEditComponent,
    PhotoEditorComponent
]
})
export class MemberDetailsModule {}
