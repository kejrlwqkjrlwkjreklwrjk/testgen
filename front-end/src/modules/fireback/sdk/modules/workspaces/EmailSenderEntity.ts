/*
*	Generated by fireback 1.1.28
*	Written by Ali Torabi.
*	Checkout the repository for licenses and contribution: https://github.com/torabian/fireback
*/
    import {
        BaseDto,
        BaseEntity,
    } from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type EmailSenderEntityKeys =
  keyof typeof EmailSenderEntity.Fields;
export class EmailSenderEntity extends BaseEntity {
  public children?: EmailSenderEntity[] | null;
  public fromName?: string | null;
  public fromEmailAddress?: string | null;
  public replyTo?: string | null;
  public nickName?: string | null;
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/email-sender/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/email-sender/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/email-sender/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/email-senders`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "email-sender/edit/:uniqueId",
      Rcreate: "email-sender/new",
      Rsingle: "email-sender/:uniqueId",
      Rquery: "email-senders",
  };
  public static definition = {
  "name": "emailSender",
  "features": {},
  "security": {
    "writeOnRoot": true
  },
  "gormMap": {},
  "fields": [
    {
      "name": "fromName",
      "type": "string",
      "validate": "required",
      "computedType": "string",
      "gormMap": {}
    },
    {
      "name": "fromEmailAddress",
      "type": "string",
      "validate": "required",
      "computedType": "string",
      "gorm": "unique",
      "gormMap": {}
    },
    {
      "name": "replyTo",
      "type": "string",
      "validate": "required",
      "computedType": "string",
      "gormMap": {}
    },
    {
      "name": "nickName",
      "type": "string",
      "validate": "required",
      "computedType": "string",
      "gormMap": {}
    }
  ],
  "description": "All emails going from the system need to have a virtual sender (nick name, email address, etc)"
}
public static Fields = {
  ...BaseEntity.Fields,
      fromName: `fromName`,
      fromEmailAddress: `fromEmailAddress`,
      replyTo: `replyTo`,
      nickName: `nickName`,
}
}
