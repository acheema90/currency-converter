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
    
    render() {
        return (
            <div>
                <h2>Currency Converter</h2>
                <form>
                    <label htmlFor="inputAmount">
                        Type in amount and select Currency:
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
                    </label>
                </form>
            </div>
        );
    }
}

export default Converter;