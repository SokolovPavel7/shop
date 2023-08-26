import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Кресло',
          img: 'armchair.webp',
          desc: 'современный дизайн',
          category: 'chairs',
          price: '45.99',
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'современный дизайн',
          category: 'tables',
          price: '119.25',
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpg',
          desc: 'современный дизайн',
          category: 'sofa',
          price: '499.00',
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'wall-light.jpg',
          desc: 'современный дизайн',
          category: 'light',
          price: '24.99',
        },
        {
          id: 5,
          title: 'Cтенка',
          img: 'wall.jpg',
          desc: 'современный дизайн',
          category: 'wall',
          price: '329.00',
        },
        {
          id: 6,
          title: 'Люстра',
          img: 'chandelier.jpg',
          desc: 'современный дизайн',
          category: 'ligth',
          price: '299.89',
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
