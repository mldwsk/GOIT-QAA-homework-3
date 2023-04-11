class HomePage {
    getMenuButton () {
        return cy.get('#open-navigation-menu-mobile');
    }
    getSignOutButton () {
        return cy.contains('button', 'Log out');
    }
}
export default HomePage;