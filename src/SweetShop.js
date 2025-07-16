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
  deleteSweet(id) {
    this.inventory = this.inventory.filter((sweet) => sweet.id !== id);
  }
}

module.exports = SweetShop;
