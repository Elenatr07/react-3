import { createRef, PureComponent } from "react";

export class Button extends PureComponent {
    constructor(props) {
        super(props)
        this.interval = null
        this.state = {
            count: this.props.count
        };
        this.myRef = createRef()
    }

    componentDidMount() {
        console.log('button did mount')
        //this.interval = setInterval(() => console.log(1), 1000)
        console.log(this.myRef.current.innerHTML)
    }

    componentDidUpdate(nextProps, nextState, snapshot) {
        console.log('button did update', snapshot)
    }

    componentWillUnmount() {
        console.log('button will unmount')
        clearInterval(this.interval)
    }
    //shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.count !== this.props.count) {
    //    return true
    // }
    //return false
    //}
    static getDerivedStateFromProps(nextProps, nextState) {
        if (nextProps.count < 5) {
            return { count: nextProps.count }
        }
        return null
    }
    //getSnapshotBeforeUpdate() {
    // return { value: 999 }
    //}
    render() {
        return <div>
            <p ref={this.myRef}>{this.state.count}</p>
            <button disabled={this.props.disabled} onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>

        </div>
    }
}