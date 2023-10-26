it("skips client-side bundle, confirming data from ISR cache", () => {
  // : reference: https://glebbahmutov.com/blog/ssr-e2e/
  cy.request("/shows")
    .its("body")
    .then((html) => {
      // remove the application code bundle
      const staticHtml = html.replace(/r<script.*?>.*?<\/script>/gm, "");
      cy.state("document").write(staticHtml);
    });
  // now we can use "normal" Cypress api to confirm
  // number of list element
  cy.findAllByText(/2022 apr 1[456]/i).should("have.length.of", 3);
});
