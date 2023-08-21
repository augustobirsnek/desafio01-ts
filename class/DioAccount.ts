export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`${this.name} depositou R$ ${value.toFixed(2)}.`)
    } else {
      console.log(`Conta inválida`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance >= value){
      this.balance -= value
      console.log(`${this.name} sacou R$ ${value.toFixed(2)}.`)
    } else if(this.validateStatus() && this.balance < value){
      console.log(`${this.name} não possui saldo suficiente.`)
    } else {
      console.log(`Conta ${this.name} é inválida`)
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number): void => {
    this.balance = value
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    return false    
  }

  toogleStatus = ():void => {
    if(this.status === true) {
      this.status = false
    }
    else {
      this.status = true
    }
  }
}
