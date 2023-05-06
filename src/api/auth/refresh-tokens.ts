import { HttpMethod, getUrl } from '@common';
import { Token } from '@interfaces';

/**
 * ### Запрос обновления токенов
 *
 * path: /auth/refresh-tokens
 * method: POST
 */
export namespace RefreshTokens {
    /** Базовый URL */
    export const controllerUrl = 'auth';
    /** Требуется ли токен в запросе */
    export const auth = false;
    /** Путь запроса */
    export const urlPath = 'refresh-tokens';
    /** Полный URL запроса */
    export const url = (): string => getUrl(controllerUrl, urlPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export type RequestBody = {};
    /** Ответ на запрос */
    export type Response = {
        /** Уникальный Bearer JWT токен */
        accessToken: Token['token'];
    };
}
