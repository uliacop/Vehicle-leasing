import React from "react";
import { useEffect, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import rules from "../../../data/rules.json";
import "./CarRules.css";
export default function CarRules() {
  const quantity = [
    ...Array.from({ length: rules.length + 1 }, (_, i) => i),
    ...Array.from({ length: rules.length - 1 }, (_, i) => rules.length - 1 - i),
  ];
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % quantity.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const count = quantity[step];
  const visibleRules = rules.slice(0, count);
  const transitions = useTransition(visibleRules, {
    from: {
      opacity: 0,
      transform: "translateY(30px)",
    },
    enter: {
      opacity: 1,
      transform: "translateY(0px)",
    },
    leave: {
      opacity: 0,
      transform: "translateY(-30px)",
    },
  });
  return (
    <div className="rules">
      <h2 className="leasing-title">How Does Leasing Work?</h2>
      {transitions((style, rule) => (
        <animated.li style={style} className="rule">
          <img className="rule-img" src={rule.image} />
          <p className="rules-p">{rule.description}</p>
        </animated.li>
      ))}
    </div>
  );
}
