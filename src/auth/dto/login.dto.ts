import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class LoginDto {

    @IsEmail({}, { message: i18nValidationMessage('validation.isEmail') })
    @IsNotEmpty({ message: i18nValidationMessage('validation.isNotEmpty') })
    email: string;

    @IsNotEmpty({ message: i18nValidationMessage('validation.isNotEmpty') })
    @MinLength(6, {
        message: i18nValidationMessage('validation.minLength'),
    })
    password: string;
}