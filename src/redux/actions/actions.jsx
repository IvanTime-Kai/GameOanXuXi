import { CHON_KEO_BUA_BAO, PLAY_GAME, RANDOM } from "../constants/constants";

export const actChon = (ma) => ({
    type : CHON_KEO_BUA_BAO,
    ma
})

export const actRandom = () => ({
    type : RANDOM,
})

export const actPlayGame = () => ({
    type : PLAY_GAME
})