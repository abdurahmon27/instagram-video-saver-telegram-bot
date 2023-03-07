export interface IFromProps {
  id: number;
  is_bot: boolean;
  first_name: string;
  language_code: string;
}
export interface IChatProps {
  id: number;
  first_name: string;
  type: string;
}
export interface IEntitiesProps {
  offset: number;
  length: number;
  type: string;
}

export interface IMessage {
  message_id: number;
  from: IFromProps;
  chat: IChatProps;
  date: number;
  text: string;
  entities?: IEntitiesProps[];
}

export interface ICallbackProps {
  id: string;
  from: IFromProps;
  message: IMessage;
  chat_instance: string;
  data: string;
}

export interface IResultProps {
  update_id: number;
  message?: IMessage;
  callback_query?: ICallbackProps;
}

export interface IInlineButton {
  text: string;
  callback_data: string;
}

export interface IPollingCallbackProps {
  chatId: number;
  messageId: number;
  text: string;
  data?: string;
  options?: DynamicObject<any>;
}
export interface IWatchCallbackProps {
  options?: DynamicObject<any>;
}

export interface DynamicObject<T> {
  [key: string]: T;
}

export type processType = "parallel" | "series";
export type listenerType = "text" | "callback";
export type callbackType = (param: IPollingCallbackProps) => Promise<void>;
export type watchCallbackType = (param: IWatchCallbackProps) => Promise<void>;
export type initCallbackType = (param: DynamicObject<any>) => void;
export interface ITelegramApiProps {
  polling?: boolean;
  process?: processType;
}
export interface IPollingArgumentProps {
  listener: listenerType;
  callback: callbackType;
}

export interface IMessageQueueProps {
  chatId: number;
  message: string;
}
