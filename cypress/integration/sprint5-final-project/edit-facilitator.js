describe("kumpulan test case edit facilitator", function () {
  it("tc-uncheck-alamat", function () {
    cy.wait(3000);
    cy.login();

    var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var email = "";
    for (var ii = 0; ii < 15; ii++) {
      email += chars[Math.floor(Math.random() * chars.length)];
    }

    cy.get(".btn-group > .btn > .fas").first().click({ force: true });
    cy.get('[href="facilitator/edit/1"]').click({ force: true });

    cy.get("#user_fullname").clear();
    cy.get("#user_fullname").type("test").should("have.value", "test");

    cy.get("#user_email").clear();
    cy.get("#user_email").type(email).should("have.value", email);
    cy.get("#user_is_active").select("Aktif").should("have.value", "1");

    cy.get("#user_area_province_id")
      .select("SUMATERA UTARA")
      .should("have.value", "12");

    cy.get("#user_area_city_id")
      .select("KAB. TAPANULI TENGAH")
      .should("have.value", "1201");

    cy.get("#user_area_subdistrict_id")
      .select("Barus")
      .should("have.value", "120101");

    cy.contains("Simpan").click({ force: true });
    cy.wait(3000);

    //btn-ok-popup
    cy.get("#generalModal > div > div > div.modal-footer > button").click({
      force: true,
    });
  }),
    it("tc-check-alamat", function () {
      cy.wait(3000);
      cy.login();

      var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
      var email = "";
      for (var ii = 0; ii < 15; ii++) {
        email += chars[Math.floor(Math.random() * chars.length)];
      }

      cy.get(".btn-group > .btn > .fas").first().click({ force: true });
      cy.get('[href="facilitator/edit/1"]').click({ force: true });

      cy.get("#user_fullname").clear();
      cy.get("#user_fullname").type("test").should("have.value", "test");

      cy.get("#user_email").clear();
      cy.get("#user_email").type(email).should("have.value", email);
      cy.get("#user_is_active").select("Aktif").should("have.value", "1");
      cy.get(".custom-control-input ").check({ force: true });
      cy.contains("Simpan").click({ force: true });
      cy.wait(3000);

      //btn-ok-popup
      cy.get("#generalModal > div > div > div.modal-footer > button").click({
        force: true,
      });
    });
});
