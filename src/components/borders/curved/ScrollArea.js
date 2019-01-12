import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  // The number of pixels between the top of the viewport,
  // and the top of the scrollable area:
  topBuffer: PropTypes.number.isRequired,
  // The height, in pixels, of the scrollable area:
  areaHeight: PropTypes.number.isRequired,
  // We'll make the `scrollRatio` data available to its
  // children with a `children` render prop:
  children: PropTypes.func.isRequired,
};

const clamp = (val, min, max) =>
  Math.max(min, Math.min(max, val));

export default class ScrollArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollRatio: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(ev) {
    const { topBuffer, areaHeight } = this.props;

    const boundingBox = this.node.getBoundingClientRect();

    const distanceToTop = boundingBox.top - topBuffer;
    const pixelsScrolled = areaHeight - distanceToTop;

    let scrollRatio = pixelsScrolled / areaHeight;
    scrollRatio = clamp(scrollRatio, 0, 1);

    if (this.state.scrollRatio !== scrollRatio) {
      this.setState({ scrollRatio });
    }
  }

  render() {
    return (
      <div style={{padding:'0 0', background:this.props.background}} ref={node => this.node = node}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

ScrollArea.propTypes = propTypes;
