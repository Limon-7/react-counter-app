import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 4 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };
    handleReset = () => {
        const counters = this.state.counters.map((counter) => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
    };
    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = this.state.counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
        console.log(this.state.counters[index]);
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id != counterId);
        this.setState({ counters });
        console.log("handle delete clicked", counterId);
    };
    render() {
        return (
            <div>
                <button
                    className="btn btn-primary m-2"
                    onClick={this.handleReset}
                >
                    Reset
                </button>
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
