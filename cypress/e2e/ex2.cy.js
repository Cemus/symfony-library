describe("Exercice 2", () => {
  beforeEach(() => {
    cy.visit("https://127.0.0.1:8000/category");
  });

  it("Editer la première catégorie", () => {
    cy.get("a").contains("edit").click();

    let word = "";
    for (let index = 0; index < 25; index++) {
      const letter = String.fromCharCode(Math.floor(Math.random() * 24) + 97);
      word += letter;
    }

    cy.get("#category_label").type(word);
    cy.get(".btn").contains("Update").click();
  });

  it("Remplir le formulaire", () => {
    cy.visit("https://127.0.0.1:8000/category");

    cy.get("a").contains("edit").click();

    const word = "azdazdazd";

    cy.get("#category_label").clear();

    cy.get("#category_label").type(word);
    cy.get(".btn").contains("Update").click();

    cy.get("title").should("contain", "500 Internal Server Error");
  });
});
