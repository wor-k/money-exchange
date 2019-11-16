import pluralize from 'pluralize';

const exchangeType = [
    {name: 'hundred', value: 10000},
    {name: 'fifty', value: 5000},
    {name: 'twenty', value: 2000},
    {name: 'ten', value: 1000},
    {name: 'five', value: 500},
    {name: 'one', value: 100},
    {name: 'quarter', value: 25},
    {name: 'dime', value: 10},
    {name: 'nickel', value: 5},
    {name: 'penny', value: 1},
]
export const getExchange = (amount) => {
    return exchangeType.reduce((acum, cur) => {
        const {remain, ans} = acum;
        const {name, value} = cur;
        if(remain < value) {
            return acum;
        }
        const newRemain = remain % value;
        const amt = Math.floor(remain / value);
        return {remain: newRemain, ans: [...ans, {name, amt}]};
    }, {remain: amount, ans: []})
}

export const exchangeToString = (exchange) => {
    const res =  exchange.reduce((acum, cur) => {
        const {name, amt} = cur;
        const text = name === 'hundred' ? '100 dollar ' + pluralize('bill', amt)
            : name === 'fifty' ? '50 dollar ' + pluralize('bill', amt) 
            : name === 'twenty' ? '20 dollar ' + pluralize('bill', amt) 
            : name === 'ten' ? '10 dollar ' + pluralize('bill', amt) 
            : name === 'five' ? '5 dollar ' + pluralize('bill', amt) 
            : name === 'one' ? '1 dollar ' + pluralize('bill', amt) 
            : name === 'quarter' ? pluralize('quarter', amt) 
            : name === 'dime' ? pluralize('dime', amt) 
            : name === 'nickel' ? pluralize('nickel', amt) 
            : name === 'penny' ? pluralize('penny', amt) 
            : 'unknown';
        return [...acum, `${amt} ${text}`];
    }, []);

    return res.length > 1 ? res.slice(0, -1).join(', ') + ', and ' + res.slice(-1) : res[0];
}