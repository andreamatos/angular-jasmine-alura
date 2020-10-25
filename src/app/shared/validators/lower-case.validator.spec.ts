import { isLowerCase } from "./lower-case.validator";

describe('A funcao isLowerCase', ()=>{
    it('deve confirmar quando recebe um texto em caixa baixa', ()=>{
        const valor = "mario";
        const resultado = isLowerCase(valor);
        expect(resultado).toBeTruthy();
         
    })

    it('deve validar quando o valor enviado nao for caixa baixa', ()=>{
        expect(isLowerCase('Mario')).toBeFalsy();
    })
})