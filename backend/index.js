const OpenAI = require('openai')

const openAi = new OpenAI({
    apiKey: "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"
});


const response = async()=>{ await openAi.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: 'user', content: "top ten programming languages" }]
})};
console.log(response.choices[0].messages.content)