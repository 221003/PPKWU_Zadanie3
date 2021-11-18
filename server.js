const { default: axios } = require("axios");
var express = require("express");
var app = express();

const formatArray = ["xml", "text", "json", "csv"];

const validFormat = (req, res, next) => {
    const { format } = req.params;

    if(!formatArray.some(f => f == format)) {
        res.status = 400;
        res.send(formatResponse("json", { status: "error", data: null }));
    }

    next();
}

const formatResponse = (format, response) => {
    switch (format) {
        case "xml":
            return `
            <ApiResponse>
                <Status>${response.status}</Status>
                <Result>${response.data}</Result>
            </ApiResponse>
            `;

        case "json":
            return {
                status: response.status,
                result: response.data
            };
    
        case "text":
            return `status_${response.status}|result_${response.data}`;

        case "csv":
            return `"status","result"\r\n"${response.status}",${response.data}\r\n`;
    }
}

app.get("/api/:format/string/:text/length", validFormat, async (req, res) => {
    const { text, format } = req.params;

    let response = await axios.get(`http://localhost:3000/api/string/${text}/length`)

    res.status = 200;
    res.send(formatResponse(format, response.data))
})

app.get("/api/:format/string/:text/contain/uppercase", validFormat, async (req, res) => {
    const { text, format } = req.params;

    let response = await axios.get(`http://localhost:3000/api/string/${text}/contain/uppercase`)

    res.status = 200;
    res.send(formatResponse(format, response.data))
})

app.get("/api/:format/string/:text/contain/lowercase", validFormat, async (req, res) => {
    const { text, format } = req.params;

    let response = await axios.get(`http://localhost:3000/api/string/${text}/contain/lowercase`)

    res.status = 200;
    res.send(formatResponse(format, response.data))
})

app.get("/api/:format/string/:text/contain/specialchar", validFormat, async (req, res) => {
    const { text, format } = req.params;

    let response = await axios.get(`http://localhost:3000/api/string/${text}/contain/specialchar`)

    res.status = 200;
    res.send(formatResponse(format, response.data))
})

app.get("/api/:format/string/:text/contain/whitespace", validFormat, async (req, res) => {
    const { text, format } = req.params;

    let response = await axios.get(`http://localhost:3000/api/string/${text}/contain/whitespace`)

    res.status = 200;
    res.send(formatResponse(format, response.data))
})

app.get("/api/:format/string/:text/validate/number", validFormat, async (req, res) => {
    const { text, format } = req.params;

    let response = await axios.get(`http://localhost:3000/api/string/${text}/validate/number`)

    res.status = 200;
    res.send(formatResponse(format, response.data))
})

app.get("/api/:format/string/:text/validate/number", validFormat, async (req, res) => {
    const { text, format } = req.params;

    let response = await axios.get(`http://localhost:3000/api/string/${text}/validate/number`)

    res.status = 200;
    res.send(formatResponse(format, response.data))
})

app.get("/api/:format/string/:text/count/uppercase", validFormat, async (req, res) => {
    const { text, format } = req.params;

    let response = await axios.get(`http://localhost:3000/api/string/${text}/count/uppercase`)

    res.status = 200;
    res.send(formatResponse(format, response.data))
})


app.get("/api/:format/string/:text/count/lowercase", validFormat, async (req, res) => {
    const { text, format } = req.params;

    let response = await axios.get(`http://localhost:3000/api/string/${text}/count/lowercase`)

    res.status = 200;
    res.send(formatResponse(format, response.data))
})


app.get("/api/:format/string/:text/count/specialchar", validFormat, async (req, res) => {
    const { text, format } = req.params;

    let response = await axios.get(`http://localhost:3000/api/string/${text}/count/specialchar`)

    res.status = 200;
    res.send(formatResponse(format, response.data))
})

app.get("/api/:format/string/:text/count/whitespace", validFormat, async (req, res) => {
    const { text, format } = req.params;

    let response = await axios.get(`http://localhost:3000/api/string/${text}/count/whitespace`)

    res.status = 200;
    res.send(formatResponse(format, response.data))
})

app.get("/api/:format/string/:text/count", validFormat, async (req, res) => {
    const { text, format } = req.params;

    let response = await axios.get(`http://localhost:3000/api/string/${text}/count/whitespace`)

    res.status = 200;
    res.send(formatResponse(format, response.data))
})

app.listen(8080, () => {
 console.log("Server running");
});