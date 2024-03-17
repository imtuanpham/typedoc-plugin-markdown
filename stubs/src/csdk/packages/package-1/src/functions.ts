export interface SomePropInterface {
  prop: string;
}

/**
 * @groupDescription Group 1
 * Group 1 description
 * Group 1 description more and more
 */

/**
 * This is a function with multiple arguments and a return value.
 *
 * @example
 *
 * ```ts
 * const example=true;
 * ```
 *
 * @param paramZ - This is a string parameter.
 * @param paramG - This is a parameter with intersection type literal.
 * @param paramA
 *   This is a **parameter** pointing to an interface.
 * @returns This is a numeric return value.
 * @beta
 *
 * @group Group 1
 *
 */
export function betaFunction(
  paramZ: string,
  paramG: { prop: string } & { prop: number },
  paramA: SomePropInterface,
): number {
  return 0;
}

/**
 * This is a function that is assigned to a variable.
 *
 * @param someParam  This is some numeric parameter.
 * @returns This is a numeric return value.
 * @alpha
 *
 * @group Group 1
 */
export const alphaFunction = (someParam: number) => {
  return 0;
};

/**
 * This is a function that is assigned to a variable.
 *
 * @param someParam  This is some numeric parameter.
 * @returns This is a numeric return value.
 *
 * @group Group 2
 */
export const someFunction = (someParam: number) => {
  return 0;
}

/**
 * This is a function that is assigned to a variable.
 *
 * @param someParam  This is some numeric parameter.
 * @returns This is a numeric return value.
 *
 * @group Group 2
 */
export const someFunction2 = (someParam: number) => {
  return 0;
}


