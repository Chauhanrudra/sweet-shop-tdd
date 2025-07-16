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
