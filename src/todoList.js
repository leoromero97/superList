import React from 'react';
import styles from './index.module.scss';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id} className={styles.lists}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList; 