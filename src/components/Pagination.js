import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Pagination extends React.PureComponent {

  static propTypes = {
    dots: PropTypes.number,
    index: PropTypes.number,
    onChangeIndex: PropTypes.func
  }

  static defaultProps = {
    dots: 1,
    index: 0,
    onChangeIndex: () => {}
  }

  getDotArray() {
    const {dots} = this.props;
    const dotArray = [];

    for (let i = 0; i < dots; i++) {
      dotArray.push(i);
    }

    return dotArray;
  }

  handleChangeIndex = index => () => {
    this.props.onChangeIndex(index);
  }

  render() {
    const {index: currentIndex} = this.props;

    return (
      <div className="dot-pagination">
        {this.getDotArray().map(value => (
          <button
            key={value}
            type="button"
            className={
              classNames({
                'pagination-button': true,
                'current': (currentIndex === value)
              })
            }
            onClick={this.handleChangeIndex(value)}
          >
          </button>
        ))}
      </div>
    )
  }

}
