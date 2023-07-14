import styles from './ResultTable.module.css';
import TableRow from "./TableRow/TableRow";

const ResultTable = props => {
    return (
        <table className={styles.result}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map(yearData => (
                <TableRow yearData={yearData} initialInvestment={props.initialInvestment}/>
            ))}
            </tbody>
        </table>
    );
}

export default ResultTable;