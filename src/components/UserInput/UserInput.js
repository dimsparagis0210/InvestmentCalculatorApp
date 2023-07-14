import styles from './UserInput.module.css';
import { useState } from "react";

const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
};


// We use props to lift the state up(in the App component)
const UserInput = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);
    const submitHandler = event => {
        event.preventDefault(); //doesn't restart the page and the application
        props.onCalculate(userInput);
    };

    const resetHandler = event => {
        setUserInput(initialUserInput);
    };

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value //the + converts the string value to a number
            };
        });
    };

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.inputGroup}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler('current-savings', event.target.value)}
                        type="number"
                        id="current-savings"
                        value={userInput['current-savings']}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler('yearly-contribution', event.target.value)}
                        type="number"
                        id="yearly-contribution"
                        value={userInput['yearly-contribution']}
                    />
                </p>
            </div>
            <div className={styles.inputGroup}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler('expected-return', event.target.value)}
                        type="number"
                        id="expected-return"
                        value={userInput['expected-return']}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler('duration', event.target.value)}
                        type="number"
                        id="duration"
                        value={userInput['duration']}
                    />
                </p>
            </div>
            <p className={styles.actions}>
                <button onSubmit={resetHandler} type="reset" className={styles.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default UserInput;