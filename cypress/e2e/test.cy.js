describe("Test Cypress e2e", () => {
  it("Ajoute une catégorie 'new'", () => {
    cy.visit("https://127.0.0.1:8000/category/new");

    cy.get("#category_label").type("new");

    cy.get(".btn").click();

    cy.visit("https://127.0.0.1:8000/category");
    cy.get("td").eq(2).contains("new").should("be.visible");
  });

  it("Simulation erreur", () => {
    cy.visit("https://127.0.0.1:8000/category/new");

    cy.get(".btn").click();

    cy.visit("https://127.0.0.1:8000/category");
    cy.get("td").contains("erreur").should("not.exist");
  });
});
