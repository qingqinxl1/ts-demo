const numberReg = /^[0-9]+$/;
interface StringValidator {
  isAcceptable(s: string): (boolean);
}
export default class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberReg.test(s);
  }
}