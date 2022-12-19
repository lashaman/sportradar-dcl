
import * as fs from "fs";


/**
 * read json file from disk
 * @param path
 * @param encoding
 * @if path is not provided, it will read from the root of the project
 * @if encoding is not provided, it will default to utf-8
 * @if file is not found, it will throw an error
 * @if file is not valid json, it will throw an error
 * @returns json object
 */
export function readJsonFile(path: string, encoding: string = 'utf-8', callbackFn: Function): any {
  if (!path) {
    return callbackFn(new Error('Path is required'));
  }
  if (!fs.existsSync(path)) {
    return callbackFn(new Error(`File not found at path: ${path}`));
  }
  const file = fs.readFileSync(path, {encoding: 'utf-8'});
  try {
    return callbackFn(null, JSON.parse(file));
  } catch (e) {
    return  callbackFn(new Error(`File is not valid json: ${path}`));
  }
}
