import React, { Component } from 'react';

class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputAmount: 0.00,
            inputCurrency: 'CAD',
            outputAmount: 0.00,
            outputCurrency: 'USD',
            currencyOptions: [
                'CAD',
                'USD',
                'EUR'
            ]
        };
    }

    setInput = (value) => {
        const amount = parseFloat(value);
        this.setState({
            inputAmount: amount
        });
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
                            type="number"
                            min="0.00"
                            step="0.01"
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
                                .map(item => <option value={item}>{item}</option>)
                        }
                        </select>
                    </label>
                </form>
                <form onSubmit={event => event.preventDefault()}>
                    <label htmlFor="outputAmount">
                        Converted amount:
                        <input
                            id="outputAmount"
                            type="number"
                            min="0.00"
                            step="0.01"
                            placeholder="0.00"
                            value={this.state.outputAmount}
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
                                .map(item => <option value={item}>{item}</option>)
                        }
                        </select>
                    </label>
                </form>
            </div>
        );
    }
}

export default Converter;