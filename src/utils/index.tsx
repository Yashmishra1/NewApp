import {PASSWORD_MIN_COUNT, PASSWORD_MAX_COUNT} from './constants';

// regex
export function isValidEmail(email: string) {
  var reg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

export function isValidPassword(password: any) {
  // const reg = new RegExp(
  //   `^[^\s]{${PASSWORD_MIN_COUNT},${PASSWORD_MAX_COUNT}}$`,
  // );
  const reg = new RegExp(
    `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])\\S{${PASSWORD_MIN_COUNT},${PASSWORD_MAX_COUNT}}$`,
  );
  return reg.test(password);
}

// export function isValidUsername(username) {
//   var reg = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
//   return reg.test(username);
// }

// export function isValidName(name) {
//   var reg = /^([a-zA-Z0-9]+\s)*[a-zA-Z0-9]+$/;
//   return reg.test(name);
// }

// export function isValidNumber(number) {
//   var reg = /^\d+$/;
//   return reg.test(number);
// }

// // string
// export function capitalizeString(value) {
//   return value?.charAt(0)?.toUpperCase() + value?.slice(1);
// }
