import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 4 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };
    constructor() {
        super();
        console.log("App-Constructor");
    }
    componentDidMount() {
        // best place for ajax call to get data from server
        console.log("App-Mounted");
    }
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
    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = this.state.counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
    };
    render() {
        console.log("App - Rendered");
        return (
            <React.Fragment>
                <Navbar
                    totalCounters={
                        this.state.counters.filter((c) => c.value > 0).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
