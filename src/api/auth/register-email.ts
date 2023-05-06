import { HttpMethod, getUrl } from '@common';
import { RegisterEmailDto } from '@dto';
import { Token } from '@interfaces';
import { ControllerAuth } from './controller-auth';

/**
 * ### Запрос регистрации через email и пароль
 *
 * path: /auth/register/email
 * method: POST
 */
export namespace RegisterEmail {
    /** Базовый URL */
    export const controllerUrl = ControllerAuth.path;
    /** Требуется ли токен в запросе */
    export const auth = false;
    /** Путь запроса */
    export const urlPath = 'register/email';
    /** Полный URL запроса */
    export const url = (): string => getUrl(controllerUrl, urlPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export type RequestBody = RegisterEmailDto;
    /** Ответ на запрос */
    export type Response = {
        /** Уникальный Bearer JWT токен */
        accessToken: Token['token'];
    };
}
