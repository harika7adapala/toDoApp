/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("My First Test", function() {
  it("visits the Todo app check for heading", function() {
    cy.visit("http://localhost:3000/");
    cy.get("h1.main-heading").should("contain.text", "Tasker");
    cy.get("input.addingTodo").focus();
  });
  it("check for empty text and label", function() {
    cy.get("[data-cy=todo-lable]").should("contain.text", "Things To-Do");
    cy.get("input.addingTodo").should("not.have.value", " ");
    cy.contains("Add task").click();
  });
  it("entering ,adding and check the length ", function() {
    cy.get("input.addingTodo").type("baby shower");
    cy.contains("Add task").click();
    cy.get("[data-cy=todo-list]").should("have.length", 1);

    cy.get("input.addingTodo").type("baby dance");
    cy.contains("Add task").click();
    cy.get("input.addingTodo").type("baby cook");
    cy.contains("Add task").click();
    cy.get("input.addingTodo").type("baby eat");
    cy.contains("Add task").click();
    cy.get("[data-cy=todo-list]").should("have.length", 4);
  });

  it("deleting the task", function() {
    cy.get("[data-cy=todo-list]")
      .eq(2)
      .contains("delete")
      .click();
    cy.get("[data-cy=todo-list]").should("have.length", 3);
  });
  it("editing the task and displaying in textbox", function() {
    cy.get("[data-cy=todo-list]")
      .eq(1)
      .contains("mode_edit")
      .click();
    cy.get("input.addingTodo").should("have.value", "baby dance");
    cy.contains("submit");
    cy.get("[data-cy=todo-list]").should("have.length", 2);
    cy.contains("submit").click();
  });
  it("complete button and complete list", function() {
    cy.get("[data-cy=todo-list]")
      .eq(1)
      .contains("Completed")
      .click();
    cy.get("[data-cy=todo-list]").should("have.length", 2);
    cy.get("[data-cy=completed-list]").should("have.length", 1);
  });
  it("redoing the task", function() {
    cy.get("[data-cy=completed-list]")
      .eq(0)
      .contains("Redo Task")
      .click();
    cy.get("[data-cy=todo-list]").should("have.length", 3);
    cy.get("[data-cy=completed-list]").should("have.length", 0);
  });
  it("todo and completed reset buttons", function() {
    cy.get("[data-cy=todo-list]")
      .eq(1)
      .contains("Completed")
      .click();
    cy.contains("Reset To-Do").click();
    cy.get("[data-cy=todo-list]").should("have.length", 0);
    cy.contains("Reset Completed").click();
    cy.get("[data-cy=completed-list]").should("have.length", 0);
  });
});
