describe("kumpulan test case", function () {
  it("tc-1", function () {
    cy.wait(3000);
    cy.visit("https://www.demoblaze.com/index.html");

    cy.get(
      ":nth-child(7) > .card > .card-block > .card-title > .hrefch"
    ).click();
    cy.contains("Add to cart").click();
    cy.get(".active > .nav-link").click();
    cy.wait(2000);
    cy.get("#next2").click();
    cy.contains("Dell i7 8gb").click();
    cy.contains("Add to cart").click();
    cy.get(".active > .nav-link").click();
    cy.wait(3000);
    cy.get("#next2").click();
    cy.contains("Apple monitor 24").click();
    cy.contains("Add to cart").click();
    cy.get("#cartur").click();
    cy.contains("Place Order").click();
    cy.wait(3000);
    cy.get("#name", { force: true }).type("coba").should("have.value", "coba");
    cy.get("#country", { force: true })
      .type("coba1")
      .should("have.value", "coba1");
    cy.get("#city", { force: true })
      .type("coba2")
      .should("have.value", "coba2");
    cy.get("#card", { force: true }).type("123").should("have.value", "123");
    cy.get("#month", { force: true })
      .type("12agustus")
      .should("have.value", "12agustus");
    cy.get("#year", { force: true }).type("2012").should("have.value", "2012");
    cy.contains("Purchase").click();
    cy.screenshot();
    cy.get(".confirm").click();
    cy.go("back");
    cy.get(".active > .nav-link").click();
  });
});
