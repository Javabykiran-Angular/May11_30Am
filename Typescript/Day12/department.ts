
export class Department{

        private role:string;

        constructor(role:string){
            this.role=role;
        }
        getRole():string{
            return (this.role);
        }

        setRole(role:string){
            this.role=role;
        }

}