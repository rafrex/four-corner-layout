import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Corner from './Corner';

const hashRoutes = {
  'top-left': true,
  'top-right': true,
  'bottom-left': true,
  'bottom-right': true,
};

class FourCornerExpand extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      expanded: hashRoutes[props.location.hash.replace('#', '')] === true,
    };
    this.handleAll = this.handleAll.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      expanded: hashRoutes[nextProps.location.hash.replace('#', '')] === true,
    });
  }

  handleAll() {
    if (this.state.expanded) this.setState({ expanded: false });
  }

  handleExpand() {
    if (!this.state.expanded) this.setState({ expanded: true });
  }

  render() {
    const height = this.state.expanded ? '200%' : '100%';
    const width = this.state.expanded ? '200%' : '100%';

    return (
      <div style={{ height, width }}>
        {!this.state.expanded &&
          <Link to="/" style={{ display: 'block', position: 'absolute', margin: '5px 7px' }}>
            Home
          </Link>
        }
        <Corner
          title="Top Left" expandable expanded={this.state.expanded} location={location}
          allCB={this.handleAll} expandCB={this.handleExpand}
          style={{ backgroundColor: '#D0D0D0' }}
        />
        <Corner
          title="Top Right" expandable expanded={this.state.expanded} location={location}
          allCB={this.handleAll} expandCB={this.handleExpand}
          style={{ backgroundColor: '#C0C0C0' }}
        />
        <Corner
          title="Bottom Left" expandable expanded={this.state.expanded} location={location}
          allCB={this.handleAll} expandCB={this.handleExpand}
          style={{ backgroundColor: '#B0B0B0' }}
        />
        <Corner
          title="Bottom Right" expandable expanded={this.state.expanded} location={location}
          allCB={this.handleAll} expandCB={this.handleExpand}
          style={{ backgroundColor: '#A0A0A0' }}
        />
      </div>
    );
  }
}

export default FourCornerExpand;