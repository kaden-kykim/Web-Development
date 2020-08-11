class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const result = `You ${(s1 === s2) && (s1 === s3) ? "win" : "lose"}!`;
        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{result}</p>
            </div>
        );
    }
}
