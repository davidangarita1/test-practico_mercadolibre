export const formatCurrency = (value: number): string => {
    const formatedValue = value.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&.');
    return `$ ${formatedValue}`;
}