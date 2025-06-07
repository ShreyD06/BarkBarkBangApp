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

// module.exports = async function (req) {
//     console.log("Function executed!");
//     let body;
//     try {
//         body = JSON.parse(req.bodyRaw || '{}');
//     } catch (e) {
//         console.error("Invalid JSON", e);
//     }
//     console.log(JSON.parse(body.data || '{}'));
    
//     return {
//       message: "This is a response!"
//     };
//   };


// module.exports = async function (req) {
//     console.log("=== FUNCTION EXECUTED ===");
    
//     // Log the raw request details
//     console.log("req.bodyRaw:", await req.bodyRaw);
//     console.log("req.bodyRaw type:", typeof req.bodyRaw);
//     console.log("req.bodyRaw length:", req.bodyRaw ? req.bodyRaw.length : 'N/A');
    
//     // Log other request properties
//     console.log("req.headers:", JSON.stringify(req.headers, null, 2));
//     console.log("req.method:", req.method);
//     console.log("req.url:", req.url);
    
//     let body;
//     try {
//       body = await JSON.parse(req.bodyRaw || '{}');
//       console.log("Successfully parsed body:", body);
//       console.log("Body type:", typeof body);
//       console.log("Body keys:", Object.keys(body));
//     } catch (e) {
//       console.error("Invalid JSON in bodyRaw:", e.message);
//       console.log("Raw body that failed to parse:", req.bodyRaw);
//       return {
//         error: "Invalid JSON in request body",
//         rawBody: req.bodyRaw
//       };
//     }
    
//     // Check if body.data exists
//     console.log("body.data exists:", 'data' in body);
//     console.log("body.data value:", body.data);
//     console.log("body.data type:", typeof body.data);
    
//     // Try to parse body.data safely
//     let formData;
//     try {
//       if (body.data) {
//         formData = JSON.parse(body.data);
//         console.log("Successfully parsed formData:", formData);
//       } else {
//         console.log("No 'data' property found in body");
//         formData = body; // Maybe the data is directly in body
//       }
//     } catch (e) {
//       console.error("Failed to parse body.data:", e.message);
//       console.log("body.data that failed to parse:", body.data);
//       return {
//         error: "Invalid JSON in data property",
//         bodyData: body.data
//       };
//     }
    
//     return {
//       message: "Debug complete!",
//       receivedBody: body,
//       parsedFormData: formData,
//       success: true
//     };
//   };

module.exports = (req, res) => {
  console.log(req.body);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello from Node.js on Vercel!' }));
};

  
  