export const searchById = (item: any, array: any[]) => {
    return array?.filter((i: any) => i.id === item.id).length ? true : false;
}