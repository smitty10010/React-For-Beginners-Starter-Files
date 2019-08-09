import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import fishes from '../sample-fishes';
import Menu from './Menu';
import base from '../base';
class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };

    componentDidMount() {
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes',
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = (fish) => {
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes
        });
    };

    loadSampleFishes = () => {
        this.setState({
            fishes
        });
    };

    addToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Menu key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;