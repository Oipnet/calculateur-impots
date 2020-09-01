import calculator from './src/calculator.js'

const income = document.querySelector('#income')
const netIncome = document.querySelector('#net_income')
const isCouple = document.querySelector("#isCouple")
const childs = document.querySelector("#childs")
const resultSpan = document.querySelector("#result")
const detailSpan = document.querySelector("#detail")
const resultInverseSpan = document.querySelector("#result_inverse")
const isCoupleInverse = document.querySelector("#isCouple_inverse")
const childsInverse = document.querySelector("#childs_inverse")

function handleCompute() {
  calculator.setBrut(income.value)
  calculator.setParts(isCouple.checked, childs.value)
  const { taxes, net, detail } = calculator.computeNet()

  resultSpan.innerHTML = taxes
  detailSpan.innerHTML = detail.map(d => `<span class="detail">${d} €</span>`).join(' ')
}

function handleComputeReverse() {
  calculator.setNet(parseInt(netIncome.value))
  calculator.setParts(isCoupleInverse.checked, childsInverse.value)

  const result = calculator.computeBrut()

  resultInverseSpan.innerHTML = result
}

income.addEventListener('input', handleCompute)
isCouple.addEventListener('input', handleCompute)
childs.addEventListener('input', handleCompute)

netIncome.addEventListener('input', handleComputeReverse)
isCoupleInverse.addEventListener('input', handleComputeReverse)
childsInverse.addEventListener('input', handleComputeReverse)