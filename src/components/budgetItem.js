class bugetItem {
  constructor(id, title, amount, date, type) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.date = date;
    this.type = type;
  }
}

class bugetItemExpense extends bugetItem {
  constructor(id, title, amount, date, type, fixedCost) {
    super (id, title, amount, date, type);
    this.fixedCost = fixedCost;
  }
}

export {budgetItem, bugetItemExpense};
