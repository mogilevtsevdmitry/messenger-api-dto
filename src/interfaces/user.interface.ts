import { Token } from './token.interface';

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
    token: Token['token'][];
}
