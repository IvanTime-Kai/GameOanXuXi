import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        let {soBanChoi, soBanThang, ketQua} = this.props
        return (
            <div className="ketqua">
                <p className="text-danger px-5">{ketQua}</p>
                <h1 className="text-success px-5">Số bàn thắng : {soBanThang}</h1>
                <h1 className="text-success px-5">Số bàn chơi : { soBanChoi }</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    soBanThang : state.GameOanXuXiReducer.soBanThang,
    soBanChoi : state.GameOanXuXiReducer.soBanChoi,
    ketQua : state.GameOanXuXiReducer.ketQua
})

export default connect(mapStateToProps)(KetQua)

