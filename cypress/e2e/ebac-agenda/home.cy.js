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
})

