import React, { Component } from "react";

class counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondarybtn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <div
          className="button btn btn-danger btm-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          X
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    return this.props.counter.value ? this.props.counter.value : "Zero";
  }
}

export default counter;
