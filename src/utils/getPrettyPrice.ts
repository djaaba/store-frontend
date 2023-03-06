export const getPrettyPrice = (price: number) => {
    return String(price).replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1\u00A0") + "\u00A0₽";
};
