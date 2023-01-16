import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateHTLC } from "./types/htlc/tx";
import { MsgClaimHTLC } from "./types/htlc/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/irismod.htlc.MsgCreateHTLC", MsgCreateHTLC],
    ["/irismod.htlc.MsgClaimHTLC", MsgClaimHTLC],
    
];

export { msgTypes }