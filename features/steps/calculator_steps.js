import assert from 'assert'
import { Given, When, Then } from 'cucumber'
import Calculator from '../../src/calculator'
import calculator from '../../src/calculator';

Given('A {word} with {float} child/children', function (type, nbChild) {
  if (type === 'Person') {
    Calculator.setParts(false, nbChild)
  } else {
    Calculator.setParts(true, nbChild)
  }
  
});

Given('An income of {float}k', function (income) {
  Calculator.setBrut(income * 1000)
});

When('Calculate income Taxes', function () {
  this.actualAnswer = Calculator.computeNet()
});

Then('Pay {int} € of taxes', function (taxes) {
  assert.equal(this.actualAnswer.taxes, taxes)
});

Then('Net income is {int} €', function (net) {
  assert.equal(this.actualAnswer.net, net)  
});

Then('Slice {int} is {float}', function (slice, tax) {
  assert.equal(this.actualAnswer.detail[slice - 1], tax)
});

Given('A net income of {int} €', function (income) {
  calculator.setNet(income)
});

When('Calculate brut income', function () {
  this.actualAnswer = Calculator.computeBrut()
});

Then('Brut is {int} €', function (brut) {
  assert.equal(this.actualAnswer , brut)
});