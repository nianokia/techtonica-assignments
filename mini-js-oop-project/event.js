// --- 11 ---
class TicketType {
    constructor(ticketName, price) {
        this.ticketName = ticketName;
        this.price = price;
    }
}

// --- 3 ---
class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }

    // --- 12 ---
    addAvailableTickets(ticketName, price) {
        const newTicket = new TicketType(ticketName, price);
        this.availableTickets.push(newTicket);
    }

    // --- 14, 15 ---
    allTickets() {
        return "All Tickets: " + this.availableTickets.map((ticket, index) => `${index + 1}. ${ticket.name} ($${ticket.price})`).join(" ");
    }

    // --- 16 ---
    searchTickets(lower, upper) {
        const eligibleTickets = this.availableTickets.filter(ticket => ticket.price >= lower && ticket.price <= upper);
        if (eligibleTickets.length === 0) {
            return "No tickets available";
        }
        return `Eligible Tickets (<em>$${lower} - $${upper}</em>): ` + eligibleTickets.map((ticket, index) => `${index + 1}. ${ticket.ticketName} ($${ticket.price})`).join(" ")
    }

    getCheapestTicket() {
        if (this.availableTickets.length === 0) {
            return "No tickets available"
        }
        const cheapestTicket = this.availableTickets.reduce((min, ticket) => ticket.price < min.price ? ticket : min);
        return `<strong>Cheapest Ticket:</strong> ${cheapestTicket.ticketName} ($${cheapestTicket.price})`;
    }
}

// --- 4, 5 ---
const eventObj1 = new Event(
    "Olympic Opening Ceremony",
    "Marks the start of the Olympic Games"
);
const eventObj2 = new Event(
    "Women's Gymnastics All-around",
    "Gymnasts do all 4 events, and the one with the greatest combined score wins"
);
const eventObj3 = new Event(
    "Track & Field Sprint Finals",
    "The final round of the sprint events for men and women"
);

// --- 6 ---
const eventArray = new Array();

// --- 7, 8 ---
eventArray.push(eventObj1);
// console.log(eventArray);
eventArray.push(eventObj2, eventObj3);
// console.log(eventArray);

// --- 12 ---
eventObj1.addAvailableTickets("General Admission", 99);
eventObj1.addAvailableTickets("Front Row", 299);

// --- 13 ---
eventObj2.addAvailableTickets("Upper Tier Seating", 25);
eventObj2.addAvailableTickets("Lower Tier Seating", 80);

eventObj3.addAvailableTickets("VIP Box", 300);
eventObj3.addAvailableTickets("Lower Tier Seating", 200);
eventObj3.addAvailableTickets("Upper Tier Seating", 100);

// --- 9 ---
// document.addEventListener('DOMContentLoaded', () => {
//     let html = '';

//     // iterate through each event of eventArray and display the event values in the html
//     eventArray.forEach((item) => {
//         html += `<li>${item.name} - ${item.description}`;
//     });

//     document.querySelector('#event').innerHTML = html;

// });

document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((event) => {
        html += `<li> <strong>${event.name}</strong> - ${event.description} <br/> ${event.searchTickets(0, 300)}</li>`
    })
    document.querySelector("#event").innerHTML = html
})

// --- CHALLENGE ---
document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((event) => {
        html += `<li> ${event.name} - ${event.description} <br/> ${event.searchTickets(0, 100)} <br/> ${event.getCheapestTicket()}</li>`
    })
    document.querySelector("#cheapTicketContainer").innerHTML = html;
})

// test cases for searchTicket
console.log("Test case 1: ", eventObj3.searchTickets(0, 250));

// test case for cheapest Ticket
console.log("Event 1: ", eventObj1.getCheapestTicket()); // returns cheapest ticket