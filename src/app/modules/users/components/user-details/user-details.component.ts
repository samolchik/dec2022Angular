import {Component, Input} from '@angular/core';
import {IUser} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../services";

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
    @Input()
    user: IUser

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({userData}) => this.user =userData)
    }
}
