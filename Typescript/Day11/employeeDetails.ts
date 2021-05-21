
import {Employee} from './employee';

export class EmployeeDetails implements Employee {
    fname: string;
    lname: string;
    salary:number;

    constructor(f:string,l:string,salary:number){
        this.fname=f;
        this.lname=l;
        this.salary=salary;
    }

    display() {
        
        console.log(`
        --------Employee Details------------
        First Name:: ${this.fname}
        Last Name :: ${this.lname}
        Salary ::   ${this.salary}
                
        `);
    }

}