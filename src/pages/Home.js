import React from 'react';

import {withRouter} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(<>
            <h1>The Pale Blue Dot</h1>
        </>);
    }
}

export default withRouter(Home);