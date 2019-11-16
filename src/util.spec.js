import {getExchange, exchangeToString} from './util'

describe("getExchange", () => {
    test('normal', () => {
        expect(getExchange(100)).toEqual({ans: [{amt: 1, name: 'one'}], remain: 0});
        expect(getExchange(99)).toEqual({
            ans: [{amt: 3, name: 'quarter'}, {amt: 2, name: 'dime'}, {amt: 4, name: 'penny'}], 
            remain: 0
        });
        expect(getExchange(12467)).toEqual({
            ans: [
                {amt: 1, name: 'hundred'}, 
                {amt: 1, name: 'twenty'}, 
                {amt: 4, name: 'one'}, 
                {amt: 2, name: 'quarter'}, 
                {amt: 1, name: 'dime'}, 
                {amt: 1, name: 'nickel'}, 
                {amt: 2, name: 'penny'}
            ], 
            remain: 0
        });
    })
});

describe("exchangeToString", () => {
    test('normal', () => {
        expect(exchangeToString([{amt: 1, name: 'one'}])).toEqual('1 1 dollar bill');
        expect(exchangeToString([
            {amt: 3, name: 'quarter'}, {amt: 2, name: 'dime'}, {amt: 4, name: 'penny'}
        ])).toEqual('3 quarters, 2 dimes, and 4 pennies');
        expect(exchangeToString([
            {amt: 1, name: 'hundred'}, 
            {amt: 1, name: 'twenty'}, 
            {amt: 4, name: 'one'}, 
            {amt: 2, name: 'quarter'}, 
            {amt: 1, name: 'dime'}, 
            {amt: 1, name: 'nickel'}, 
            {amt: 2, name: 'penny'}
        ])).toEqual('1 100 dollar bill, 1 20 dollar bill, 4 1 dollar bills, 2 quarters, 1 dime, 1 nickel, and 2 pennies');
    })
});