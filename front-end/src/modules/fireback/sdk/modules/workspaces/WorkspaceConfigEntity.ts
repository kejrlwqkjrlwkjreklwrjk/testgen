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
export type WorkspaceConfigEntityKeys =
  keyof typeof WorkspaceConfigEntity.Fields;
export class WorkspaceConfigEntity extends BaseEntity {
  public children?: WorkspaceConfigEntity[] | null;
  /**
  Enables the recaptcha2 for authentication flow.
  */
  public enableRecaptcha2?: boolean | null;
  /**
  Enables the otp option. It's not forcing it, so user can choose if they want otp or password.
  */
  public enableOtp?: boolean | null;
  /**
  Forces the user to have otp verification before can create an account. They can define their password still.
  */
  public requireOtpOnSignup?: boolean | null;
  /**
  Forces the user to use otp when signing in. Even if they have password set, they won't use it and only will be able to signin using that otp.
  */
  public requireOtpOnSignin?: boolean | null;
  /**
  Secret which would be used to decrypt if the recaptcha is correct. Should not be available publicly.
  */
  public recaptcha2ServerKey?: string | null;
  /**
  Secret which would be used for recaptcha2 on the client side. Can be publicly visible, and upon authenticating users it would be sent to front-end.
  */
  public recaptcha2ClientKey?: string | null;
  /**
  Enables user to make 2FA using apps such as google authenticator or microsoft authenticator.
  */
  public enableTotp?: boolean | null;
  /**
  Forces the user to setup a 2FA in order to access their account. Users which did not setup this won't be affected.
  */
  public forceTotp?: boolean | null;
  /**
  Forces users who want to create account using phone number to also set a password on their account
  */
  public forcePasswordOnPhone?: boolean | null;
  /**
  Forces the creation of account using phone number to ask for user firstname and lastname
  */
  public forcePersonNameOnPhone?: boolean | null;
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-config/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-config/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-config/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-configs`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "workspace-config/edit/:uniqueId",
      Rcreate: "workspace-config/new",
      Rsingle: "workspace-config/:uniqueId",
      Rquery: "workspace-configs",
  };
  public static definition = {
  "name": "workspaceConfig",
  "distinctBy": "workspace",
  "features": {},
  "security": {
    "writeOnRoot": true,
    "resolveStrategy": "workspace"
  },
  "gormMap": {},
  "fields": [
    {
      "name": "enableRecaptcha2",
      "description": "Enables the recaptcha2 for authentication flow.",
      "type": "bool",
      "computedType": "boolean",
      "gormMap": {}
    },
    {
      "name": "enableOtp",
      "recommended": true,
      "description": "Enables the otp option. It's not forcing it, so user can choose if they want otp or password.",
      "type": "bool",
      "computedType": "boolean",
      "gormMap": {}
    },
    {
      "name": "requireOtpOnSignup",
      "recommended": true,
      "description": "Forces the user to have otp verification before can create an account. They can define their password still.",
      "type": "bool",
      "computedType": "boolean",
      "gormMap": {}
    },
    {
      "name": "requireOtpOnSignin",
      "recommended": true,
      "description": "Forces the user to use otp when signing in. Even if they have password set, they won't use it and only will be able to signin using that otp.",
      "type": "bool",
      "default": false,
      "computedType": "boolean",
      "gormMap": {}
    },
    {
      "name": "recaptcha2ServerKey",
      "description": "Secret which would be used to decrypt if the recaptcha is correct. Should not be available publicly.",
      "type": "string",
      "computedType": "string",
      "gormMap": {}
    },
    {
      "name": "recaptcha2ClientKey",
      "description": "Secret which would be used for recaptcha2 on the client side. Can be publicly visible, and upon authenticating users it would be sent to front-end.",
      "type": "string",
      "computedType": "string",
      "gormMap": {}
    },
    {
      "name": "enableTotp",
      "recommended": true,
      "description": "Enables user to make 2FA using apps such as google authenticator or microsoft authenticator.",
      "type": "bool",
      "computedType": "boolean",
      "gormMap": {}
    },
    {
      "name": "forceTotp",
      "recommended": true,
      "description": "Forces the user to setup a 2FA in order to access their account. Users which did not setup this won't be affected.",
      "type": "bool",
      "computedType": "boolean",
      "gormMap": {}
    },
    {
      "name": "forcePasswordOnPhone",
      "description": "Forces users who want to create account using phone number to also set a password on their account",
      "type": "bool",
      "computedType": "boolean",
      "gormMap": {}
    },
    {
      "name": "forcePersonNameOnPhone",
      "description": "Forces the creation of account using phone number to ask for user firstname and lastname",
      "type": "bool",
      "computedType": "boolean",
      "gormMap": {}
    }
  ],
  "cliName": "config",
  "description": "Contains configuration which would be necessary for application environment to be running. At the moment, a single record is allowed, and only for root workspace. But in theory it could be configured per each workspace independently. For sub projects do not touch this, rather create a custom config entity if workspaces in the product need extra config."
}
public static Fields = {
  ...BaseEntity.Fields,
      enableRecaptcha2: `enableRecaptcha2`,
      enableOtp: `enableOtp`,
      requireOtpOnSignup: `requireOtpOnSignup`,
      requireOtpOnSignin: `requireOtpOnSignin`,
      recaptcha2ServerKey: `recaptcha2ServerKey`,
      recaptcha2ClientKey: `recaptcha2ClientKey`,
      enableTotp: `enableTotp`,
      forceTotp: `forceTotp`,
      forcePasswordOnPhone: `forcePasswordOnPhone`,
      forcePersonNameOnPhone: `forcePersonNameOnPhone`,
}
}
