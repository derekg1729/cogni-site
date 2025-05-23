/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The role of the message sender.
 */
export type Role = "user" | "assistant" | "system";
/**
 * The content of the message.
 */
export type Content = string;

/**
 * Schema for a single message in the chat history.
 */
export interface HistoryMessage {
  role: Role;
  content: Content;
  [k: string]: unknown;
}
