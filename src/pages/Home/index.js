import React from 'react';
import LoginForm from './LoginForm';
import PageLoading from '../../components/PageLoading';
import withPageLoading from '../../hocs/withPageLoading';

class Home extends React.Component {

  constructor () {
    super();
    this.state = {
      pageLoading: {
        fonts: true
      }
    };
  }

  componentDidMount () {
    this.props.loadFonts(['Dancing Script']).then(() => {
      this.setState({
        pageLoading: { ...Object.assign(this.state.pageLoading, { fonts: false }) }
      });
    }).catch();
  }

  render () {
    return (<>
     <PageLoading target={this.state.pageLoading}>
        <LoginForm/>
     </PageLoading>
    </>);
  }
}

export default withPageLoading(Home);
