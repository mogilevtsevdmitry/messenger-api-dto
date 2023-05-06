import { ApiProperty } from '@nestjs/swagger';

/**
 * Результат выполнения запроса регистрации через телефон
 */
export class RegisterWithPhoneResponse {
    /** Результат выполнения запроса регистрации через телефон */
    @ApiProperty({
        type: Boolean,
        description: 'Результат выполнения запроса регистрации через телефон',
        example: true,
    })
    result: boolean;
}
