import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgTransferTokenOwner } from "./types/token/tx";
import { MsgEditToken } from "./types/token/tx";
import { MsgBurnToken } from "./types/token/tx";
import { MsgMintToken } from "./types/token/tx";
import { MsgIssueToken } from "./types/token/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/irismod.token.MsgTransferTokenOwner", MsgTransferTokenOwner],
    ["/irismod.token.MsgEditToken", MsgEditToken],
    ["/irismod.token.MsgBurnToken", MsgBurnToken],
    ["/irismod.token.MsgMintToken", MsgMintToken],
    ["/irismod.token.MsgIssueToken", MsgIssueToken],
    
];

export { msgTypes }