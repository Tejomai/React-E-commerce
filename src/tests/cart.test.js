import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { mount } from 'enzyme';
import Basket from "../components/Basket";
import Products from "../components/Products";

describe('Cart', () => {

  it('Remove items from cart', () => {
    const mockItems = [{
      "id": 1,
      "uniq" : 111,
      "title": "Boys T-shirt",
      "description": "Green color T-Shirt for all kinds of ages",
      "price": 300,
      "availableSize": ["S","M", "L", "XL"],
      "isFreeShip": false  
  },
  {
      "id": 2,
      "uniq" : 222,
      "title": "Jeans",
      "description": "Mens jeans, available colors - blue, black, white",
      "price": 1500,
      "availableSize": ["S","XS", "XL"],
      "isFreeShip": true  
  }];
  const mockhandle = ()=>{
    const mockItems = 1;
    return mockItems;
  };
    const wrapper = mount(<Basket cartItems={mockItems} handleRemoveFromCart={mockhandle}/>);
    const btn = wrapper.find("#remove-item")
    btn.at(0).simulate("click")
    const countState = mockhandle();
    expect(countState).toEqual(1);
  });
  
  it("add products to cart", () => {
    const mockItems = [{
      "id": 1,
      "uniq" : 111,
      "title": "Boys T-shirt",
      "description": "Green color T-Shirt for all kinds of ages",
      "price": 300,
      "availableSize": ["S","M", "L", "XL"],
      "isFreeShip": false  
  },
  {
      "id": 2,
      "uniq" : 222,
      "title": "Jeans",
      "description": "Mens jeans, available colors - blue, black, white",
      "price": 1500,
      "availableSize": ["S","XS", "XL"],
      "isFreeShip": true  
  }];
  const mockhandle = ()=>{
    const mockItems = 3;
    return mockItems;
  };
    const wrapper = mount(<Products products={mockItems} handleCart={mockhandle} />);
    const btn = wrapper.find("#add-to-cart")
    btn.at(0).simulate("click")
    const countState = mockhandle();
    expect(countState).toEqual(3);
  })
});

