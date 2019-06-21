import React from 'react';


class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  
  render() {


    return (
      <div className="tabs-wrapper">
        <h2>Tabs</h2>

        <ul>
          {
            //loop through and generate h1s in lis
            this.props.tabInfo.map
          }
        </ul>

        {/* loop through and generate articles */}

      </div>
    )
  }
}

export default Tabs;