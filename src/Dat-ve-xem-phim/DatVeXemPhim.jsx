import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import danhSachGhe from '../data/danhSachGhe.json'
import HangGhe from './HangGhe'
import ThongTinDatGhe from './ThongTinDatGhe'

export default class DatVeXemPhim extends Component {

    renderHangGhe = () => {
        return danhSachGhe.map((hangGhe, index) => {
            return (
                <HangGhe key={index} hangGhe={hangGhe} soHangGhe={index}/>
            )
        })
    }

    render() {
        return (
            <div className="bookingMovie bg">
                <div className="bg-screen">
                    <div className="row">
                        <div className="col-7 text-center">
                            <h1 className="text-warning mt-5">Dat ve xem phim</h1>
                            <h2 className="text-white">Man hinh</h2>
                            <div className="screen mx-auto"></div>
                            <div className="sapXepGhe mt-5">
                                {this.renderHangGhe()}
                            </div>
                        </div>
                        <div className="col-5 text-center text-white">
                            <h1 className="mt-5">Danh Sach Ghe Ban Chon</h1>
                            <ThongTinDatGhe/>                                                       
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
