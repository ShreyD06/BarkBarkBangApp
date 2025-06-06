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

module.exports = async function (req) {
    console.log("Function executed!");
    let body;
    try {
        body = JSON.parse(req.bodyRaw || '{}');
    } catch (e) {
        console.error("Invalid JSON", e);
    }
    context.log(body);
    context.log(req.bodyRaw);
    context.log(JSON.stringify(req.headers))
    return {
      message: "This is a response!"
    };
  };
  
  