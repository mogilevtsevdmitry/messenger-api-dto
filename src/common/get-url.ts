export function getUrl(...args: string[]): string {
    // Удаляем начальный и конечный слэши для каждого аргумента и объединяем их с помощью '/'
    return args.map((arg) => arg.replace(/^\/+|\/+$/g, '')).join('/');
}
