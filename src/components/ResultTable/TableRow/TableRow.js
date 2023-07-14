// Used to format the data in the table
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const TableRow = (props) => {
    return (
        <tr key={props.yearData.year}>
            <td>{props.yearData.year}</td>
            <td>{formatter.format(props.yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(props.yearData.yearlyInterest)}</td>
            <td>{formatter.format(props.yearData.savingsEndOfYear - props.initialInvestment - props.yearData.yearlyInterest * props.yearData.year)}</td>
            <td>{formatter.format(props.initialInvestment + props.yearData.yearlyInterest * props.yearData.year)}</td>
        </tr>
    );
}

export default TableRow;