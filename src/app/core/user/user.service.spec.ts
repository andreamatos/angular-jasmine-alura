import { TestBed } from "@angular/core/testing";
import { TokenService } from "../token/token.service";
import { UserService } from "./user.service"

describe('O servico UserService', ()=>{
    let service:UserService;
    
    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[UserService]
        });
        service = TestBed.get(UserService)
    });

    it('deve ser instanciado', ()=> {
        expect(service).toBeTruthy();
    });

    it('deve, atraves de um token, recuperar as informacoes do usuario', ()=>{
        const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwMzY2MDc1MywiZXhwIjoxNjAzNzQ3MTUzfQ.hZ8UXKpbA3RJzC4nJB9Gn1UXi0VT2JXxu1KAnOwwOPo"
        service.setToken(token);
        expect(service.isLogged()).toBeTruthy();
        expect(service.getUserName()).toBe("flavio");
        service.getUser().subscribe(user => {
            expect(user.name).toBe('flavio')
        });
    });

    it('deve limpar as informacoes no logout', ()=>{
        const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwMzY2MDc1MywiZXhwIjoxNjAzNzQ3MTUzfQ.hZ8UXKpbA3RJzC4nJB9Gn1UXi0VT2JXxu1KAnOwwOPo"        
        service.setToken(token);
        service.logout();
        expect(service.isLogged()).toBeFalsy();
        expect(service.getUserName()).toBeFalsy();
    })
});