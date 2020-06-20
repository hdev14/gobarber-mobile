export default (date) => useMemo(
  () => format(date, "dd 'de' MMMM de yyyy", {locale: pt}),
  [date],
);