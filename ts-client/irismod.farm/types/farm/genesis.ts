/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EscrowInfo, FarmInfo, FarmPool, Params } from "./farm";

export const protobufPackage = "irismod.farm";

export interface GenesisState {
  params: Params | undefined;
  pools: FarmPool[];
  farmInfos: FarmInfo[];
  sequence: number;
  escrow: EscrowInfo[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, pools: [], farmInfos: [], sequence: 0, escrow: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pools) {
      FarmPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.farmInfos) {
      FarmInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.sequence !== 0) {
      writer.uint32(32).uint64(message.sequence);
    }
    for (const v of message.escrow) {
      EscrowInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
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
          message.pools.push(FarmPool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.farmInfos.push(FarmInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.escrow.push(EscrowInfo.decode(reader, reader.uint32()));
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
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => FarmPool.fromJSON(e)) : [],
      farmInfos: Array.isArray(object?.farmInfos) ? object.farmInfos.map((e: any) => FarmInfo.fromJSON(e)) : [],
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
      escrow: Array.isArray(object?.escrow) ? object.escrow.map((e: any) => EscrowInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? FarmPool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    if (message.farmInfos) {
      obj.farmInfos = message.farmInfos.map((e) => e ? FarmInfo.toJSON(e) : undefined);
    } else {
      obj.farmInfos = [];
    }
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    if (message.escrow) {
      obj.escrow = message.escrow.map((e) => e ? EscrowInfo.toJSON(e) : undefined);
    } else {
      obj.escrow = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.pools = object.pools?.map((e) => FarmPool.fromPartial(e)) || [];
    message.farmInfos = object.farmInfos?.map((e) => FarmInfo.fromPartial(e)) || [];
    message.sequence = object.sequence ?? 0;
    message.escrow = object.escrow?.map((e) => EscrowInfo.fromPartial(e)) || [];
    return message;
  },
};

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
