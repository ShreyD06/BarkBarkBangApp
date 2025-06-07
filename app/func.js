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


module.exports = async function (req, res) {
    console.log("=== FUNCTION EXECUTED ===");
    
    // Log ALL available properties on the req object
    console.log("Available req properties:", Object.keys(req));
    
    // Log the raw request details
    console.log("req.bodyRaw:", req.bodyRaw);
    console.log("req.bodyRaw type:", typeof req.bodyRaw);
    console.log("req.bodyRaw length:", req.bodyRaw ? req.bodyRaw.length : 'N/A');
    
    // Check other possible body properties
    console.log("req.body:", req.body);
    console.log("req.payload:", req.payload);
    console.log("req.data:", req.data);
    
    // Log other request properties
    console.log("req.headers:", JSON.stringify(req.headers, null, 2));
    console.log("req.method:", req.method);
    console.log("req.url:", req.url);
    console.log("req.query:", req.query);
    console.log("req.path:", req.path);
    
    // let parsedData;
    
    // // Try different approaches to get the data
    // try {
    //   // Method 1: Check if bodyRaw contains the data directly
    //   if (req.bodyRaw) {
    //     console.log("Attempting to parse bodyRaw directly...");
    //     parsedData = JSON.parse(req.bodyRaw);
    //     console.log("Successfully parsed bodyRaw:", parsedData);
    //   } 
    //   // Method 2: Check if body property exists (for domain-based executions)
    //   else if (req.body) {
    //     console.log("Using req.body...");
    //     parsedData = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    //     console.log("Successfully got body data:", parsedData);
    //   }
    //   // Method 3: For execution API, the data might be nested
    //   else {
    //     console.log("Trying to find nested data...");
    //     // Sometimes the execution API wraps data differently
    //     const bodyData = req.bodyRaw ? JSON.parse(req.bodyRaw) : {};
        
    //     // Check if there's a 'body' property in the parsed data
    //     if (bodyData.body) {
    //       parsedData = typeof bodyData.body === 'string' ? JSON.parse(bodyData.body) : bodyData.body;
    //       console.log("Found data in nested body:", parsedData);
    //     } else {
    //       parsedData = bodyData;
    //       console.log("Using bodyData directly:", parsedData);
    //     }
    //   }
    // } catch (e) {
    //   console.error("Failed to parse request data:", e.message);
    //   console.log("Raw data that failed to parse:", req.bodyRaw);
      
    //   return res.json({
    //     error: "Invalid JSON in request",
    //     rawBody: req.bodyRaw,
    //     body: req.body,
    //     success: false
    //   });
    // }
    
    // // Process the parsed data
    // console.log("Final parsed data:", parsedData);
    // console.log("Data type:", typeof parsedData);
    // console.log("Data keys:", parsedData ? Object.keys(parsedData) : 'No keys');
    
    // // Check for your expected data fields
    // if (parsedData && parsedData.rowIndex) {
    //   console.log("Row index:", parsedData.rowIndex);
    //   console.log("Updated at:", parsedData.updatedAt);
      
    //   // Process your sheet data here
    //   // For example, you could save to a database, send notifications, etc.
      
    //   return res.json({
    //     message: "Successfully processed sheet update!",
    //     receivedData: parsedData,
    //     rowIndex: parsedData.rowIndex,
    //     success: true
    //   });
    // } else {
    //   console.log("Expected data structure not found");
    //   return res.json({
    //     message: "Data received but structure unexpected",
    //     receivedData: parsedData,
    //     success: false
    //   });
    // }
  };

  
  
  