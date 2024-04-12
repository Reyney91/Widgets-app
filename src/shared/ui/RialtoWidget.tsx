import { useEffect, useState } from "react";
import { rialtoService } from "../api/rialto.service";

interface RialtoValueInterface {
  CharCode: string;
  ID: string;
  Name: string;
  Nominal: number;
  NumCode: string;
  Previous: number;
  Value: number;
}

export const RialtoWidget = () => {
  const [fromValue, setFromValue] = useState("USD");
  const [toValue, setToValue] = useState("EUR");
  const [values, setValues] = useState<Record<string, RialtoValueInterface>>();
  useEffect(() => {
    rialtoService.getAll().then((res) => {
      setValues(res.Valute);
    });
  }, []);

  return (
    <div className="rialto-widget">
      <div className="rialto-widget__info">
        <select
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
          className="select"
        >
          {values &&
            Object.keys(values).map((value) => (
              <option key={value} value={value}>
                {value.toString()}
              </option>
            ))}
        </select>
        <p className="rialto-widget__info__text">
          1 {values && values[fromValue]?.Name}
        </p>
      </div>
      <div className="rialto-widget__info">
        <select
          value={toValue}
          onChange={(e) => setToValue(e.target.value)}
          className="select"
        >
          {values &&
            Object.keys(values).map((value) => (
              <option key={value} value={value}>
                {value.toString()}
              </option>
            ))}
        </select>
        <p className="rialto-widget__info__text">
          {values &&
            (values[toValue]?.Value / values[fromValue].Value).toFixed(4)}{" "}
          {values && values[toValue]?.Name}
        </p>
      </div>
    </div>
  );
};
