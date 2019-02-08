import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {
  
  render() {
    const { id, name, gender, starred } = this.props;
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
           <div><i className={` fa  icon-gender fa-${gender} `}></i><span>{name}</span></div>
          <div>
            <small>xx friends in common</small>
          </div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction} ${styles.btnStarred}`}
                      onClick={() => this.props.starFriend(id)}>
            <i className={classnames('fa', {
              'fa-star': starred,
              'fa-star-o': !starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction} ${styles.btnDelete}`}
                    onClick={() => this.props.deleteFriend(id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired
};

export default FriendListItem
