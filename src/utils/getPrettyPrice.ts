export const getPrettyPrice = (price: number) => {
    return String(price).replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") + " ₽";
};
