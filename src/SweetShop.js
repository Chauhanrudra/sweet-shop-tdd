class SweetShop {
  constructor() {
    this.inventory = [];
  }

  addSweet(sweet) {
    const exists = this.inventory.some((item) => item.id === sweet.id);
    if (exists) {
      throw new Error(`Sweet with ID ${sweet.id} already exists`);
    }
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
