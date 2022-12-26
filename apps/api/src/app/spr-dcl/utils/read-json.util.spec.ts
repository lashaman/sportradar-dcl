import {readJsonFile} from "./read-json.util";
import path from "path";

describe('JSON file reader', () => {
  test('should read a JSON file and return the parsed data', () => {
    const filePath = __dirname;

    const expectedData = {
      foo: 'bar'
    };
    readJsonFile(path.join(filePath, 'test.json'), 'utf-8', (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual(expectedData);
    });
  });
});
