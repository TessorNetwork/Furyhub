import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgTransferDenom } from "./types/mt/tx";
import { MsgEditMT } from "./types/mt/tx";
import { MsgIssueDenom } from "./types/mt/tx";
import { MsgTransferMT } from "./types/mt/tx";
import { MsgMintMT } from "./types/mt/tx";
import { MsgBurnMT } from "./types/mt/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/irismod.mt.MsgTransferDenom", MsgTransferDenom],
    ["/irismod.mt.MsgEditMT", MsgEditMT],
    ["/irismod.mt.MsgIssueDenom", MsgIssueDenom],
    ["/irismod.mt.MsgTransferMT", MsgTransferMT],
    ["/irismod.mt.MsgMintMT", MsgMintMT],
    ["/irismod.mt.MsgBurnMT", MsgBurnMT],
    
];

export { msgTypes }