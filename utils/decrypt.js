const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = process.env.NEXT_PUBLIC_SECRETKEY;

const decrypt = (hash) => {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    return decrpyted.toString();
};

module.exports = {decrypt}