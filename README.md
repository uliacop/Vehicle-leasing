# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
MriiPNAI2BCRQtPhuiPp28Y-678u5i1iXfUmCtttIOQ
MriiPNAI2BCRQtPhuiPp28Y-678u5i1iXfUmCtttIOQ
A
P
I-ID:X8h3qKEKyZdhcMeHk1gY
https://carimagesapi.com/
ci_9502ac0aeca259bbaaef8220aa8739ac59b065e094603866fd4bb460
className={({ isActive }) => isActive ? "active-link" : ""}
/\* import { useState } from "react";

export default function LeasingCalculator() {
const [bill, setBill] = useState("");
const [firstPayment, setFirstPayment] = useState("");
const [percentage, setPercentage] = useState(5);
const [months, setMonth] = useState(6);
const [showSchedule, setSchedule] = useState(false);
function handleReset() {
setBill("");
setFirstPayment("");
}
function showPaymentSchedule() {
setSchedule((prewSchedule) => !prewSchedule);
}

const loan = bill - firstPayment;
const monthlyRate = percentage / 12 / 100;
const percentageMounth =
(monthlyRate _ Math.pow(1 + monthlyRate, months)) /
(Math.pow(1 + monthlyRate, months) - 1);
const res = loan _ percentageMounth;
const schedule = createSchedule(loan, monthlyRate, months, res);
return (
<div>
<ValueInput bill={bill} onSetBill={setBill} />
<FirstPayment
        firstPayment={firstPayment}
        onSetPayment={setFirstPayment}
      />
<LeasingTerm months={months} onSelect={setMonth}>
Select the lease term, month
</LeasingTerm>
{firstPayment > 0 && (
<>
<Output
            bill={bill}
            firstPayment={firstPayment}
            monthlyRate={monthlyRate}
            months={months}
            loan={loan}
            res={res}
            schedule={schedule}
            showSchedule={showSchedule}
          />
</>
)}
<button onClick={showPaymentSchedule}>Payment schedule</button>
<Reset onReset={handleReset} />
</div>
);
}

function ValueInput({ bill, onSetBill }) {
return (
<div>
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
<div>
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
<div>
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
res,
schedule,
showSchedule,
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
<h3>{res.toFixed(2)}</h3>
{showSchedule && (
<table>
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
const percentageMounth = balance _ monthlyRate;
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
} _/
