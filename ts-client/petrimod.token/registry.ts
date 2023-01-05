import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgBurnToken } from "./types/token/tx";
import { MsgIssueToken } from "./types/token/tx";
import { MsgEditToken } from "./types/token/tx";
import { MsgMintToken } from "./types/token/tx";
import { MsgTransferTokenOwner } from "./types/token/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/petrimod.token.MsgBurnToken", MsgBurnToken],
    ["/petrimod.token.MsgIssueToken", MsgIssueToken],
    ["/petrimod.token.MsgEditToken", MsgEditToken],
    ["/petrimod.token.MsgMintToken", MsgMintToken],
    ["/petrimod.token.MsgTransferTokenOwner", MsgTransferTokenOwner],
    
];

export { msgTypes }