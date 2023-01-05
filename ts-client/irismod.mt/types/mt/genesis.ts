/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Balance, Denom, MT } from "./mt";

export const protobufPackage = "irismod.mt";

/** GenesisState defines the MT module's genesis state */
export interface GenesisState {
  collections: Collection[];
  owners: Owner[];
}

/** Collection defines a type of collection */
export interface Collection {
  denom: Denom | undefined;
  mts: MT[];
}

/** Owner defines a type of account balances */
export interface Owner {
  address: string;
  denoms: DenomBalance[];
}

/** DenomBalance defines a type of denom balances owned by an account */
export interface DenomBalance {
  denomId: string;
  balances: Balance[];
}

function createBaseGenesisState(): GenesisState {
  return { collections: [], owners: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.owners) {
      Owner.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.owners.push(Owner.decode(reader, reader.uint32()));
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
      collections: Array.isArray(object?.collections) ? object.collections.map((e: any) => Collection.fromJSON(e)) : [],
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => Owner.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map((e) => e ? Collection.toJSON(e) : undefined);
    } else {
      obj.collections = [];
    }
    if (message.owners) {
      obj.owners = message.owners.map((e) => e ? Owner.toJSON(e) : undefined);
    } else {
      obj.owners = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.collections = object.collections?.map((e) => Collection.fromPartial(e)) || [];
    message.owners = object.owners?.map((e) => Owner.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCollection(): Collection {
  return { denom: undefined, mts: [] };
}

export const Collection = {
  encode(message: Collection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.mts) {
      MT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        case 2:
          message.mts.push(MT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Collection {
    return {
      denom: isSet(object.denom) ? Denom.fromJSON(object.denom) : undefined,
      mts: Array.isArray(object?.mts) ? object.mts.map((e: any) => MT.fromJSON(e)) : [],
    };
  },

  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    if (message.mts) {
      obj.mts = message.mts.map((e) => e ? MT.toJSON(e) : undefined);
    } else {
      obj.mts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Collection>, I>>(object: I): Collection {
    const message = createBaseCollection();
    message.denom = (object.denom !== undefined && object.denom !== null) ? Denom.fromPartial(object.denom) : undefined;
    message.mts = object.mts?.map((e) => MT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOwner(): Owner {
  return { address: "", denoms: [] };
}

export const Owner = {
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.denoms) {
      DenomBalance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denoms.push(DenomBalance.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Owner {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => DenomBalance.fromJSON(e)) : [],
    };
  },

  toJSON(message: Owner): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e ? DenomBalance.toJSON(e) : undefined);
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Owner>, I>>(object: I): Owner {
    const message = createBaseOwner();
    message.address = object.address ?? "";
    message.denoms = object.denoms?.map((e) => DenomBalance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDenomBalance(): DenomBalance {
  return { denomId: "", balances: [] };
}

export const DenomBalance = {
  encode(message: DenomBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DenomBalance {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromJSON(e)) : [],
    };
  },

  toJSON(message: DenomBalance): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    if (message.balances) {
      obj.balances = message.balances.map((e) => e ? Balance.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DenomBalance>, I>>(object: I): DenomBalance {
    const message = createBaseDenomBalance();
    message.denomId = object.denomId ?? "";
    message.balances = object.balances?.map((e) => Balance.fromPartial(e)) || [];
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
