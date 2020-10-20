import React from 'react';
import styles from './index.module.scss';
import imagen1 from './assets/img2.svg';
import TodoList from './todoList';
import Header from './header';
import End from './end';

class Home extends React.Component { 
  constructor (props) {
  super(props);
  this.state = { items: [], text: '' };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.onClick = this.onClick.bind(this);
  }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      let newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
      console.log(newItem);
    }
  
    onClick(e) {
      e.preventDefault();
      this.setState(state => ({
        items: state.items.slice(1,4),
        text: ''
      }));
      console.log(e);
    }
  
  render() {
    return (
        <div className={styles.containerHome}>
        <Header />
        <img id="home" src={imagen1} className={styles.logo} title="Imagen 1" alt="Imagen 1" />
        <h2 className={styles.subTitle}>Lista:</h2>
        <p>Total de productos: <span className={styles.text}>{this.state.items.length}</span> </p>
        <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <p className={styles.text} htmlFor="new-todo">
            ¿Qué necesitas comprar?
            </p>
            <div className={styles.container2}>
            <input id="new-todo" className={styles.inputOne} onChange={this.handleChange} value={this.state.text} />
            </div>
              <div className={styles.container2}>
                <button className={styles.buttonPrimary}> <span>AGREGAR</span></button>
              </div>
          </form>
  
          <div className={styles.container2}>
             <button className={styles.buttonDelete} onClick={this.onClick}> <span>ELIMINAR</span></button>
          </div>
          <div className={styles.conatainerFooter}>
          <End />
          </div>

        </div>
      );
      }
    }
  
  export default Home;