import { type VisData } from "@prisma/client";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";
interface VisDataInterface {
  end_year: number; // --------------
  intensity: number; // -------------
  sector: string;
  topic: string;
  insight: string;
  url: string;
  region: string;
  start_year: number; // --------------
  impact: number; // --------------
  added: string;
  published: string;
  country: string;
  relevance: number; // --------------
  pestle: string;
  source: string;
  title: string;
  likelihood: number; // --------------
}
// import visDataJson from 'public/vis_data.json'
import Dashboard from "../components/Dashboard";
import Sidebar from "~/components/Sidebar";
export default function Home() {
  // ------------------------------------------------------------------------------
  // const visDataArrayCT: VisDataInterface[] = []
  // visDataJson.forEach((visDataObj, ind) => {
  //   const visDataObjCT: VisDataInterface = { ...visDataObj };
  //   Object.entries(visDataObj).forEach(([key, value], indx) => {
  //     if ((key === 'impact' || key === 'intensity' || key === 'likelihood' || key === 'relevance' || key === 'start_year' || key === 'end_year') && value === '') {
  //       visDataObjCT[key] = 0;
  //     } else {
  //       visDataObjCT[key as keyof VisDataInterface] = value;
  //     }
  //   });
  //   visDataArrayCT.push(visDataObjCT);
  // });
  // // console.log(visDataArrayCT);

  // type TypeCounts = Record<string, Record<string, number>>;
  // const typeCounts: TypeCounts = {};
  // visDataArrayCT.forEach((visDataObj) => {
  //   Object.entries(visDataObj).forEach(([key, value]) => {
  //     if (value !== undefined) {
  //       typeCounts[key] = typeCounts[key] ?? {};
  //       const valueType = typeof value;
  //       if (valueType === 'string' && value === '') {
  //         typeCounts[key]![valueType] = (typeCounts[key]?.[valueType] ?? 0) + 1;
  //       } else if (valueType === 'number') {
  //         typeCounts[key]![valueType] = (typeCounts[key]?.[valueType] ?? 0) + 1;
  //       }
  //     }
  //   });
  // });
  // // console.log(typeCounts);
  // // -------------------------------------------------------------------------------

  // const utils = api.useContext();
  // const [visDataArray, setVisDataArray] = useState<VisDataInterface[]>(visDataArrayCT);

  // const { data: allVisData, isLoading, isError, error } = api.visData.getAllVisData.useQuery();
  // console.log("allVisData: ", allVisData);

  // const addNewVisDataArray = api.visData.addVisDataArray.useMutation({
  //   onSettled: async () => {
  //     console.log('data added to db successfully.');
  //     await utils.visData.getAllVisData.invalidate();
  //   }
  // });
  // const handleUploadVisData = () => {
  //   addNewVisDataArray.mutate(visDataArray);
  // }
  // border-[2px] border-[#374eff]
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex w-full flex-col items-center px-1 md:px-6 py-2 gap-6
      `}
      >
        {/* <div>
          <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={handleUploadVisData}
          >
            upload json data
          </button>
        </div> */}
        <Dashboard />
      </main>
    </>
  );
}