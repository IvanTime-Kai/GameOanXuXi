import { DAT_GHE, XOA } from "../constants/VeXemPhimConstants"

const stateVeXemPhim = {
    datVe : []
}

const DatVeXemPhimReducer = (state = stateVeXemPhim, action) => {
    switch(action.type){
        case DAT_GHE : {
            let datVeUpdate = [...state.datVe]
            let index = datVeUpdate.findIndex(p => p.soGhe === action.ghe.soGhe)
            if(index !== -1){
                datVeUpdate.splice(index, 1)
            }else {
                datVeUpdate.push(action.ghe)
            }
            state.datVe = datVeUpdate
            return {...state}
        }
        case XOA : {
            let datVeUpdate = [...state.datVe]
            let index = datVeUpdate.findIndex(p => p.soGhe === action.ghe.soGhe)
            if(index !== -1){
                datVeUpdate.splice(index, 1);
            }
            return {...state, datVe : datVeUpdate}
        }
        default:
            
    }
    return {...state}
}

export default DatVeXemPhimReducer
