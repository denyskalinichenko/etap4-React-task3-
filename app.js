class Message extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           messageIsActive : false
        };
        this.handleMessageButton = this.handleMessageButton.bind(this);
    }


    handleMessageButton() {
      this.setState({
         messageIsActive: !this.state.messageIsActive
      });
    }

    render() {
         //console.log(this.state.messageIsActive);
        const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed nobis voluptatem cumque totam quam. Molestiae neque, consequatur praesentium impedit expedita eius ratione laboriosam omnis voluptates a officiis consequuntur minima!"

        return (
            <>
            <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'Ukryj' : 'Pokaż'} 
            </button>
            <p>{this.state.messageIsActive && text}</p>
            {/* jeżeli "this.state.messageIsActive" jest "true" to zwraca to co jest po prawej stronie - "text", jeżeli "this.state.messageIsActive" jest "false" - nic nie zwraca */}
            </>
        )
    }
}

ReactDOM.render(<Message />, document.getElementById('root'));