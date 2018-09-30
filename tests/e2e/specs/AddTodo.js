describe("TODOを追加する処理", () => {
  it("指定したテキストが追加できる", () => {
    cy.visit("/");
    const text = "test text";
    cy.get(".add").type(`${text}{enter}`); // input.addへtextの内容を入力してエンターを押す
    cy.get("span.item").contains(text); // 入力した内容でspan.itemが表示されている
  });
  it("追加したときに入力欄が空になる", () => {
    cy.visit("/");
    const text = "test text";
    cy.get(".add").type(`${text}{enter}`); // input.addへtextの内容を入力してエンターを押す
    cy.get(".add").should("be.empty"); // input.addのテキストが空になる
  });
});
