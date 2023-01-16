import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgStake } from "./types/farm/tx";
import { MsgHarvest } from "./types/farm/tx";
import { MsgCreatePool } from "./types/farm/tx";
import { MsgAdjustPool } from "./types/farm/tx";
import { MsgDestroyPool } from "./types/farm/tx";
import { MsgCreatePoolWithCommunityPool } from "./types/farm/tx";
import { MsgUnstake } from "./types/farm/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/irismod.farm.MsgStake", MsgStake],
    ["/irismod.farm.MsgHarvest", MsgHarvest],
    ["/irismod.farm.MsgCreatePool", MsgCreatePool],
    ["/irismod.farm.MsgAdjustPool", MsgAdjustPool],
    ["/irismod.farm.MsgDestroyPool", MsgDestroyPool],
    ["/irismod.farm.MsgCreatePoolWithCommunityPool", MsgCreatePoolWithCommunityPool],
    ["/irismod.farm.MsgUnstake", MsgUnstake],
    
];

export { msgTypes }