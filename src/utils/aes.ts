import CryptoJS from 'crypto-js';

export const encryptPassword = (verifycode: string, password: string) => {
  const key = CryptoJS.enc.Utf8.parse(
    verifycode + verifycode + verifycode + verifycode,
  );
  const srcs = CryptoJS.enc.Utf8.parse(password);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  password = encrypted.ciphertext.toString();

  return password;
};
