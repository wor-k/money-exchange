import React, {useState} from 'react';
import * as util from './util';

const onExchangeChange = (setExchange, setExchangeText, setError) => e => {
    setExchange(e.target.value);
    if(e.target.value === '') {
        setExchangeText('');
        return;
    }

    if (!/^\d+(\.\d\d|\.\d)?$/.test(e.target.value)) {
        setExchangeText('');
        setError('invalid exchange');
        return;
    }

    setError('');
    const {ans} = util.getExchange(Number(e.target.value) * 100);
    setExchangeText(util.exchangeToString(ans))

}

export const Exchange = () => {
    const [exchange, setExchange] = useState(0);
    const [exchangeText, setExchangeText] = useState('');
    const [error, setError] = useState('');
    return (
        <div>
            <label htmlFor="exchange">Exchange</label>
            <input id="exchange" value={exchange} onChange={onExchangeChange(setExchange, setExchangeText, setError)}/>
            {error && <span style={{color: 'red'}}>{error}</span>}
            {exchangeText && <p style={{color: 'green'}}>{exchangeText}</p>}
        </div>
    )
}