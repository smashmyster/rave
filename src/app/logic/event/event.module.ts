import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Places } from 'src/app/entities/places.entity';
import { User } from 'src/app/entities/user.entity';
import { PlacesService } from '../places/places.service';
import { UserService } from '../user/user.service';
import { PlaceEvent } from 'src/app/entities/place-event.entity';
import { EventTicketType } from 'src/app/entities/event-ticket-type';
import { Lineup } from 'src/app/entities/place-event-line-up';

@Module({
    imports: [
        TypeOrmModule.forFeature([Places,User,PlaceEvent,Lineup,EventTicketType]),
      ],
      exports: [TypeOrmModule],
      providers: [PlacesService,UserService],
})
export class EventModule {}
