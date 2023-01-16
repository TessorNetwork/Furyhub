/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Record } from "./record";

export const protobufPackage = "irismod.record";

/** QueryRecordRequest is the request type for the Query/Record RPC method */
export interface QueryRecordRequest {
  recordId: string;
}

/** QueryRecordResponse is the response type for the Query/Record RPC method */
export interface QueryRecordResponse {
  record: Record | undefined;
}

function createBaseQueryRecordRequest(): QueryRecordRequest {
  return { recordId: "" };
}

export const QueryRecordRequest = {
  encode(message: QueryRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordId !== "") {
      writer.uint32(10).string(message.recordId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRecordRequest {
    return { recordId: isSet(object.recordId) ? String(object.recordId) : "" };
  },

  toJSON(message: QueryRecordRequest): unknown {
    const obj: any = {};
    message.recordId !== undefined && (obj.recordId = message.recordId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRecordRequest>, I>>(object: I): QueryRecordRequest {
    const message = createBaseQueryRecordRequest();
    message.recordId = object.recordId ?? "";
    return message;
  },
};

function createBaseQueryRecordResponse(): QueryRecordResponse {
  return { record: undefined };
}

export const QueryRecordResponse = {
  encode(message: QueryRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      Record.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = Record.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRecordResponse {
    return { record: isSet(object.record) ? Record.fromJSON(object.record) : undefined };
  },

  toJSON(message: QueryRecordResponse): unknown {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? Record.toJSON(message.record) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRecordResponse>, I>>(object: I): QueryRecordResponse {
    const message = createBaseQueryRecordResponse();
    message.record = (object.record !== undefined && object.record !== null)
      ? Record.fromPartial(object.record)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service for record module */
export interface Query {
  /** Record queries the record by the given record ID */
  Record(request: QueryRecordRequest): Promise<QueryRecordResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Record = this.Record.bind(this);
  }
  Record(request: QueryRecordRequest): Promise<QueryRecordResponse> {
    const data = QueryRecordRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.record.Query", "Record", data);
    return promise.then((data) => QueryRecordResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
