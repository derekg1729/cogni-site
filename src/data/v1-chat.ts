/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Cogni API
 * A minimal FastAPI that directly passes user queries to OpenAI, augmented with Cogni memory.
 * OpenAPI spec version: 0.1.0
 */
import type {
  CompleteQueryRequest,
  HTTPValidationError
} from './models';



/**
 * @summary Stream Chat
 */
export type streamChatApiV1ChatPostResponse200 = {
  data: unknown
  status: 200
}

export type streamChatApiV1ChatPostResponse422 = {
  data: HTTPValidationError
  status: 422
}
    
export type streamChatApiV1ChatPostResponseComposite = streamChatApiV1ChatPostResponse200 | streamChatApiV1ChatPostResponse422;
    
export type streamChatApiV1ChatPostResponse = streamChatApiV1ChatPostResponseComposite & {
  headers: Headers;
}

export const getStreamChatApiV1ChatPostUrl = () => {


  

  return `/api/v1/chat`
}

export const streamChatApiV1ChatPost = async (completeQueryRequest: CompleteQueryRequest, options?: RequestInit): Promise<streamChatApiV1ChatPostResponse> => {
  
  const res = await fetch(getStreamChatApiV1ChatPostUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      completeQueryRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: streamChatApiV1ChatPostResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as streamChatApiV1ChatPostResponse
}


