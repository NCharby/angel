import Calculator from './model'

export default class Controller {
    constructor() {
        this.model = new Calculator()
    }
    //Ask the calculator to do it's job. Format output
    async getAllocations(data) {
        const { investor_amounts, allocation_amount } = data
        const Investors = await this.model.getAllocations(investor_amounts, allocation_amount)

        return Investors.reduce((acc, Inv) => {
            return {...acc , [Inv.name]: Inv.getRealInvestment(allocation_amount)}
        }, {})

    }
}