export interface SomePropInterface {
  prop: string;
}

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
 * @category Category 1
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
 * @category Category 1
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
 * @category Category 2
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
 * @category Category 2
 */
export const someFunction2 = (someParam: number) => {
  return 0;
}


