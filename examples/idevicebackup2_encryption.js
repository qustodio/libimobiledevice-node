const imobiledevice = require('../index');

imobiledevice.backup2.encryption({
    debug: false,
    network: false,
    encryption: {enable: true, password: '1234'}},
    (error, data) => {
    if (error) { console.error('encryption error: ', error); }
    else { console.log('set: ', data); }
}, (progress) => { console.log('put pin code? ', progress); });