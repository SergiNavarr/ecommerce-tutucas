export function formatPrice(price: number) {
    const priceFormatter = new Intl.NumberFormat("ar-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    const finalPrice = priceFormatter.format(price);

    return finalPrice;
}