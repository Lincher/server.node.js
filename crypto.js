const crypto = require('crypto');

// MD5 sha1 等单加密算法
const hash = crypto.createHash('sha512');
//md5 ,sha1

hash.update('Hello,world!');
hash.update('Hello,nodejs!');

console.log(hash.digest('hex'));

// Hmac 密钥加密算法
const hmac =crypto.createHmac('sha512','secret-key');

hmac.update('Hello,world!');
hmac.update('Hello,nodejs!');

console.log(hmac.digest('hex'));

// AES对称加密算法，加解密都用同意给密钥
function aesEncrypt(data,key){
    const cipher = crypto.createCipher('aes192',key);
    var crypted=  cipher.update(data,'utf8','hex');
    crypted +=cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted,key){
    const decipher = crypto.createDecipher('aes192',key);
    var decrypted = decipher.update(encrypted,'hex','utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}


var data = "hello,this is a secret message!";
var key = 'password';
var encrypted = aesEncrypt(data,key);
var decrypted = aesDecrypt(encrypted,key);

console.log('Plain text:'+data);
console.log('encrypted text:'+encrypted);
console.log('decrypted text:'+decrypted);