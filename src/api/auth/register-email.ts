import { getUrl, HttpMethod } from '../../common';
import { RegisterWithEmailDto } from '../../dto';
import { RegisterResponse } from '../../responses';
import { AuthContract } from './auth.contract';

/**
 * ### Запрос регистрации через email и пароль
 *
 * path: /auth/register/email
 * method: POST
 */
export namespace RegisterWithEmail {
    /** Требуется ли токен в запросе */
    export const auth = false;
    /** Путь запроса */
    export const methodPath = 'register/email';
    /** Полный URL запроса */
    export const url = (): string => getUrl(AuthContract.path, methodPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export class Request extends RegisterWithEmailDto {}
    /** Ответ на запрос */
    export class Response extends RegisterResponse {}
}
