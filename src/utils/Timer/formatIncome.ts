const formatIncome = (income: number): number => {
  const yearlyIncomeToIncomePerSecond = income / (52 * 35 * 3600);
  const roundIncomePerSecond = (yearlyIncomeToIncomePerSecond * 100) / 100;
  return roundIncomePerSecond;
};

export default formatIncome;