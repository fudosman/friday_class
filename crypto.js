// Encryption and Decryption:

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const password = 'myPassword';

// Encryption
const cipher = crypto.createCipher(algorithm, password);
const input = 'Hello, World!';
const encrypted = cipher.update(input, 'utf8', 'hex') + cipher.final('hex');

console.log('Encrypted:', encrypted);

// Decryption
const decipher = crypto.createDecipher(algorithm, password);
const decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');

console.log('Decrypted:', decrypted);


// Hashing
const crypto = require('crypto');

const algorithm = 'sha256';
const data = 'Hello, World!';

// Hashing
const hash = crypto.createHash(algorithm);
hash.update(data, 'utf8');
const digest = hash.digest('hex');

console.log('Hash:', digest);


// Generating Random Values:
const crypto = require('crypto');

// Generating random bytes
const size = 16;
const randomBytes = crypto.randomBytes(size);
console.log('Random Bytes:', randomBytes.toString('hex'));

// Filling a buffer with random values
const buffer = Buffer.alloc(size);
crypto.randomFill(buffer, (err, buf) => {
  if (err) throw err;
  console.log('Random Buffer:', buf.toString('hex'));
});


// Generating Random Values:
const crypto = require('crypto');

// Generating random bytes
const size = 16;
const randomBytes = crypto.randomBytes(size);
console.log('Random Bytes:', randomBytes.toString('hex'));

// Filling a buffer with random values
const buffer = Buffer.alloc(size);
crypto.randomFill(buffer, (err, buf) => {
  if (err) throw err;
  console.log('Random Buffer:', buf.toString('hex'));
});


// These methods provide additional functionalities such as key derivation and timing-safe buffer comparison, which can be used in various security-related scenarios.
const crypto = require('crypto');

const password = 'myPassword';
const salt = crypto.randomBytes(16);
const iterations = 10000;
const keylen = 64;
const digest = 'sha512';

// Password-based key derivation
crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, derivedKey) => {
  if (err) throw err;
  console.log('Derived Key:', derivedKey.toString('hex'));
});

// Timing-safe buffer comparison
const buffer1 = Buffer.from('hello', 'utf8');
const buffer2 = Buffer.from('world', 'utf8');
const isEqual = crypto.timingSafeEqual(buffer1, buffer2);
console.log('Buffers are equal:', isEqual);
