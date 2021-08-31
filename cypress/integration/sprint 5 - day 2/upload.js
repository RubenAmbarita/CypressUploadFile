describe("kumpulan test case", function () {
  it("tc-1", function () {
    cy.wait(3000);
    cy.visit("https://demoqa.com/automation-practice-form");

    // Isi nama dan email, lalu klik button “email me!”.
    cy.get("#firstName", { force: true })
      .type("haloi")
      .should("have.value", "haloi");

    cy.get("#lastName", { force: true })
      .type("halii")
      .should("have.value", "halii");

    cy.get("#userEmail", { force: true })
      .type("test@gmail.com")
      .should("have.value", "test@gmail.com");

    cy.get('[value="Male"]')
      .check({ force: true })
      .should("have.value", "Male");

    cy.get("#userNumber", { force: true })
      .type("6212345678")
      .should("have.value", "6212345678");

    cy.get(".subjects-auto-complete__value-container", { force: true }).type(
      "tes"
    );

    cy.get('[value="1"]').check({ force: true }).should("have.value", "1");

    cy.get("#uploadPicture").attachFile("Picture5.png");
    cy.get("#currentAddress", { force: true }).type("Haloooooo");
    cy.contains("Submit").click();
  });
  //     describe("upload-file", function () {
  //       it("upload file", function () {
  //         cy.visit("https://admin.pkh.dojobox.id/");
  //         cy.get("#input-email").type("e@dojobox.id");
  //         cy.get("#input-password").type("admin");
  //         cy.get("#btn-login").click();
  //         cy.get(".d-flex > .btn").click();
  //         cy.get('input[type="file"]').attachFile("Picture5.png");
  //       });
  //     });
  // ;
});
