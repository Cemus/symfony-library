describe("Test Cypress e2e", () => {
  it("Ajoute une catégorie 'new'", () => {
    cy.visit("https://127.0.0.1:8000/category/new");

    cy.get("#category_label").type("new");

    cy.get(".btn").click();

    cy.visit("https://127.0.0.1:8000/category");
    cy.get("td").contains("new").should("be.visible");
  });

  it("Simulation d'erreur : ne change pas de page", () => {
    cy.visit("https://127.0.0.1:8000/category/new");

    cy.get(".btn").click();

    cy.location().should((location) => {
      expect(location.href).to.eq("https://127.0.0.1:8000/category/new");
    });
  });

  it("Deuxième simulation erreur : label unique", () => {
    cy.visit("https://127.0.0.1:8000/category/new");

    cy.get("#category_label").type("new");

    cy.get(".btn").click();

    cy.get("title").should("contain", "500 Internal Server Error");
  });
});
