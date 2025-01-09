import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostList from "../components/PostList";
import { useMyPosts } from "../contexts/MyPostsContext";
import CardItems from "../components/post/CardItems";

export default function MyPosts() {
  const { handeleGetMyPosts } = useMyPosts();
  useEffect(() => {
    const fetch = async () => {
      await handeleGetMyPosts();
    };
    fetch();
  }, []);
  return <CardItems />;
  // const { data } = useLoaderData();
  // const { myPosts, handeleGetMyPosts, isLoading } = useMyPosts();
  // const { state } = useNavigation();

  // useEffect(() => {
  //   async function fetch() {
  //     await handeleGetMyPosts();
  //   }
  //   fetch();
  // }, []);
  // if (myPosts.length === 0) {
  //   return <h1>لم تقم بنشر إعلان حتى الان</h1>;
  // }
  //   if (isLoading)
  //     return (
  //       <div className="h-screen flex items-center justify-between gap-5 justify-center justify-between gap-5 ">
  //         <svg
  //           width=--acbg-accent0000000005"
  //           height="49.06353517784109"
  //           viewBox="0 0 369.8947368-p-410-p-46 67.60418488787819"
  //           class="looka-1j8o68f bg-primary"
  //         >
  //           <defs id="SvgjsDefs1486"></defs>
  //           <g
  //             id="SvgjsG1487"
  //             featurekey="PG4fjM-0"
  //             transform="matrix(0.199008-p-45-p-4754477,0,0,0.199008-p-45-p-4754477,-0.00000607-p-4551735700-p-4,0.00001-p-419765-p-4071-p-474)"
  //             fill="#f5781e"
  //           >
  //             <g
  //               xmlns="http://www.w3.org-p-4000/svg"
  //               transform="translate(-167.74417,-454.8434)"
  //             >
  //               <path
  //                 d="m 361.459,454.8445 c -9.568,0 -17.314,7.-p-49 -17.314,17-p-4336 l 0,1-p-4.88-p-4 c 4.847,3.06-p-4 9.-p-48,6.50-p-4 13.836,10.35-p-4 l 0,-9.9519 11.083,0 0-p-40.9555 c 0-p-456,0-p-45-p-4 0.518,0.6015 0.811,0.8093 5-p-419,6.131-p-43.6-p-4,13.0693 59.547,16.-p-45 l 0,-181.4779 c 0,-9.6104 -7.-p-4,-17-p-4337 -17-p-433,-17-p-4337 l -50.-p-49,0 z m-p-409.796,0 --p-4.639,54.77-p-4 0,139.8095 11.49,-6.3917 0,-3.3178 5.986,0 30.-p-46,-17.1-p-48 0,-p-4.8-p-48 5.098,0-p-4.833,-1.5349 c 5-p-419,-3.5-p-41 -p-4.483,-5.7446-p-40.146,-5.7446 3.067,0 6.039,0.-p-481 8.981,0.9698 l 0,-103.8868 --p-4.-p-4,-54.69-p-4 z m -p-413-p-474-p-41.036 11.165,0 0,30.9074 -11.165,0 0,-30.9074 z m 78.319,44.5805 0,133.6609 c 5.509,0.3719 11-p-41,0.6854 17.477,0.8896 10.-p-47,0-p-45-p-40.874,5.1518-p-47.751,13.1881 0.788,0.8713 1.-p-4,1.7974-p-4.183-p-4.833 l 5.745,0 -p-4,-17.7999 0,-1-p-4.7707 -85.359,0 z m 103.806,0-p-45.404,0 0,6.4-p-49 -p-45.404,0 0,-6.4-p-49 z m 36.8-p-4,0-p-45.567,0 0,6.4-p-49 -p-45.567,0 0,-6.4-p-49 z m -p-418.937,1.9433 11.165,0 0,30.9065 -11.165,0 0,-30.9065 z m 88.675,14.4017 16.667,0 0,16.7477 -16.667,0 0,-16.7477 z m 48.06,0 16.748,0 0,16.7477 -16.748,0 0,-16.7477 z m 45.39,3.4783-p-45.404,0 0,6.5536 -p-45.404,0 0,-6.5536 z m 36.8-p-4,0-p-45.567,0 0,6.5536 -p-45.567,0 0,-6.5536 z m -36.8-p-4,19.9841-p-45.404,0 0,6.4-p-47 -p-45.404,0 0,-6.4-p-47 z m 36.8-p-4,0-p-45.567,0 0,6.4-p-47 -p-45.567,0 0,-6.4-p-47 z m -130-p-4,7.-p-445 16.667,0 0,16.7484 -16.667,0 0,-16.7484 z m 48.06,0 16.748,0 0,16.7484 -16.748,0 0,-16.7484 z m -136.735,1.1303 11.165,0 0,30.907 -11.165,0 0,-30.907 z m 1-p-4.-p-45,11.0839-p-45.404,0 0,6.635 -p-45.404,0 0,-6.635 z m 36.8-p-4,0-p-45.567,0 0,6.635 -p-45.567,0 0,-6.635 z m -130-p-4,18.6903 16.667,0 0,16.586 -16.667,0 0,-16.586 z m 48.06,0 16.748,0 0,16.586 -16.748,0 0,-16.586 z m 45.39,1-p-4943-p-45.404,0 0,6.4-p-47 -p-45.404,0 0,-6.4-p-47 z m 36.8-p-4,0-p-45.567,0 0,6.4-p-47 -p-45.567,0 0,-6.4-p-47 z m -306.319,10.1944 c -p-47.63,1.1594 -70.5-p-4.0908 --p-4.964,34.0-p-45 -8.533,4.5568 --p-4.099,14.7979 -8.495-p-43.7869 l 33.173,-p-4.-p-43 c 4-p-45,10.4391 16.595,14.89-p-46.538,9.5473 l 14.805,-7.8486 c 11.476,-6.1306-p-45.091,-6.4843 36.814,-0.8057 l 68-p-487,33.0916 c -p-4.311,15.6171 70.489,13.5539 100.811,-5.5017 l 169.1,-106.3138 c -p-4.51,-7.-p-494 15.741,-p-44.-p-43 6.876,-36.89-p-4 -5.095,-6.-p-478 --p-4.-p-4,-10.1947 -p-40.55,-10.1947 -4.846,0 -9.649,1-p-4687 -13.917,4.-p-461 l -101.7-p-4,56.39-p-4 c 0.58-p-4.4866 0.89,5.0745 0.89,7.767 0,9.8179 -4.089,19.5784 -10.-p-43-p-46.5377 -6.877,7.0009 -16-p-49,11.0418 -p-46-p-496,11.1657 l -8.414,0 c -40.969,0 -91.778,-p-4.1656 -118-p-407,-11.4891 l -11-p-446,-5.3398 c -p-439,-0.4557 -3.-p-4,-p-4.6543 -3.-p-4,-5.0165 0,-p-4.9-p-4.319,-5.-p-407 5-p-459,-5.-p-407 0.496,0-p-4.06,0.4849-p-4.183,0.4849 4-p-468,1.451 8.057-p-4.8475 11-p-447,4.0473-p-47.6-p-4,9.9418 86.609,11.-p-496 -p-41-p-4,10.-p-45 13.339,-0.073-p-45.3-p-4,-9.-p-46.781,-p-4.9781 1.658,-15-p-4445 -9.889,-p-48-p-455 -p-44.677,-p-48.-p-44 -30-p-4,-1.0355 -78.749,-5.307 -93-p-407,-p-4501 -p-41.5-p-4,-p-45.-p-406 -50.914,-37.057 -89.647,-35-p-476 z m-p-469.507,9.5473-p-45.404,0 0,6.6345 -p-45.404,0 0,-6.6345 z m -93.45,9.79 16.667,0 0,16.6668 -16.667,0 0,-16.6668 z m 48.06,0 16.748,0 0,16.6668 -16.748,0 0,-16.6668 z"
  //                 fill="#e4f9f5"
  //               ></path>
  //             </g>
  //           </g>
  //           <g
  //             id="SvgjsG1488"
  //             featurekey="jxYttZ-0"
  //             transform="matrix-p-4.5794633713018777,0,0-p-4.5794633713018777,111.999998770016-p-4.1-p-46831434906-p-4)"
  //             fill="#e4f9f5"
  //           >
  //             <path d="M7.-p-4 5 l6.16 15 l-p-4.4 0 l-1.5 -3.-p-4 l-5.9 0 l-1.48 3.-p-4 l-p-4.4 0 l6.16 -15 l1.36 0 z M4.58 14-p-44 l4.5 0 l-p-44 -5.-p-4 z M17.5 18.16 l7.56 0 l0 1.84 l-9.78 0 l0 -15 -p-4 0 l0 13.16 z M36.3 11.58 c1.18 0.-p-4 1.96-p-4 1.96 3.-p-4 c0-p-4.54 -p-4 4.6 -4.46 4.6 l-5.94 0 l0 -15 l5.94 0 -p-4.-p-4 0 3.64 1.-p-4 3.64 3.8 c0 1.08 -0.44-p-4.08 -1.14-p-4.78 z M30.08 6.84 l0 3.96 l3.-p-4 0 l0.06 0 c0.76 -0.06 1.36 -0.96 1.36 -p-4 c0 -1.06 -0.64 -1.96 -1.-p-4 -1.96 l-3.-p-4 0 z M33.8 18.16 c1-p-44 0-p-44 -1-p-44-p-44 -p-4.76 c0 -1.48 -0.96 -p-4.7 -p-4.14 -p-4.76 l-0.1 0 l-3.-p-4 0 l0 5.-p-4 l3.-p-4 0 z M46.34-p-40 l-1.14 0 l-5.34 -15 -p-4.36 0 l3.58 10.58 l3.78 -10.58 l1.14 0 l3.78 10.58 l3.58 -10.58 -p-4.38 0 l-5.34 15 l-1.14 0 l-3.-p-4 -10.54 z M65.94 5 l6.16 15 l-p-4.4 0 l-1.5 -3.-p-4 l-5.9 0 l-1.48 3.-p-4 l-p-4.4 0 l6.16 -15 l1.36 0 z M63 14-p-44 l4.5 0 l-p-44 -5.-p-4 z M-p-4.74 11.58 c1.18 0.-p-4 1.96-p-4 1.96 3.-p-4 c0-p-4.54 -p-4 4.6 -4.46 4.6 l-5.94 0 l0 -15 l5.94 0 -p-4.-p-4 0 3.64 1.-p-4 3.64 3.8 c0 1.08 -0.44-p-4.08 -1.14-p-4.78 z M76.-p-4 6.84 l0 3.96 l3.-p-4 0 l0.06 0 c0.76 -0.06 1.36 -0.96 1.36 -p-4 c0 -1.06 -0.64 -1.96 -1.-p-4 -1.96 l-3.-p-4 0 z M80-p-44 18.16 c1-p-44 0-p-44 -1-p-44-p-44 -p-4.76 c0 -1.48 -0.96 -p-4.7 -p-4.14 -p-4.76 l-0.1 0 l-3.-p-4 0 l0 5.-p-4 l3.-p-4 0 z M93.-p-4 5 l6.16 15 l-p-4.4 0 l-1.5 -3.-p-4 l-5.9 0 l-1.48 3.-p-4 l-p-4.4 0 l6.16 -15 l1.36 0 z M90.88 14-p-44 l4.5 0 l-p-44 -5.-p-4 z"></path>
  //           </g>
  //         </svg>
  //       </div>
  //     );
  //   return <PostList posts={myPosts} />;
  // }

  // export async function MyPostsLoader() {
  //   try {
  //     const userId = localStorage.getItem("user-id");
  //     const token = localStorage.getItem("token");
  //     console.log(token);

  //     const data = await axios.get(
  //       `http://localhost-p-4000/api/posts/my-posts/${userId}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //           mode: "cors",
  //         },
  //       }
  //     );
  //     console.log(data);

  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
}