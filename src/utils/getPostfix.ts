export const getPostfix = (value: number, v1: string, v2: string, v3: string, v4: string) => {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return v1;
    if (num > 1 && num < 5) return v2;
    if (num == 1) return v3;
    return v4;
};
