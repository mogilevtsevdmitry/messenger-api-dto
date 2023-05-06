import { HttpMethod, getUrl } from '@common';
import { LoginPhoneDto } from '@dto';
import { ControllerAuth } from './controller-auth';

/**
 * ### Отправка запроса на получение кода
 *
 * path: /auth/phone/code
 * method: POST
 */
export namespace RegisterPhone {
    /** Базовый URL */
    export const controllerUrl = ControllerAuth.path;
    /** Требуется ли токен в запросе */
    export const auth = false;
    /** Путь запроса */
    export const urlPath = 'phone/code';
    /** Полный URL запроса */
    export const url = (): string => getUrl(controllerUrl, urlPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export type RequestBody = {
        /** Телефонный номер */
        phone: LoginPhoneDto['phone'];
    };
    /** Ответ на запрос */
    export type Response = null;
}
