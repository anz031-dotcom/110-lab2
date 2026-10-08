import { printBold } from "./animation";
const guests: string[] = ["John", "Anna", "Alex", "Steve"];

//will display bold guest name
export function displayGuests(guests: string[]): void{
    for(const guest of guests){
        printBold(guest);
    }
}
