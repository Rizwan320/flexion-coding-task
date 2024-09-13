describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="unit_value"]').clear();
    cy.get('[data-testid="unit_value"]').type("1");
    cy.get('[data-testid="student_value"]').clear();
    cy.get('[data-testid="student_value"]').type("274.15");
    cy.get("#given_unit").click();
    cy.contains("span", "Celsius").click();
    cy.get("#target_unit").click();
    cy.contains("span", "Kelvin").click();
    cy.get('[data-testid="evaluate"]').click();
    cy.get('[data-testid="conversion_result"]').should("have.text", "Correct");
  });
});
