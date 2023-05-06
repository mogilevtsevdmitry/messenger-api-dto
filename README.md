# Messenger-API

Библиотека с описанием API для взаимодействия с `messenger-backend`
Она состоит из:

## api
Папка api содержит файлы с описанием эндпоинтов, типами запросов, с указанием URL и форматом отправляемых и получаемых данных.
Корневой URL можно получить из `API` который импортируется из `@webmogilevtsev/messenger-api-dto`
```typescript
import { API } from '@webmogilevtsev/messenger-api-dto';

const url = API.BaseUrl;
```
Дальше API строится по принципу вложенности. Имеется корневой контракт, например `AuthContract`. В нем определены контракты для методов по адресу `/auth/*`

```typescript
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
```
В каждом методе определены эндпоинты, описаны типы для передачи данных и получаемые результаты.
Для фронта необходимо использовать `url` для получения полного пути
Наример для `LoginWithEmail.url` вернет `auth/login/email`. Этого достаточно будет для передачи в инстанс `axios`, так как в нем уже будет зашит базовый url из `API.BaseUrl` 
```typescript
export namespace LoginWithEmail {
    /** Требуется ли токен в запросе */
    export const auth = false;
    /** Путь запроса */
    export const methodPath = 'login/email';
    /** Полный URL запроса */
    export const url = (): string => getUrl(AuthContract.path, methodPath);
    /** Метод запроса */
    export const method = HttpMethod.POST;
    /** Тело запроса */
    export class Request extends LoginWithEmailDto {}
    /** Ответ на запрос */
    export class Response extends LoginResponse {}
}
```

## common
Папка common включает в себя вспомогательные файлы для работы библиотеки.

## dto
Папка dto содержит классы с описанием полей и валидацией. Они используются для проверки и обработки данных, которые поступают из внешних источников, таких как запросы от клиента.

## interfaces
В папке interfaces находятся описания сущностей, которые используются в приложении. Это могут быть, например, интерфейсы для моделей базы данных или других структур данных, которые обрабатываются в коде.<br>
Например
```typescript
/**
 * Интерфейс пользователя
 */
export interface User {
    /** Идентификатор пользователя */
    id: string;

    /** Электронная почта пользователя */
    email: string;

    /** Дата и время создания пользователя */
    createdAt: Date;

    /** Дата и время обновления пользователя */
    updatedAt: Date;

    /** Никнейм пользователя */
    nickname?: string;

    /** Имя пользователя */
    firstName?: string;

    /** Фамилия пользователя */
    lastName?: string;

    /** Дата рождения пользователя */
    birthday?: Date;

    /** Пол пользователя */
    sex?: string;

    /** Фотографии пользователя */
    photo: string[];

    /** Телефонный номер пользователя */
    phone?: number;

    /** Статус пользователя */
    status?: string;

    /** О пользователе */
    aboutMe?: string;

    /** Хэшированный пароль пользователя */
    password: string;

    /** Массив токенов пользователя */
    token: string[];
}
```

## services
> Используется исключительно на бэкенде

Папка services содержит описание сервисов, их названия, команды для MessagePattern и EventPattern, а также описание получаемых и отправляемых типов данных. Сервисы обрабатывают основную логику приложения и взаимодействуют с другими компонентами системы.<br>
Например описание `AUTH_SERVICE`
```typescript
export namespace AuthServiceContract {
    /** Наименование сервиса */
    export const name = 'AUTH_SERVICE';
    /** Auth контроллер сервиса */
    export const AuthController = AuthServiceController;
}
```
`AuthServiceController` в данном случае используется для описания контроллера в `AUTH_SERVICE` для обработки запросов
```typescript
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
}
```