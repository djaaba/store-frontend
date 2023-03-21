export const getPrimitiveIdArray = (items: any[]) => {
    return items.map(
        ({ id }) => (id)
    );
}