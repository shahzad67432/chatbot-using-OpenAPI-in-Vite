import { useEffect, useState } from "react";
import { OpenAI} from 'openai'

function Dashboard() {
    const [input, setUserInput] = useState('')
    const [response, setResponse] = useState('')

    const openAi = new OpenAI({
        apiKey: "",
        dangerouslyAllowBrowser: true
    });

    const fetchData = async () => {
        const output = await openAi.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: 'user', content: input }],
            max_tokens: 256,
        });
        setResponse(output.choices[0])
        console.log(output.choices[0])
    };

    return ( 
        <>
            <div class="flex flex-col h-screen">

                <div class="bg-gray-200 overflow-y-auto flex-grow p-4">
                    <div class="bg-white rounded-lg shadow-md p-4 h-64 overflow-y-auto">

                    </div>
                </div>

                <div class="bg-gray-300 p-4 flex justify-center">
                    <div class="flex items-center bg-white shadow-md rounded-lg overflow-hidden"> 
                        <input class="w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                         type="text" placeholder="Ten programming languagues" onChange={(e)=>{
                            setUserInput(e.target.value)
                        }}/>
                        <button onClick={fetchData} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none">
                            Search
                        </button>
                    </div>
                </div>
            </div>
                
        </>
     );
}

export default Dashboard;