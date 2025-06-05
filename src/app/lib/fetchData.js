// // import { cache } from "react";

// export const fetchData = /* cache */ async (url) => {
//   try {
//     const response = await fetch(
//       "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks",
//       {
//         /*  next: {
//           revalidate: 3600
//         } */
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Failed to fetch data from ${url}`);
//     }

//     // return await response.json();
//     const data = await response.json(); // parse JSON here
//     console.log(data, "✅ fetched JSON data");
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");

    if (!response.ok || !contentType?.includes("application/json")) {
      const text = await response.text();
      console.error("❌ Not JSON:", text);
      throw new Error(`Expected JSON but got: ${contentType}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("❌ fetch error:", error);
    return null;
  }
};
