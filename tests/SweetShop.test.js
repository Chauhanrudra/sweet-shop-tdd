const SweetShop = require("../src/SweetShop");

describe("SweetShop - Add Sweets", () => {
  it("should add a sweet to the inventory", () => {
    const shop = new SweetShop();
    //sweet obj with relevent properties
    const sweet = {
      id: 1001,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    };

    shop.addSweet(sweet);
    const inventory = shop.getAllSweets();

    expect(inventory.length).toBe(1);
    expect(inventory[0]).toEqual(sweet);
  });
});

describe("SweetShop - Delete Sweets", () => {
  it("should delete a sweet by ID", () => {
    const shop = new SweetShop();

    const sweet1 = {
      id: 1001,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    };

    const sweet2 = {
      id: 1002,
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 10,
      quantity: 50,
    };

    shop.addSweet(sweet1);
    shop.addSweet(sweet2);

    shop.deleteSweet(1001);
    const inventory = shop.getAllSweets();

    expect(inventory.length).toBe(1);
    expect(inventory[0]).toEqual(sweet2);
  });
});

describe("SweetShop - Validation", () => {
  it("should not allow adding a sweet with duplicate ID", () => {
    const shop = new SweetShop();

    const sweet1 = {
      id: 1001,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    };
    //obj with same id to check validation
    const sweetDuplicate = {
      id: 1001,
      name: "Duplicate Katli",
      category: "Nut-Based",
      price: 60,
      quantity: 30,
    };

    shop.addSweet(sweet1);

    expect(() => {
      shop.addSweet(sweetDuplicate);
    }).toThrow("Sweet with ID 1001 already exists");
  });
});

describe("SweetShop - Purchase Sweets", () => {
  it("should reduce quantity when a sweet is purchased", () => {
    const shop = new SweetShop();

    const sweet = {
      id: 1001,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    };

    shop.addSweet(sweet);
    shop.purchaseSweet(1001, 5); // purchase 5 units

    const updated = shop.getAllSweets().find((s) => s.id === 1001);
    expect(updated.quantity).toBe(15);
  });

  it("should throw error if trying to purchase more than available stock", () => {
    const shop = new SweetShop();

    const sweet = {
      id: 1002,
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 10,
      quantity: 10,
    };

    shop.addSweet(sweet);

    expect(() => {
      shop.purchaseSweet(1002, 20);
    }).toThrow("Insufficient stock for sweet ID 1002");
  });
});

describe("SweetShop - Restock Sweets", () => {
  it("should increase quantity when a sweet is restocked", () => {
    const shop = new SweetShop();
    const sweet = {
      id: 1003,
      name: "Rasgulla",
      category: "Milk-Based",
      price: 15,
      quantity: 10,
    };

    shop.addSweet(sweet);
    shop.restockSweet(1003, 25); // restock 25 units

    const updated = shop.getAllSweets().find((s) => s.id === 1003);
    expect(updated.quantity).toBe(35);
  });

  it("should throw error if sweet with given ID does not exist", () => {
    const shop = new SweetShop();

    expect(() => {
      shop.restockSweet(9999, 10);
    }).toThrow("Sweet with ID 9999 not found");
  });
});
