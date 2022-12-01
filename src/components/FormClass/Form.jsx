import { Component } from "react";
import { Button } from "./Button";
import { Input } from "./Input";


export class Form extends Component {

    state = {
        visible: true,
        count: 0,
        name: 'click'
    };

    componentDidMount() {
        console.log('did mount form')
    };

    handleVisible = () => {
        this.setState({ visible: !this.state.visible })

    };
    handleChangeName = (ev) => {
        this.setState({ name: ev.target.value })
    }
    handlChangCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return <div>
            <h2>Parent component</h2>
            <button onClick={this.handleVisible}>{this.state.visible ? 'hide' : 'visible'}
            </button>
            <br />
            <p>{this.state.count}</p>
            <button onClick={this.handlChangCount}>count +1</button>
            <h3>Child components</h3>
            {this.state.visible && <Button count={this.state.count} />}
            <br />
            <p>Name: {this.state.name}</p>
            <Input value={this.state.name} change={this.handleChangeName} />

        </div>
    }
}