/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 *  generic object that can be used with any kind of analog output interface.
 */
export interface AnalogOutput {
  /**
   * The minimum value that can be measured by the sensor.
   */
  "5603": number;
  /**
   * The maximum value that can be measured by the sensor.
   */
  "5604": number;
  /**
   * The current state of the analogue output.
   */
  "5650": number;
  /**
   * The application type of the sensor or actuator as a string, for instance, “Air Pressure”.
   */
  "5750": string;
}