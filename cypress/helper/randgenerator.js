export class RandGenerator{
    
    static generateRandomNumber(){
        return Math.floor(Math.random()*10000);
     }
     
    static get mail(){
       const randomNumber = this.generateRandomNumber()
       return 'example' + randomNumber+ '@example.com'
     }
}