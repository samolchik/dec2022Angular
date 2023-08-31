import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../interfaces";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    @Input()
    user: IUser

    @Output()
    listUser = new EventEmitter<IUser>()

    detDetails(): void {
        this.listUser.emit(this.user)
    }
}
