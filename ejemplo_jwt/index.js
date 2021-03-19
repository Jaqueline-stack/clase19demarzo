var jwt = require ('jsonwebtoken');
var payload={
  userdata:{'email':'joe@doe.com','phone':'23283984','perfil':'user'}
};
const clave="dios1234";
const token =jwt.sign(payload,clave,{expiresIn:60*5});
 console.log(token);
