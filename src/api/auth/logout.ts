import { HttpMethod, getUrl } from '@common';

/**
 * ### Выход
 * Удаляет токен пользователя
 *
 * path: /auth/logout
 * method: POST
 */
export namespace Logout {
    /** Базовый URL */
    export const controllerUrl = 'auth';
    /** Требуется ли токен в запросе */
    export const auth = false;
    /** Путь запроса */
    export const urlPath = 'logout';
    /** Полный URL запроса */
    export const url = (): string => getUrl(controllerUrl, urlPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export type RequestBody = {};
    /** Ответ на запрос */
    export type Response = {
        /** Результат выполнения */
        result: boolean;
    };
}
