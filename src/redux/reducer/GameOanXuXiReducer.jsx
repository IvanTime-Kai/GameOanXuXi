import { CHON_KEO_BUA_BAO, PLAY_GAME, RANDOM } from "../constants/constants"

const initialState = {
    arrDatCuoc : [
        {ma : 'keo', hinhAnh : './images/keo.png', status : false},
        {ma : 'bua', hinhAnh : './images/bua.png', status : true},
        {ma : 'bao', hinhAnh : './images/bao.png', status : false},
    ],
    soBanThang : 0,
    soBanChoi : 0,
    ketQua : 'I am iron man, i love you 3000!!!',
    computer : {ma : 'bao', hinhAnh : './images/bao.png'}
}

export const GameOanXuXiReducer = (state = initialState, action) => {
    const {type, ma} = action
    switch (type) {

    case CHON_KEO_BUA_BAO:
        let arrDatCuocUpdate = []
        arrDatCuocUpdate = state.arrDatCuoc.map((item, index) => {
            return {...item, status : false}
        })
        console.log(arrDatCuocUpdate);
        let index = arrDatCuocUpdate.findIndex(p => p.ma === ma);
        if(index !== -1){
            arrDatCuocUpdate[index].status = true
        }
        return { ...state, arrDatCuoc : arrDatCuocUpdate}
    case RANDOM :       
        let soNgauNhien = Math.floor(Math.random() * 3) 
        console.log(soNgauNhien);
        return {...state, computer : state.arrDatCuoc[soNgauNhien]}
    case PLAY_GAME : {
        state.soBanChoi += 1;
        let arrDatCuocUpdate = [...state.arrDatCuoc]
        let datCuoc = arrDatCuocUpdate.find(item => item.status === true)
        console.log(datCuoc);
        switch(datCuoc.ma){
            case 'keo' : 
                if(state.computer.ma === 'bao'){
                    state.soBanThang += 1
                    state.ketQua = 'Win!!!'
                }else if(state.computer.ma === 'keo'){
                    state.ketQua = 'Hoà!!!'
                }else if(state.computer.ma === 'bao'){
                    state.ketQua = 'Lose!!!'
                }
            break;
            case 'bua' : 
                if(state.computer.ma === 'keo'){
                    state.soBanThang += 1
                    state.ketQua = 'Win!!!'
                }else if(state.computer.ma === 'bua'){
                    state.ketQua = 'Hoà!!!'
                }else if(state.computer.ma === 'bao'){
                    state.ketQua = 'Lose!!!'
                }
            break;
            case 'bao' : 
                if(state.computer.ma === 'bua'){
                    state.soBanThang += 1
                    state.ketQua = 'Win!!!'
                }else if(state.computer.ma === 'bao'){
                    state.ketQua = 'Hoà!!!'
                }else if(state.computer.ma === 'keo'){
                    state.ketQua = 'Lose!!!'
                }
            break;
            default : 
                                
        }
        return {...state}    
    }
        
    default:
        return state
    }
}
