/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * used with an ampmeter to report measured electric current in amperes. It also provides resources for minimum and maximum measured values, as well as the minimum and maximum range that can be measured by the sensor. An example measurement unit is volts
 */
export interface Current {
  /**
   * The minimum value that can be measured by the sensor
   */
  "5601"?: number;
  /**
   * The maximum value that can be measured by the sensor.
   */
  "5602"?: number;
  /**
   * The minimum value that can be measured by the sensor.
   */
  "5603"?: number;
  /**
   * The maximum value that can be measured by the sensor.
   */
  "5604"?: number;
  /**
   * Reset the Min and Max Measured Values to Current Value.
   */
  "5605"?: string;
  /**
   * Last or Current Measured Value from the Sensor.
   */
  "5700"?: number;
  /**
   * If present, the type of sensor defined as the UCUM Unit Definition e.g. “Cel” for Temperature in Celcius.
   */
  "5701"?: string;
  /**
   * The application type of the sensor or actuator as a string, for instance, “Air Pressure”.
   */
  "5750"?: string;
  /**
   * Read or Write the current calibration coefficient.
   */
  "5821"?: number;
}
