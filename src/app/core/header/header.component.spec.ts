import { async, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AlertModule } from "src/app/shared/componets/alert/alert.module";
import { LoadingModule } from "src/app/shared/componets/loading/loading.module";
import { MenuModule } from "src/app/shared/componets/menu/menu.module";
import { User } from "../user/user";
import { UserService } from "../user/user.service";
import { HeaderComponent } from "./header.component";

describe("O componente Header", () => {
    let component: HeaderComponent;
    let userService: UserService;
    let router: Router;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            providers: [UserService],
            imports: [RouterTestingModule.withRoutes([]),
                MenuModule,
                AlertModule,
                LoadingModule]
        });
    }));

    beforeEach(() => {
        userService = TestBed.get(UserService);
        router = TestBed.get(Router);
        spyOn(userService, "getUser").and.returnValue(
            of({
                name: "Alvaro",
                email: "alvaro@alvaro.com",
                id: 1
            })
        );
        const fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve ser instanciado", () => {
        expect(component).toBeTruthy();
    });

    it("deve realizar o logout", () => {
        const spy = spyOn(userService, "logout").and.returnValue(null);
        const navigateSpy = spyOn(router, "navigate");
        component.logout();
        expect(spy).toHaveBeenCalled();
        expect(navigateSpy).toHaveBeenCalledWith([""]);
    });
});