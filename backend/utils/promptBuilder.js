export function parseData(user_sample_data) {
  return `
You are an intelligent data parser.

You will receive a single piece of raw data input, which may be highly unstructured or in an unknown format.  
Your task is to analyze the structure and content of the input and convert it into a clean, structured JSON object.

Your rules:
- Remove any unnecessary characters, filler values, or formatting elements (e.g., functions, symbols, trailing delimiters like "|").
- Infer the meaning of each value based on its position, content, or pattern.
- Assign clear and meaningful key names for each extracted value (e.g., lat, lng, name, address, type).
- If a value is clearly empty or null, exclude it or set it as an empty string.
- The output should be **only one JSON object**, well-formatted and clean.
- Do not return any explanation, preamble, or comments — only the final JSON.

Here is the raw input:
${user_sample_data}`;
}

export function codeGenerator(user_raw_sample, user_json_sample) {
  return `
        You are a JavaScript code generator for data parsers.

The user has provided:

One or more examples of raw, unstructured data (as a single string or multiple blocks)

The corresponding structured version(s) in JSON format

(Optional) A delimiter pattern that separates each logical data block

Your job is to:

Understand how the raw input maps to the structured JSON output

Generate a JavaScript function that parses the raw input into an array of such JSON objects

Requirements:

Output a single JavaScript function

The function must accept a single raw string as input and return a JSON array

If delimiters are provided by the user (e.g. ## [문제, ---, or any regex string), split the raw data accordingly and parse each segment individually

Do not include comments, console logs, or explanations in the function

Make no assumptions beyond what is shown in the sample JSON

Be strict: match only what’s explicitly shown in the examples

Additional Context:

The unstructured input may contain diverse formats such as quizzes, tables, location data, menu items, or semi-structured text

Your function should generalize the parsing logic based solely on the mapping shown in the example

Avoid hardcoded assumptions unless directly inferred from the given data

Raw input example: ${user_raw_sample}

Target JSON output: ${user_json_sample}

Delimiters (if provided): ${user_delimiter}
    `;
}
