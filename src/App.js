import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
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
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === 'all') {
      return this.setState({ currentItems: this.state.items });
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
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
