//external import
import React from 'react';

//internal import
import Clock from './clock'

class Widget extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div>

        <Clock />
        <Tabs tabs={generateTabInfo()} />

      </div>
    );
  }

  generateTabInfo() {
    let tabInfo = [
      { title: 'one', content: 'there can be only one' },
      { title: 'two', content: 'there are actually two' },
      { title: 'three', content: 'psst mee too 3' }
    ];
    return tabInfo;
  }
}

export default Widget;