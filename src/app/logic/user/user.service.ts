import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/app/entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './SignUpDto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
        // private jwtService: JwtService,

      ) {}
      async signUpUser(userDetails: SignUpDto): Promise<User> {
        const checkEmail = await this.userRepo.findOneBy({
          email: userDetails.email,
        });
        const checkPhone = await this.userRepo.findOneBy({
          phone: userDetails.phone,
        });
        if (checkEmail) {
          throw new Error('Email is in use');
        }
        if (checkPhone) {
          throw new Error('Phone is in use');
        }
        const password = userDetails.password
        // await hashPassword(
        //   userDetails.email,
        //   userDetails.password,
        // );
        const adminUser = await this.userRepo.create({
          ...userDetails,
          email: userDetails.email.toLowerCase(),
          password,
          verificationPin: (Math.floor(Math.random() * 90000) + 10000).toString(),
          verified: false,
          location: '',
        });
        const token ="";
        adminUser.token = token;
        return this.userRepo.save(adminUser);
      }
      async processToken(user: User) {
        const payload = { username: user.email, sub: user.id };
        // return {
        //   access_token: this.jwtService.sign(payload, {
        //     secret: jwtConstants.secret,
        //   }),
        // };
      }
      updateUserPassword(user: string, oldPassword: string, newPassword: string) {
        return Promise.resolve(undefined);
      }
    
    //   async loginUser(user: string, password: string): Promise<UserType> {
    //     const phoneCheck = await this.userRepo.findOneBy({ phone: user });
    //     const emailCheck = await this.userRepo.findOneBy({ email: user });
    //     if (!phoneCheck && !emailCheck) {
    //       throw new Error('User does not exist');
    //     } else {
    //       const selectedUser = phoneCheck ?? emailCheck;
    //       // password=await hashPassword(selectedUser.email,password)
    //       const validatePasswordValue = await validatePassword(
    //         selectedUser.password,
    //         password,
    //       );
    //       if (validatePasswordValue) {
    //         const token = processUserToken(selectedUser);
    //         selectedUser.token = (await token).access_token;
    //         await this.userRepo.save(selectedUser);
    //         return selectedUser;
    //       } else {
    //         throw new Error('Wrong Credentials');
    //       }
    //     }
    //   }
    
      async getUser(userId: string):Promise<User> {
        let user=await this.userRepo.findOne({
        where:{
          id:userId
        }
      })
        return user
      }
}
