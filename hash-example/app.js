const bcrypt = require('bcrypt')

const createHashPasswod = async (password) => {
    // const salt = await bcrypt.genSalt(10);
    // console.log(salt);
    const result = await bcrypt.hash(password, 10);
    // console.log(result);
    const compareResult1 = await bcrypt(password, result);
    console.log(compareResult1);
    const compareResult2 = await bcrypt(123457, result);
    console.log(compareResult2);
}
createHashPasswod(123456)