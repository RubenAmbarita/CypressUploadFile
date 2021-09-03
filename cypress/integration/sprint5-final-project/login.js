describe("kumpulan test case login", function () {
  it("tc-1", function () {
    cy.wait(3000);
    cy.visitweb();
    cy.get("#input-email", { force: true }).type("#").should("have.value", "#");

    cy.get("#input-password", { force: true })
      .type("admin")
      .should("have.value", "admin");

    cy.contains("Login").click();
  }),
    it("tc-2", function () {
      cy.wait(3000);
      cy.visitweb();
      cy.get("#input-email", { force: true })
        .type("e@dojobox.id")
        .should("have.value", "e@dojobox.id");

      cy.get("#input-password", { force: true })
        .type("admin")
        .should("have.value", "admin");
      wait(3000);
      cy.contains("Login").click();
      //   cy.contains("Super Admin").click();
      //   cy.contains("Keluar").click();
      //   cy.get(".modal-footer > .btn-primary").click();
    });
});
