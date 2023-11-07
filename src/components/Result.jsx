import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ invest }) {
  const resultedInvest = calculateInvestmentResults(invest);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year </th>
          <th>Investment Value </th>
          <th>Interest(year) </th>
          <th>Total Inerest </th>
          <th>Invested Capital </th>
        </tr>
      </thead>
      <tbody className="center">
        {resultedInvest.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            invest.initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr className="center" key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
