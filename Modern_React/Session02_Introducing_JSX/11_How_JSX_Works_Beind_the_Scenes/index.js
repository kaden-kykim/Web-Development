class JSXDemo extends React.Component {
    render() {
        return React.createElement("div", null, React.createElement("h1", null, "My Image!"), React.createElement("img", {
                src: "https://images.unsplash.com/photo-1596880630573-28c5371f7eb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}));
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));