import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button
            className="square"
            style={{
                border: props.isWinner ? '3px solid #999' : '1px solid #999',
            }}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                isWinner={this.props.winners[i]}
                onClick={() => this.props.onClick(i)}
                key={i}
            />
        );
    }

    render() {
        return (
            <div>
                {[0, 1, 2].map(i => {
                    return (
                        <div className="board-row" key={i}>
                            {
                                [0, 1, 2].map(j => {
                                    return this.renderSquare(i * 3 + j);
                                })}
                        </div>
                    )
                })}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
            winners: Array(9).fill(null),
            ascending: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const winner = calculateWinner(squares);
        let winners = Array(9).fill(null);
        if (winner) {
            winner.squares.forEach(v => winners[v] = true)
        }
        this.setState({
            history: history.concat([{
                squares: squares,
                pos: {
                    column: (i % 3) + 1,
                    row: Math.trunc(i / 3) + 1,
                }
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            winners: winners,
        });
    }

    jumpTo(step) {
        const winner = calculateWinner(this.state.history[step].squares);
        let winners = Array(9).fill(null);
        if (winner) {
            winner.squares.forEach(v => winners[v]=true);
        }
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            winners: winners,
        })
    }

    render() {
        const current = this.state.history[this.state.stepNumber];
        const history = this.state.ascending? this.state.history : this.state.history.slice(0).reverse();
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            let moveNum = this.state.ascending? move : history.length - (move+1);
            const desc = step.pos ?
                'Go to move in col #' + step.pos.column + ' and row #' + step.pos.row :
                'Go to game start';
            return (
                <li key={move}>
                    <button
                        onClick={() =>
                        {
                            this.jumpTo(moveNum);
                        }}
                        style={{fontWeight: (this.state.stepNumber === moveNum ? 'bold' : 'normal')}}
                    >
                        {desc}
                    </button>
                </li>
            )
        })

        let status;
        if (winner) {
            status = 'Winner: ' + winner.symbol;
        } else {
            status = this.state.stepNumber === 9 ? 'Draw' : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        winners={this.state.winners}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <label className="switch">
                        <input type="checkbox" onChange={() =>
                        {this.setState({
                            ascending: !this.state.ascending,
                        });
                        }}/>
                        <span className="slider round"/>
                    </label>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game/>
    ,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                symbol: squares[a],
                squares: [a, b, c],
            }
        }
    }
    return null;
}
