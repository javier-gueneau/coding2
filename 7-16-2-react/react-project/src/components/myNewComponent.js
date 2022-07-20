import React, {Component} from 'react';

class MyNewComponent extends Component{
    render(){
        return(
            <div>
                Hello this is my newComponent.js
                {this.props.someText}
            </div>
        )

    }
}

export default MyNewComponent;