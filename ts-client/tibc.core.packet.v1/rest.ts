/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
* `Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }
*/
export interface ProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface V1CleanPacket {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   * @format uint64
   */
  sequence?: string;

  /** identifies the chain id of the sending chain. */
  source_chain?: string;

  /** identifies the chain id of the receiving chain. */
  destination_chain?: string;

  /** identifies the chain id of the relay chain. */
  relay_chain?: string;
}

/**
* Normally the RevisionHeight is incremented at each height while keeping
RevisionNumber the same. However some consensus algorithms may choose to
reset the height in certain conditions e.g. hard forks, state-machine
breaking changes In these cases, the RevisionNumber is incremented so that
height continues to be monitonically increasing even as the RevisionHeight
gets reset
*/
export interface V1Height {
  /**
   * the revision that the client is currently on
   * @format uint64
   */
  revision_number?: string;

  /**
   * the height within the given revision
   * @format uint64
   */
  revision_height?: string;
}

/**
 * MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.
 */
export type V1MsgAcknowledgementResponse = object;

/**
 * MsgRecvPacketResponse defines the Msg/RecvPacket response type.
 */
export type V1MsgCleanPacketResponse = object;

/**
 * MsgRecvPacketResponse defines the Msg/RecvPacket response type.
 */
export type V1MsgRecvCleanPacketResponse = object;

/**
 * MsgRecvPacketResponse defines the Msg/RecvPacket response type.
 */
export type V1MsgRecvPacketResponse = object;

export interface V1Packet {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   * @format uint64
   */
  sequence?: string;

  /** identifies the port on the sending chain and destination chain. */
  port?: string;

  /** identifies the chain id of the sending chain. */
  source_chain?: string;

  /** identifies the chain id of the receiving chain. */
  destination_chain?: string;

  /** identifies the chain id of the relay chain. */
  relay_chain?: string;

  /**
   * actual opaque bytes transferred directly to the application module
   * @format byte
   */
  data?: string;
}

/**
* PacketState defines the generic type necessary to retrieve and store
packet commitments, acknowledgements, and receipts.
Caller is responsible for knowing the context necessary to interpret this
state as a commitment, acknowledgement, or a receipt.
*/
export interface V1PacketState {
  /** the sending chain identifier. */
  source_chain?: string;

  /** the receiving chain identifier. */
  destination_chain?: string;

  /**
   * packet sequence.
   * @format uint64
   */
  sequence?: string;

  /**
   * embedded data that represents packet state.
   * @format byte
   */
  data?: string;
}

export interface V1QueryCleanPacketCommitmentResponse {
  /**
   * packet associated with the request fields
   * @format byte
   */
  commitment?: string;

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: V1Height;
}

export interface V1QueryPacketAcknowledgementResponse {
  /**
   * packet associated with the request fields
   * @format byte
   */
  acknowledgement?: string;

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: V1Height;
}

export interface V1QueryPacketAcknowledgementsResponse {
  acknowledgements?: V1PacketState[];

  /**
   * pagination response
   * message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;

  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  height?: V1Height;
}

export interface V1QueryPacketCommitmentResponse {
  /**
   * packet associated with the request fields
   * @format byte
   */
  commitment?: string;

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: V1Height;
}

export interface V1QueryPacketCommitmentsResponse {
  commitments?: V1PacketState[];

  /**
   * pagination response
   * message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;

  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  height?: V1Height;
}

export interface V1QueryPacketReceiptResponse {
  /** success flag for if receipt exists */
  received?: boolean;

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: V1Height;
}

export interface V1QueryUnreceivedAcksResponse {
  /** list of unreceived acknowledgement sequences */
  sequences?: string[];

  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  height?: V1Height;
}

export interface V1QueryUnreceivedPacketsResponse {
  /** list of unreceived packet sequences */
  sequences?: string[];

  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  height?: V1Height;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest page = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs. count_total
   * is only respected when offset is used. It is ignored when key is set.
   */
  count_total?: boolean;
}

/**
* message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title tibc/core/packet/v1/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryCleanPacketCommitment
   * @summary CleanPacketCommitment queries a stored packet commitment hash.
   * @request GET:/tibc/core/packet/v1beta1/source_chains/{source_chain}/dest_chains/{dest_chain}/clean_packet_commitments
   */
  queryCleanPacketCommitment = (sourceChain: string, destChain: string, params: RequestParams = {}) =>
    this.request<V1QueryCleanPacketCommitmentResponse, RpcStatus>({
      path: `/tibc/core/packet/v1beta1/source_chains/${sourceChain}/dest_chains/${destChain}/clean_packet_commitments`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPacketAcknowledgements
   * @summary PacketAcknowledgements returns all the packet acknowledgements associated
   * @request GET:/tibc/core/packet/v1beta1/source_chains/{source_chain}/dest_chains/{dest_chain}/packet_acknowledgements
   */
  queryPacketAcknowledgements = (
    sourceChain: string,
    destChain: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryPacketAcknowledgementsResponse, RpcStatus>({
      path: `/tibc/core/packet/v1beta1/source_chains/${sourceChain}/dest_chains/${destChain}/packet_acknowledgements`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPacketAcknowledgement
   * @summary PacketAcknowledgement queries a stored packet acknowledgement hash.
   * @request GET:/tibc/core/packet/v1beta1/source_chains/{source_chain}/dest_chains/{dest_chain}/packet_acks/{sequence}
   */
  queryPacketAcknowledgement = (sourceChain: string, destChain: string, sequence: string, params: RequestParams = {}) =>
    this.request<V1QueryPacketAcknowledgementResponse, RpcStatus>({
      path: `/tibc/core/packet/v1beta1/source_chains/${sourceChain}/dest_chains/${destChain}/packet_acks/${sequence}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPacketCommitments
   * @summary PacketCommitments returns all the packet commitments hashes associated
   * @request GET:/tibc/core/packet/v1beta1/source_chains/{source_chain}/dest_chains/{dest_chain}/packet_commitments
   */
  queryPacketCommitments = (
    sourceChain: string,
    destChain: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryPacketCommitmentsResponse, RpcStatus>({
      path: `/tibc/core/packet/v1beta1/source_chains/${sourceChain}/dest_chains/${destChain}/packet_commitments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Query
 * @name QueryUnreceivedAcks
 * @summary UnreceivedAcks returns all the unreceived TIBC acknowledgements associated
with sequences.
 * @request GET:/tibc/core/packet/v1beta1/source_chains/{source_chain}/dest_chains/{dest_chain}/packet_commitments/{packet_ack_sequences}/unreceived_acks
 */
  queryUnreceivedAcks = (
    sourceChain: string,
    destChain: string,
    packetAckSequences: string[],
    params: RequestParams = {},
  ) =>
    this.request<V1QueryUnreceivedAcksResponse, RpcStatus>({
      path: `/tibc/core/packet/v1beta1/source_chains/${sourceChain}/dest_chains/${destChain}/packet_commitments/${packetAckSequences}/unreceived_acks`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Query
 * @name QueryUnreceivedPackets
 * @summary UnreceivedPackets returns all the unreceived TIBC packets associated with
sequences.
 * @request GET:/tibc/core/packet/v1beta1/source_chains/{source_chain}/dest_chains/{dest_chain}/packet_commitments/{packet_commitment_sequences}/unreceived_packets
 */
  queryUnreceivedPackets = (
    sourceChain: string,
    destChain: string,
    packetCommitmentSequences: string[],
    params: RequestParams = {},
  ) =>
    this.request<V1QueryUnreceivedPacketsResponse, RpcStatus>({
      path: `/tibc/core/packet/v1beta1/source_chains/${sourceChain}/dest_chains/${destChain}/packet_commitments/${packetCommitmentSequences}/unreceived_packets`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPacketCommitment
   * @summary PacketCommitment queries a stored packet commitment hash.
   * @request GET:/tibc/core/packet/v1beta1/source_chains/{source_chain}/dest_chains/{dest_chain}/packet_commitments/{sequence}
   */
  queryPacketCommitment = (sourceChain: string, destChain: string, sequence: string, params: RequestParams = {}) =>
    this.request<V1QueryPacketCommitmentResponse, RpcStatus>({
      path: `/tibc/core/packet/v1beta1/source_chains/${sourceChain}/dest_chains/${destChain}/packet_commitments/${sequence}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Query
 * @name QueryPacketReceipt
 * @summary PacketReceipt queries if a given packet sequence has been received on the
queried chain
 * @request GET:/tibc/core/packet/v1beta1/source_chains/{source_chain}/dest_chains/{dest_chain}/packet_receipts/{sequence}
 */
  queryPacketReceipt = (sourceChain: string, destChain: string, sequence: string, params: RequestParams = {}) =>
    this.request<V1QueryPacketReceiptResponse, RpcStatus>({
      path: `/tibc/core/packet/v1beta1/source_chains/${sourceChain}/dest_chains/${destChain}/packet_receipts/${sequence}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
