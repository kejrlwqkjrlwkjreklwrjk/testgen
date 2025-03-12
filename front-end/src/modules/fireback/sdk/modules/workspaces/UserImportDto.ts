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
        PersonEntity,
    } from "./PersonEntity"
// In this section we have sub entities related to this object
export class UserImportPassports extends BaseDto {
  public value?: string | null;
  public password?: string | null;
}
export class UserImportAddress extends BaseDto {
  public street?: string | null;
  public zipCode?: string | null;
  public city?: string | null;
  public country?: string | null;
}
// Class body
export type UserImportDtoKeys =
  keyof typeof UserImportDto.Fields;
export class UserImportDto extends BaseDto {
  public avatar?: string | null;
  public passports?: UserImportPassports[] | null;
  public person?: PersonEntity | null;
      personId?: string | null;
  public address?: UserImportAddress | null;
public static Fields = {
  ...BaseEntity.Fields,
      avatar: `avatar`,
      passports$: `passports`,
      passportsAt: (index: number) => {
        return {
          $: `passports[${index}]`,
  ...BaseEntity.Fields,
      value: `passports[${index}].value`,
      password: `passports[${index}].password`,
        };
      },
          personId: `personId`,
      person$: `person`,
        person: PersonEntity.Fields,
      address$: 'address',
      address: {
  ...BaseEntity.Fields,
      street: `address.street`,
      zipCode: `address.zipCode`,
      city: `address.city`,
      country: `address.country`,
      },
}
  public static definition = {
  "name": "userImport",
  "fields": [
    {
      "name": "avatar",
      "type": "string",
      "computedType": "string",
      "gormMap": {}
    },
    {
      "name": "passports",
      "type": "array",
      "computedType": "UserImportPassports[]",
      "gormMap": {},
      "-": "UserImportPassports",
      "fields": [
        {
          "name": "value",
          "type": "string",
          "computedType": "string",
          "gormMap": {}
        },
        {
          "name": "password",
          "type": "string",
          "computedType": "string",
          "gormMap": {}
        }
      ],
      "linkedTo": "UserImportDto"
    },
    {
      "name": "person",
      "type": "one",
      "target": "PersonEntity",
      "computedType": "PersonEntity",
      "gormMap": {}
    },
    {
      "name": "address",
      "type": "object",
      "computedType": "UserImportAddress",
      "gormMap": {},
      "-": "UserImportAddress",
      "fields": [
        {
          "name": "street",
          "type": "string",
          "computedType": "string",
          "gormMap": {}
        },
        {
          "name": "zipCode",
          "type": "string",
          "computedType": "string",
          "gormMap": {}
        },
        {
          "name": "city",
          "type": "string",
          "computedType": "string",
          "gormMap": {}
        },
        {
          "name": "country",
          "type": "string",
          "computedType": "string",
          "gormMap": {}
        }
      ],
      "linkedTo": "UserImportDto"
    }
  ]
}
}
