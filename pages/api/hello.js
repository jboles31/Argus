// // // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// // // require('dotenv').config()
// import axios from 'axios'

// // let results

// // axios.get(`https://api.geocod.io/v1.7/geocode?api_key=8e99d79ee4b1eb867e292518b2276216d92e39d&postal_code=07928&fields=cd`)
// // .then((data) => {
// //   console.log("Response: ", data)
// //   results = data;
// //   // res.send(data);
// // })
// // .catch((error) => {
// //   console.error(error);
// //   res.status(400);
// // })

// // export default function handler(req, res) {
// //   if (results.length) {
// //     res.status(200).json(results)
// //   } else {
// //     res.status(400)
// //   }

// // }
// export default async function handler(req, res) {
//   // if (req.query.id == 'getTwitFrmUrl') {
//     // const resData = await fetch("https://api.geocod.io/v1.7/geocode?api_key=8e99d79ee4b1eb867e292518b2276216d92e39d&postal_code=07928&fields=cd", {
//     const resData = await fetch("https://api.publicapis.org/entries", {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     }
//     )// ).then((response) => response.text()).then(result => JSON.parse(result).data);

//     // await resData.json()
//     console.log("Response", resData)
//     res.status(200).json({ data: resData });
//   // }
//   // else if (req.query.id == 'getformdata') {
//   //   console.log('getformdata api');
//   //   res.status(200).json({ user: 'getuserData' });
//   // }
// }

// // export default async function handler(req, res) {
// //   if (req.method === 'POST') {
// //     // Process a POST request
// //   } else {
// //     await axios({
// //       method: 'get',
// //       url: "https://api.geocod.io/v1.7/geocode?api_key=8e99d79ee4b1eb867e292518b2276216d92e39d&postal_code=07928&fields=cd",
// //       responseType: 'application/json'
// //     }).then((data) => {
// //       res.status(200).json(data);
// //     })
    
// //   }
// // }