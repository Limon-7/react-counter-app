import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
    render() {
        console.log("Counters-Rendered");
        const { onReset, onDelete, onIncrement, counters } = this.props;
        return (
            <div>
                <button className="btn btn-primary m-2" onClick={onReset}>
                    Reset
                </button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onIncrement={onIncrement}
                        onDecrement={this.props.onDecrement}
                        onDelete={onDelete}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
