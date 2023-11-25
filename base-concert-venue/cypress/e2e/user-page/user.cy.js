it("displays Shows page after clicking 'purchase more tickets' button", () => {
  cy.task("db:reset").signIn(
    Cypress.env("TEST_USER_EMAIL"),
    Cypress.env("TEST_PASSWORD")
  );

  cy.visit("/user");
  cy.findByRole("button", { name: /purchase more tickets/i }).click();
  cy.findByRole("heading", { name: /upcoming shows/i }).should("exist");
});
