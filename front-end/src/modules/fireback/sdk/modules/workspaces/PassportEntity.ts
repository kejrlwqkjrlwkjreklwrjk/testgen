/*
*	Generated by fireback 1.1.28
*	Written by Ali Torabi.
*	Checkout the repository for licenses and contribution: https://github.com/torabian/fireback
*/
    import {
        BaseDto,
        BaseEntity,
    } from "../../core/definitions"
    import {
        UserEntity,
    } from "./UserEntity"
// In this section we have sub entities related to this object
// Class body
export type PassportEntityKeys =
  keyof typeof PassportEntity.Fields;
export class PassportEntity extends BaseEntity {
  public children?: PassportEntity[] | null;
  public type?: string | null;
  public user?: UserEntity | null;
  public value?: string | null;
  /**
  Store the secret of 2FA using time based dual factor authentication here for this specific passport. If set, during authorization will be asked.
  */
  public totpSecret?: string | null;
  /**
  Regardless of the secret, user needs to confirm his secret. There is an extra action to confirm user totp, could be used after signup or prior to login.
  */
  public totpConfirmed?: boolean | null;
  public password?: string | null;
  public confirmed?: boolean | null;
  public accessToken?: string | null;
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/passport/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/passport/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/passport/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/passports`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "passport/edit/:uniqueId",
      Rcreate: "passport/new",
      Rsingle: "passport/:uniqueId",
      Rquery: "passports",
  };
  public static definition = {
  "name": "passport",
  "features": {},
  "security": {
    "writeOnRoot": true
  },
  "gormMap": {},
  "fields": [
    {
      "name": "type",
      "type": "string",
      "validate": "required",
      "computedType": "string",
      "gormMap": {}
    },
    {
      "name": "user",
      "type": "one",
      "target": "UserEntity",
      "computedType": "UserEntity",
      "gormMap": {}
    },
    {
      "name": "value",
      "type": "string",
      "validate": "required",
      "computedType": "string",
      "gorm": "unique",
      "gormMap": {}
    },
    {
      "name": "totpSecret",
      "description": "Store the secret of 2FA using time based dual factor authentication here for this specific passport. If set, during authorization will be asked.",
      "type": "string",
      "computedType": "string",
      "gormMap": {}
    },
    {
      "name": "totpConfirmed",
      "description": "Regardless of the secret, user needs to confirm his secret. There is an extra action to confirm user totp, could be used after signup or prior to login.",
      "type": "bool",
      "computedType": "boolean",
      "gormMap": {}
    },
    {
      "name": "password",
      "type": "string",
      "json": "-",
      "yaml": "-",
      "computedType": "string",
      "gormMap": {}
    },
    {
      "name": "confirmed",
      "type": "bool",
      "computedType": "boolean",
      "gormMap": {}
    },
    {
      "name": "accessToken",
      "type": "string",
      "computedType": "string",
      "gormMap": {}
    }
  ],
  "description": "Represent a mean to login in into the system, each user could have multiple passport (email, phone) and authenticate into the system."
}
public static Fields = {
  ...BaseEntity.Fields,
      type: `type`,
      user$: `user`,
        user: UserEntity.Fields,
      value: `value`,
      totpSecret: `totpSecret`,
      totpConfirmed: `totpConfirmed`,
      password: `password`,
      confirmed: `confirmed`,
      accessToken: `accessToken`,
}
}
