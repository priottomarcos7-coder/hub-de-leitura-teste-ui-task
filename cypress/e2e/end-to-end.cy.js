///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Teste End-to-End: Cadastro e Login no Hub de Leitura', () => {

    it('Deve realizar cadastro e login com sucesso', () => {
        const nome = faker.person.fullName()
        const email = faker.internet.email()
        const telefone = '11987654321'
        const senha = 'Teste@123'

        cy.cadastro(nome, email, telefone, senha)
        cy.get('#user-name').should('contain', nome)

        cy.login(email, senha)
        cy.get('#user-name').should('contain', nome)
    });

});
