import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './app/logic/user/user.controller';
import { UserService } from './app/logic/user/user.service';
import { UserModule } from './app/logic/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesController } from './app/logic/places/places.controller';
import { PlacesService } from './app/logic/places/places.service';
import { PlacesModule } from './app/logic/places/places.module';
import { EventController } from './app/logic/event/event.controller';
import { EventService } from './app/logic/event/event.service';
import { EventModule } from './app/logic/event/event.module';

@Module({
  imports: [    
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "nestjs", 
    password: 'JacksoN1!@#',
    database: 'rave',
    synchronize: false,
    logging: true,
    entities: ['dist/src/app/entities/*{.ts,.js}'],
    // namingStrategy: new CustomNamingStrategy(), 
  }),
  UserModule,
  PlacesModule,
  EventModule],
  controllers: [AppController, UserController, PlacesController, EventController],
  providers: [AppService, UserService, PlacesService, EventService],
})
export class AppModule {}
