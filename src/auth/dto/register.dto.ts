import { IsNotEmpty, IsEmail, MinLength, MaxLength, IsString } from "class-validator";

export class RegisterDto {
    
    @IsNotEmpty({message: "Name is required"})
    name: string;

    @IsNotEmpty({message: "Email is required"})
    @IsEmail({},{message: "Email must be a valid email address"})
    email: string;

    @IsNotEmpty({message: "Password is required"})
    @MinLength(3, {message: "Password must be at least 3 characters long"})
    @MaxLength(10, {message: "Password must be at most 10 characters long"})
    password: string;

    @IsNotEmpty({message: "Password confirmation is required"})
    @MinLength(3, {message: "Password confirmation must be at least 3 characters long"})
    @MaxLength(10, {message: "Password confirmation must be at most 10 characters long"})
    password_confirmation: string;
}