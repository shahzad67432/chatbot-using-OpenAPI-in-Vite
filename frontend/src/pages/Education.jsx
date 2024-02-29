import axios from 'axios'
import {useState} from "react";
function Education() {
    const [input, setUserInput] = useState('')
    const [response, setResponse] = useState('')
    const postReq = async () => {
        try {
            const apiResponse = await axios.post('http://localhost:3000/api/v1/user/education', {
                inPut: input
            });
            setResponse(apiResponse.data[0].messageContent); // Assuming the response contains a field called 'messageContent'
        } catch (error) {
            console.error("Error fetching data:", error);
            setResponse("Error fetching data");
        }
    };

    return ( 
        <div class="flex flex-col h-screen">
            <div class="overflow-y-auto shadow-sm p-4">
                <div class="rounded-lg overflow-y-auto p-4 h-64 ">
                    {response}
                </div>
            </div>
            <div class=" p-4 flex justify-center" >
                <div class="flex items-center border-solid border-2 border-blue-200 bg-white shadow-md  overflow-hidden">
                    <input class="w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none" type="text" onChange={(e)=>{
                       setUserInput(e.target.value)
                    }} />
                </div>
                <button onClick={postReq} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none" >
                    Search
                </button>
            </div>
        </div>
    );
}

export default Education;