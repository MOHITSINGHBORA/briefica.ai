import React, { useCallback } from 'react'
import { useState } from 'react'
import InputBar from '../components/common/InputBar'
import OutputSkeleton from '../components/layout/OutputSkeleton';
import { generateContent } from '../helper/index';

const Home = () => {
  const [info, setInfo] = useState({
    userQuery: "",
    error: "",
    generatedComponent: null,
    loading: false,

  });

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, userQuery: e.target.value, error: "" }));
    console.log("ingo", info);
  }

  const handleGenerate = async () => {
    if (!info?.userQuery?.length) {
     setInfo((prev) => ({ ...prev, error: "please enter a query first" }))
      return  ;
    }

    setInfo((prev) => ({ ...prev, loading: true, error: "", userQuery: "" }));


    try {
       const response = await generateContent(info?.userQuery);
       let componentCode = response?.candidates?.[0]?.content?.parts?.[0]?.text;
       console.log("response:", componentCode);
       setInfo((prev)=>({
        ...prev, generatedComponent: componentCode,
       }))
    } catch (error) {
      console.log("Error: ",error);
      setInfo((prev)=>({
        ...prev, error: error?.message || "something went wrong, please try again"
      }))

    } finally {
      setInfo((prev)=> ({...prev, loading: false}));
    }
  

  };

  return (
    <div className="min-h-screen ">

      {info?.error && (
        <div className="fixed top-15 left-1/2 -translate-x-1/2 bg-red-500 rounded-2xl p-2 text-white">
          please enter the input first
        </div>
      )}


      <div className=" mt-20 mb-32">
        <div className=' flex justify-center max-w-3xl m-auto px-4'>
         
          {info.loading ? (
            <OutputSkeleton />
          ) : info.generatedComponent ? (
            info.generatedComponent
          ) : (
            <p>HEY! whats on your mind today...</p>
          )}
        </div>
      </div>


      <InputBar
        value={info.userQuery}
        onChange={handleChange}
        onClick={handleGenerate}
      />

    </div>
  )
}

export default Home