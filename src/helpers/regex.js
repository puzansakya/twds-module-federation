export const regex = {
  // Email:
  //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  //   Email: (email: string) => {
  //     var re =
  //       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(email);
  //   },
  //  PhoneNumber = (phone) => {
  //     var re = /^((\\+)|(00)|(\\*)|())[0-9]{3,14}((\\#)|())$/;
  //     return re.test(phone);
  //   },
  //  numberToNepaliCurrency = (number) => {
  //     let rst = parseFloat(number)
  //       .toFixed(2)
  //       // .replace(/\D/g, "")
  //       .replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
  //     return rst;
  //   },
  //  numberAndDecimals = (number) => {
  //     let re = /^([0-9]\d*)(\.\d+)?$/;
  //     return re.test(number);
  //   },
  //  numbersOnly = (number) => {
  //     let re = /^([0-9]\d*)?$/;
  //     return re.test(number);
  //   },
  //    positiveNumber = (number) => {
  //     let re = /^([1-9]\d*)?$/;
  //     return re.test(number);
  //   },
  //    isHtml = (htmlString: string) => {
  //     let re = /(<([^>]+)>)/i; // new RegExp("<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)</\1>"); // /^(</?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[\^'">\s]+))?)+\s*|\s*)/?>)$/;
  //     return re.test(htmlString);
  //   },
  //  isDevanagariUnicode = (testString) => {
  //     let lettersOnly = testString.replace(/\s/g, ""); //remove spaces
  //     let isDevanagari = true;
  //     for (let i = 0; i < lettersOnly.length; i++) {
  //       let code = lettersOnly.charCodeAt(i);
  //       if (code < 0x0900 || code > 0x097f) {
  //         isDevanagari = false;
  //         break;
  //       }
  //     }
  //     return isDevanagari;
  //   }
}
