import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import "./LeasingCalculator.css";
export default function LeasingCalculator() {
  const [bill, setBill] = useState("");
  const [firstPayment, setFirstPayment] = useState("");
  const [percentage, setPercentage] = useState(5);
  const [months, setMonth] = useState(6);
  const [showSchedule, setSchedule] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  function handleReset() {
    setBill("");
    setFirstPayment("");
  }
  function showPaymentSchedule() {
    setSchedule((prewSchedule) => !prewSchedule);
  }
  useEffect(() => {
    setResult(null);
  }, [bill, firstPayment, months, percentage]);
  const loan = bill - firstPayment;
  const monthlyRate = percentage / 12 / 100;
  const percentageMounth =
    (monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  const res = loan * percentageMounth;
  const schedule = createSchedule(loan, monthlyRate, months, res);
  function showRes() {
    if (bill <= 0) {
      toast.error("Enter the car price.");
      return;
    }

    if (firstPayment <= 0) {
      toast.error("Enter the first payment.");
      return;
    }

    if (bill < firstPayment) {
      toast.error("The first payment cannot exceed the car price.");
      return;
    }

    if (bill === firstPayment) {
      toast.error("The first payment cannot equal the car price.");
      return;
    }
    setResult(res);
  }
  return (
    <>
      <div className="leasing-cal">
        <h3>leasing calculator</h3>
        <div className="leasing-table">
          <ValueInput bill={bill} onSetBill={setBill} />
          <FirstPayment
            firstPayment={firstPayment}
            onSetPayment={setFirstPayment}
          />
          <LeasingTerm months={months} onSelect={setMonth}>
            Select the lease term, month
          </LeasingTerm>
          <br />
          <div className="leasing-button">
            <button onClick={showPaymentSchedule}>Payment schedule</button>
            <Reset onReset={handleReset} />
            <button onClick={showRes}>Calculate</button>
          </div>
        </div>

        <Output
          bill={bill}
          firstPayment={firstPayment}
          monthlyRate={monthlyRate}
          months={months}
          loan={loan}
          result={result}
          schedule={schedule}
          showSchedule={showSchedule}
          showResult={showResult}
        />
      </div>
    </>
  );
}

function ValueInput({ bill, onSetBill }) {
  return (
    <div className="leasing-value">
      <label>How much the price of car?</label>
      <input
        type="text"
        placeholder="Price of car"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function FirstPayment({ firstPayment, onSetPayment }) {
  return (
    <div className="leasing-value">
      <label>What is the amount of the first payment?</label>
      <input
        type="text"
        placeholder="Entet the first payment"
        value={firstPayment}
        onChange={(e) => onSetPayment(Number(e.target.value))}
      />
    </div>
  );
}

function LeasingTerm({ children, months, onSelect }) {
  return (
    <div className="leasing-value">
      <label>{children}</label>
      <select value={months} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
      </select>
    </div>
  );
}

function Output({
  bill,
  firstPayment,
  monthlyRate,
  result,
  schedule,
  showSchedule,
  showResult,
}) {
  if (
    bill <= 0 ||
    firstPayment <= 0 ||
    firstPayment === bill ||
    bill < firstPayment ||
    Number.isNaN(Number(bill)) ||
    Number.isNaN(Number(firstPayment)) ||
    monthlyRate === 0 ||
    firstPayment === 0
  )
    return null;

  return (
    <>
      {result !== null && (
        <h3>Monthly payment schedule: {result.toFixed(2)}</h3>
      )}
      {showSchedule && (
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Payment</th>
              <th>Interest</th>
              <th>Principal</th>
              <th>Balance</th>
            </tr>
          </thead>

          <tbody>
            {schedule.map((row) => (
              <tr key={row.month}>
                <td>{row.month}</td>

                <td>{row.res.toFixed(2)}</td>

                <td>{row.percentageMounth.toFixed(2)}</td>

                <td>{row.principalPayment.toFixed(2)}</td>

                <td>{row.balance.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
function createSchedule(loan, monthlyRate, months, res) {
  const schedule = [];
  let balance = loan;
  for (let i = 1; i <= months; i++) {
    const percentageMounth = balance * monthlyRate;
    const principalPayment = res - percentageMounth;
    balance = balance - principalPayment;
    schedule.push({
      month: i,
      res,
      percentageMounth,
      principalPayment,
      balance,
    });
  }
  return schedule;
}
