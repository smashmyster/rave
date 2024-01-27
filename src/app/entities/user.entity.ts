import {
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  password: string;
  @Column()
  location: string;
  @Column()
  token: string;
  @Column()
  verified: boolean;
  @Column()
  verificationPin: string;
  @Column()
  expoPushNotificationToken: string;
  @Column({ nullable: true })
  socketId: string;
}
