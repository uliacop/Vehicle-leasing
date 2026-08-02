import { useState } from "react";
import rules from "../../../data/rules.json";
import "./RulesSet.css";
export default function RulesSet() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="rule-set">
      <h2 className="leasing-title">How Does Leasing Work?</h2>
      <p className="leasing-text">
        Leasing a vehicle is essentially entering into a long term rental
        agreement for that vehicle. Unlike a traditional car purchase, you don’t
        actually own the vehicle. Instead, a leasing company purchases the
        vehicle from the dealer on your behalf and then you make monthly
        payments to the leasing company for the duration of your lease. Some
        leases however, do provide the option to purchase the vehicle at the end
        of the lease.
      </p>
      <h3 className="leasing-title">
        Similar to a short term car rental, there are rules that define:
      </h3>
      <div className="flashcards">
        {rules.map((rule) => (
          <div
            key={rule.id}
            onClick={() => handleClick(rule.id)}
            className={`card ${rule.id === selectedId ? "selected" : ""}`}
          >
            <p
              className={
                rule.id === selectedId ? "title selectedText" : "titleRule"
              }
            >
              {rule.id === selectedId ? rule.description : rule.title}
            </p>
          </div>
        ))}
      </div>

      <p>
        Lease contracts are a commitment and ending them early can be difficult
        and expensive so it is important to consider your circumstances
        carefully before you decide.
      </p>
    </div>
  );
}
