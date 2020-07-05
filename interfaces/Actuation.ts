/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * dedicated to remote actuation such as ON/OFF action or dimming. A multi-state output can also be described as a string. This is useful to send pilot wire orders for instance. It also provides a resource to reflect the time that the device has been switched on.
 */
export interface Actuation {
  /**
   * The application type of the sensor or actuator as a string, for instance, “Air Pressure”.
   */
  "5750"?: string;
  /**
   * This resource represents a power source, which can be controlled, the setting of which is a Boolean value (1,0) where 1 is on and 0 is off
   */
  "5850"?: boolean;
  /**
   * This resource represents dimmer setting, which has an Integer value between 0 and 100 as a percentage.
   */
  "5851"?: number;
  /**
   * The time in seconds that the device has been on. Writing a value of 0 resets the counter.
   */
  "5852"?: number;
  /**
   * A string describing a state for multiple level output such as Pilot Wire.
   */
  "5853"?: string;
}
