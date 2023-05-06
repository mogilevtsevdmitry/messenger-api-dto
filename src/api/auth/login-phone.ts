import { getUrl, HttpMethod } from '../../common';
import { LoginPhoneDto } from '../../dto';
import { LoginResponse } from '../../responses';
import { AuthContract } from './auth.contract';

/**
 * ### Запрос авторизации phone + code
 *
 * path: /auth/login/phone
 * method: POST
 */
export namespace LoginPhone {
    /** Требуется ли токен в запросе */
    export const auth = false;
    /** Путь запроса */
    export const methodPath = 'login/phone';
    /** Полный URL запроса */
    export const url = (): string => getUrl(AuthContract.path, methodPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export class RequestBody extends LoginPhoneDto {}
    /** Ответ на запрос */
    export class Response extends LoginResponse {}
}
