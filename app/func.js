// module.exports = async ({ req, res, log }) => {
//     context.log("Received Google Sheets update");
//     context.log(req.body); // Logs the data Google sent
  
//     return res.json({ success: true, message: "Data received!" });
//   };


// export default async ({req, res, log, error}) => {
//     log("received update")
//     log(req.bodyJson)

//     return res.json({ success: true, message: "Data received!" })
// }

module.exports = async function (req, res) {
    console.log("Function executed!");
    res.json({ ok: true });
  };
  