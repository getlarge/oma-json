/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * can be used to represent a 1-3 axis accelerometer.
 */
export interface Accelerometer {
  /**
   * The minimum value that can be measured by the sensor.
   */
  "5603": number;
  /**
   * The maximum value that can be measured by the sensor.
   */
  "5604": number;
  /**
   * If present, the type of sensor defined as the UCUM Unit Definition e.g. “Cel” for Temperature in Celcius.
   */
  "5701": string;
  /**
   * The measured value along the X axis.
   */
  "5702": number;
  /**
   * The measured value along the Y axis.
   */
  "5703": number;
  /**
   * The measured value along the Z axis.
   */
  "5704": number;
}