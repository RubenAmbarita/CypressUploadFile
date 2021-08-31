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

    cy.get("#dateOfBirthInput").click({ force: true });
    cy.get(".react-datepicker__navigation--next").click();
    cy.get(".react-datepicker__day--015").click({ force: true });
    cy.get("#dateOfBirthInput")
      .invoke("val")
      .then((text) => {
        expect("15 Sep 2021").to.equal(text);
      });

    cy.get(".subjects-auto-complete__value-container")
      .click()
      .focused()
      .type("Hindi" + "{downarrow}{enter}", { force: true });
    cy.contains("Hindi");

    cy.get('[value="1"]').check({ force: true }).should("have.value", "1");

    cy.get("#uploadPicture").attachFile("Picture5.png");
    cy.get("#currentAddress", { force: true })
      .type("Halo")
      .should("have.value", "Halo");

    cy.get("#stateCity-wrapper > :nth-child(2)").click();
    cy.get("#react-select-3-option-0").click();
    cy.get("#city").click();
    cy.get("#react-select-4-option-1").click();
    cy.get(".css-1uccc91-singleValue").should("have.text", "NCRGurgaon");
    cy.contains("Submit").click();
  });
});
