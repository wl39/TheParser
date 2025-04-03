export function parseData(user_sample_data) {
  return `
You are an intelligent data parser.

You will receive a single piece of raw input text. This data may be highly unstructured, partially formatted, or domain-specific.  
Your job is to carefully read and understand the **meaning and intent** of the data, then convert it into a clean, well-structured JSON object.

Follow these rules strictly:

1. **Semantic Understanding First**  
   - Before generating the JSON, analyze what type of data you're dealing with (e.g. quiz, coordinates, addresses, object descriptions, menu items, etc.)
   - Understand the purpose of the data 

2. **Infer Appropriate JSON Structure**  
   - Based on the input’s meaning, build a JSON object with **relevant field names**
   - Only split or extract values into subfields if the structure clearly supports it
   - Do not over-split based on arbitrary symbols (e.g., "→", "|", ":", ">"... etc), unless they strongly suggest a key-value pattern

3. **Remove Noise**  
   - Exclude irrelevant prefixes
   - Clean up trailing delimiters or empty fields

4. **Avoid Over-Interpretation**  
   - Do not add assumptions or inferred fields unless there is strong textual evidence
   - If a value seems empty or null, either exclude it or represent it as an empty string

5. **One Object Only**  
   - Your output should be a single JSON object only — no comments, no explanations, no formatting instructions

6. **Output Format**  
   - Well-formatted JSON object
   - No surrounding text or code wrappers
   - Only include the necessary structure inferred from the content

Here is the raw input:
${user_sample_data}`;
}

export function codeGenerator(
  user_raw_sample,
  user_json_sample,
  user_delimiter
) {
  return `
        You are a JavaScript code generator that builds data parsers from examples.

Your task:

Given:
1. A raw unstructured input string (raw_sample)
2. A corresponding structured JSON output (json_sample) — may include nested objects
3. An optional delimiter string (delimiter) used to split the raw string into logical blocks

Generate a JavaScript function named \`parseData\` that:

- Accepts a single raw input string
- Returns an array of JSON objects
- If a delimiter is provided, splits the raw string accordingly
- Strictly follows the exact key structure, **nesting**, and field ordering from the provided \`json_sample\`
- Parses values only from explicit fields in the raw input (no guessing, assumptions, or inference)
- Returns the result in an array, matching the **exact shape, depth, key names, and layout** of the provided \`json_sample\`

⚠️ ABSOLUTE REQUIREMENT:

> Your generated function must strictly conform to the structure of the provided \`json_sample\`.  
> This includes exact keys, exact nesting, and exact positioning.  
> **Do not flatten, skip, rename, move, reorder, or alter any part of the JSON format.**  
> Your output must be a perfect structural match to the provided sample — no exceptions.

Data type handling:
- Treat all values as strings unless the \`json_sample\` clearly uses native number or boolean types

Other constraints:
- Do not add comments or console output
- Do not include explanation, logging, or placeholder values

Input parameters:
- \`raw_sample\`: raw text block (can include JS-like function calls, CSV-like strings, or plain text)
- \`json_sample\`: fully structured and possibly deeply nested JSON
- \`delimiter\`: optional string or regex used to split multiple raw data entries (e.g., '\n', '---')

Your final output must be a complete and valid JavaScript function named \`parseData\`, returning an array of JSON objects that **strictly match the structure** of \`json_sample\`.


Here are the inputs:
- \`raw_sample\`: ${user_raw_sample}
- \`json_sample\`: ${user_json_sample}
- \`delimiter\`: ${user_delimiter}
    `;
}
