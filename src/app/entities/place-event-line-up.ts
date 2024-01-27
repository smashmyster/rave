import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PlaceEvent } from './place-event.entity';

@Entity()
export class Lineup {
  @PrimaryGeneratedColumn('uuid')
  id!: string; 
  @Column()
  name: string;
  @Column()
  image: string;
  @ManyToOne(() => PlaceEvent,(eventItem)=>eventItem.id)
  @JoinColumn({ name: 'event', referencedColumnName: 'id', })
  event: PlaceEvent;
}
