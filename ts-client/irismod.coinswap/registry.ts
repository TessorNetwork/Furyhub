import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSwapOrder } from "./types/coinswap/tx";
import { MsgRemoveUnilateralLiquidity } from "./types/coinswap/tx";
import { MsgAddUnilateralLiquidity } from "./types/coinswap/tx";
import { MsgRemoveLiquidity } from "./types/coinswap/tx";
import { MsgAddLiquidity } from "./types/coinswap/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/irismod.coinswap.MsgSwapOrder", MsgSwapOrder],
    ["/irismod.coinswap.MsgRemoveUnilateralLiquidity", MsgRemoveUnilateralLiquidity],
    ["/irismod.coinswap.MsgAddUnilateralLiquidity", MsgAddUnilateralLiquidity],
    ["/irismod.coinswap.MsgRemoveLiquidity", MsgRemoveLiquidity],
    ["/irismod.coinswap.MsgAddLiquidity", MsgAddLiquidity],
    
];

export { msgTypes }