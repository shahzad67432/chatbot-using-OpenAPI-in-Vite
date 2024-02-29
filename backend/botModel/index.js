const { OpenAI} = require('openai');

const apiResponse = async (input)=>{

    const openAi = new OpenAI({
        apiKey: "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"
    });

    const output = await openAi.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: 'user', content: input }],
        max_tokens: 256,
    });
    const reply = output.choices[0].message.content
    console.log(input);
    return reply;

}

module.exports = apiResponse;