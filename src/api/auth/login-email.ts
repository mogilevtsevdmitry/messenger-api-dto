import { HttpMethod, getUrl } from '@common';
import { LoginEmailDto } from '@dto';
import { Token } from '@interfaces';

/**
 * ### Запрос авторизации email + пароль
 *
 * path: /auth/login/email
 * method: POST
 */
export namespace LoginEmail {
    /** Базовый URL */
    export const controllerUrl = 'auth';
    /** Требуется ли токен в запросе */
    export const auth = false;
    /** Путь запроса */
    export const urlPath = 'login/email';
    /** Полный URL запроса */
    export const url = (): string => getUrl(controllerUrl, urlPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export type RequestBody = LoginEmailDto;
    /** Ответ на запрос */
    export type Response = {
        /** Уникальный Bearer JWT токен */
        accessToken: Token['token'];
    };
}
