/**
 * Extracts suggested reply options from an AI message that offers choices.
 * Supports patterns like "Would you like me to X, Y, or Z?" as well as
 * clarifying questions like "Is the light X, Y, or Z?"
 */
export function extractSuggestions(message: string): string[] {
  if (!message) return [];

  // Find the last question in the message
  const sentences = message.split(/(?<=[.!?])\s+/);
  const lastQuestion = sentences.reverse().find((s) => s.includes("?"));

  if (!lastQuestion) return [];

  // Patterns where the AI offers to do something
  const offerPatterns = [
    /would you like (?:me to |to )?(.+)\?/i,
    /(?:do you )?want (?:me to |to )?(?:know |learn |hear )?(about |more about )?(.+)\?/i,
    /i can (?:explain|help with|provide information about|tell you about) (.+)\?/i,
    /shall i (?:explain|go into|cover) (.+)\?/i,
    /interested in (?:learning about |hearing about )?(.+)\?/i,
    /should i (?:explain|cover|go over|help with) (.+)\?/i,
    /(?:any |have )?questions? (?:about|on|regarding) (.+)\?/i,
    /like (?:me )?to (?:explain|cover|help with|go over) (.+)\?/i,
  ];

  // Patterns where the AI asks a clarifying question with choices
  const clarifyingPatterns = [
    /(?:^|[.!?]\s+)is (?:it|the|your|their) (.+)\?/i,
    /(?:^|[.!?]\s+)are (?:you|they|the|your) (.+)\?/i,
    /(?:^|[.!?]\s+)do you (?:have |see |notice |prefer |want )?(.+)\?/i,
    /(?:^|[.!?]\s+)does (?:it|the|your) (.+)\?/i,
    /(?:^|[.!?]\s+)which (.+)\?/i,
    /(?:^|[.!?]\s+)what (?:type|kind|color|style|size|version) (?:of |is |are |do )?(.+)\?/i,
    /(?:^|[.!?]\s+)(?:is|are|was|were) (?:there|it) (.+)\?/i,
  ];

  let optionsText = "";

  // Try offer patterns first
  for (const pattern of offerPatterns) {
    const match = lastQuestion.match(pattern);
    if (match) {
      optionsText = match[match.length - 1];
      break;
    }
  }

  // Try clarifying patterns
  if (!optionsText) {
    for (const pattern of clarifyingPatterns) {
      const match = lastQuestion.match(pattern);
      if (match) {
        optionsText = match[match.length - 1];
        break;
      }
    }
  }

  // Generic fallback: any question with comma/or-separated items
  if (!optionsText) {
    // Check if the question contains at least "X, Y, or Z" or "X or Y"
    const hasOrSeparation = /,\s*.+\bor\b\s+/i.test(lastQuestion) || /\bor\b/i.test(lastQuestion);
    if (hasOrSeparation) {
      // Extract everything after common question prefixes up to the "?"
      const fallbackMatch = lastQuestion.match(
        /(?:is|are|do|does|did|can|could|should|would|was|were|has|have|which|what)\b.+?\b(?:is|are|was|were|have|has|see|notice|prefer|experiencing|showing|displaying|doing|getting|using|running|looking|between)?\s+(.+)\?/i
      );
      if (fallbackMatch) {
        optionsText = fallbackMatch[1];
      } else {
        // Last resort: grab everything that looks like comma/or separated items
        const itemsMatch = lastQuestion.match(/([^?]+(?:,\s*(?:or\s+)?[^?,]+)+\s+or\s+[^?]+)\?/i);
        if (itemsMatch) {
          optionsText = itemsMatch[1];
        }
      }
    }
  }

  if (!optionsText) return [];

  // Split by comma and "or" to get individual options
  const rawOptions = optionsText
    .split(/,\s*(?:or|and)?\s*|\s+or\s+|\s+and\s+/)
    .map((opt) => opt.trim())
    .filter((opt) => opt.length > 0 && opt.length < 100);

  // Need at least 2 options for chips to be useful
  if (rawOptions.length < 2) return [];

  // Clean up each option
  const cleanedOptions = rawOptions.map((opt) => {
    let cleaned = opt
      // Remove common prefixes
      .replace(/^(explain |tell me |learn |hear |know |more )/i, "")
      .replace(/^(about |more about )/i, "")
      // Strip parenthetical asides for concise chips
      .replace(/\s*\([^)]*\)\s*/g, " ")
      .trim();

    // Capitalize first letter
    cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);

    // Remove trailing punctuation
    cleaned = cleaned.replace(/[?.!]+$/, "");

    return cleaned.trim();
  });

  // Filter out duplicates and very short options, limit to 4
  const uniqueOptions = [...new Set(cleanedOptions)]
    .filter((opt) => opt.length >= 2)
    .slice(0, 4);

  return uniqueOptions;
}
