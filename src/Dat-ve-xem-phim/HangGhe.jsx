import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actDatGhe } from '../redux/actions/VeXemPhimActions'


class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let gheDangChon = ''
            let count = this.props.datVe.findIndex(p => p.soGhe === ghe.soGhe)
            if(count !== -1) {
                gheDangChon = 'gheDangChon'
            }


            return (
                <div className="col-1" key={index}>
                    <button className={ghe.daDat ? 'gheDuocChon' : `ghe ${gheDangChon}`} onClick={() => this.props.DatGhe(ghe)}>{ghe.soGhe}</button>
                </div>               
            )
        })
    }

    renderHangGhe = () => {
        if(this.props.soHangGhe === 0){
            return this.renderSoCot()
        }else {
            return this.renderGhe()
        }
    }

    renderSoCot = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            return (
                <div className="col-1" key={index}>
                    <span> {ghe.soGhe} </span>
                </div>
            )
        })
    }

    render() {
        let {hangGhe} = this.props
        return (
            <div className="row text-left ml-3 d-flex align-items-center">
                <div className="col-1">
                    {hangGhe.hang} 
                </div>               
                <div className="row col-11" style={{fontSize: '20px'}}>
                    {this.renderHangGhe()}
                </div>                       
            </div>
        )
    }
}

const mapStateToProps = state => ({
    datVe : state.DatVeXemPhimReducer.datVe
})

const mapDispatchToProps = dispatch => ({
    DatGhe : (ghe) => {
        dispatch(actDatGhe(ghe))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)
