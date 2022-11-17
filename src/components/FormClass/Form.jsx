import { Component } from "react";
import { Button } from "../Button";


export class Form extends Component {
    state = {
        visible: true,
    }

    componentDidMount() {
        console.log('did mount form')
    }

    handleVisible = () => {
        this.setState({ visible: !this.state.visible })

    }
    render() {
        return <div>
            <h2>Class component</h2>
            <button onClick={this.handleVisible}>{this.state.visible ? 'hide' : 'visible'}</button>
            {this.state.visible && <Button />}

        </div>
    }
}