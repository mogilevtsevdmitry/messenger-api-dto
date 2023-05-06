import { getUrl, HttpMethod } from '../../common';
import { LogoutResponse } from '../../responses';
import { AuthContract } from './auth.contract';

/**
 * ### Выход
 * Удаляет токен пользователя
 *
 * path: /auth/logout
 * method: POST
 */
export namespace Logout {
    /** Требуется ли токен в запросе */
    export const auth = true;
    /** Путь запроса */
    export const urlPath = 'logout';
    /** Полный URL запроса */
    export const url = (): string => getUrl(AuthContract.path, urlPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export type RequestBody = {};
    /** Ответ на запрос */
    export class Response extends LogoutResponse {}
}
