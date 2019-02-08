import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import Pagination from "../components/Pagination";

class FriendList extends Component {
   constructor(props) {
      
       super(props);
       var exampleItems = this.props.friends;
       
        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
      

    } 
 
    onChangePage(pageOfItems) {
       
        // update state with new page of items
         this.setState({ pageOfItems: pageOfItems });
    }

    checkExistanceOfItems(){

      if(this.props.friends.length !== 0 ){
        return (
          <div>

             <ul className={styles.friendList}>
                  {this.state.pageOfItems.map((friend, index) => {
                  return (
                    <FriendListItem
                      key={index}
                      id={index}
                      {...friend} // { date contains name, gender, starred }
                      {...this.props.actions} // { addFriend, deleteFriend, starFriend }
                      />
                  );
                })     }
            </ul>

            <Pagination items={this.props.friends} onChangePage={this.onChangePage} />

          </div>
          );
      }else
       return (<div className={styles.friendListEmpty} ><span>No friend yet.</span></div>);
      
    }


  render () {
    return (
      <div>
        <div>{ this.checkExistanceOfItems() }</div>  
      </div>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
