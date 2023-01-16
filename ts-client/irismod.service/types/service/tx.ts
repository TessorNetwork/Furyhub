/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "irismod.service";

/** MsgDefineService defines an SDK message for defining a new service */
export interface MsgDefineService {
  name: string;
  description: string;
  tags: string[];
  author: string;
  authorDescription: string;
  schemas: string;
}

/** MsgDefineServiceResponse defines the Msg/DefineService response type */
export interface MsgDefineServiceResponse {
}

/** MsgBindService defines an SDK message for binding to an existing service */
export interface MsgBindService {
  serviceName: string;
  provider: string;
  deposit: Coin[];
  pricing: string;
  qos: number;
  options: string;
  owner: string;
}

/** MsgBindServiceResponse defines the Msg/BindService response type */
export interface MsgBindServiceResponse {
}

/**
 * MsgUpdateServiceBinding defines an SDK message for updating an existing
 * service binding
 */
export interface MsgUpdateServiceBinding {
  serviceName: string;
  provider: string;
  deposit: Coin[];
  pricing: string;
  qos: number;
  options: string;
  owner: string;
}

/**
 * MsgUpdateServiceBindingResponse defines the Msg/UpdateServiceBinding response
 * type
 */
export interface MsgUpdateServiceBindingResponse {
}

/**
 * MsgSetWithdrawAddress defines an SDK message to set the withdrawal address
 * for a provider
 */
export interface MsgSetWithdrawAddress {
  owner: string;
  withdrawAddress: string;
}

/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type
 */
export interface MsgSetWithdrawAddressResponse {
}

/** MsgDisableServiceBinding defines an SDK message to disable a service binding */
export interface MsgDisableServiceBinding {
  serviceName: string;
  provider: string;
  owner: string;
}

/**
 * MsgDisableServiceBindingResponse defines the Msg/DisableServiceBinding
 * response type
 */
export interface MsgDisableServiceBindingResponse {
}

/** MsgEnableServiceBinding defines an SDK message to enable a service binding */
export interface MsgEnableServiceBinding {
  serviceName: string;
  provider: string;
  deposit: Coin[];
  owner: string;
}

/**
 * MsgEnableServiceBindingResponse defines the Msg/EnableServiceBinding response
 * type
 */
export interface MsgEnableServiceBindingResponse {
}

/**
 * MsgRefundServiceDeposit defines an SDK message to refund deposit from a
 * service binding
 */
export interface MsgRefundServiceDeposit {
  serviceName: string;
  provider: string;
  owner: string;
}

/**
 * MsgRefundServiceDepositResponse defines the Msg/RefundServiceDeposit response
 * type
 */
export interface MsgRefundServiceDepositResponse {
}

/** MsgCallService defines an SDK message to initiate a service request context */
export interface MsgCallService {
  serviceName: string;
  providers: string[];
  consumer: string;
  input: string;
  serviceFeeCap: Coin[];
  timeout: number;
  repeated: boolean;
  repeatedFrequency: number;
  repeatedTotal: number;
}

/** MsgCallServiceResponse defines the Msg/CallService response type */
export interface MsgCallServiceResponse {
  requestContextId: string;
}

/** MsgRespondService defines an SDK message to respond a service request */
export interface MsgRespondService {
  requestId: string;
  provider: string;
  result: string;
  output: string;
}

/** MsgRespondServiceResponse defines the Msg/RespondService response type */
export interface MsgRespondServiceResponse {
}

/** MsgPauseRequestContext defines an SDK message to pause a service request */
export interface MsgPauseRequestContext {
  requestContextId: string;
  consumer: string;
}

/**
 * MsgPauseRequestContextResponse defines the Msg/PauseRequestContext response
 * type
 */
export interface MsgPauseRequestContextResponse {
}

/** MsgStartRequestContext defines an SDK message to resume a service request */
export interface MsgStartRequestContext {
  requestContextId: string;
  consumer: string;
}

/**
 * MsgStartRequestContextResponse defines the Msg/StartRequestContext response
 * type
 */
export interface MsgStartRequestContextResponse {
}

/** MsgKillRequestContext defines an SDK message to terminate a service request */
export interface MsgKillRequestContext {
  requestContextId: string;
  consumer: string;
}

/**
 * MsgKillRequestContextResponse defines the Msg/KillRequestContext response
 * type
 */
export interface MsgKillRequestContextResponse {
}

/**
 * MsgUpdateRequestContext defines an SDK message to update a service request
 * context
 */
export interface MsgUpdateRequestContext {
  requestContextId: string;
  providers: string[];
  consumer: string;
  serviceFeeCap: Coin[];
  timeout: number;
  repeatedFrequency: number;
  repeatedTotal: number;
}

/**
 * MsgUpdateRequestContextResponse defines the Msg/UpdateRequestContext response
 * type
 */
export interface MsgUpdateRequestContextResponse {
}

/**
 * MsgWithdrawEarnedFees defines an SDK message to withdraw the fees earned by
 * the provider or owner
 */
export interface MsgWithdrawEarnedFees {
  owner: string;
  provider: string;
}

/**
 * MsgWithdrawEarnedFeesResponse defines the Msg/WithdrawEarnedFees response
 * type
 */
export interface MsgWithdrawEarnedFeesResponse {
}

function createBaseMsgDefineService(): MsgDefineService {
  return { name: "", description: "", tags: [], author: "", authorDescription: "", schemas: "" };
}

export const MsgDefineService = {
  encode(message: MsgDefineService, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!);
    }
    if (message.author !== "") {
      writer.uint32(34).string(message.author);
    }
    if (message.authorDescription !== "") {
      writer.uint32(42).string(message.authorDescription);
    }
    if (message.schemas !== "") {
      writer.uint32(50).string(message.schemas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefineService {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefineService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.tags.push(reader.string());
          break;
        case 4:
          message.author = reader.string();
          break;
        case 5:
          message.authorDescription = reader.string();
          break;
        case 6:
          message.schemas = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDefineService {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      author: isSet(object.author) ? String(object.author) : "",
      authorDescription: isSet(object.authorDescription) ? String(object.authorDescription) : "",
      schemas: isSet(object.schemas) ? String(object.schemas) : "",
    };
  },

  toJSON(message: MsgDefineService): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.author !== undefined && (obj.author = message.author);
    message.authorDescription !== undefined && (obj.authorDescription = message.authorDescription);
    message.schemas !== undefined && (obj.schemas = message.schemas);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDefineService>, I>>(object: I): MsgDefineService {
    const message = createBaseMsgDefineService();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.author = object.author ?? "";
    message.authorDescription = object.authorDescription ?? "";
    message.schemas = object.schemas ?? "";
    return message;
  },
};

function createBaseMsgDefineServiceResponse(): MsgDefineServiceResponse {
  return {};
}

export const MsgDefineServiceResponse = {
  encode(_: MsgDefineServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefineServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefineServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDefineServiceResponse {
    return {};
  },

  toJSON(_: MsgDefineServiceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDefineServiceResponse>, I>>(_: I): MsgDefineServiceResponse {
    const message = createBaseMsgDefineServiceResponse();
    return message;
  },
};

function createBaseMsgBindService(): MsgBindService {
  return { serviceName: "", provider: "", deposit: [], pricing: "", qos: 0, options: "", owner: "" };
}

export const MsgBindService = {
  encode(message: MsgBindService, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.pricing !== "") {
      writer.uint32(34).string(message.pricing);
    }
    if (message.qos !== 0) {
      writer.uint32(40).uint64(message.qos);
    }
    if (message.options !== "") {
      writer.uint32(50).string(message.options);
    }
    if (message.owner !== "") {
      writer.uint32(58).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindService {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.deposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.pricing = reader.string();
          break;
        case 5:
          message.qos = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.options = reader.string();
          break;
        case 7:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBindService {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : [],
      pricing: isSet(object.pricing) ? String(object.pricing) : "",
      qos: isSet(object.qos) ? Number(object.qos) : 0,
      options: isSet(object.options) ? String(object.options) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgBindService): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.deposit) {
      obj.deposit = message.deposit.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.deposit = [];
    }
    message.pricing !== undefined && (obj.pricing = message.pricing);
    message.qos !== undefined && (obj.qos = Math.round(message.qos));
    message.options !== undefined && (obj.options = message.options);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBindService>, I>>(object: I): MsgBindService {
    const message = createBaseMsgBindService();
    message.serviceName = object.serviceName ?? "";
    message.provider = object.provider ?? "";
    message.deposit = object.deposit?.map((e) => Coin.fromPartial(e)) || [];
    message.pricing = object.pricing ?? "";
    message.qos = object.qos ?? 0;
    message.options = object.options ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgBindServiceResponse(): MsgBindServiceResponse {
  return {};
}

export const MsgBindServiceResponse = {
  encode(_: MsgBindServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBindServiceResponse {
    return {};
  },

  toJSON(_: MsgBindServiceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBindServiceResponse>, I>>(_: I): MsgBindServiceResponse {
    const message = createBaseMsgBindServiceResponse();
    return message;
  },
};

function createBaseMsgUpdateServiceBinding(): MsgUpdateServiceBinding {
  return { serviceName: "", provider: "", deposit: [], pricing: "", qos: 0, options: "", owner: "" };
}

export const MsgUpdateServiceBinding = {
  encode(message: MsgUpdateServiceBinding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.pricing !== "") {
      writer.uint32(34).string(message.pricing);
    }
    if (message.qos !== 0) {
      writer.uint32(40).uint64(message.qos);
    }
    if (message.options !== "") {
      writer.uint32(50).string(message.options);
    }
    if (message.owner !== "") {
      writer.uint32(58).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateServiceBinding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateServiceBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.deposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.pricing = reader.string();
          break;
        case 5:
          message.qos = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.options = reader.string();
          break;
        case 7:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateServiceBinding {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : [],
      pricing: isSet(object.pricing) ? String(object.pricing) : "",
      qos: isSet(object.qos) ? Number(object.qos) : 0,
      options: isSet(object.options) ? String(object.options) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgUpdateServiceBinding): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.deposit) {
      obj.deposit = message.deposit.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.deposit = [];
    }
    message.pricing !== undefined && (obj.pricing = message.pricing);
    message.qos !== undefined && (obj.qos = Math.round(message.qos));
    message.options !== undefined && (obj.options = message.options);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateServiceBinding>, I>>(object: I): MsgUpdateServiceBinding {
    const message = createBaseMsgUpdateServiceBinding();
    message.serviceName = object.serviceName ?? "";
    message.provider = object.provider ?? "";
    message.deposit = object.deposit?.map((e) => Coin.fromPartial(e)) || [];
    message.pricing = object.pricing ?? "";
    message.qos = object.qos ?? 0;
    message.options = object.options ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgUpdateServiceBindingResponse(): MsgUpdateServiceBindingResponse {
  return {};
}

export const MsgUpdateServiceBindingResponse = {
  encode(_: MsgUpdateServiceBindingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateServiceBindingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateServiceBindingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateServiceBindingResponse {
    return {};
  },

  toJSON(_: MsgUpdateServiceBindingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateServiceBindingResponse>, I>>(_: I): MsgUpdateServiceBindingResponse {
    const message = createBaseMsgUpdateServiceBindingResponse();
    return message;
  },
};

function createBaseMsgSetWithdrawAddress(): MsgSetWithdrawAddress {
  return { owner: "", withdrawAddress: "" };
}

export const MsgSetWithdrawAddress = {
  encode(message: MsgSetWithdrawAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetWithdrawAddress {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
    };
  },

  toJSON(message: MsgSetWithdrawAddress): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddress>, I>>(object: I): MsgSetWithdrawAddress {
    const message = createBaseMsgSetWithdrawAddress();
    message.owner = object.owner ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
};

function createBaseMsgSetWithdrawAddressResponse(): MsgSetWithdrawAddressResponse {
  return {};
}

export const MsgSetWithdrawAddressResponse = {
  encode(_: MsgSetWithdrawAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetWithdrawAddressResponse {
    return {};
  },

  toJSON(_: MsgSetWithdrawAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddressResponse>, I>>(_: I): MsgSetWithdrawAddressResponse {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  },
};

function createBaseMsgDisableServiceBinding(): MsgDisableServiceBinding {
  return { serviceName: "", provider: "", owner: "" };
}

export const MsgDisableServiceBinding = {
  encode(message: MsgDisableServiceBinding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableServiceBinding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableServiceBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDisableServiceBinding {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgDisableServiceBinding): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.provider !== undefined && (obj.provider = message.provider);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDisableServiceBinding>, I>>(object: I): MsgDisableServiceBinding {
    const message = createBaseMsgDisableServiceBinding();
    message.serviceName = object.serviceName ?? "";
    message.provider = object.provider ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgDisableServiceBindingResponse(): MsgDisableServiceBindingResponse {
  return {};
}

export const MsgDisableServiceBindingResponse = {
  encode(_: MsgDisableServiceBindingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableServiceBindingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableServiceBindingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDisableServiceBindingResponse {
    return {};
  },

  toJSON(_: MsgDisableServiceBindingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDisableServiceBindingResponse>, I>>(
    _: I,
  ): MsgDisableServiceBindingResponse {
    const message = createBaseMsgDisableServiceBindingResponse();
    return message;
  },
};

function createBaseMsgEnableServiceBinding(): MsgEnableServiceBinding {
  return { serviceName: "", provider: "", deposit: [], owner: "" };
}

export const MsgEnableServiceBinding = {
  encode(message: MsgEnableServiceBinding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableServiceBinding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableServiceBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.deposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnableServiceBinding {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : [],
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgEnableServiceBinding): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.deposit) {
      obj.deposit = message.deposit.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.deposit = [];
    }
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnableServiceBinding>, I>>(object: I): MsgEnableServiceBinding {
    const message = createBaseMsgEnableServiceBinding();
    message.serviceName = object.serviceName ?? "";
    message.provider = object.provider ?? "";
    message.deposit = object.deposit?.map((e) => Coin.fromPartial(e)) || [];
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgEnableServiceBindingResponse(): MsgEnableServiceBindingResponse {
  return {};
}

export const MsgEnableServiceBindingResponse = {
  encode(_: MsgEnableServiceBindingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableServiceBindingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableServiceBindingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgEnableServiceBindingResponse {
    return {};
  },

  toJSON(_: MsgEnableServiceBindingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnableServiceBindingResponse>, I>>(_: I): MsgEnableServiceBindingResponse {
    const message = createBaseMsgEnableServiceBindingResponse();
    return message;
  },
};

function createBaseMsgRefundServiceDeposit(): MsgRefundServiceDeposit {
  return { serviceName: "", provider: "", owner: "" };
}

export const MsgRefundServiceDeposit = {
  encode(message: MsgRefundServiceDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundServiceDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefundServiceDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRefundServiceDeposit {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgRefundServiceDeposit): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.provider !== undefined && (obj.provider = message.provider);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRefundServiceDeposit>, I>>(object: I): MsgRefundServiceDeposit {
    const message = createBaseMsgRefundServiceDeposit();
    message.serviceName = object.serviceName ?? "";
    message.provider = object.provider ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgRefundServiceDepositResponse(): MsgRefundServiceDepositResponse {
  return {};
}

export const MsgRefundServiceDepositResponse = {
  encode(_: MsgRefundServiceDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundServiceDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefundServiceDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRefundServiceDepositResponse {
    return {};
  },

  toJSON(_: MsgRefundServiceDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRefundServiceDepositResponse>, I>>(_: I): MsgRefundServiceDepositResponse {
    const message = createBaseMsgRefundServiceDepositResponse();
    return message;
  },
};

function createBaseMsgCallService(): MsgCallService {
  return {
    serviceName: "",
    providers: [],
    consumer: "",
    input: "",
    serviceFeeCap: [],
    timeout: 0,
    repeated: false,
    repeatedFrequency: 0,
    repeatedTotal: 0,
  };
}

export const MsgCallService = {
  encode(message: MsgCallService, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    for (const v of message.providers) {
      writer.uint32(18).string(v!);
    }
    if (message.consumer !== "") {
      writer.uint32(26).string(message.consumer);
    }
    if (message.input !== "") {
      writer.uint32(34).string(message.input);
    }
    for (const v of message.serviceFeeCap) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.timeout !== 0) {
      writer.uint32(48).int64(message.timeout);
    }
    if (message.repeated === true) {
      writer.uint32(56).bool(message.repeated);
    }
    if (message.repeatedFrequency !== 0) {
      writer.uint32(64).uint64(message.repeatedFrequency);
    }
    if (message.repeatedTotal !== 0) {
      writer.uint32(72).int64(message.repeatedTotal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCallService {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCallService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.providers.push(reader.string());
          break;
        case 3:
          message.consumer = reader.string();
          break;
        case 4:
          message.input = reader.string();
          break;
        case 5:
          message.serviceFeeCap.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.timeout = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.repeated = reader.bool();
          break;
        case 8:
          message.repeatedFrequency = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.repeatedTotal = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCallService {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => String(e)) : [],
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      input: isSet(object.input) ? String(object.input) : "",
      serviceFeeCap: Array.isArray(object?.serviceFeeCap) ? object.serviceFeeCap.map((e: any) => Coin.fromJSON(e)) : [],
      timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
      repeated: isSet(object.repeated) ? Boolean(object.repeated) : false,
      repeatedFrequency: isSet(object.repeatedFrequency) ? Number(object.repeatedFrequency) : 0,
      repeatedTotal: isSet(object.repeatedTotal) ? Number(object.repeatedTotal) : 0,
    };
  },

  toJSON(message: MsgCallService): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    if (message.providers) {
      obj.providers = message.providers.map((e) => e);
    } else {
      obj.providers = [];
    }
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.input !== undefined && (obj.input = message.input);
    if (message.serviceFeeCap) {
      obj.serviceFeeCap = message.serviceFeeCap.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.serviceFeeCap = [];
    }
    message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
    message.repeated !== undefined && (obj.repeated = message.repeated);
    message.repeatedFrequency !== undefined && (obj.repeatedFrequency = Math.round(message.repeatedFrequency));
    message.repeatedTotal !== undefined && (obj.repeatedTotal = Math.round(message.repeatedTotal));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCallService>, I>>(object: I): MsgCallService {
    const message = createBaseMsgCallService();
    message.serviceName = object.serviceName ?? "";
    message.providers = object.providers?.map((e) => e) || [];
    message.consumer = object.consumer ?? "";
    message.input = object.input ?? "";
    message.serviceFeeCap = object.serviceFeeCap?.map((e) => Coin.fromPartial(e)) || [];
    message.timeout = object.timeout ?? 0;
    message.repeated = object.repeated ?? false;
    message.repeatedFrequency = object.repeatedFrequency ?? 0;
    message.repeatedTotal = object.repeatedTotal ?? 0;
    return message;
  },
};

function createBaseMsgCallServiceResponse(): MsgCallServiceResponse {
  return { requestContextId: "" };
}

export const MsgCallServiceResponse = {
  encode(message: MsgCallServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestContextId !== "") {
      writer.uint32(10).string(message.requestContextId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCallServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCallServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestContextId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCallServiceResponse {
    return { requestContextId: isSet(object.requestContextId) ? String(object.requestContextId) : "" };
  },

  toJSON(message: MsgCallServiceResponse): unknown {
    const obj: any = {};
    message.requestContextId !== undefined && (obj.requestContextId = message.requestContextId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCallServiceResponse>, I>>(object: I): MsgCallServiceResponse {
    const message = createBaseMsgCallServiceResponse();
    message.requestContextId = object.requestContextId ?? "";
    return message;
  },
};

function createBaseMsgRespondService(): MsgRespondService {
  return { requestId: "", provider: "", result: "", output: "" };
}

export const MsgRespondService = {
  encode(message: MsgRespondService, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.result !== "") {
      writer.uint32(26).string(message.result);
    }
    if (message.output !== "") {
      writer.uint32(34).string(message.output);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRespondService {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRespondService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.result = reader.string();
          break;
        case 4:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRespondService {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      result: isSet(object.result) ? String(object.result) : "",
      output: isSet(object.output) ? String(object.output) : "",
    };
  },

  toJSON(message: MsgRespondService): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.provider !== undefined && (obj.provider = message.provider);
    message.result !== undefined && (obj.result = message.result);
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRespondService>, I>>(object: I): MsgRespondService {
    const message = createBaseMsgRespondService();
    message.requestId = object.requestId ?? "";
    message.provider = object.provider ?? "";
    message.result = object.result ?? "";
    message.output = object.output ?? "";
    return message;
  },
};

function createBaseMsgRespondServiceResponse(): MsgRespondServiceResponse {
  return {};
}

export const MsgRespondServiceResponse = {
  encode(_: MsgRespondServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRespondServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRespondServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRespondServiceResponse {
    return {};
  },

  toJSON(_: MsgRespondServiceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRespondServiceResponse>, I>>(_: I): MsgRespondServiceResponse {
    const message = createBaseMsgRespondServiceResponse();
    return message;
  },
};

function createBaseMsgPauseRequestContext(): MsgPauseRequestContext {
  return { requestContextId: "", consumer: "" };
}

export const MsgPauseRequestContext = {
  encode(message: MsgPauseRequestContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestContextId !== "") {
      writer.uint32(10).string(message.requestContextId);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseRequestContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseRequestContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestContextId = reader.string();
          break;
        case 2:
          message.consumer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPauseRequestContext {
    return {
      requestContextId: isSet(object.requestContextId) ? String(object.requestContextId) : "",
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
    };
  },

  toJSON(message: MsgPauseRequestContext): unknown {
    const obj: any = {};
    message.requestContextId !== undefined && (obj.requestContextId = message.requestContextId);
    message.consumer !== undefined && (obj.consumer = message.consumer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPauseRequestContext>, I>>(object: I): MsgPauseRequestContext {
    const message = createBaseMsgPauseRequestContext();
    message.requestContextId = object.requestContextId ?? "";
    message.consumer = object.consumer ?? "";
    return message;
  },
};

function createBaseMsgPauseRequestContextResponse(): MsgPauseRequestContextResponse {
  return {};
}

export const MsgPauseRequestContextResponse = {
  encode(_: MsgPauseRequestContextResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseRequestContextResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseRequestContextResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgPauseRequestContextResponse {
    return {};
  },

  toJSON(_: MsgPauseRequestContextResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPauseRequestContextResponse>, I>>(_: I): MsgPauseRequestContextResponse {
    const message = createBaseMsgPauseRequestContextResponse();
    return message;
  },
};

function createBaseMsgStartRequestContext(): MsgStartRequestContext {
  return { requestContextId: "", consumer: "" };
}

export const MsgStartRequestContext = {
  encode(message: MsgStartRequestContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestContextId !== "") {
      writer.uint32(10).string(message.requestContextId);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartRequestContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartRequestContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestContextId = reader.string();
          break;
        case 2:
          message.consumer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStartRequestContext {
    return {
      requestContextId: isSet(object.requestContextId) ? String(object.requestContextId) : "",
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
    };
  },

  toJSON(message: MsgStartRequestContext): unknown {
    const obj: any = {};
    message.requestContextId !== undefined && (obj.requestContextId = message.requestContextId);
    message.consumer !== undefined && (obj.consumer = message.consumer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStartRequestContext>, I>>(object: I): MsgStartRequestContext {
    const message = createBaseMsgStartRequestContext();
    message.requestContextId = object.requestContextId ?? "";
    message.consumer = object.consumer ?? "";
    return message;
  },
};

function createBaseMsgStartRequestContextResponse(): MsgStartRequestContextResponse {
  return {};
}

export const MsgStartRequestContextResponse = {
  encode(_: MsgStartRequestContextResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartRequestContextResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartRequestContextResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgStartRequestContextResponse {
    return {};
  },

  toJSON(_: MsgStartRequestContextResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStartRequestContextResponse>, I>>(_: I): MsgStartRequestContextResponse {
    const message = createBaseMsgStartRequestContextResponse();
    return message;
  },
};

function createBaseMsgKillRequestContext(): MsgKillRequestContext {
  return { requestContextId: "", consumer: "" };
}

export const MsgKillRequestContext = {
  encode(message: MsgKillRequestContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestContextId !== "") {
      writer.uint32(10).string(message.requestContextId);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgKillRequestContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgKillRequestContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestContextId = reader.string();
          break;
        case 2:
          message.consumer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgKillRequestContext {
    return {
      requestContextId: isSet(object.requestContextId) ? String(object.requestContextId) : "",
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
    };
  },

  toJSON(message: MsgKillRequestContext): unknown {
    const obj: any = {};
    message.requestContextId !== undefined && (obj.requestContextId = message.requestContextId);
    message.consumer !== undefined && (obj.consumer = message.consumer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgKillRequestContext>, I>>(object: I): MsgKillRequestContext {
    const message = createBaseMsgKillRequestContext();
    message.requestContextId = object.requestContextId ?? "";
    message.consumer = object.consumer ?? "";
    return message;
  },
};

function createBaseMsgKillRequestContextResponse(): MsgKillRequestContextResponse {
  return {};
}

export const MsgKillRequestContextResponse = {
  encode(_: MsgKillRequestContextResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgKillRequestContextResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgKillRequestContextResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgKillRequestContextResponse {
    return {};
  },

  toJSON(_: MsgKillRequestContextResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgKillRequestContextResponse>, I>>(_: I): MsgKillRequestContextResponse {
    const message = createBaseMsgKillRequestContextResponse();
    return message;
  },
};

function createBaseMsgUpdateRequestContext(): MsgUpdateRequestContext {
  return {
    requestContextId: "",
    providers: [],
    consumer: "",
    serviceFeeCap: [],
    timeout: 0,
    repeatedFrequency: 0,
    repeatedTotal: 0,
  };
}

export const MsgUpdateRequestContext = {
  encode(message: MsgUpdateRequestContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestContextId !== "") {
      writer.uint32(10).string(message.requestContextId);
    }
    for (const v of message.providers) {
      writer.uint32(18).string(v!);
    }
    if (message.consumer !== "") {
      writer.uint32(26).string(message.consumer);
    }
    for (const v of message.serviceFeeCap) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.timeout !== 0) {
      writer.uint32(40).int64(message.timeout);
    }
    if (message.repeatedFrequency !== 0) {
      writer.uint32(48).uint64(message.repeatedFrequency);
    }
    if (message.repeatedTotal !== 0) {
      writer.uint32(56).int64(message.repeatedTotal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRequestContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRequestContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestContextId = reader.string();
          break;
        case 2:
          message.providers.push(reader.string());
          break;
        case 3:
          message.consumer = reader.string();
          break;
        case 4:
          message.serviceFeeCap.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.timeout = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.repeatedFrequency = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.repeatedTotal = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRequestContext {
    return {
      requestContextId: isSet(object.requestContextId) ? String(object.requestContextId) : "",
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => String(e)) : [],
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      serviceFeeCap: Array.isArray(object?.serviceFeeCap) ? object.serviceFeeCap.map((e: any) => Coin.fromJSON(e)) : [],
      timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
      repeatedFrequency: isSet(object.repeatedFrequency) ? Number(object.repeatedFrequency) : 0,
      repeatedTotal: isSet(object.repeatedTotal) ? Number(object.repeatedTotal) : 0,
    };
  },

  toJSON(message: MsgUpdateRequestContext): unknown {
    const obj: any = {};
    message.requestContextId !== undefined && (obj.requestContextId = message.requestContextId);
    if (message.providers) {
      obj.providers = message.providers.map((e) => e);
    } else {
      obj.providers = [];
    }
    message.consumer !== undefined && (obj.consumer = message.consumer);
    if (message.serviceFeeCap) {
      obj.serviceFeeCap = message.serviceFeeCap.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.serviceFeeCap = [];
    }
    message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
    message.repeatedFrequency !== undefined && (obj.repeatedFrequency = Math.round(message.repeatedFrequency));
    message.repeatedTotal !== undefined && (obj.repeatedTotal = Math.round(message.repeatedTotal));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateRequestContext>, I>>(object: I): MsgUpdateRequestContext {
    const message = createBaseMsgUpdateRequestContext();
    message.requestContextId = object.requestContextId ?? "";
    message.providers = object.providers?.map((e) => e) || [];
    message.consumer = object.consumer ?? "";
    message.serviceFeeCap = object.serviceFeeCap?.map((e) => Coin.fromPartial(e)) || [];
    message.timeout = object.timeout ?? 0;
    message.repeatedFrequency = object.repeatedFrequency ?? 0;
    message.repeatedTotal = object.repeatedTotal ?? 0;
    return message;
  },
};

function createBaseMsgUpdateRequestContextResponse(): MsgUpdateRequestContextResponse {
  return {};
}

export const MsgUpdateRequestContextResponse = {
  encode(_: MsgUpdateRequestContextResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRequestContextResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRequestContextResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateRequestContextResponse {
    return {};
  },

  toJSON(_: MsgUpdateRequestContextResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateRequestContextResponse>, I>>(_: I): MsgUpdateRequestContextResponse {
    const message = createBaseMsgUpdateRequestContextResponse();
    return message;
  },
};

function createBaseMsgWithdrawEarnedFees(): MsgWithdrawEarnedFees {
  return { owner: "", provider: "" };
}

export const MsgWithdrawEarnedFees = {
  encode(message: MsgWithdrawEarnedFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawEarnedFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawEarnedFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawEarnedFees {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
    };
  },

  toJSON(message: MsgWithdrawEarnedFees): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawEarnedFees>, I>>(object: I): MsgWithdrawEarnedFees {
    const message = createBaseMsgWithdrawEarnedFees();
    message.owner = object.owner ?? "";
    message.provider = object.provider ?? "";
    return message;
  },
};

function createBaseMsgWithdrawEarnedFeesResponse(): MsgWithdrawEarnedFeesResponse {
  return {};
}

export const MsgWithdrawEarnedFeesResponse = {
  encode(_: MsgWithdrawEarnedFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawEarnedFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawEarnedFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawEarnedFeesResponse {
    return {};
  },

  toJSON(_: MsgWithdrawEarnedFeesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawEarnedFeesResponse>, I>>(_: I): MsgWithdrawEarnedFeesResponse {
    const message = createBaseMsgWithdrawEarnedFeesResponse();
    return message;
  },
};

/** Msg defines the oracle Msg service */
export interface Msg {
  /** DefineService defines a method for define a new service */
  DefineService(request: MsgDefineService): Promise<MsgDefineServiceResponse>;
  /** BindService defines a method for bind a server */
  BindService(request: MsgBindService): Promise<MsgBindServiceResponse>;
  /** UpdateServiceBinding defines a method for update a service binding */
  UpdateServiceBinding(request: MsgUpdateServiceBinding): Promise<MsgUpdateServiceBindingResponse>;
  /** SetWithdrawAddress defines a method for setting a withdraw address */
  SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
  /** EnableServiceBinding defines a method for enabling a service binding */
  EnableServiceBinding(request: MsgEnableServiceBinding): Promise<MsgEnableServiceBindingResponse>;
  /** DisableServiceBinding defines a method for disabling a service binding */
  DisableServiceBinding(request: MsgDisableServiceBinding): Promise<MsgDisableServiceBindingResponse>;
  /** RefundServiceDeposit defines a method for refunding a fee */
  RefundServiceDeposit(request: MsgRefundServiceDeposit): Promise<MsgRefundServiceDepositResponse>;
  /** CallService defines a method for calling a service */
  CallService(request: MsgCallService): Promise<MsgCallServiceResponse>;
  /** RespondService defines a method for responding a service */
  RespondService(request: MsgRespondService): Promise<MsgRespondServiceResponse>;
  /** PauseRequestContext defines a method for pausing a service call */
  PauseRequestContext(request: MsgPauseRequestContext): Promise<MsgPauseRequestContextResponse>;
  /** StartRequestContext defines a method for starting a service call */
  StartRequestContext(request: MsgStartRequestContext): Promise<MsgStartRequestContextResponse>;
  /** KillRequestContext defines a method for killing a service call */
  KillRequestContext(request: MsgKillRequestContext): Promise<MsgKillRequestContextResponse>;
  /** UpdateRequestContext defines a method for updating a service call */
  UpdateRequestContext(request: MsgUpdateRequestContext): Promise<MsgUpdateRequestContextResponse>;
  /** WithdrawEarnedFees defines a method for Withdrawing a earned fees */
  WithdrawEarnedFees(request: MsgWithdrawEarnedFees): Promise<MsgWithdrawEarnedFeesResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DefineService = this.DefineService.bind(this);
    this.BindService = this.BindService.bind(this);
    this.UpdateServiceBinding = this.UpdateServiceBinding.bind(this);
    this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this);
    this.EnableServiceBinding = this.EnableServiceBinding.bind(this);
    this.DisableServiceBinding = this.DisableServiceBinding.bind(this);
    this.RefundServiceDeposit = this.RefundServiceDeposit.bind(this);
    this.CallService = this.CallService.bind(this);
    this.RespondService = this.RespondService.bind(this);
    this.PauseRequestContext = this.PauseRequestContext.bind(this);
    this.StartRequestContext = this.StartRequestContext.bind(this);
    this.KillRequestContext = this.KillRequestContext.bind(this);
    this.UpdateRequestContext = this.UpdateRequestContext.bind(this);
    this.WithdrawEarnedFees = this.WithdrawEarnedFees.bind(this);
  }
  DefineService(request: MsgDefineService): Promise<MsgDefineServiceResponse> {
    const data = MsgDefineService.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "DefineService", data);
    return promise.then((data) => MsgDefineServiceResponse.decode(new _m0.Reader(data)));
  }

  BindService(request: MsgBindService): Promise<MsgBindServiceResponse> {
    const data = MsgBindService.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "BindService", data);
    return promise.then((data) => MsgBindServiceResponse.decode(new _m0.Reader(data)));
  }

  UpdateServiceBinding(request: MsgUpdateServiceBinding): Promise<MsgUpdateServiceBindingResponse> {
    const data = MsgUpdateServiceBinding.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "UpdateServiceBinding", data);
    return promise.then((data) => MsgUpdateServiceBindingResponse.decode(new _m0.Reader(data)));
  }

  SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse> {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "SetWithdrawAddress", data);
    return promise.then((data) => MsgSetWithdrawAddressResponse.decode(new _m0.Reader(data)));
  }

  EnableServiceBinding(request: MsgEnableServiceBinding): Promise<MsgEnableServiceBindingResponse> {
    const data = MsgEnableServiceBinding.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "EnableServiceBinding", data);
    return promise.then((data) => MsgEnableServiceBindingResponse.decode(new _m0.Reader(data)));
  }

  DisableServiceBinding(request: MsgDisableServiceBinding): Promise<MsgDisableServiceBindingResponse> {
    const data = MsgDisableServiceBinding.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "DisableServiceBinding", data);
    return promise.then((data) => MsgDisableServiceBindingResponse.decode(new _m0.Reader(data)));
  }

  RefundServiceDeposit(request: MsgRefundServiceDeposit): Promise<MsgRefundServiceDepositResponse> {
    const data = MsgRefundServiceDeposit.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "RefundServiceDeposit", data);
    return promise.then((data) => MsgRefundServiceDepositResponse.decode(new _m0.Reader(data)));
  }

  CallService(request: MsgCallService): Promise<MsgCallServiceResponse> {
    const data = MsgCallService.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "CallService", data);
    return promise.then((data) => MsgCallServiceResponse.decode(new _m0.Reader(data)));
  }

  RespondService(request: MsgRespondService): Promise<MsgRespondServiceResponse> {
    const data = MsgRespondService.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "RespondService", data);
    return promise.then((data) => MsgRespondServiceResponse.decode(new _m0.Reader(data)));
  }

  PauseRequestContext(request: MsgPauseRequestContext): Promise<MsgPauseRequestContextResponse> {
    const data = MsgPauseRequestContext.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "PauseRequestContext", data);
    return promise.then((data) => MsgPauseRequestContextResponse.decode(new _m0.Reader(data)));
  }

  StartRequestContext(request: MsgStartRequestContext): Promise<MsgStartRequestContextResponse> {
    const data = MsgStartRequestContext.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "StartRequestContext", data);
    return promise.then((data) => MsgStartRequestContextResponse.decode(new _m0.Reader(data)));
  }

  KillRequestContext(request: MsgKillRequestContext): Promise<MsgKillRequestContextResponse> {
    const data = MsgKillRequestContext.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "KillRequestContext", data);
    return promise.then((data) => MsgKillRequestContextResponse.decode(new _m0.Reader(data)));
  }

  UpdateRequestContext(request: MsgUpdateRequestContext): Promise<MsgUpdateRequestContextResponse> {
    const data = MsgUpdateRequestContext.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "UpdateRequestContext", data);
    return promise.then((data) => MsgUpdateRequestContextResponse.decode(new _m0.Reader(data)));
  }

  WithdrawEarnedFees(request: MsgWithdrawEarnedFees): Promise<MsgWithdrawEarnedFeesResponse> {
    const data = MsgWithdrawEarnedFees.encode(request).finish();
    const promise = this.rpc.request("irismod.service.Msg", "WithdrawEarnedFees", data);
    return promise.then((data) => MsgWithdrawEarnedFeesResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
