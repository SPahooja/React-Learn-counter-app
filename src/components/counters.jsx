import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;

    return (
      <div>
        <div className="button btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
