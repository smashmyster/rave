import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  ObjectIdColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Places {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column({nullable:true})
  image: string;
  @Column()
  latitude: string;
  @Column()
  longitude: string;
  @Column()
  openingTime: string;
  @Column()
  closingTime: string;
  @OneToOne(() => User)
  @JoinColumn({ name: 'user', referencedColumnName: 'id', })
  owner:User

}
