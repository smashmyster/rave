import { Injectable } from '@nestjs/common';
import { createEventDto } from './crateEventDto';
import { PlaceEvent } from 'src/app/entities/place-event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { PlacesService } from '../places/places.service';
import { Lineup } from 'src/app/entities/place-event-line-up';
import { EventTicketType } from 'src/app/entities/event-ticket-type';

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(PlaceEvent)
        private readonly placeEventRepo: Repository<PlaceEvent>,
        @InjectRepository(Lineup)
        private readonly placeEvenLineUpRepo: Repository<Lineup>,
        @InjectRepository(EventTicketType)
        private readonly placeEventTicketType: Repository<EventTicketType>,
        private userRepo: UserService,
        private placesRepo: PlacesService
    ) { }
    async createEvent(createEventData: createEventDto): Promise<PlaceEvent> {
        const place = await this.placesRepo.getOne(createEventData.place)
        const createEventInfo = {
            name: createEventData.name,
            email: createEventData.email,
            image: createEventData.image,
            phone: createEventData.phone,
            description: createEventData.description,
            startTime: createEventData.startTime,
            endTime: createEventData.endTime,
            date: createEventData.date,
            place,

            boughtTickets: []
        }
        const event = await this.placeEventRepo.save(createEventInfo)
        await this.placeEvenLineUpRepo.save(createEventData.lineup.map(item => {
            return { ...item, event }
        }))
        await this.placeEventTicketType.save(createEventData.ticketType.map(item => {
            return { ...item, event }
        }))


        // this.placeEventRepo.save(event)

        return this.placeEventRepo.findOne({ where: { id: event.id } })
    }

    async getEvent(id: string): Promise<PlaceEvent> {
        return this.placeEventRepo.findOne({
            where: {
                id
            },
            relations:{place:true,lineup:true,ticketType:true}
        })
    }
}
