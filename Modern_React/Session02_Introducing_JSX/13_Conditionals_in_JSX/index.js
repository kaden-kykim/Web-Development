function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
		const num = getNum();
		let msg, msg2;
		if (num === 7) {
			msg = "Good!"
			msg2 =
				<div>
					<h2>CONGRATS YOU WIN!</h2>
					<img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
				</div>
		} else {
			msg = "Bad!"
			msg2 = <p>Sorry You Lose!</p>
		}
        return (
            <div>
                <h1>Your number is: {num}</h1>
				{msg}
				{msg2}
                <p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
                {/* {
                    num === 7
                        ? <img src=""/>
                        : null
                } */}
				{num === 7 && <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />}
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));