
export class Myclass{

   public fname:string;
   private  lname:string;
   protected id:number;

    constructor(f:string,l:string,id:number){
        this.fname=f;
        this.lname=l;
        this.id=id;
    }

    

    display(){
        // let fname="Kiran";

        console.log(`
            ----------Details------
            First Name :: ${this.fname}
            last name  :: ${this.lname}
            Id         :: ${this.id}
        `);
    }


}

// var obj=new Myclass("Sumit","Raokhande",9);
// obj.display();




