/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tibc.core.routing.v1";

/** SetRoutingRulesProposal defines a proposal to set routing rules */
export interface SetRoutingRulesProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** routing rules list */
  rules: string[];
}

function createBaseSetRoutingRulesProposal(): SetRoutingRulesProposal {
  return { title: "", description: "", rules: [] };
}

export const SetRoutingRulesProposal = {
  encode(message: SetRoutingRulesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.rules) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRoutingRulesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRoutingRulesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.rules.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetRoutingRulesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: SetRoutingRulesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.rules) {
      obj.rules = message.rules.map((e) => e);
    } else {
      obj.rules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetRoutingRulesProposal>, I>>(object: I): SetRoutingRulesProposal {
    const message = createBaseSetRoutingRulesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.rules = object.rules?.map((e) => e) || [];
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
