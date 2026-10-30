export function formatDateRange(
  start: Date | string,
  end: Date | string | null,
  isCurrent?: boolean
): string {
  const formatMonth = (val: Date | string): string => {
    const date = new Date(val);
    if (Number.isNaN(date.getTime())) {
      return String(val).substring(0, 7);
    }
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });
  };

  const startLabel = formatMonth(start);
  const endLabel = isCurrent || !end ? "Present" : formatMonth(end);
  return `${startLabel} — ${endLabel}`;
}

