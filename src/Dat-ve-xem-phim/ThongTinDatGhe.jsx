import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import { connect } from 'react-redux'
import { actXoa } from '../redux/actions/VeXemPhimActions'

class ThongTinDatGhe extends Component {

    renderThongTinGhe = () => {
        return this.props.datVe.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => this.props.Xoa(item) }>X</button>
                    </td>
                </tr>
            )
        })
    }

    render() {

        let tongTien = this.props.datVe.reduce((sum, item) => {
            return sum += item.gia
        },0)

        console.log(tongTien);

        return (
            <div>
                <div className="pl-5 pt-5">
                    <div className="d-flex">
                        <div className="gheDuocChon"></div>
                        <h2>Ghe Da Chon</h2>
                    </div>
                    <div className="d-flex">
                        <div className="gheDangChon"></div>
                        <h2>Ghe Dang Chon</h2>
                    </div>
                    <div className="d-flex">
                        <div className="gheDuocChon bg-white"></div>
                        <h2>Ghe Chua Dat</h2>
                    </div>
                </div>
                <table className="table ml-5 mt-5" style={{ borderCollapse: 'collapse', width: '80%' }}>
                    <thead className="text-white">
                        <tr>
                            <th>So Ghe</th>
                            <th>Gia</th>
                            <th>Huy</th>
                        </tr>
                    </thead>
                    <tbody className="text-warning">
                        {this.renderThongTinGhe()}
                        <tr>
                            <td>Tong Tien</td>
                            <td>{tongTien}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    datVe: state.DatVeXemPhimReducer.datVe
})

const mapDispatchToProps = dispatch => ({
    Xoa : (ghe) => {
        dispatch(actXoa(ghe))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(ThongTinDatGhe)
