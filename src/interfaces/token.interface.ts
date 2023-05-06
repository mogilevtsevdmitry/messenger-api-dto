import { User } from './user.interface';

/** Интерфейс для модели Token */
export interface Token {
    /** Уникальный токен */
    token: string;

    /** Срок истечения токена */
    exp: Date;

    /** Идентификатор пользователя, которому принадлежит токен */
    userId: User['id'];
}
