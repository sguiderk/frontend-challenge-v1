import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import Pagination from "../components/Pagination";

class FriendList extends Component {
   constructor(props) {
      
       super(props);
       var exampleItems = this.props.friends;
       if(this.props.friends.lentght !== 0 ){
        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
      }
                
    } 
 
    onChangePage(pageOfItems) {
        // update state with new page of items
         if( pageOfItems.lentght !== 0 )
          this.setState({ pageOfItems: pageOfItems });
    }

    checkpagination(){
     console.log(this.props.friends);
      if(this.props.friends.lentght !== 0 ){
        return (<Pagination items={this.props.friends} onChangePage={this.onChangePage} />);
      }
      
    }


  render () {
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
        <div>{ this.checkpagination() }</div>  
      </div>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
