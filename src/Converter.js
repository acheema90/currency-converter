import React, { Component } from 'react';
import ConversionService from './ConversionService';

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
            });
    }

    componentDidUpdate() {
        this.convertCurrency(this.state.inputCurrency, this.state.outputCurrency, this.state.inputAmount);
    }

    convertCurrency = (inputCurr, outputCurr, amount) => {
        if (amount > 0) {
            console.log('TBD');
        }
    }

    setInput = (value) => {
        const amount = parseFloat(value);
        if(!Number.isNaN(amount)) {
            this.setState({
                inputAmount: amount
            });
        }
    }

    setInputCurrency = (value) => {
        this.setState({
            inputCurrency: value
        });
    }

    setOutputCurrency = (value) => {
        this.setState({
            outputCurrency: value
        });
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
            </div>
        );
    }
}

export default Converter;