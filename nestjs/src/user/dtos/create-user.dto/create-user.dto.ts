import { IsEmail, IsNotEmpty, IsString, MinLength, Length } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty()
    @Length(1, 255)
    firstName: string;
  
    @IsNotEmpty()
    @Length(1, 255)
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @MinLength(6)
    password: string;
}
