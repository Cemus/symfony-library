describe("Exercice 2", () => {
  beforeEach(() => {
    cy.visit("https://127.0.0.1:8000/category");
  });

  it("Editer dans les règles de l'art une catégorie en ajoutant un label qui n'existe pas :", () => {
    cy.get("td").find("a").eq(1).contains("edit").click();

    let word = "";
    for (let index = 0; index < 25; index++) {
      const letter = String.fromCharCode(Math.floor(Math.random() * 24) + 97);
      word += letter;
    }

    cy.get("#category_label").clear();
    cy.get("#category_label").type(word);
    cy.get(".btn").contains("Update").click();
  });

  it("Remplir le formulaire avec un label déjà présent dans la BDD :", () => {
    cy.get("tbody")
      .find("tr")
      .eq(0)
      .find("td")
      .eq(1)
      .invoke("text")
      .then((word) => {
        cy.get("td").find("a").eq(3).contains("edit").click();

        cy.get("#category_label").clear();
        cy.get("#category_label").type(word);
        cy.get(".btn").contains("Update").click();

        cy.get("title").should("contain", "500 Internal Server Error");
      });
  });
});
