import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { PlaceEvent } from './place-event.entity';

@Entity()
export class EventBoughtTickets {
  @PrimaryGeneratedColumn('uuid')
  id!: string; 
  @ManyToOne(() => User,(user)=>user.id)
  @JoinColumn({ name: 'user', referencedColumnName: 'id', })
  user:User
  @Column()
  ticket: string;
  @Column()
  numberOfTickets: number;
  @ManyToOne(() => PlaceEvent,(eventItem)=>eventItem.id)
  @JoinColumn({ name: 'event', referencedColumnName: 'id', })
  event: PlaceEvent;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  description: string;
  @Column()
  numberSold: number;
}
