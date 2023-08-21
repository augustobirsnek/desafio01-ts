import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus() && this.getBalance() >= value){
      const newBalanceCompany = this.getBalance() + value
      this.setBalance(newBalanceCompany)

      console.log(`${this.getName()} pegou emprestado o valor de ${value.toFixed(2)}`)
    } else {
      console.log(`Conta inválida`)
    }
  }
}
