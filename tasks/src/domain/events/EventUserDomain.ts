export interface EventUserDomain {
  username: string;
  email: string;
  eventType: EventType;
  referenceId: string;
}

export enum EventType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED'
}