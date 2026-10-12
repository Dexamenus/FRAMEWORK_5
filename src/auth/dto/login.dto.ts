import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {
    @IsNotEmpty({message: "Email is required"})
    @IsEmail({},{message: "Email must be a valid email address"})
    email: string;

    @IsNotEmpty({message: "Password is required"})
    @MinLength(10, {message: "Password must be at least 10 characters long"})
    password: string;
}