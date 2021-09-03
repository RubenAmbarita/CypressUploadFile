describe("kumpulan test case aktif-nonaktif", function () {
  it("tc-klik-btn-nonakfif", function () {
    cy.wait(3000);
    cy.login();

    cy.get(".btn-group > .btn > .fas").first().click({ force: true });
    cy.get(
      ":nth-child(1) > .dt-center > .btn-group > .dropdown-menu > span.dropdown-item"
    ).click({ force: true });

    cy.wait(3000);
    cy.get("#generalModal > div > div > div.modal-footer > button").click({
      force: true,
    });
  });
});
