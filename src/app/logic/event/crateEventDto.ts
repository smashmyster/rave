
export class createEventDto {
    name: string;
    email: string;
    image: string;
    phone: string;
    description: string;
    startTime: Date;
    endTime: Date;
    date: Date;
    place: string;
    lineup: createEventLineUpDto[];
    ticketType: createEventTicketTypeDto[];
}
export class createEventLineUpDto {
    name: string;
    image: string;
}
export class createEventTicketTypeDto{
    name: string;
    price: number;
    description: string;
    numberSold: number;
}
