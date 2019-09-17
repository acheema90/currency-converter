import React, {Component} from 'react';
import Modal from './Modal';

class Disclaimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false
        };
    }

    toggleModal = () => {
        this.setState({
          showModal: !this.state.showModal
        });
      }

    render() {
        return (
            <div className="disclaimer-parent">
                <div 
                    className="disclaimer"
                    onClick={this.toggleModal}
                >
                    Disclaimer
                </div>
                {
                    this.state.showModal ? (
                        <Modal>
                            <div>
                                Show disclaimer stuff
                            </div>
                        </Modal>
                    ) : null
                }
            </div>
        );
    }
}

export default Disclaimer;