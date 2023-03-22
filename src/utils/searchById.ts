export const searchById = <Type extends { id: number }>(item: Type, array: Type[]) => {
    return array?.filter((i: Type) => i.id === item.id).length ? true : false;
}