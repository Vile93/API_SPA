export function isEmptyObject(obj: object) {
    try {
        return Object.keys(obj).length === 0;
    } catch {
        return false;
    }
}
