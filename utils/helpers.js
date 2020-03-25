import moment from 'moment';
import * as _ from 'lodash';
import { decamelizeKeys } from 'humps';

const formatNumberAsTime = number => {
  const pattern = 'x:00:00';
  return pattern.replace('x', number);
};

export function convertUTCTimeToLocalTime(number) {
  const time = formatNumberAsTime(number);
  return moment
    .utc(time, 'HH:mm:ss')
    .local()
    .hour();
}

export function convertLocalTimeToUTCTime(number) {
  const time = formatNumberAsTime(number);
  return moment(time, 'HH:mm:ss')
    .utc()
    .hour();
}

export function convertNumbersToArray(start, end) {
  const range = [];
  for (let counter = start; counter <= end; counter += 1) {
    range.push(counter);
  }
  return range;
}

export function convertParamsToQueryString(params) {
  const paramsConverted = [];
  _.forIn(decamelizeKeys(params), (value, key) => {
    paramsConverted.push(`${key}=${value}`);
  });
  return _.join(paramsConverted, '&');
}
