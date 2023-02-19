export const getPostfix = (value: number) => {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return "товаров";
    if (num > 1 && num < 5) return "товара";
    if (num == 1) return "товар";
    return "товаров";
};
