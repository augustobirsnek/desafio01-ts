import { CompanyAccount } from './class/CompanyAccount'
import { MasterAccount } from './class/MasterAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
console.log(`Pessoa: ${peopleAccount.getName()} \nSaldo: ${peopleAccount.getBalance().toFixed(2)}`)
peopleAccount.withdraw(80)
console.log(`Pessoa: ${peopleAccount.getName()} \nSaldo: ${peopleAccount.getBalance().toFixed(2)}`)


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50)
console.log(`Empresa: ${companyAccount.getName()} \nSaldo: ${companyAccount.getBalance().toFixed(2)}`)

companyAccount.getLoan(40)

console.log(`Empresa: ${companyAccount.getName()} \nSaldo: ${companyAccount.getBalance().toFixed(2)}`)

const masterAccount: MasterAccount = new MasterAccount("Admin", 50 )
masterAccount.deposit(100)
console.log(`MasterAccount: ${masterAccount.getName()} \nSaldo: ${masterAccount.getBalance().toFixed(2)}.`)

peopleAccount.toogleStatus()
peopleAccount.withdraw(80)
console.log(`Pessoa: ${peopleAccount.getName()} \nSaldo: ${peopleAccount.getBalance().toFixed(2)}`)
