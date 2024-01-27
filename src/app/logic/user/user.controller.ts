import { Body, Controller,Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/app/entities/user.entity';
import { SignUpDto } from './SignUpDto';

@Controller('user')
export class UserController {
    constructor(
        private userService:UserService
    ){
    }
    @Post('signUp')
    signupUser(@Body() data: SignUpDto): Promise<User> {
      return this.userService.signUpUser(data);
    }
}
