import React, {Component} from 'react';
import Modal from './Modal';

class Disclaimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false
        };
    }

    toggleModal = (event) => {
        event.preventDefault();
        this.setState({
          showModal: !this.state.showModal
        });
      }

    render() {
        return (
            <div className="disclaimer-parent">
                <a 
                    className="disclaimer"
                    onClick={this.toggleModal}
                >
                    Disclaimer
                </a>
                {
                    this.state.showModal ? (
                        <Modal>
                            <div>
                                <h2 className="disclaimer-heading">Where is the data coming from?</h2>
                                <p className="disclaimer-text">
                                    Exchange rate data delivered by the Fixer API is collected from over 15 reliable data sources,
                                    every minute. Sources include banks and financial data providers.
                                </p>
                                <button className="disclaimer-button" onClick={this.toggleModal}>OK</button>
                            </div>
                        </Modal>
                    ) : null
                }
            </div>
        );
    }
}

export default Disclaimer;