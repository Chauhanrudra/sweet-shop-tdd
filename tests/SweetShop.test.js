const SweetShop = require('../src/SweetShop');

describe('SweetShop - Add Sweets', () => {
  it('should add a sweet to the inventory', () => {
    const shop = new SweetShop();
    //sweet obj with relevent properties
    const sweet = {
      id: 1001,
      name: 'Kaju Katli',
      category: 'Nut-Based',
      price: 50,
      quantity: 20,
    };

    shop.addSweet(sweet);
    const inventory = shop.getAllSweets();

    expect(inventory.length).toBe(1);
    expect(inventory[0]).toEqual(sweet);
  });
});

describe('SweetShop - Delete Sweets', () => {
  it('should delete a sweet by ID', () => {
    const shop = new SweetShop();

    const sweet1 = {
      id: 1001,
      name: 'Kaju Katli',
      category: 'Nut-Based',
      price: 50,
      quantity: 20,
    };

    const sweet2 = {
      id: 1002,
      name: 'Gulab Jamun',
      category: 'Milk-Based',
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

describe('SweetShop - Validation', () => {
  it('should not allow adding a sweet with duplicate ID', () => {
    const shop = new SweetShop();

    const sweet1 = {
      id: 1001,
      name: 'Kaju Katli',
      category: 'Nut-Based',
      price: 50,
      quantity: 20,
    };
    //obj with same id to check validation
    const sweetDuplicate = {
      id: 1001,
      name: 'Duplicate Katli',
      category: 'Nut-Based',
      price: 60,
      quantity: 30,
    };

    shop.addSweet(sweet1);
    
    expect(() => {
      shop.addSweet(sweetDuplicate);
    }).toThrow('Sweet with ID 1001 already exists');
  });
});
