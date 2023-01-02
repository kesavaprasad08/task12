

class student {
    static counter=0;
    constructor (name,age,phoneNo,boardMarks){
        this.name = name;
        this.age =age;
        this.phoneNo = phoneNo;
        this.boardMarks = boardMarks;        
        student.counter++;        
    }   
}
function count(){
    console.log(student.counter);
    
}
    function eligibleBoardMarks() {
        if (this.boardMarks > 40){
            console.log(`${this.name} is eligible`);
        }
        else {
            console.log(`${this.name} is not eligible`);
        }
        
    }


    function eligibility(){
        const elgibleAge = () => {
            if (this.age > 19) {
                console.log(`${this.name}`)
            }
           
          }

        if (this.boardMarks > 40){
            elgibleAge.call(this); 
        }
        
        
    }


let kesav = new student('kesav',23,9851698140,41);
let ravi = new student('ravi',20,988298440,39);
let santhosh = new student('santhosh',21,98149440,60);
let ram = new student('ram',22,98198440,29);
let sai = new student('sai',19,91941840,41);

eligibility.call(kesav);
eligibility.call(ravi);
eligibility.call(santhosh);
eligibility.call(ram);
eligibility.call(sai);
count();
