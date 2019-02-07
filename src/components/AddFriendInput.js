import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  // initialize the propos 
  constructor (props) {

    super(props);
    this.state = {
      name: this.props.name || '',
      gender: this.props.gender || 'male',
      errormessage:'',
    };

  }

  // check the validity of the field name and gender
  isValid () {

    const { name, gender } = this.state;
    if( name === '' || gender === '' ) {
      return false;
    }else{
      return true;
    }

  }
  
  // set value after change select
  handleChange (event) {

    const { name, value } = event.target;
    this.setState({ [name]: value });

  }

  // submit data 
  handleSubmit (e) {

       // reset the error message
       this.setState({ errormessage: ''});

       const { name, gender } = this.state;

      if (this.isValid() || e.which === 13 ) {
          // add data for action addFriend
          this.props.addFriend(name, gender);
          // refresh the state with empty value
          this.setState({ name: '', gender: '' });
       }else{
          this.setState({ errormessage: 'Please Type required field'});
       }

  }

  render () {
    const { name, gender, errormessage } = this.state;
    return (
      <div className={styles.addFriendContainer} >

        <input
          type="text"
          name="name"
          autoFocus="true"
          className={classnames('form-control', styles.addFriendInput,  name ==='' && errormessage !==''  ? styles.ErrorRequired : ""  ) }
          placeholder="Type the name of a friend"
          value={name}
          onChange={this.handleChange.bind(this)} />

        <button  className={classnames('btn btn-default', styles.addFriendButton)}   onClick={this.handleSubmit.bind(this)} >
           <i className="fa fa-plus"></i><span>Add</span>
        </button>

        <select
          name="gender"
          className={classnames('form-control', styles.addFriendSelect, gender ==='' && errormessage !==''  ? styles.ErrorRequired : "" )}
          value={gender}
          onChange={this.handleChange.bind(this)}>

            <option key={0} hidden>Chose your Gender...</option>
            <option key={1} value="male">male</option>
            <option key={2} value="female">female</option>
            
        </select>

         <div className={styles.ErrorMessage}>{ this.state.errormessage }</div>

      </div>
    );
  }


}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
