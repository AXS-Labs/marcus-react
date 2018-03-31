import React from 'react';

class CurrentTime extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { headline, time } = this.props;

    return (
      <div className="abc-123">
        <h1>{ headline }</h1>
        <p>{ time.toString() }</p>
      </div>
    );
  }
}

export default CurrentTime;
