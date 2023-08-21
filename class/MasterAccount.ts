import { DioAccount } from "./DioAccount"

export class MasterAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  
  deposit = (value: number): void => {
    value += 10
    if(this.validateStatus()){
      const newBalance = this.getBalance() + value
      this.setBalance(newBalance)
      console.log(`${this.getName()} depositou R$ ${value.toFixed(2)}.`)
    }
  }
}