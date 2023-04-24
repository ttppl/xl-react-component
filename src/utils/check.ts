export const isNumber = function (obj: unknown): obj is number {
  return Object.prototype.toString.call(obj) === "[object Number]";
};

export const isString = function (obj: unknown): obj is string {
  return Object.prototype.toString.call(obj) === "[object String]";
};
