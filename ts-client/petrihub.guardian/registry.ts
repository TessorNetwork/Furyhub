import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgAddSuper } from "./types/guardian/tx";
import { MsgDeleteSuper } from "./types/guardian/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/petrihub.guardian.MsgAddSuper", MsgAddSuper],
    ["/petrihub.guardian.MsgDeleteSuper", MsgDeleteSuper],
    
];

export { msgTypes }