const guests: string[] = ["John", "Anna", "Alex", "Steve"];

export function displayGuests(guests: string[]): void{
    for(const guest of guests){
        console.log(guest);
    }
}
