// export default function checkToken(req, res, next) {
//   console.log(dayjs().format("YYYY-MM-DD HH:mm:ss A"));
//   console.log("req body token", req.get("authorization"));
//   let token = req.get("authorization");
//   console.log("token", token);
//   if (token) {
//     token = token.slice(7);
//     verify(token, tokenKey, (err, decode) => {
//       if (err) {
//         return res.json({
//           msg: "Invalid token",
//         });
//       } else {
//         next();
//       }
//     });
//   } else {
//     return res.json({ msg: "Access denied!!! Unautherized user!!!" });
//   }
// }
