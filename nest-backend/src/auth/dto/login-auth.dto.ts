import { IsEmail, IsString, Matches, MinLength, IsNotEmpty } from "class-validator";

export class LoginAuthDto {
    @IsEmail({}, { message: 'Email must be valid' })
        email: string;
    
        @IsString()
        @MinLength(8, { message: 'Password must be at least 8 characters long' })
        @IsNotEmpty({ message: 'Password cannot be empty' })
        @Matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            { message: 'Password too weak. Must include uppercase, lowercase, number, special character' }
        )
        password: string

}