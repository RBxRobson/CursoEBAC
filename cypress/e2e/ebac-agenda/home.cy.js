/// <reference types="cypress" />

describe('Testes para a agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Robson Barbosa')
        cy.get('input[type="email"]').type('exemplo@gmail.com')
        cy.get('input[type="tel"]').type('99 99999999')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk').should('include.text', 'Robson Barbosa')
    })

    it('Deve editar o primeiro contato da lista', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit')
            .click()
        cy.get('input[type="text"]').clear().type('Contato Editado')
        cy.get('input[type="email"]').clear().type('exemploeditado@gmail.com')
        cy.get('input[type="tel"]').clear().type('00 00000000')
        cy.get('.alterar').click()
        cy.get('.sc-iAEyYk').should('include.text', 'Contato Editado')
    })

    it('Deve deletar todos os contatos existentes', () => {
        cy.get('.delete').click({multiple: true})                          ^
        cy.get('.sc-iAEyYk').should('not.have.class', 'sc-beqWaB')
    })
})

