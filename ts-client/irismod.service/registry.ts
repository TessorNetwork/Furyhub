import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateRequestContext } from "./types/service/tx";
import { MsgDefineService } from "./types/service/tx";
import { MsgDisableServiceBinding } from "./types/service/tx";
import { MsgEnableServiceBinding } from "./types/service/tx";
import { MsgStartRequestContext } from "./types/service/tx";
import { MsgUpdateServiceBinding } from "./types/service/tx";
import { MsgCallService } from "./types/service/tx";
import { MsgPauseRequestContext } from "./types/service/tx";
import { MsgBindService } from "./types/service/tx";
import { MsgRefundServiceDeposit } from "./types/service/tx";
import { MsgRespondService } from "./types/service/tx";
import { MsgKillRequestContext } from "./types/service/tx";
import { MsgSetWithdrawAddress } from "./types/service/tx";
import { MsgWithdrawEarnedFees } from "./types/service/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/irismod.service.MsgUpdateRequestContext", MsgUpdateRequestContext],
    ["/irismod.service.MsgDefineService", MsgDefineService],
    ["/irismod.service.MsgDisableServiceBinding", MsgDisableServiceBinding],
    ["/irismod.service.MsgEnableServiceBinding", MsgEnableServiceBinding],
    ["/irismod.service.MsgStartRequestContext", MsgStartRequestContext],
    ["/irismod.service.MsgUpdateServiceBinding", MsgUpdateServiceBinding],
    ["/irismod.service.MsgCallService", MsgCallService],
    ["/irismod.service.MsgPauseRequestContext", MsgPauseRequestContext],
    ["/irismod.service.MsgBindService", MsgBindService],
    ["/irismod.service.MsgRefundServiceDeposit", MsgRefundServiceDeposit],
    ["/irismod.service.MsgRespondService", MsgRespondService],
    ["/irismod.service.MsgKillRequestContext", MsgKillRequestContext],
    ["/irismod.service.MsgSetWithdrawAddress", MsgSetWithdrawAddress],
    ["/irismod.service.MsgWithdrawEarnedFees", MsgWithdrawEarnedFees],
    
];

export { msgTypes }