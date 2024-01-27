import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Places } from 'src/app/entities/places.entity';
import { PlacesService } from './places.service';
import { User } from 'src/app/entities/user.entity';
import { UserService } from '../user/user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Places,User]),
      ],
      exports: [],
      providers: [PlacesService,UserService],
})
export class PlacesModule {}
