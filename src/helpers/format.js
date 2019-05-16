export const money = (amount) =>{ 
    const conv = isNaN(amount) ? 0 : amount; 
    return `$${conv.toFixed(2)}`;
}