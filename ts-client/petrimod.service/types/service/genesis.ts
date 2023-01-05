/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params, RequestContext, ServiceBinding, ServiceDefinition } from "./service";

export const protobufPackage = "petrimod.service";

/** GenesisState defines the service module's genesis state */
export interface GenesisState {
  params: Params | undefined;
  definitions: ServiceDefinition[];
  bindings: ServiceBinding[];
  withdrawAddresses: { [key: string]: string };
  requestContexts: { [key: string]: RequestContext };
}

export interface GenesisState_WithdrawAddressesEntry {
  key: string;
  value: string;
}

export interface GenesisState_RequestContextsEntry {
  key: string;
  value: RequestContext | undefined;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, definitions: [], bindings: [], withdrawAddresses: {}, requestContexts: {} };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.definitions) {
      ServiceDefinition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.bindings) {
      ServiceBinding.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.withdrawAddresses).forEach(([key, value]) => {
      GenesisState_WithdrawAddressesEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    Object.entries(message.requestContexts).forEach(([key, value]) => {
      GenesisState_RequestContextsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.definitions.push(ServiceDefinition.decode(reader, reader.uint32()));
          break;
        case 3:
          message.bindings.push(ServiceBinding.decode(reader, reader.uint32()));
          break;
        case 4:
          const entry4 = GenesisState_WithdrawAddressesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.withdrawAddresses[entry4.key] = entry4.value;
          }
          break;
        case 5:
          const entry5 = GenesisState_RequestContextsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.requestContexts[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      definitions: Array.isArray(object?.definitions)
        ? object.definitions.map((e: any) => ServiceDefinition.fromJSON(e))
        : [],
      bindings: Array.isArray(object?.bindings) ? object.bindings.map((e: any) => ServiceBinding.fromJSON(e)) : [],
      withdrawAddresses: isObject(object.withdrawAddresses)
        ? Object.entries(object.withdrawAddresses).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      requestContexts: isObject(object.requestContexts)
        ? Object.entries(object.requestContexts).reduce<{ [key: string]: RequestContext }>((acc, [key, value]) => {
          acc[key] = RequestContext.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.definitions) {
      obj.definitions = message.definitions.map((e) => e ? ServiceDefinition.toJSON(e) : undefined);
    } else {
      obj.definitions = [];
    }
    if (message.bindings) {
      obj.bindings = message.bindings.map((e) => e ? ServiceBinding.toJSON(e) : undefined);
    } else {
      obj.bindings = [];
    }
    obj.withdrawAddresses = {};
    if (message.withdrawAddresses) {
      Object.entries(message.withdrawAddresses).forEach(([k, v]) => {
        obj.withdrawAddresses[k] = v;
      });
    }
    obj.requestContexts = {};
    if (message.requestContexts) {
      Object.entries(message.requestContexts).forEach(([k, v]) => {
        obj.requestContexts[k] = RequestContext.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.definitions = object.definitions?.map((e) => ServiceDefinition.fromPartial(e)) || [];
    message.bindings = object.bindings?.map((e) => ServiceBinding.fromPartial(e)) || [];
    message.withdrawAddresses = Object.entries(object.withdrawAddresses ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.requestContexts = Object.entries(object.requestContexts ?? {}).reduce<{ [key: string]: RequestContext }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = RequestContext.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseGenesisState_WithdrawAddressesEntry(): GenesisState_WithdrawAddressesEntry {
  return { key: "", value: "" };
}

export const GenesisState_WithdrawAddressesEntry = {
  encode(message: GenesisState_WithdrawAddressesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_WithdrawAddressesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_WithdrawAddressesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_WithdrawAddressesEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: GenesisState_WithdrawAddressesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState_WithdrawAddressesEntry>, I>>(
    object: I,
  ): GenesisState_WithdrawAddressesEntry {
    const message = createBaseGenesisState_WithdrawAddressesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGenesisState_RequestContextsEntry(): GenesisState_RequestContextsEntry {
  return { key: "", value: undefined };
}

export const GenesisState_RequestContextsEntry = {
  encode(message: GenesisState_RequestContextsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      RequestContext.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_RequestContextsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_RequestContextsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = RequestContext.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_RequestContextsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? RequestContext.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GenesisState_RequestContextsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? RequestContext.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState_RequestContextsEntry>, I>>(
    object: I,
  ): GenesisState_RequestContextsEntry {
    const message = createBaseGenesisState_RequestContextsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? RequestContext.fromPartial(object.value)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
