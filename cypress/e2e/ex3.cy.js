describe("Editeur", () => {
  it("Liste vide", () => {
    cy.visit("https://127.0.0.1:8000/editor");

    cy.get("td").contains("no records found").should("be.visible");
  });

  it("Ajoute un éditeur invalide", () => {
    cy.visit("https://127.0.0.1:8000/editor/new");

    cy.get("#editor_name").clear();

    cy.get(".btn").click();

    cy.get("li")
      .contains("This value should not be blank.")
      .should("be.visible");
  });

  it("Liste toujours vide", () => {
    cy.visit("https://127.0.0.1:8000/editor");

    cy.get("td").contains("no records found").should("be.visible");
  });

  it("Ajoute un premier éditeur invalide", () => {
    cy.visit("https://127.0.0.1:8000/editor/new");

    cy.get("#editor_name").type("Paul");

    cy.get(".btn").click();

    cy.get("td").contains("Paul").should("exist");
  });

  it("Ajoute un deuxième éditeur valide", () => {
    cy.visit("https://127.0.0.1:8000/editor/new");

    cy.get("#editor_name").clear();
    cy.get("#editor_name").type("Jean");

    cy.get(".btn").click();

    cy.get("tr>td").eq(1).contains("Jean").should("exist");
  });

  it("Ajout d'un deuxième editeur du même nom", () => {
    cy.visit("https://127.0.0.1:8000/editor/new");

    cy.get("#editor_name").type("Jean");

    cy.get(".btn").click();

    cy.get("title").should("contain", "500 Internal Server Error");
  });

  it("Liste constitué de deux éditeurs ou plus", () => {
    cy.visit("https://127.0.0.1:8000/editor");

    cy.get("tbody").should("have.length", 2);
  });
});
