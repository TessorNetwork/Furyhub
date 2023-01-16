/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RequestContextState, requestContextStateFromJSON, requestContextStateToJSON } from "../service/service";
import { Feed, FeedValue } from "./oracle";

export const protobufPackage = "irismod.oracle";

/** GenesisState defines the oracle module's genesis state */
export interface GenesisState {
  entries: FeedEntry[];
}

export interface FeedEntry {
  feed: Feed | undefined;
  state: RequestContextState;
  values: FeedValue[];
}

function createBaseGenesisState(): GenesisState {
  return { entries: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      FeedEntry.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.entries.push(FeedEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return { entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => FeedEntry.fromJSON(e)) : [] };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? FeedEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.entries = object.entries?.map((e) => FeedEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeedEntry(): FeedEntry {
  return { feed: undefined, state: 0, values: [] };
}

export const FeedEntry = {
  encode(message: FeedEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feed !== undefined) {
      Feed.encode(message.feed, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    for (const v of message.values) {
      FeedValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feed = Feed.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.values.push(FeedValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeedEntry {
    return {
      feed: isSet(object.feed) ? Feed.fromJSON(object.feed) : undefined,
      state: isSet(object.state) ? requestContextStateFromJSON(object.state) : 0,
      values: Array.isArray(object?.values) ? object.values.map((e: any) => FeedValue.fromJSON(e)) : [],
    };
  },

  toJSON(message: FeedEntry): unknown {
    const obj: any = {};
    message.feed !== undefined && (obj.feed = message.feed ? Feed.toJSON(message.feed) : undefined);
    message.state !== undefined && (obj.state = requestContextStateToJSON(message.state));
    if (message.values) {
      obj.values = message.values.map((e) => e ? FeedValue.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeedEntry>, I>>(object: I): FeedEntry {
    const message = createBaseFeedEntry();
    message.feed = (object.feed !== undefined && object.feed !== null) ? Feed.fromPartial(object.feed) : undefined;
    message.state = object.state ?? 0;
    message.values = object.values?.map((e) => FeedValue.fromPartial(e)) || [];
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
