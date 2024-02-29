import { useEffect, useState } from "react";
import { OpenAI} from 'openai'

function Dashboard() {

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
        <>
            <div class="flex flex-col h-screen">

                <div class="bg-gray-200 overflow-y-auto flex-grow p-4">
                    <div class="bg-white rounded-lg shadow-md p-4 h-64 overflow-y-auto">
                        {response}
                    </div>
                </div>

                <div class="bg-gray-300 p-4 flex justify-center">
                    <div class="flex items-center bg-white shadow-md rounded-lg overflow-hidden"> 
                        <input class="w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                         type="text" placeholder="Ten programming languagues" onChange={(e)=>{
                            setUserInput(e.target.value)
                        }}/>
                        <button onClick={postReq} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none">
                            Search
                        </button>
                    </div>
                </div>
            </div>
                
        </>
     );
}

export default Dashboard;