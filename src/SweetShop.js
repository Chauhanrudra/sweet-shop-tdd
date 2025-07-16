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

  purchaseSweet(id, quantity) {
    const sweet = this.inventory.find((s) => s.id === id);
    if (!sweet) {
      throw new Error(`Sweet with ID ${id} not found`);
    }
    if (sweet.quantity < quantity) {
      throw new Error(`Insufficient stock for sweet ID ${id}`);
    }
    sweet.quantity -= quantity;
  }

  restockSweet(id, quantity) {
    const sweet = this.inventory.find((s) => s.id === id);
    if (!sweet) {
      throw new Error(`Sweet with ID ${id} not found`);
    }
    sweet.quantity += quantity;
  }

  searchSweets({ name, category, minPrice, maxPrice }) {
    return this.inventory.filter((sweet) => {
      const matchName = name ? sweet.name === name : true;
      const matchCategory = category ? sweet.category === category : true;
      const matchMin = minPrice !== undefined ? sweet.price >= minPrice : true;
      const matchMax = maxPrice !== undefined ? sweet.price <= maxPrice : true;
      return matchName && matchCategory && matchMin && matchMax;
    });
  }
}

module.exports = SweetShop;
