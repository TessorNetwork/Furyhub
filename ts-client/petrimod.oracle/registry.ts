import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgPauseFeed } from "./types/oracle/tx";
import { MsgCreateFeed } from "./types/oracle/tx";
import { MsgEditFeed } from "./types/oracle/tx";
import { MsgStartFeed } from "./types/oracle/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/petrimod.oracle.MsgPauseFeed", MsgPauseFeed],
    ["/petrimod.oracle.MsgCreateFeed", MsgCreateFeed],
    ["/petrimod.oracle.MsgEditFeed", MsgEditFeed],
    ["/petrimod.oracle.MsgStartFeed", MsgStartFeed],
    
];

export { msgTypes }