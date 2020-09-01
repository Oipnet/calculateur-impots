export default {
  slicesComputeNet: [
    { min: 0, max: 10064, rate: 0},
    { min: 10065, max: 25659, rate: 0.11},
    { min: 25660, max: 73369, rate: 0.30},
    { min: 73370, max: 157806, rate: 0.41},
    { min: 157807, max: Infinity, rate: 0.45},
  ],
  brut: 0,
  parts: 0,
  net: 0,
  computeNet() {
    const base = this.computeBase(this.brut, this.parts)
    const taxesBySlices = this.slicesComputeNet.map(slice => this.taxesBySlice(base, slice))
      .filter(slice => slice >= 0)
    const taxes = Math.round(
      (
        taxesBySlices
          .reduce((acc, current) => acc + current, 0) * this.parts
      )
    )

    return { taxes, net: this.brut - taxes, detail: taxesBySlices }
  },
  computeBrut() {
    let result = this.net
    let next = true

    while (next) {
      this.setBrut(result)
      const { taxes } = this.computeNet()

      if (result - taxes === this.net || result > this.net * 2) {
        next = false
      }

      result += 1
    }
    return this.brut
  },
  computeBase(income, parts) {
    if (parts === 0) {
      return 0
    }

    return income / parts
  },
  taxesBySlice(income, slice) {
    return ((income > slice.max && slice.max !== Infinity ? slice.max : income) - slice.min) * slice.rate
  },
  inverseTaxesBySlice(income, slice) {
    return ((income > slice.max && slice.max !== Infinity ? slice.max : income) - slice.min) / (1 - slice.rate)
  },
  setParts(isCouple = false, nbChilds = 0) {
    this.parts = 1 + (isCouple ? 1 : 0) + nbChilds / 2;
  },
  setBrut(income) {
    this.brut = income
  },
  setNet(income) {
    this.net = income
  }
}