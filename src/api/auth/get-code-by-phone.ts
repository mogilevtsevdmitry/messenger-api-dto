import { getUrl, HttpMethod } from '../../common';
import { RegisterWithPhoneDto } from '../../dto';
import { RegisterResponse } from '../../responses';
import { AuthContract } from './auth.contract';

/**
 * ### Отправка запроса на получение кода
 *
 * path: /auth/phone/code
 * method: POST
 */
export namespace RegisterPhone {
    /** Требуется ли авторизация для запроса */
    export const auth = false;
    /** Путь запроса */
    export const methodPath = 'phone/code';
    /** Полный URL запроса */
    export const url = (): string => getUrl(AuthContract.path, methodPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export class Request extends RegisterWithPhoneDto {}
    /** Ответ на запрос */
    export class Response extends RegisterResponse {}
}
