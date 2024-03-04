import * as CryptoJS from 'crypto-js';


export const AES_KEY = "__joker__"

export const securityAESEncrypt = (str, key) => {
    return CryptoJS.AES.encrypt(str, key).toString();
};

export const securityAESDecrypt = (str, key) => {
    return CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8);

};
