import { getUrl, HttpMethod } from '../../common';
import { LoginWithEmailDto } from '../../dto';
import { LoginResponse } from '../../responses';
import { AuthContract } from './auth.contract';

/**
 * ### Запрос авторизации email + пароль
 *
 * path: /auth/login/email
 * method: POST
 */
export namespace LoginWithEmail {
    /** Требуется ли токен в запросе */
    export const auth = false;
    /** Путь запроса */
    export const methodPath = 'login/email';
    /** Полный URL запроса */
    export const url = (): string => getUrl(AuthContract.path, methodPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export class Request extends LoginWithEmailDto {}
    /** Ответ на запрос */
    export class Response extends LoginResponse {}
}
