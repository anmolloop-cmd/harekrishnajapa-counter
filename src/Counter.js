import React from 'react';
import './counter.css';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            qty: 1,
            qty1: 1,
            h1: "sri-krishna-chaitanya prabhu-nityananda sri-advaita gadadhara srivasadi-gaura-bhakta-vrinda",
            h2: "Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare Hare Rama, Hare Rama, Rama Rama, Hare Hare"
        }
    }
    handleIncrease = () => {
        const { qty, qty1, h1, h2 } = this.state;
        if (qty !== 108) {
            this.setState({ qty: qty + 1, h1: h2 })
        }
        else
            this.setState({ qty: 1, h1: "sri-krishna-chaitanya prabhu-nityananda sri-advaita gadadhara srivasadi-gaura-bhakta-vrinda", qty1: qty1 + 1 })
    }
    handleReset = () => {
        const { qty, qty1, h1, h2 } = this.state;
        this.setState({ qty: 1, qty1: 0, h1: "sri-krishna-chaitanya prabhu-nityananda sri-advaita gadadhara srivasadi-gaura-bhakta-vrinda" });
    }
    render() {
        const { qty, h1, qty1 } = this.state;
        return (
            <div className="Counter">
                <h1>108 X {qty1}</h1>
                <h1>{qty}</h1>
                <button onClick={this.handleIncrease} className="btn">+</button>
                <button onClick={this.handleReset} className="btn">RESET</button>
                <h1>{h1}</h1>
            </div>
        );
    }
}
export default Counter;
