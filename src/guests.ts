let guests: string[] = ["John", "Anna", "Alex", "Steve"];

function displayGuests(guests: string[]): void{
    for(const guest of guests){
        console.log(guest);
    }
}

displayGuests(guests);