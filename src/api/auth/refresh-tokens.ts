import { getUrl, HttpMethod } from '../../common';
import { LoginResponse } from '../../responses';
import { AuthContract } from './auth.contract';

/**
 * ### Запрос на обновление токенов
 *
 * path: /auth/refresh-tokens
 * method: POST
 */
export namespace RefreshTokens {
    /** Требуется ли токен в запросе */
    export const auth = true;
    /** Путь запроса */
    export const methodPath = 'refresh-tokens';
    /** Полный URL запроса */
    export const url = (): string => getUrl(AuthContract.path, methodPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export type Request = {};
    /** Ответ на запрос */
    export class Response extends LoginResponse {}
}
