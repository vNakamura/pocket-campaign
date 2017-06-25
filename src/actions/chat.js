// @flow

import type {Message} from '../types/Chat';

export const SEND_MESSAGE: string = 'SEND_MESSAGE';

export type ChatAction = {
  type: string,
  room: string,
} & Message;

export function send_message(room: string, text: string): ChatAction {
  return {
    type: SEND_MESSAGE,
    room,
    kind: 'speach',
    content: {
      text,
    },
  };
};
