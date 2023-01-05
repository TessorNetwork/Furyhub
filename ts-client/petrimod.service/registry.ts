import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRefundServiceDeposit } from "./types/service/tx";
import { MsgRespondService } from "./types/service/tx";
import { MsgPauseRequestContext } from "./types/service/tx";
import { MsgUpdateServiceBinding } from "./types/service/tx";
import { MsgEnableServiceBinding } from "./types/service/tx";
import { MsgCallService } from "./types/service/tx";
import { MsgStartRequestContext } from "./types/service/tx";
import { MsgDisableServiceBinding } from "./types/service/tx";
import { MsgKillRequestContext } from "./types/service/tx";
import { MsgSetWithdrawAddress } from "./types/service/tx";
import { MsgWithdrawEarnedFees } from "./types/service/tx";
import { MsgDefineService } from "./types/service/tx";
import { MsgBindService } from "./types/service/tx";
import { MsgUpdateRequestContext } from "./types/service/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/petrimod.service.MsgRefundServiceDeposit", MsgRefundServiceDeposit],
    ["/petrimod.service.MsgRespondService", MsgRespondService],
    ["/petrimod.service.MsgPauseRequestContext", MsgPauseRequestContext],
    ["/petrimod.service.MsgUpdateServiceBinding", MsgUpdateServiceBinding],
    ["/petrimod.service.MsgEnableServiceBinding", MsgEnableServiceBinding],
    ["/petrimod.service.MsgCallService", MsgCallService],
    ["/petrimod.service.MsgStartRequestContext", MsgStartRequestContext],
    ["/petrimod.service.MsgDisableServiceBinding", MsgDisableServiceBinding],
    ["/petrimod.service.MsgKillRequestContext", MsgKillRequestContext],
    ["/petrimod.service.MsgSetWithdrawAddress", MsgSetWithdrawAddress],
    ["/petrimod.service.MsgWithdrawEarnedFees", MsgWithdrawEarnedFees],
    ["/petrimod.service.MsgDefineService", MsgDefineService],
    ["/petrimod.service.MsgBindService", MsgBindService],
    ["/petrimod.service.MsgUpdateRequestContext", MsgUpdateRequestContext],
    
];

export { msgTypes }