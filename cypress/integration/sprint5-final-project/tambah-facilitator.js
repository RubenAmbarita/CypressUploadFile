describe("kumpulan test case add facilitator", function () {
  it("tc-uncheck-alamat-domisili", function () {
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var email = "";
    for (var ii = 0; ii < 15; ii++) {
      email += chars[Math.floor(Math.random() * chars.length)];
    }

    cy.wait(3000);
    cy.login();
    cy.contains("Tambah Facilitator").click();

    cy.get("#user_fullname", { force: true })
      .type("tes")
      .should("have.value", "tes");

    cy.get("#user_email", { force: true })
      .type(email)
      .should("have.value", email);

    cy.get("#user_is_active").select("Aktif").should("have.value", "1");

    cy.get("#user_password", { force: true })
      .type("123")
      .should("have.value", "123");

    cy.get("#user_province_id").select("ACEH").should("have.value", "11");

    cy.get("#user_city_id")
      .select("KAB. ACEH SELATAN")
      .should("have.value", "1101");

    cy.get("#user_subdistrict_id")
      .select("Bakongan")
      .should("have.value", "110101");

    cy.get("#user_address", { force: true })
      .type("test")
      .should("have.value", "test");

    cy.get("#user_area_province_id")
      .select("SUMATERA UTARA")
      .should("have.value", "12");

    cy.get("#user_area_city_id")
      .select("KAB. TAPANULI TENGAH")
      .should("have.value", "1201");

    cy.get("#user_area_subdistrict_id")
      .select("Barus")
      .should("have.value", "120101");

    cy.get('input[type="file"]').attachFile("Picture5.png");
    cy.contains("Simpan").click();

    cy.wait(3000);
    //btn-ok-popup
    cy.get("#generalModal > div > div > div.modal-footer > button").click({
      force: true,
    });
  }),
    it("tc-check-alamat-domisili", function () {
      var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
      var email2 = "";
      for (var ii = 0; ii < 15; ii++) {
        email2 += chars[Math.floor(Math.random() * chars.length)];
      }

      cy.wait(3000);
      cy.login();
      cy.contains("Tambah Facilitator").click();

      cy.get("#user_fullname", { force: true })
        .type("tes")
        .should("have.value", "tes");

      cy.get("#user_email", { force: true })
        .type(email2)
        .should("have.value", email2);

      cy.get("#user_is_active").select("Aktif").should("have.value", "1");

      cy.get("#user_password", { force: true })
        .type("123")
        .should("have.value", "123");

      cy.get("#user_province_id").select("ACEH").should("have.value", "11");

      cy.get("#user_city_id")
        .select("KAB. ACEH SELATAN")
        .should("have.value", "1101");

      cy.get("#user_subdistrict_id")
        .select("Bakongan")
        .should("have.value", "110101");

      cy.get("#user_address", { force: true })
        .type("test")
        .should("have.value", "test");

      // cy.get("#user_area_is_domicile", { force: true }).check();

      cy.get(".custom-control-input ").check({ force: true });
      cy.get('input[type="file"]').attachFile("Picture5.png");
      cy.contains("Simpan").click();

      cy.wait(3000);
      //btn-ok-popup
      cy.get("#generalModal > div > div > div.modal-footer > button").click({
        force: true,
      });
    });
});
