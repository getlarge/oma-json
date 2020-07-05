/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * serving cell information that the RRC decides to camp on
 */
export interface ScellId {
  /**
   * IMEI of device
   */
  "2"?: string;
  /**
   * PLMN - mcc/mnc
   */
  "6030"?: number;
  /**
   * Band indicator
   */
  "6031"?: number;
  /**
   * Cell Identity
   */
  "6033"?: number;
}
