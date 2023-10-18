import Random from "./components/Random";
import Tags from "./components/Tags";

function App() {
  return (
    <div className=" w-full h-screen flex flex-col items-center background overflow-y-auto">
        <h1 className=' text-center rounded-lg w-[90%] bg-white mt-6 p-3 font-bold text-2xl'>RANDOM GIFS</h1>
        <div className='flex flex-col gap-y-3 items-center w-[60%] mt-6'>
          <Random/>
          <Tags/>
        </div>
    </div>
  );
}

export default App;
