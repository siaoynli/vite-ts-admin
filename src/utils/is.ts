import { Dayjs } from 'dayjs';

const opt = Object.prototype.toString;

export function isArray(obj: unknown): obj is unknown[] {
  return opt.call(obj) === '[object Array]';
}

export function isNull(obj: unknown): obj is null {
  return opt.call(obj) === '[object Null]';
}

export function isBoolean(obj: unknown): obj is boolean {
  return opt.call(obj) === '[object Boolean]';
}

export function isObject(obj: unknown): obj is Record<string, unknown> {
  return opt.call(obj) === '[object Object]';
}

export const isPromise = <T>(obj: unknown): obj is Promise<T> => {
  return opt.call(obj) === '[object Promise]';
};

export function isString(obj: unknown): obj is string {
  return opt.call(obj) === '[object String]';
}

export function isNumber(obj: unknown): obj is number {
  return opt.call(obj) === '[object Number]' && obj === obj;
}

export function isRegExp(obj: unknown): boolean {
  return opt.call(obj) === '[object RegExp]';
}

export function isDate(obj: unknown): boolean {
  return opt.call(obj) === '[object Date]';
}

function isHex(color: string): boolean {
  return /^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/.test(color);
}

function isRgb(color: string): boolean {
  return /^rgb\((\s*\d+\s*,?){3}\)$/.test(color);
}

function isRgba(color: string): boolean {
  return /^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/.test(color);
}

export function isColor(color: string): boolean {
  return isHex(color) || isRgb(color) || isRgba(color);
}

export function isUndefined(obj: unknown): boolean {
  return obj === undefined;
}

export function isFunction(obj: unknown): obj is (...args: unknown[]) => boolean {
  return typeof obj === 'function';
}

export function isEmptyObject(obj: unknown): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}

export function isExist(obj: unknown): boolean {
  return !!obj || obj === 0;
}

export function isWindow(el: unknown): el is Window {
  return el === window;
}


export function isDayjs(time: unknown): time is Dayjs {
  return (
    isObject(time) &&
    '$y' in time &&
    '$M' in time &&
    '$D' in time &&
    '$d' in time &&
    '$H' in time &&
    '$m' in time &&
    '$s' in time
  );
}