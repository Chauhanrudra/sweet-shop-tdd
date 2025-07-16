class SweetShop {
  constructor() {
    this.inventory = [];
  }

  addSweet(sweet) {
    this.inventory.push(sweet);
  }

  getAllSweets() {
    return this.inventory;
  }
}

module.exports = SweetShop;