import { DAT_GHE, XOA } from "../constants/VeXemPhimConstants";

export const actDatGhe = (ghe) => ({
    type : DAT_GHE,
    ghe
})

export const actXoa = (ghe) => ({
    type : XOA,
    ghe
})