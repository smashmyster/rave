import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  ObjectIdColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Places } from './places.entity';
import { User } from './user.entity';
import { Lineup } from './place-event-line-up';
import { EventBoughtTickets } from './event-bought-ticket';
import { EventTicketType } from './event-ticket-type';

@Entity()
export class PlaceEvent {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  image: string;
  @Column()
  phone: string;
  @Column({nullable:true})
  description: string;
  @Column()
  startTime: Date;
  @Column()
  endTime: Date;
  @Column()
  date: Date;
  @OneToMany(()=>Lineup,(line)=>line.event)
  lineup: Lineup[];
  @OneToMany(()=>EventTicketType,ticketType=>ticketType.event)
  ticketType: EventTicketType[];
  @OneToMany(() => EventBoughtTickets,eventTicket=>eventTicket.event)
  boughtTickets: EventBoughtTickets[];
  @OneToOne(() => Places,place=>place.id)
  @JoinColumn({ name: 'place', referencedColumnName: 'id', })
  place: Places;
}
