export const money = (amount) =>{ 
    let conv = isNaN(amount) ? 0 : amount; 
    return `$${conv.toFixed(2)}`;
}