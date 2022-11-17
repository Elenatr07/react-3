import { Component } from "react";

export class Button extends Component {
    constructor(props) {
        super(props)
        this.interval = null
        this.state = {
            count: 1
        }
    }

    componentDidMount() {
        console.log('button did mount')
        //this.interval = setInterval(() => console.log(1), 1000)

    }

    componentDidUpdate() {
        console.log('did update')
    }

    componentWillUnmount() {
        console.log('button will unmount')
        clearInterval(this.interval)
    }
    render() {
        return <div>
            <p>{this.state.count}</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>

        </div>
    }
}