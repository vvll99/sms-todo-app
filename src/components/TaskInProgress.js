import React from 'react';
import { Link } from 'react-router-dom';

const link = {
  textAlign: 'center',
  textDecoration: 'none'
};
const completed = {
  width: '20px',
  color: 'green',
  fontWeight: 'bold',
  display: 'inline-block',
  background: 'lightgrey'
};
const remove = {
  width:'20px',
  color: 'red',
  fontWeight: 'bold',
  display: 'inline-block',
  background: 'lightgrey'
};
const tableRow = {
  borderBottom: '1px dotted grey',
  height: '40px'
};
const td1 = {
  padding: '6px 0',
  textAlign: 'center',
  width: '75px'
};
const td2 = {
  padding: '6px'
};
const td3 = {
  padding: '6px',
  width: '200px'
};
const td4 = {
  padding: '6px 0',
  textAlign: 'center',
  width: '65px'
};

export default class TaskInProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inEditMode: false
    }
  }
  render() {
    const selectedUser = this.props.users.filter((user) => user.id === this.props.user)[0].name;
    const presentationMode = (
      <tr style={tableRow}>
        <td style={td1}>
          <a style={link} onClick={() => this.props.handleCompletedTask(this.props.taskId)}>
            <span style={completed}>+</span>
          </a>
          <span style={{width: '10px', display: 'inline-block'}}></span>
          <a style={link} onClick={() => this.props.handleRemovedTask(this.props.taskId)}>
            <span style={remove}>-</span>
          </a>
        </td>
        <td style={td2}>{this.props.title}</td>
        <td style={td3}>
          <Link to={`/user/${this.props.user}`}>
            {selectedUser}
          </Link>
        </td>
        <td style={td4}>
          <a onClick={() => console.log('edit')}>Edit</a>
        </td>
      </tr>
    );
    const editMode = null;
    return !this.state.inEditMode ? presentationMode : editMode;
  }
}