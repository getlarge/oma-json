/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * used to time events and actions, using patterns common to industrial timers. A POST to the trigger resource or On/Off input state change starts the timing operation, and the timer remaining time shows zero when the operation is complete. The patterns supported are One-Shot (mode 1), On-Time or Interval (mode 2), Time delay on pick-up or TDPU (tmode 3), and Time Delay on Drop-Out or TDDO (mode 4). Mode 0 disables the timer, so the output follows the input with no delay. A counter is provided to count occurrences of the timer output changing from 0 to 1. Writing a value of zero resets the counter. The Digital Input State resource reports the state of the timer output
 */
export interface Timer {
  /**
   * The cumulative value of active state detected.
   */
  "5501"?: number;
  /**
   * The duration of the time delay.
   */
  "5521"?: number;
  /**
   * Trigger initiating actuation.
   */
  "5523"?: string;
  /**
   * The off time when On/Off control remains on.
   */
  "5525"?: number;
  /**
   * type of timer pattern used by the patterns.
   */
  "5526"?: number;
  /**
   * Counts the number of times the timer output transitions from 0 to 1.
   */
  "5534"?: number;
  /**
   * The time remaining in an operation.
   */
  "5538"?: number;
  /**
   * The current state of the timer output.
   */
  "5543"?: boolean;
  /**
   * The total time in seconds that the timer input is true. Writing a 0 resets the time.
   */
  "5544"?: number;
  /**
   * The application type of the sensor or actuator as a string, for instance, “Air Pressure”.
   */
  "5750"?: string;
  /**
   * This resource represents a power source, which can be controlled, the setting of which is a Boolean value (1,0) where 1 is on and 0 is off
   */
  "5850"?: boolean;
}
