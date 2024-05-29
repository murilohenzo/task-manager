export interface EventUserDomain {
  username: string;
  email: string;
  eventType: EventType;
}

export enum EventType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED'
}