import { HttpMethod, getUrl } from '@common';
import { LoginPhoneDto } from '@dto';
import { Token } from '@interfaces';
import { ControllerAuth } from './controller-auth';

/**
 * ### Запрос авторизации phone + code
 *
 * path: /auth/login/phone
 * method: POST
 */
export namespace LoginPhone {
    /** Базовый URL */
    export const controllerUrl = ControllerAuth.path;
    /** Требуется ли токен в запросе */
    export const auth = false;
    /** Путь запроса */
    export const urlPath = 'login/phone';
    /** Полный URL запроса */
    export const url = (): string => getUrl(controllerUrl, urlPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export type RequestBody = LoginPhoneDto;
    /** Ответ на запрос */
    export type Response = {
        /** Уникальный Bearer JWT токен */
        accessToken: Token['token'];
    };
}
