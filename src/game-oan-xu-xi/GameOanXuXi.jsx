import React, { Component } from 'react'
import './style.css'
import Player from './Player'
import KetQua from './KetQua'
import Computer from './Computer'
import {connect} from 'react-redux'
import { actPlayGame, actRandom } from '../redux/actions/actions'

class GameOanXuXi extends Component {
    render() {
        return (
            <div className="game-container">
                <div className="row text-center pt-5">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQua />
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-success" onClick={() => this.props.playGame()}>Play game</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    playGame : () => {
        let count = 0
        let loading = setInterval(() => {
            dispatch(actRandom())  
            count ++;
            if(count === 20){
                clearInterval(loading);
                dispatch(actPlayGame())
            }
        }, 50);       
    }
})

export default connect(null, mapDispatchToProps)(GameOanXuXi)
