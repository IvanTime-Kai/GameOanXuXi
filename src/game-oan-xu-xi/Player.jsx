import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { actChon } from '../redux/actions/actions'

class Player extends Component {

    renderKeoBuaBao = () => {
        return this.props.arrDatCuoc.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <button className={item.status ? 'select' : ''} onClick={() => this.props.chon(item.ma)}>
                        <img src={item.hinhAnh} alt="anh" width="50px" height="50px"></img>
                    </button>
                </div>
            )
        })
    }


    render() {
        return (
            <div className="player">
                <div>
                    <div className="think mx-auto">
                        <img src={this.props.arrDatCuoc.find(item => item.status === true).hinhAnh} alt="think" width="130px" height="130px" />
                    </div>
                    <div className="speech-bubble"></div>
                    <img src="./images/player.png" alt="player" width="40%" height="40%" />
                </div>
                <div className="row w-50 mx-auto">
                    {this.renderKeoBuaBao()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    arrDatCuoc: state.GameOanXuXiReducer.arrDatCuoc
})

const mapDispatchToProps = dispatch => ({
    chon : ma => {
        dispatch(actChon(ma))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)
