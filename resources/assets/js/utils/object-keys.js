import isPlainObject from 'lodash.isplainobject';
import camelCase from 'lodash.camelcase';
import snakeCase from 'lodash.snakecase';
import reduce from 'lodash.reduce';

const convertKeys = (object, converter) => {
    if (Array.isArray(object))
        return object.map(innerObject => convertKeys(innerObject, converter));

    if (!isPlainObject(object))
        return object;

    return reduce(object, (result, value, key) => {
        /* eslint-disable no-param-reassign */
        result[converter(key)] = convertKeys(value, converter);
        /* eslint-enable no-param-reassign */
        return result;
    }, {});
};

export const toCamel = object => convertKeys(object, camelCase);

export const toSnake = object => convertKeys(object, snakeCase);
