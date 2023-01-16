/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Request } from "./random";

export const protobufPackage = "irismod.random";

/** GenesisState defines the random module's genesis state */
export interface GenesisState {
  pendingRandomRequests: { [key: string]: Requests };
}

export interface GenesisState_PendingRandomRequestsEntry {
  key: string;
  value: Requests | undefined;
}

/** Requests defines the random requests */
export interface Requests {
  requests: Request[];
}

function createBaseGenesisState(): GenesisState {
  return { pendingRandomRequests: {} };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.pendingRandomRequests).forEach(([key, value]) => {
      GenesisState_PendingRandomRequestsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
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
          const entry1 = GenesisState_PendingRandomRequestsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.pendingRandomRequests[entry1.key] = entry1.value;
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
      pendingRandomRequests: isObject(object.pendingRandomRequests)
        ? Object.entries(object.pendingRandomRequests).reduce<{ [key: string]: Requests }>((acc, [key, value]) => {
          acc[key] = Requests.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    obj.pendingRandomRequests = {};
    if (message.pendingRandomRequests) {
      Object.entries(message.pendingRandomRequests).forEach(([k, v]) => {
        obj.pendingRandomRequests[k] = Requests.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.pendingRandomRequests = Object.entries(object.pendingRandomRequests ?? {}).reduce<
      { [key: string]: Requests }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Requests.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGenesisState_PendingRandomRequestsEntry(): GenesisState_PendingRandomRequestsEntry {
  return { key: "", value: undefined };
}

export const GenesisState_PendingRandomRequestsEntry = {
  encode(message: GenesisState_PendingRandomRequestsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Requests.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_PendingRandomRequestsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_PendingRandomRequestsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Requests.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_PendingRandomRequestsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Requests.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GenesisState_PendingRandomRequestsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Requests.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState_PendingRandomRequestsEntry>, I>>(
    object: I,
  ): GenesisState_PendingRandomRequestsEntry {
    const message = createBaseGenesisState_PendingRandomRequestsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Requests.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseRequests(): Requests {
  return { requests: [] };
}

export const Requests = {
  encode(message: Requests, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      Request.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Requests {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequests();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(Request.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Requests {
    return { requests: Array.isArray(object?.requests) ? object.requests.map((e: any) => Request.fromJSON(e)) : [] };
  },

  toJSON(message: Requests): unknown {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map((e) => e ? Request.toJSON(e) : undefined);
    } else {
      obj.requests = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Requests>, I>>(object: I): Requests {
    const message = createBaseRequests();
    message.requests = object.requests?.map((e) => Request.fromPartial(e)) || [];
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
