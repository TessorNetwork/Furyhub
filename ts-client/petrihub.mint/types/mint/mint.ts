/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "petrihub.mint";

/** Minter represents the minting state */
export interface Minter {
  /** time which the last update was made to the minter */
  lastUpdate:
    | Date
    | undefined;
  /** base inflation */
  inflationBase: string;
}

/** Params defines mint module's parameters */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** inflation rate */
  inflation: string;
}

function createBaseMinter(): Minter {
  return { lastUpdate: undefined, inflationBase: "" };
}

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastUpdate !== undefined) {
      Timestamp.encode(toTimestamp(message.lastUpdate), writer.uint32(10).fork()).ldelim();
    }
    if (message.inflationBase !== "") {
      writer.uint32(18).string(message.inflationBase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastUpdate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.inflationBase = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Minter {
    return {
      lastUpdate: isSet(object.lastUpdate) ? fromJsonTimestamp(object.lastUpdate) : undefined,
      inflationBase: isSet(object.inflationBase) ? String(object.inflationBase) : "",
    };
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate.toISOString());
    message.inflationBase !== undefined && (obj.inflationBase = message.inflationBase);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Minter>, I>>(object: I): Minter {
    const message = createBaseMinter();
    message.lastUpdate = object.lastUpdate ?? undefined;
    message.inflationBase = object.inflationBase ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return { mintDenom: "", inflation: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflation !== "") {
      writer.uint32(18).string(message.inflation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.inflation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      inflation: isSet(object.inflation) ? String(object.inflation) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.inflation !== undefined && (obj.inflation = message.inflation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.inflation = object.inflation ?? "";
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
