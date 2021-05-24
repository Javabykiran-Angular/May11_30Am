
import {Employee} from './employee';
import { Department } from './department';


export class EmployeeDetails implements Employee {
    fname: string;
    lname: string;
    salary:number;
    // core java
    // Department d;
    //Typescript
    dept:Department;
    

    constructor(f:string,l:string,
        salary:number,role:string){
        this.fname=f;
        this.lname=l;
        this.salary=salary;
        this.dept=new Department(role)
    }

    display() {
        
        console.log(`
        --------Employee Details------------
        First Name:: ${this.fname}
        Last Name :: ${this.lname}
        Salary ::   ${this.salary}
        Role    ::  ${this.dept.getRole()}
                
        `);
    }

}