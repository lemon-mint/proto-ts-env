/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Any } from "../google/protobuf/any";

export const protobufPackage = "proto";

export interface ErrorStatus {
  message: string;
  details: Any[];
}

export interface Message {
  name: string;
  id: number;
}

function createBaseErrorStatus(): ErrorStatus {
  return { message: "", details: [] };
}

export const ErrorStatus = {
  encode(message: ErrorStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    for (const v of message.details) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.details.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ErrorStatus {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      details: Array.isArray(object?.details) ? object.details.map((e: any) => Any.fromJSON(e)) : [],
    };
  },

  toJSON(message: ErrorStatus): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    if (message.details) {
      obj.details = message.details.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.details = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ErrorStatus>, I>>(object: I): ErrorStatus {
    const message = createBaseErrorStatus();
    message.message = object.message ?? "";
    message.details = object.details?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMessage(): Message {
  return { name: "", id: 0 };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== 0) {
      writer.uint32(16).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Message {
    return { name: isSet(object.name) ? String(object.name) : "", id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.name = object.name ?? "";
    message.id = object.id ?? 0;
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
