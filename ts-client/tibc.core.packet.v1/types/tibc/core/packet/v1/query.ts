/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Height } from "../../client/v1/client";
import { PacketState } from "./packet";

export const protobufPackage = "tibc.core.packet.v1";

/**
 * QueryPacketCommitmentRequest is the request type for the
 * QueryPacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequest {
  /** dest chain name */
  destChain: string;
  /** source chain name */
  sourceChain: string;
  /** packet sequence */
  sequence: number;
}

/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponse {
  /** packet associated with the request fields */
  commitment: Uint8Array;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}

/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequest {
  /** dest chain name */
  destChain: string;
  /** source chain name */
  sourceChain: string;
  /** pagination request */
  pagination: PageRequest | undefined;
}

/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponse {
  commitments: PacketState[];
  /** pagination response */
  pagination:
    | PageResponse
    | undefined;
  /** query block height */
  height: Height | undefined;
}

/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequest {
  /** dest chain name */
  destChain: string;
  /** source chain name */
  sourceChain: string;
  /** packet sequence */
  sequence: number;
}

/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponse {
  /** success flag for if receipt exists */
  received: boolean;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}

/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequest {
  /** dest chain name */
  destChain: string;
  /** source chain name */
  sourceChain: string;
  /** packet sequence */
  sequence: number;
}

/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponse {
  /** packet associated with the request fields */
  acknowledgement: Uint8Array;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}

/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequest {
  /** dest chain name */
  destChain: string;
  /** source chain name */
  sourceChain: string;
  /** pagination request */
  pagination: PageRequest | undefined;
}

/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponse {
  acknowledgements: PacketState[];
  /** pagination response */
  pagination:
    | PageResponse
    | undefined;
  /** query block height */
  height: Height | undefined;
}

/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequest {
  /** dest chain name */
  destChain: string;
  /** source chain name */
  sourceChain: string;
  /** list of packet sequences */
  packetCommitmentSequences: number[];
}

/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponse {
  /** list of unreceived packet sequences */
  sequences: number[];
  /** query block height */
  height: Height | undefined;
}

/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequest {
  /** dest chain name */
  destChain: string;
  /** source chain name */
  sourceChain: string;
  /** list of acknowledgement sequences */
  packetAckSequences: number[];
}

/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponse {
  /** list of unreceived acknowledgement sequences */
  sequences: number[];
  /** query block height */
  height: Height | undefined;
}

/**
 * QueryCleanPacketCommitmentRequest is the request type for the
 * QueryCleanPacketCommitment RPC method
 */
export interface QueryCleanPacketCommitmentRequest {
  /** dest chain name */
  destChain: string;
  /** source chain name */
  sourceChain: string;
}

/**
 * QueryCleanPacketCommitmentResponse defines the client query response for a
 * packet which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryCleanPacketCommitmentResponse {
  /** packet associated with the request fields */
  commitment: Uint8Array;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}

function createBaseQueryPacketCommitmentRequest(): QueryPacketCommitmentRequest {
  return { destChain: "", sourceChain: "", sequence: 0 };
}

export const QueryPacketCommitmentRequest = {
  encode(message: QueryPacketCommitmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destChain !== "") {
      writer.uint32(10).string(message.destChain);
    }
    if (message.sourceChain !== "") {
      writer.uint32(18).string(message.sourceChain);
    }
    if (message.sequence !== 0) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destChain = reader.string();
          break;
        case 2:
          message.sourceChain = reader.string();
          break;
        case 3:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentRequest {
    return {
      destChain: isSet(object.destChain) ? String(object.destChain) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
    };
  },

  toJSON(message: QueryPacketCommitmentRequest): unknown {
    const obj: any = {};
    message.destChain !== undefined && (obj.destChain = message.destChain);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPacketCommitmentRequest>, I>>(object: I): QueryPacketCommitmentRequest {
    const message = createBaseQueryPacketCommitmentRequest();
    message.destChain = object.destChain ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.sequence = object.sequence ?? 0;
    return message;
  },
};

function createBaseQueryPacketCommitmentResponse(): QueryPacketCommitmentResponse {
  return { commitment: new Uint8Array(), proof: new Uint8Array(), proofHeight: undefined };
}

export const QueryPacketCommitmentResponse = {
  encode(message: QueryPacketCommitmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentResponse {
    return {
      commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
    };
  },

  toJSON(message: QueryPacketCommitmentResponse): unknown {
    const obj: any = {};
    message.commitment !== undefined
      && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
    message.proof !== undefined
      && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined
      && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPacketCommitmentResponse>, I>>(
    object: I,
  ): QueryPacketCommitmentResponse {
    const message = createBaseQueryPacketCommitmentResponse();
    message.commitment = object.commitment ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    return message;
  },
};

function createBaseQueryPacketCommitmentsRequest(): QueryPacketCommitmentsRequest {
  return { destChain: "", sourceChain: "", pagination: undefined };
}

export const QueryPacketCommitmentsRequest = {
  encode(message: QueryPacketCommitmentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destChain !== "") {
      writer.uint32(10).string(message.destChain);
    }
    if (message.sourceChain !== "") {
      writer.uint32(18).string(message.sourceChain);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destChain = reader.string();
          break;
        case 2:
          message.sourceChain = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentsRequest {
    return {
      destChain: isSet(object.destChain) ? String(object.destChain) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPacketCommitmentsRequest): unknown {
    const obj: any = {};
    message.destChain !== undefined && (obj.destChain = message.destChain);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPacketCommitmentsRequest>, I>>(
    object: I,
  ): QueryPacketCommitmentsRequest {
    const message = createBaseQueryPacketCommitmentsRequest();
    message.destChain = object.destChain ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPacketCommitmentsResponse(): QueryPacketCommitmentsResponse {
  return { commitments: [], pagination: undefined, height: undefined };
}

export const QueryPacketCommitmentsResponse = {
  encode(message: QueryPacketCommitmentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentsResponse {
    return {
      commitments: Array.isArray(object?.commitments)
        ? object.commitments.map((e: any) => PacketState.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
    };
  },

  toJSON(message: QueryPacketCommitmentsResponse): unknown {
    const obj: any = {};
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.commitments = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPacketCommitmentsResponse>, I>>(
    object: I,
  ): QueryPacketCommitmentsResponse {
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = object.commitments?.map((e) => PacketState.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.height = (object.height !== undefined && object.height !== null)
      ? Height.fromPartial(object.height)
      : undefined;
    return message;
  },
};

function createBaseQueryPacketReceiptRequest(): QueryPacketReceiptRequest {
  return { destChain: "", sourceChain: "", sequence: 0 };
}

export const QueryPacketReceiptRequest = {
  encode(message: QueryPacketReceiptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destChain !== "") {
      writer.uint32(10).string(message.destChain);
    }
    if (message.sourceChain !== "") {
      writer.uint32(18).string(message.sourceChain);
    }
    if (message.sequence !== 0) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destChain = reader.string();
          break;
        case 2:
          message.sourceChain = reader.string();
          break;
        case 3:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketReceiptRequest {
    return {
      destChain: isSet(object.destChain) ? String(object.destChain) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
    };
  },

  toJSON(message: QueryPacketReceiptRequest): unknown {
    const obj: any = {};
    message.destChain !== undefined && (obj.destChain = message.destChain);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPacketReceiptRequest>, I>>(object: I): QueryPacketReceiptRequest {
    const message = createBaseQueryPacketReceiptRequest();
    message.destChain = object.destChain ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.sequence = object.sequence ?? 0;
    return message;
  },
};

function createBaseQueryPacketReceiptResponse(): QueryPacketReceiptResponse {
  return { received: false, proof: new Uint8Array(), proofHeight: undefined };
}

export const QueryPacketReceiptResponse = {
  encode(message: QueryPacketReceiptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.received = reader.bool();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketReceiptResponse {
    return {
      received: isSet(object.received) ? Boolean(object.received) : false,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
    };
  },

  toJSON(message: QueryPacketReceiptResponse): unknown {
    const obj: any = {};
    message.received !== undefined && (obj.received = message.received);
    message.proof !== undefined
      && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined
      && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPacketReceiptResponse>, I>>(object: I): QueryPacketReceiptResponse {
    const message = createBaseQueryPacketReceiptResponse();
    message.received = object.received ?? false;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    return message;
  },
};

function createBaseQueryPacketAcknowledgementRequest(): QueryPacketAcknowledgementRequest {
  return { destChain: "", sourceChain: "", sequence: 0 };
}

export const QueryPacketAcknowledgementRequest = {
  encode(message: QueryPacketAcknowledgementRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destChain !== "") {
      writer.uint32(10).string(message.destChain);
    }
    if (message.sourceChain !== "") {
      writer.uint32(18).string(message.sourceChain);
    }
    if (message.sequence !== 0) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destChain = reader.string();
          break;
        case 2:
          message.sourceChain = reader.string();
          break;
        case 3:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementRequest {
    return {
      destChain: isSet(object.destChain) ? String(object.destChain) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
    };
  },

  toJSON(message: QueryPacketAcknowledgementRequest): unknown {
    const obj: any = {};
    message.destChain !== undefined && (obj.destChain = message.destChain);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPacketAcknowledgementRequest>, I>>(
    object: I,
  ): QueryPacketAcknowledgementRequest {
    const message = createBaseQueryPacketAcknowledgementRequest();
    message.destChain = object.destChain ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.sequence = object.sequence ?? 0;
    return message;
  },
};

function createBaseQueryPacketAcknowledgementResponse(): QueryPacketAcknowledgementResponse {
  return { acknowledgement: new Uint8Array(), proof: new Uint8Array(), proofHeight: undefined };
}

export const QueryPacketAcknowledgementResponse = {
  encode(message: QueryPacketAcknowledgementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgement = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementResponse {
    return {
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
    };
  },

  toJSON(message: QueryPacketAcknowledgementResponse): unknown {
    const obj: any = {};
    message.acknowledgement !== undefined
      && (obj.acknowledgement = base64FromBytes(
        message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array(),
      ));
    message.proof !== undefined
      && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined
      && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPacketAcknowledgementResponse>, I>>(
    object: I,
  ): QueryPacketAcknowledgementResponse {
    const message = createBaseQueryPacketAcknowledgementResponse();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    return message;
  },
};

function createBaseQueryPacketAcknowledgementsRequest(): QueryPacketAcknowledgementsRequest {
  return { destChain: "", sourceChain: "", pagination: undefined };
}

export const QueryPacketAcknowledgementsRequest = {
  encode(message: QueryPacketAcknowledgementsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destChain !== "") {
      writer.uint32(10).string(message.destChain);
    }
    if (message.sourceChain !== "") {
      writer.uint32(18).string(message.sourceChain);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destChain = reader.string();
          break;
        case 2:
          message.sourceChain = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementsRequest {
    return {
      destChain: isSet(object.destChain) ? String(object.destChain) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPacketAcknowledgementsRequest): unknown {
    const obj: any = {};
    message.destChain !== undefined && (obj.destChain = message.destChain);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPacketAcknowledgementsRequest>, I>>(
    object: I,
  ): QueryPacketAcknowledgementsRequest {
    const message = createBaseQueryPacketAcknowledgementsRequest();
    message.destChain = object.destChain ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPacketAcknowledgementsResponse(): QueryPacketAcknowledgementsResponse {
  return { acknowledgements: [], pagination: undefined, height: undefined };
}

export const QueryPacketAcknowledgementsResponse = {
  encode(message: QueryPacketAcknowledgementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementsResponse {
    return {
      acknowledgements: Array.isArray(object?.acknowledgements)
        ? object.acknowledgements.map((e: any) => PacketState.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
    };
  },

  toJSON(message: QueryPacketAcknowledgementsResponse): unknown {
    const obj: any = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map((e) => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPacketAcknowledgementsResponse>, I>>(
    object: I,
  ): QueryPacketAcknowledgementsResponse {
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = object.acknowledgements?.map((e) => PacketState.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.height = (object.height !== undefined && object.height !== null)
      ? Height.fromPartial(object.height)
      : undefined;
    return message;
  },
};

function createBaseQueryUnreceivedPacketsRequest(): QueryUnreceivedPacketsRequest {
  return { destChain: "", sourceChain: "", packetCommitmentSequences: [] };
}

export const QueryUnreceivedPacketsRequest = {
  encode(message: QueryUnreceivedPacketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destChain !== "") {
      writer.uint32(10).string(message.destChain);
    }
    if (message.sourceChain !== "") {
      writer.uint32(18).string(message.sourceChain);
    }
    writer.uint32(26).fork();
    for (const v of message.packetCommitmentSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destChain = reader.string();
          break;
        case 2:
          message.sourceChain = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.packetCommitmentSequences.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnreceivedPacketsRequest {
    return {
      destChain: isSet(object.destChain) ? String(object.destChain) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences)
        ? object.packetCommitmentSequences.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: QueryUnreceivedPacketsRequest): unknown {
    const obj: any = {};
    message.destChain !== undefined && (obj.destChain = message.destChain);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    if (message.packetCommitmentSequences) {
      obj.packetCommitmentSequences = message.packetCommitmentSequences.map((e) => Math.round(e));
    } else {
      obj.packetCommitmentSequences = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnreceivedPacketsRequest>, I>>(
    object: I,
  ): QueryUnreceivedPacketsRequest {
    const message = createBaseQueryUnreceivedPacketsRequest();
    message.destChain = object.destChain ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.packetCommitmentSequences = object.packetCommitmentSequences?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryUnreceivedPacketsResponse(): QueryUnreceivedPacketsResponse {
  return { sequences: [], height: undefined };
}

export const QueryUnreceivedPacketsResponse = {
  encode(message: QueryUnreceivedPacketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.sequences.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnreceivedPacketsResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Number(e)) : [],
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
    };
  },

  toJSON(message: QueryUnreceivedPacketsResponse): unknown {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => Math.round(e));
    } else {
      obj.sequences = [];
    }
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnreceivedPacketsResponse>, I>>(
    object: I,
  ): QueryUnreceivedPacketsResponse {
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = object.sequences?.map((e) => e) || [];
    message.height = (object.height !== undefined && object.height !== null)
      ? Height.fromPartial(object.height)
      : undefined;
    return message;
  },
};

function createBaseQueryUnreceivedAcksRequest(): QueryUnreceivedAcksRequest {
  return { destChain: "", sourceChain: "", packetAckSequences: [] };
}

export const QueryUnreceivedAcksRequest = {
  encode(message: QueryUnreceivedAcksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destChain !== "") {
      writer.uint32(10).string(message.destChain);
    }
    if (message.sourceChain !== "") {
      writer.uint32(18).string(message.sourceChain);
    }
    writer.uint32(26).fork();
    for (const v of message.packetAckSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destChain = reader.string();
          break;
        case 2:
          message.sourceChain = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetAckSequences.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.packetAckSequences.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnreceivedAcksRequest {
    return {
      destChain: isSet(object.destChain) ? String(object.destChain) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      packetAckSequences: Array.isArray(object?.packetAckSequences)
        ? object.packetAckSequences.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: QueryUnreceivedAcksRequest): unknown {
    const obj: any = {};
    message.destChain !== undefined && (obj.destChain = message.destChain);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    if (message.packetAckSequences) {
      obj.packetAckSequences = message.packetAckSequences.map((e) => Math.round(e));
    } else {
      obj.packetAckSequences = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnreceivedAcksRequest>, I>>(object: I): QueryUnreceivedAcksRequest {
    const message = createBaseQueryUnreceivedAcksRequest();
    message.destChain = object.destChain ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.packetAckSequences = object.packetAckSequences?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryUnreceivedAcksResponse(): QueryUnreceivedAcksResponse {
  return { sequences: [], height: undefined };
}

export const QueryUnreceivedAcksResponse = {
  encode(message: QueryUnreceivedAcksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.sequences.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnreceivedAcksResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Number(e)) : [],
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
    };
  },

  toJSON(message: QueryUnreceivedAcksResponse): unknown {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => Math.round(e));
    } else {
      obj.sequences = [];
    }
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnreceivedAcksResponse>, I>>(object: I): QueryUnreceivedAcksResponse {
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = object.sequences?.map((e) => e) || [];
    message.height = (object.height !== undefined && object.height !== null)
      ? Height.fromPartial(object.height)
      : undefined;
    return message;
  },
};

function createBaseQueryCleanPacketCommitmentRequest(): QueryCleanPacketCommitmentRequest {
  return { destChain: "", sourceChain: "" };
}

export const QueryCleanPacketCommitmentRequest = {
  encode(message: QueryCleanPacketCommitmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destChain !== "") {
      writer.uint32(10).string(message.destChain);
    }
    if (message.sourceChain !== "") {
      writer.uint32(18).string(message.sourceChain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCleanPacketCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCleanPacketCommitmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destChain = reader.string();
          break;
        case 2:
          message.sourceChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCleanPacketCommitmentRequest {
    return {
      destChain: isSet(object.destChain) ? String(object.destChain) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
    };
  },

  toJSON(message: QueryCleanPacketCommitmentRequest): unknown {
    const obj: any = {};
    message.destChain !== undefined && (obj.destChain = message.destChain);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCleanPacketCommitmentRequest>, I>>(
    object: I,
  ): QueryCleanPacketCommitmentRequest {
    const message = createBaseQueryCleanPacketCommitmentRequest();
    message.destChain = object.destChain ?? "";
    message.sourceChain = object.sourceChain ?? "";
    return message;
  },
};

function createBaseQueryCleanPacketCommitmentResponse(): QueryCleanPacketCommitmentResponse {
  return { commitment: new Uint8Array(), proof: new Uint8Array(), proofHeight: undefined };
}

export const QueryCleanPacketCommitmentResponse = {
  encode(message: QueryCleanPacketCommitmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCleanPacketCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCleanPacketCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCleanPacketCommitmentResponse {
    return {
      commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
    };
  },

  toJSON(message: QueryCleanPacketCommitmentResponse): unknown {
    const obj: any = {};
    message.commitment !== undefined
      && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
    message.proof !== undefined
      && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined
      && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCleanPacketCommitmentResponse>, I>>(
    object: I,
  ): QueryCleanPacketCommitmentResponse {
    const message = createBaseQueryCleanPacketCommitmentResponse();
    message.commitment = object.commitment ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    return message;
  },
};

/** Query provides defines the gRPC querier service */
export interface Query {
  /** PacketCommitment queries a stored packet commitment hash. */
  PacketCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
  /** PacketCommitments returns all the packet commitments hashes associated */
  PacketCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
  /**
   * PacketReceipt queries if a given packet sequence has been received on the
   * queried chain
   */
  PacketReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
  /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
  PacketAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
  /** PacketAcknowledgements returns all the packet acknowledgements associated */
  PacketAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
  /**
   * UnreceivedPackets returns all the unreceived TIBC packets associated with
   * sequences.
   */
  UnreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
  /**
   * UnreceivedAcks returns all the unreceived TIBC acknowledgements associated
   * with sequences.
   */
  UnreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
  /** CleanPacketCommitment queries a stored packet commitment hash. */
  CleanPacketCommitment(request: QueryCleanPacketCommitmentRequest): Promise<QueryCleanPacketCommitmentResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PacketCommitment = this.PacketCommitment.bind(this);
    this.PacketCommitments = this.PacketCommitments.bind(this);
    this.PacketReceipt = this.PacketReceipt.bind(this);
    this.PacketAcknowledgement = this.PacketAcknowledgement.bind(this);
    this.PacketAcknowledgements = this.PacketAcknowledgements.bind(this);
    this.UnreceivedPackets = this.UnreceivedPackets.bind(this);
    this.UnreceivedAcks = this.UnreceivedAcks.bind(this);
    this.CleanPacketCommitment = this.CleanPacketCommitment.bind(this);
  }
  PacketCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> {
    const data = QueryPacketCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("tibc.core.packet.v1.Query", "PacketCommitment", data);
    return promise.then((data) => QueryPacketCommitmentResponse.decode(new _m0.Reader(data)));
  }

  PacketCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> {
    const data = QueryPacketCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("tibc.core.packet.v1.Query", "PacketCommitments", data);
    return promise.then((data) => QueryPacketCommitmentsResponse.decode(new _m0.Reader(data)));
  }

  PacketReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> {
    const data = QueryPacketReceiptRequest.encode(request).finish();
    const promise = this.rpc.request("tibc.core.packet.v1.Query", "PacketReceipt", data);
    return promise.then((data) => QueryPacketReceiptResponse.decode(new _m0.Reader(data)));
  }

  PacketAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> {
    const data = QueryPacketAcknowledgementRequest.encode(request).finish();
    const promise = this.rpc.request("tibc.core.packet.v1.Query", "PacketAcknowledgement", data);
    return promise.then((data) => QueryPacketAcknowledgementResponse.decode(new _m0.Reader(data)));
  }

  PacketAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> {
    const data = QueryPacketAcknowledgementsRequest.encode(request).finish();
    const promise = this.rpc.request("tibc.core.packet.v1.Query", "PacketAcknowledgements", data);
    return promise.then((data) => QueryPacketAcknowledgementsResponse.decode(new _m0.Reader(data)));
  }

  UnreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> {
    const data = QueryUnreceivedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("tibc.core.packet.v1.Query", "UnreceivedPackets", data);
    return promise.then((data) => QueryUnreceivedPacketsResponse.decode(new _m0.Reader(data)));
  }

  UnreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> {
    const data = QueryUnreceivedAcksRequest.encode(request).finish();
    const promise = this.rpc.request("tibc.core.packet.v1.Query", "UnreceivedAcks", data);
    return promise.then((data) => QueryUnreceivedAcksResponse.decode(new _m0.Reader(data)));
  }

  CleanPacketCommitment(request: QueryCleanPacketCommitmentRequest): Promise<QueryCleanPacketCommitmentResponse> {
    const data = QueryCleanPacketCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("tibc.core.packet.v1.Query", "CleanPacketCommitment", data);
    return promise.then((data) => QueryCleanPacketCommitmentResponse.decode(new _m0.Reader(data)));
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
