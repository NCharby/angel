import { delay } from 'lodash'

//Allocation calculator
export class Investor {
    constructor(inv) {
        this.requested_amount = inv.requested_amount
        this.average_amount = inv.average_amount
        this.name = inv.name
        this.proportion = 0 //float
    }

    async setProportion(totalDesired){
        //TODO
        //BUG
        // You're getting values over the desired amount right here
        // 1 / 97 = 0.0103 which is > 1 when getRealInvestment is calc'd
        //Come back to this if you have time
        this.proportion = this.getMax() / totalDesired 
        console.log('proportion', this.proportion, this.getMax(), totalDesired)
        //save to db
        await delay( () => {
            console.log('fake UPDATE Investor proportions')
        }, 1)
        return this.proportion
    }

    getMax() {
        if(this.requested_amount <= this.average_amount) return this.requested_amount
        return this.average_amount
    }

    getRealInvestment(maxAllocation) {
        const money = maxAllocation * this.proportion
        // return Math.ceil(money * 100) / 100; //round to cent
        return money
    }
}

export default class Calculator {
    constructor() {
        //place to hang onto the investors
        this.iList = []
    }
    
    async buildInvestorList(investors) {
        //save to db
        await delay( () => {
            console.log('fake CREATE the investor records')
        }, 1)
        
        investors.forEach(inv => {
            this.iList.push(new Investor(inv))
        });

        return this.iList
    }

    getTotalDesired(List) {
        return List.reduce((acc, inv) => {
            return acc += inv.getMax()
        }, 0)
    }

    async getAllocations(investors, maxAllocation) {
        //build the investors
        const Investors =  await this.buildInvestorList(investors)
        //what's the amount everyone wants together?
        const TOTAL_DESIRED = this.getTotalDesired(Investors)
        //calc each proportion
        await Promise.all(Investors.map(Inv => {
            Inv.setProportion(TOTAL_DESIRED)
        }))
        
        return Investors

    }
}