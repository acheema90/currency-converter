import React, { Component } from 'react';
import ConversionService from './ConversionService';
import Disclaimer from './Disclaimer';

class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputAmount: '0.00',
            inputCurrency: 'CAD',
            outputAmount: '0.00',
            outputCurrency: 'USD',
            currencyOptions: [
                'CAD',
                'USD',
                'EUR'
            ],
            exchangeRates: {
                CAD: 1,
                USD: 1,
                EUR: 1
            }
        };
    }

    /**
     * get the latest exchange rates and update them in state
     * using componentDidMount as we only need to do this once
     * and not on every input change
     */
    componentDidMount() {
        ConversionService.getExchangeRates()
            .then((res) => {
                console.log(res);
                if(res.data && res.data.rates) {
                    const rates = res.data.rates;
                    this.setState({
                        exchangeRates: {
                            CAD: rates.CAD,
                            USD: rates.USD,
                            EUR: rates.EUR
                        }
                    });
                }
                else {
                    console.error('Could not fetch exchange reates');
                }
            }, (err) => console.error(err));
    }

    convertCurrency = (inputCurr, outputCurr, amount) => {
        if (amount > 0) {
            const inputRate = this.state.exchangeRates[inputCurr];
            const outputRate = this.state.exchangeRates[outputCurr];
            const result = ((outputRate / inputRate) * amount).toFixed(2);
            this.setState({
                outputAmount: result
            });
        }
    }

    setInput = (value) => {
        let amount = parseFloat(value);
        if(!Number.isNaN(amount)) {
            amount = amount.toFixed(2);
            this.setState({
                inputAmount: amount
            });
        }
    }

    /**
     * call convertCurrency when currency slection is updated
     */
    currencyUpdateHandler() {
        this.convertCurrency(this.state.inputCurrency, this.state.outputCurrency, this.state.inputAmount);
    }

    setInputCurrency = (value) => {
        this.setState(
            {
                inputCurrency: value
            },
            this.currencyUpdateHandler
        );
    }

    setOutputCurrency = (value) => {
        this.setState(
            {
                outputCurrency: value
            },
            this.currencyUpdateHandler
        );
    }

    updateOutputAmount = (amount) => {
        const amt = parseFloat(amount);
        if(!Number.isNaN(amount)) {
            this.convertCurrency(this.state.inputCurrency, this.state.outputCurrency, amount);
        }
    }
    
    render() {
        return (
            <div>
                <h2>Currency Converter</h2>
                <form onSubmit={event => event.preventDefault()}>
                    <label htmlFor="inputAmount">
                        Type in amount and select currency:
                        <input
                            id="inputAmount"
                            placeholder="0.00"
                            value={this.state.inputAmount}
                            onChange={event => this.setInput(event.target.value)}
                            onBlur={event => this.updateOutputAmount(event.target.value)}

                        />
                    </label>
                    <label htmlFor="inputCurrency">
                        <select
                            id="inputCurrency"
                            value={this.state.inputCurrency}
                            onChange={event => this.setInputCurrency(event.target.value)}
                            onBlur={event => this.setInputCurrency(event.target.value)}
                        >
                        {
                            this.state.currencyOptions
                                .map(item => <option value={item} key={item}>{item}</option>)
                        }
                        </select>
                    </label>
                </form>
                <form onSubmit={event => event.preventDefault()}>
                    <label htmlFor="outputAmount">
                        Converted amount:
                        <input
                            id="outputAmount"
                            placeholder="0.00"
                            value={this.state.outputAmount}
                            readOnly={true}
                        />
                    </label>
                    <label htmlFor="outputCurrency">
                        <select
                            id="outputCurrency"
                            value={this.state.outputCurrency}
                            onChange={event => this.setOutputCurrency(event.target.value)}
                            onBlur={event => this.setOutputCurrency(event.target.value)}
                        >
                        {
                            this.state.currencyOptions
                                .map(item => <option value={item} key={item}>{item}</option>)
                        }
                        </select>
                    </label>
                </form>
                <Disclaimer />
            </div>
        );
    }
}

export default Converter;