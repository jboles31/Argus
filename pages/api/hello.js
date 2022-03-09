// // // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// // // require('dotenv').config()
import axios from 'axios'

let results

axios.get(`https://api.geocod.io/v1.7/geocode?api_key=8e99d79ee4b1eb867e292518b2276216d92e39d&postal_code=07928&fields=cd`)
.then((data) => {
  console.log("Response: ", data)
  results = data;
  // res.send(data);
})
.catch((error) => {
  console.error(error);
  res.status(400);
})

// let testResults = {
//   "input": {
//       "address_components": {
//           "zip": "07928",
//           "country": "US"
//       },
//       "formatted_address": "07928"
//   },
//   "results": [
//       {
//           "address_components": {
//               "city": "Chatham",
//               "county": "Morris County",
//               "state": "NJ",
//               "zip": "07928",
//               "country": "US"
//           },
//           "formatted_address": "Chatham, NJ 07928",
//           "location": {
//               "lat": 40.74093,
//               "lng": -74.38376
//           },
//           "accuracy": 1,
//           "accuracy_type": "place",
//           "source": "TIGER/Line® dataset from the US Census Bureau",
//           "fields": {
//               "congressional_districts": [
//                   {
//                       "name": "Congressional District 11",
//                       "district_number": 11,
//                       "congress_number": "117th",
//                       "congress_years": "2021-2023",
//                       "proportion": 1,
//                       "current_legislators": [
//                           {
//                               "type": "representative",
//                               "bio": {
//                                   "last_name": "Sherrill",
//                                   "first_name": "Mikie",
//                                   "birthday": "1972-01-19",
//                                   "gender": "F",
//                                   "party": "Democrat"
//                               },
//                               "contact": {
//                                   "url": "https://sherrill.house.gov",
//                                   "address": "1414 Longworth House Office Building Washington DC 20515-3011",
//                                   "phone": "202-225-5034",
//                                   "contact_form": null
//                               },
//                               "social": {
//                                   "rss_url": null,
//                                   "twitter": "RepSherrill",
//                                   "facebook": null,
//                                   "youtube": null,
//                                   "youtube_id": null
//                               },
//                               "references": {
//                                   "bioguide_id": "S001207",
//                                   "thomas_id": null,
//                                   "opensecrets_id": "N00041154",
//                                   "lis_id": null,
//                                   "cspan_id": null,
//                                   "govtrack_id": "412799",
//                                   "votesmart_id": "179651",
//                                   "ballotpedia_id": "Mikie Sherrill",
//                                   "washington_post_id": null,
//                                   "icpsr_id": "21964",
//                                   "wikipedia_id": "Mikie Sherrill"
//                               },
//                               "source": "Legislator data is originally collected and aggregated by https://github.com/unitedstates/"
//                           },
//                           {
//                               "type": "senator",
//                               "bio": {
//                                   "last_name": "Menendez",
//                                   "first_name": "Robert",
//                                   "birthday": "1954-01-01",
//                                   "gender": "M",
//                                   "party": "Democrat"
//                               },
//                               "contact": {
//                                   "url": "https://www.menendez.senate.gov",
//                                   "address": "528 Hart Senate Office Building Washington DC 20510",
//                                   "phone": "202-224-4744",
//                                   "contact_form": "https://www.menendez.senate.gov/contact"
//                               },
//                               "social": {
//                                   "rss_url": "http://www.menendez.senate.gov/rss/feeds/index.cfm?type=news",
//                                   "twitter": "SenatorMenendez",
//                                   "facebook": "senatormenendez",
//                                   "youtube": "SenatorMenendezNJ",
//                                   "youtube_id": "UC0PV0K9Z5a9p3D5917KF5fw"
//                               },
//                               "references": {
//                                   "bioguide_id": "M000639",
//                                   "thomas_id": "00791",
//                                   "opensecrets_id": "N00000699",
//                                   "lis_id": "S306",
//                                   "cspan_id": "29608",
//                                   "govtrack_id": "400272",
//                                   "votesmart_id": "26961",
//                                   "ballotpedia_id": "Bob Menendez",
//                                   "washington_post_id": null,
//                                   "icpsr_id": "29373",
//                                   "wikipedia_id": "Bob Menendez"
//                               },
//                               "source": "Legislator data is originally collected and aggregated by https://github.com/unitedstates/"
//                           },
//                           {
//                               "type": "senator",
//                               "bio": {
//                                   "last_name": "Booker",
//                                   "first_name": "Cory",
//                                   "birthday": "1969-04-27",
//                                   "gender": "M",
//                                   "party": "Democrat"
//                               },
//                               "contact": {
//                                   "url": "https://www.booker.senate.gov",
//                                   "address": "717 Hart Senate Office Building Washington DC 20510",
//                                   "phone": "202-224-3224",
//                                   "contact_form": "https://www.booker.senate.gov/?p=contact"
//                               },
//                               "social": {
//                                   "rss_url": null,
//                                   "twitter": "SenBooker",
//                                   "facebook": null,
//                                   "youtube": "SenCoryBooker",
//                                   "youtube_id": "UC6FlymqNS1VettnVZa7goPA"
//                               },
//                               "references": {
//                                   "bioguide_id": "B001288",
//                                   "thomas_id": "02194",
//                                   "opensecrets_id": "N00035267",
//                                   "lis_id": "S370",
//                                   "cspan_id": "84679",
//                                   "govtrack_id": "412598",
//                                   "votesmart_id": "76151",
//                                   "ballotpedia_id": "Cory Booker",
//                                   "washington_post_id": null,
//                                   "icpsr_id": "41308",
//                                   "wikipedia_id": "Cory Booker"
//                               },
//                               "source": "Legislator data is originally collected and aggregated by https://github.com/unitedstates/"
//                           }
//                       ]
//                   }
//               ]
//           }
//       }
//   ]
// }

export default function handler(req, res) {
    res.status(200).json(results)
}
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