import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './CreatePlaceDto';
import { Places } from 'src/app/entities/places.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/app/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class PlacesService {
    constructor(
        @InjectRepository(Places)
        private placesRepo: Repository<Places>,
        private userRepo: UserService
    ) { }
    async createPlace(createPlaceDto: CreatePlaceDto): Promise<Places> {
        const user = await this.userRepo.getUser(createPlaceDto.owner)
        const savedPlace = await this.placesRepo.save({ ...createPlaceDto, owner: user })
        return savedPlace
    }
    getOne(place: string) {
        return this.placesRepo.findOne({
            where: {
                id: place
            }
        })
    }
}
