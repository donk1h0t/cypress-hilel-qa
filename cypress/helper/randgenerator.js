export class RandGenerator{
    
    static generateRandomNumber(number){
        return Math.floor(Math.random()*number) + 1;
     }
     
    static get mail(){
       const randomNumber = this.generateRandomNumber('1000')
       return 'example' + randomNumber+ '@example.com'
     }
}

export const randGenerator = new RandGenerator