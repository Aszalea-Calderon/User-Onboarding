describe("User-Onboarding", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Are we running?", () => {
    expect(1 + 1).to.equal(2);
  });

  const inputName = () => cy.get('input[name="name"]');
  const inputEmail = () => cy.get('input[name="email"]');
  const inputPassword = () => cy.get('input[name="password"]');
  const checkTerms = () => cy.get('[type="checkbox"]'); //Can also be selected by the name
  const submit = () => cy.get("button");

  it("Checking if it is there", () => {
    inputName().should("exist");
    inputEmail().should("exist");
    inputPassword().should("exist");
    checkTerms().should("exist");
    submit().should("exist");
  });

  it("Can type inside the elements", () => {
    inputName()
      .should("have.value", "")
      .type("Aszalea")
      .should("have.value", "Aszalea");

    inputEmail()
      .should("have.value", "")
      .type("Aszalea@123.com")
      .should("have.value", "Aszalea@123.com");

    inputPassword()
      .should("have.value", "")
      .type("Aszalea@123.com")
      .should("have.value", "Aszalea@123.com");

    checkTerms().check();
  });
  it("Can submit with all the data", () => {
    inputName().type("Aszalea");
    inputEmail().type("Aszalea@123.com");
    inputPassword().type("Aszalea@123.com");
    checkTerms().check();
    submit().click();
  });

  it("can submit and delete", () => {
    cy.contains(/have fun/).should("not.exist");
    inputName().type("have fun");
    inputEmail().type("aszalea@yahoo.com");
    inputPassword().type("12342342");
    checkTerms().check();
    submit().click();
  });
});

//Check if the warnings appear
