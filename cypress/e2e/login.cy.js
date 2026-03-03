    ///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Login no Hub de Leitura', () => {

    it('Deve fazer login com sucesso', () => {
       cy.get('#email').type('usuario@teste.com')
       cy.get('#password').type('user123')
       cy.get('#login-btn').click()
       cy.url().should('include', 'dashboard')
    });

   });