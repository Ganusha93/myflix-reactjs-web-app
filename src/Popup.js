
import React from 'react'
class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <div className="poster__trailer">{<iframe  src={this.props.src} />}</div>
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
  }

  export default Popup;