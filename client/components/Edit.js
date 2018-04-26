import React, { Component, PropTypes } from 'react';
import styles from './Edit.css';

export default class Edit extends Component {
  checkEnter = (e) => {

  }
  finishEdit = (e) => {

  }
  renderDelete = () => {

  }
  renderValue = () => {
    const { value, onDelete, onValueClick } = this.props;

    return (
      <div>
        <span className={styles.value} onClick={onValueClick}>{value}</span>
        {onDelete ? this.renderDelete() : null}
      </div>
    );
  }
  renderEdit = () => {

  }
  render() {
    return (
      <div className={this.props.className}>
        {this.props.editing ? this.renderEdit() : this.renderValue()}
      </div>
    );
  }
}

Edit.propTypes = {
  value: PropTypes.string,
  onUpdate: PropTypes.func,
  onValueClick: PropTypes.func,
  onDelete: PropTypes.func,
  editing: PropTypes.bool,
};