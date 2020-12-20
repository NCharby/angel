import { delay } from 'lodash'

//Allocation calculator
export class Investor {
    constructor(inv) {
        this.requested_amount = Number(inv.requested_amount)
        this.average_amount = Number(inv.average_amount)
        this.name = inv.name
        this.proportion = 0
        this.allocated = 0
    }

    setAllocated(amount){
        this.allocated = amount
        return this.allocated
    }

    setProportion(amount){
        this.proportion = amount
        return this.proportion
    }

    getMax() {
        if(this.requested_amount <= this.average_amount) return this.requested_amount
        return this.average_amount
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
            // create records, grab other stuff, create audit trail
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

    async calcProportions(Investors, available, desired){
        Investors.forEach( Inv => {
            const p = Math.abs(Inv.allocated - Inv.requested_amount) / desired
            const newAllo = Inv.allocated + (p * available)
            Inv.setProportion(p)
            Inv.setAllocated(newAllo)
        })
        //save to db
        await delay( () => {
            // add to the audit trail, set the amounts
            console.log('fake UPDATE the investor records')
        }, 1)
        
        return Investors
    }

    async getAllocations(investors, maxAllocation) {
        //build the investors
        const Investors =  await this.buildInvestorList(investors)
        
        //what's the total amonut they want to invest?
        const totalDesired = this.getTotalDesired(Investors)
        
        //everyone's historical max fits!, how do we divi up the rest?
        if(totalDesired < maxAllocation){
            //everyone get's their historical max, what's left with their desired?
            const remainder = maxAllocation - totalDesired
            let allAvailable = 0
            Investors.forEach(Inv => {
                //yup, you at least get your historical max
                Inv.setAllocated(Inv.getMax())
                if(Inv.requested_amount > Inv.allocated){
                    //want to give more? Let's build a propotion from that
                    const nextAvailable = Inv.requested_amount - Inv.allocated
                    allAvailable += nextAvailable
                }
            })
            //Negociate the remainder
            return await this.calcProportions(Investors, remainder, allAvailable)
        } else {
            //There's more historical max than the limit.
            //Negociate all totals per proportion
            return await this.calcProportions(Investors, maxAllocation, totalDesired)
        }

    }
}