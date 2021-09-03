describe("kumpulan test case lihat facilitator", function () {
  it("tc-klik-btn-kembali", function () {
    cy.wait(3000);
    cy.login();

    cy.get(".btn-group > .btn > .fas").first().click({ force: true });
    cy.contains("Lihat").click({ force: true });
    cy.contains("Kembali").click({ force: true });
  }),
    it("tc-klik-btn-ubah-data", function () {
      cy.get(".btn-group > .btn > .fas").first().click({ force: true });
      cy.contains("Lihat").click({ force: true });

      cy.contains("Ubah Data").click({ force: true });

      var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
      var email = "";
      for (var ii = 0; ii < 15; ii++) {
        email += chars[Math.floor(Math.random() * chars.length)];
      }

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
    });
});
