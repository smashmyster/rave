import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { createEventDto } from './crateEventDto';
import { PlaceEvent } from 'src/app/entities/place-event.entity';

@Controller('event')
export class EventController {
    constructor(
        private eventService:EventService
    ){

    }
    @Post('createEvent')
    createEvent(@Body()createEventData:createEventDto):Promise<PlaceEvent>{
        return this.eventService.createEvent(createEventData)
    }
    @Get('getEvent/:id')
    getEvent(@Param('id')eventId):Promise<PlaceEvent>{
        return this.eventService.getEvent(eventId)
    }
}
