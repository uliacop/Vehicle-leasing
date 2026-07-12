import { useNavigate } from "react-router-dom";
import Button from "./Button";
export default function BackButton({ to, className }) {
  const navigate = useNavigate();

  function handleBack() {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  }
  return (
    <Button type="back" onClick={handleBack} className={className}>
      &larr; Back
    </Button>
  );
}
