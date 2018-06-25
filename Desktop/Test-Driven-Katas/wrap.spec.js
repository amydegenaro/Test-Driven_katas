const {expect} = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it ('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it ('Returns same string if less than max length', () => {
    expect(wrap("hello", 10)).to.equal("hello");
  });

  it ('Returns string with line breaks in the right place', () => {
    expect(wrap("Hello World!", 6)).to.equal("Hello"+"\nWorld!")
  });



})

