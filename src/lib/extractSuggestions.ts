/**
 * Extracts suggested reply options from an AI message that offers choices.
 * Looks for patterns like "Would you like me to [option1], [option2], or [option3]?"
 */
export function extractSuggestions(message: string): string[] {
  if (!message) return [];

  // Find the last question in the message
  const sentences = message.split(/(?<=[.!?])\s+/);
  const lastQuestion = sentences.reverse().find((s) => s.includes("?"));

  if (!lastQuestion) return [];

  // Check for common question patterns that offer choices
  const patterns = [
    /would you like (?:me to |to )?(.+)\?/i,
    /do you want (?:me to |to )?(?:know |learn |hear )?(about |more about )?(.+)\?/i,
    /i can (?:explain|help with|provide information about|tell you about) (.+)\?/i,
    /shall i (?:explain|go into|cover) (.+)\?/i,
    /interested in (?:learning about |hearing about )?(.+)\?/i,
  ];

  let optionsText = "";
  for (const pattern of patterns) {
    const match = lastQuestion.match(pattern);
    if (match) {
      // Get the last capturing group (the options part)
      optionsText = match[match.length - 1];
      break;
    }
  }

  if (!optionsText) return [];

  // Split by comma and "or" to get individual options
  // Handle patterns like "A, B, or C" and "A, B, and C"
  const rawOptions = optionsText
    .split(/,\s*(?:or|and)?\s*|\s+or\s+|\s+and\s+/)
    .map((opt) => opt.trim())
    .filter((opt) => opt.length > 0 && opt.length < 100); // Filter out empty or too long

  // Clean up each option
  const cleanedOptions = rawOptions.map((opt) => {
    // Remove common prefixes
    let cleaned = opt
      .replace(/^(explain |tell me |learn |hear |know |more )/i, "")
      .replace(/^(about |more about )/i, "")
      .trim();

    // Capitalize first letter
    cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);

    // Remove trailing punctuation
    cleaned = cleaned.replace(/[?.!]+$/, "");

    return cleaned;
  });

  // Filter out duplicates and very short options, limit to 4
  const uniqueOptions = [...new Set(cleanedOptions)]
    .filter((opt) => opt.length >= 3)
    .slice(0, 4);

  return uniqueOptions;
}
