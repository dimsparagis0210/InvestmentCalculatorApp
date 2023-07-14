import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultTable/ResultTable";
import { useState } from "react";

function App() {
    // Adding state for the userInput
    const [userInput, setUserInput] = useState(null);

    // Alters the state of the form when the calculate button is pressed
    const calculateHandler = (userInput) => {
        setUserInput(userInput);
    };

    // Data for the table
    const yearlyData = []; // per-year results

    // Validates if data exists
    if (userInput) {
        let currentSavings = +userInput['current-savings'];
        const yearlyContribution = +userInput['yearly-contribution'];
        const expectedReturn = +userInput['expected-return'] / 100;
        const duration = +userInput['duration'];

        // Setting the data for the table
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }
    }

    return (
        <div>
            <Header/>
            <UserInput onCalculate={calculateHandler}/>
            {!userInput && <p style={{textAlign:"center"}}>No data found</p>}
            {userInput && <ResultTable data={yearlyData} initialInvestment={userInput['current-savings']}/>}
        </div>
    );
}

export default App;
