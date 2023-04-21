export const getPrettyPhone = (phone: string) => {
    let pattern = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;
    return phone.replace(pattern, '+7 ($2) $3-$4-$5');
}