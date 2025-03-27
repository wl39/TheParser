function parseData(rawText) {
  const lines = rawText.split("\n").filter((line) => line.trim() !== "");
  const question = lines[0].replace("## ", "").trim();
  const options = lines.slice(1).map((line) => {
    const match = line.match(/^(\d+)\. (.+) → (.+)$/);
    return {
      number: parseInt(match[1]),
      description: match[2].trim(),
      algorithm: match[3].trim(),
    };
  });
  return [{ question, options }];
}
