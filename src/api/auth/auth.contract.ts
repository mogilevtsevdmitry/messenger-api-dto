import { RegisterPhone } from './get-code-by-phone';
import { LoginWithEmail } from './login-email';
import { LoginPhone } from './login-phone';
import { Logout } from './logout';
import { RefreshTokens } from './refresh-tokens';
import { RegisterWithEmail } from './register-email';

export namespace AuthContract {
    /** Базовый URL путь */
    export const path = 'auth';
    /** Tag */
    export const tag = 'Auth';
    /** Описание */
    export const description = `### Аутентификация
Контракт описывающий реализацию эндпоинтов аутентификации
`;
    /** Авторизация через email и пароль */
    export const LoginWithEmailAndPasswordContract = LoginWithEmail;
    /** Отправка запроса на получение кода */
    export const RegisterWithPhoneContract = RegisterPhone;
    /** Запрос авторизации через phone + code */
    export const LoginWithPhoneContract = LoginPhone;
    /** Разлогин */
    export const LogoutContract = Logout;
    /** Запрос на обновление токенов */
    export const RefreshTokensContract = RefreshTokens;
    /** Запрос регистрации через email и пароль */
    export const RegisterWithEmailAndPasswordsContract = RegisterWithEmail;
}
