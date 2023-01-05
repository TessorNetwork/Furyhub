import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRemoveLiquidity } from "./types/coinswap/tx";
import { MsgAddUnilateralLiquidity } from "./types/coinswap/tx";
import { MsgSwapOrder } from "./types/coinswap/tx";
import { MsgAddLiquidity } from "./types/coinswap/tx";
import { MsgRemoveUnilateralLiquidity } from "./types/coinswap/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/petrimod.coinswap.MsgRemoveLiquidity", MsgRemoveLiquidity],
    ["/petrimod.coinswap.MsgAddUnilateralLiquidity", MsgAddUnilateralLiquidity],
    ["/petrimod.coinswap.MsgSwapOrder", MsgSwapOrder],
    ["/petrimod.coinswap.MsgAddLiquidity", MsgAddLiquidity],
    ["/petrimod.coinswap.MsgRemoveUnilateralLiquidity", MsgRemoveUnilateralLiquidity],
    
];

export { msgTypes }