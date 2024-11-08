export const pagination = (data: any[], page: number, limit: number) => {
    if (!Number.isFinite(page) || !Number.isFinite(limit)) return data;
    return data.slice((page - 1) * limit, page * limit);
};
