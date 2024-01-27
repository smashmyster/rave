import { Body, Controller, Post } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './CreatePlaceDto';
import { Places } from 'src/app/entities/places.entity';

@Controller('places')
export class PlacesController {
    constructor(
        private placesService:PlacesService
    ){

    }
    @Post('createPlace')
    createPlace(@Body()createPlaceDto:CreatePlaceDto):Promise<Places>{
        return this.placesService.createPlace(createPlaceDto)
    }
}
