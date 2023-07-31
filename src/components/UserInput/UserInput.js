import styles from './UserInput.module.css';
import { useState } from "react";
import Button from '@mui/material/Button/Button'

// Initial state
const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
};

// We use props to lift the state up(in the App component)
const UserInput = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);
    const [editingData, setEditingData] = useState(false);

    const startEditingHandler = () => {
        setEditingData(true);
    }

    const stopEditingHandler = () => {
        setEditingData(false);
        console.log('Working');
    }

    //Handler for the form submission
    const submitHandler = event => {
        event.preventDefault(); //doesn't restart the page and the application
        props.onCalculate(userInput); //lifting the state up
    };

    // Handler for the form reset
    const resetHandler = event => {
        setUserInput(initialUserInput);
    };

    // Managing the state of the inputs
    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value //the + converts the string value to a number
            };
        });
    };

    return (
        <div>
            {editingData && <form onSubmit={submitHandler} className={styles.form}>
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
                    <Button onSubmit={resetHandler} type="reset" className={styles.buttonAlt} style={{color: 'white'}}>
                        Reset
                    </Button>
                    <Button type="submit" className={styles.button} style={{color: 'white'}}>
                        Calculate
                    </Button>
                    <Button className={styles.buttonCancel} style={{color: 'white'}} onClick={stopEditingHandler}>Close</Button>
                </p>
            </form>
            }
            {!editingData &&
                <div className={styles.notEditingContainer}>
                    <Button className={styles.buttonCalculate} onClick={startEditingHandler} style={{color: 'white'}}>Calculate</Button>
                </div>}
        </div>
    );
}

export default UserInput;