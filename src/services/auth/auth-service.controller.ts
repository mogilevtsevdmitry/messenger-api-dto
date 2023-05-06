import { LoginWithEmail, RefreshTokens, RegisterWithEmail } from '@api';

/**
 * ### Controller Auth сервиса
 */
export namespace AuthServiceController {
    /**
     * Авторизация через email и пароль
     * @MessagePattern команда
     */
    export const LoginWithEmailMessagePattern = { cmd: LoginWithEmail.methodPath };
    /**
     * Тело запроса
     */
    export type LoginWithEmailRequest = LoginWithEmail.Request;
    /**
     * Результат выполнения
     */
    export type LoginWithEmailResponse = LoginWithEmail.Response;

    /**
     * Регистрация через email и пароль
     * @MessagePattern команда
     */
    export const RegisterWithEmailMessagePattern = { cmd: RegisterWithEmail.methodPath };
    /**
     * Тело запроса
     */
    export type RegisterWithEmailRequest = RegisterWithEmail.Request;
    /**
     * Результат выполнения
     */
    export type RegisterWithEmailResponse = RegisterWithEmail.Response;

    /**
     * Обновление пары токенов
     * @MessagePattern команда
     */
    export const RefreshTokensMessagePattern = { cmd: RefreshTokens.methodPath };
    /**
     * Тело запроса
     */
    export type RefreshTokensRequest = RefreshTokens.Request;
    /**
     * Результат выполнения
     */
    export type RefreshTokensResponse = RefreshTokens.Response;
}
