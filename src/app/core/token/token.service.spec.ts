import { TokenService } from "./token.service";

describe('O servico token Service', () => {
    let token;
    let service;
    
    beforeEach(()=>{
        token = 'testToken';
        service = new TokenService();
    });

    it('deve ser instanciado', () => {
        const service = new TokenService();
        expect(service).toBeTruthy();
    });

    it('deve guardar um token', () => {
        service.setToken(token);
        expect(service.hasToken()).toBeTruthy();
        expect(service.getToken()).toBe(token);
    });

    it('deve remover um token', () => {
        service.setToken(token);
        service.removeToken();
        expect(service.hasToken()).toBeFalsy();
        expect(service.getToken()).toBeFalsy();
    });

    afterEach(() => {
        localStorage.clear();
    });
})