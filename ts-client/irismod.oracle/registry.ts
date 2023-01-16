import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgStartFeed } from "./types/oracle/tx";
import { MsgEditFeed } from "./types/oracle/tx";
import { MsgCreateFeed } from "./types/oracle/tx";
import { MsgPauseFeed } from "./types/oracle/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/irismod.oracle.MsgStartFeed", MsgStartFeed],
    ["/irismod.oracle.MsgEditFeed", MsgEditFeed],
    ["/irismod.oracle.MsgCreateFeed", MsgCreateFeed],
    ["/irismod.oracle.MsgPauseFeed", MsgPauseFeed],
    
];

export { msgTypes }