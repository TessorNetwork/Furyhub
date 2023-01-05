import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUnstake } from "./types/farm/tx";
import { MsgCreatePool } from "./types/farm/tx";
import { MsgHarvest } from "./types/farm/tx";
import { MsgAdjustPool } from "./types/farm/tx";
import { MsgCreatePoolWithCommunityPool } from "./types/farm/tx";
import { MsgDestroyPool } from "./types/farm/tx";
import { MsgStake } from "./types/farm/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/petrimod.farm.MsgUnstake", MsgUnstake],
    ["/petrimod.farm.MsgCreatePool", MsgCreatePool],
    ["/petrimod.farm.MsgHarvest", MsgHarvest],
    ["/petrimod.farm.MsgAdjustPool", MsgAdjustPool],
    ["/petrimod.farm.MsgCreatePoolWithCommunityPool", MsgCreatePoolWithCommunityPool],
    ["/petrimod.farm.MsgDestroyPool", MsgDestroyPool],
    ["/petrimod.farm.MsgStake", MsgStake],
    
];

export { msgTypes }