export const getPrimitiveIdArray = <Type extends { id: number }>(items: Type[]) => {
    return items.map(
        ({ id }) => (id)
    );
}