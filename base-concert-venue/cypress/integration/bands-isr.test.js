it("displays bands when skipping client-side javascript, confirming initial ISR", () => {
  // : reference: https://glebbahmutov.com/blog/ssr-e2e/
  cy.request("/bands")
    .its("body")
    .then((html) => {
      // remove the application code bundle
      const staticHtml = html.replace(/r<script.*?>.*?<\/script>/gm, "");
      cy.state("document").write(staticHtml);
    });
  // now we can use "normal" Cypress api to confirm
  // number of list element
  cy.findByRole("heading", {
    name: /the wandering bunnies/i,
  }).should("exist");
  cy.findByRole("heading", {
    name: /Shamrock Pete/i,
  }).should("exist");
  cy.findByRole("heading", {
    name: /The Joyous Nun Riot/i,
  }).should("exist");
});
