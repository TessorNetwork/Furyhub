import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgIssueDenom } from "./types/mt/tx";
import { MsgBurnMT } from "./types/mt/tx";
import { MsgTransferMT } from "./types/mt/tx";
import { MsgEditMT } from "./types/mt/tx";
import { MsgMintMT } from "./types/mt/tx";
import { MsgTransferDenom } from "./types/mt/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/irismod.mt.MsgIssueDenom", MsgIssueDenom],
    ["/irismod.mt.MsgBurnMT", MsgBurnMT],
    ["/irismod.mt.MsgTransferMT", MsgTransferMT],
    ["/irismod.mt.MsgEditMT", MsgEditMT],
    ["/irismod.mt.MsgMintMT", MsgMintMT],
    ["/irismod.mt.MsgTransferDenom", MsgTransferDenom],
    
];

export { msgTypes }