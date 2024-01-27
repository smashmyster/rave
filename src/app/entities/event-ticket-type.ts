import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlaceEvent } from './place-event.entity';

@Entity()
export class EventTicketType {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  description: string;
  @Column()
  numberSold: number;
  @ManyToOne(() => PlaceEvent,(eventItem)=>eventItem.id)
  @JoinColumn({ name: 'event', referencedColumnName: 'id', })
  event: PlaceEvent;
}
