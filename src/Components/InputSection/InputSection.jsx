import styled from "styled-components";
import Button from "../UI/Button/Button";

import ExchangeCal from "../../Utility";

const InputSection = ({
  billState,
  setBillState,
  givenAmtState,
  setGivenAmtState,
  exchangeInfo,
  setExchangeInfo,
  error,
  setError,
}) => {
  // Amount to return .
  const amountToReturn = givenAmtState.cashGivenAmt - billState.billAmount;

  // Event Hanlders
  const handleBillAmtChange = e => {
    setBillState(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleGivenAmtChange = e => {
    setGivenAmtState(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleBillAmtBtnClick = e => {
    setBillState(prevState => {
      return {
        ...prevState,
        showBillAmtBtn: false,
        showCashGivenInputField: true,
      };
    });
  };

  const handleProcessOnClick = () => {
    const processedArr = ExchangeCal(exchangeInfo, amountToReturn, setError);
    console.log(processedArr);
    setExchangeInfo(processedArr);
  };

  return (
    <InputSectionContainer>
      <h3>Cash Register Manager</h3>
      <p>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </p>
      <div className="input_field__container">
        <InputControl>
          <label htmlFor="bill-amount"> Bill Amount :</label>
          <input
            type="number"
            name="billAmount"
            id="billAmount"
            value={billState.amount}
            onChange={handleBillAmtChange}
          />
          {billState.showBillAmtBtn && (
            <Button type="button" text="Next" onClick={handleBillAmtBtnClick} />
          )}
        </InputControl>
        {billState.showCashGivenInputField && (
          <InputControl>
            <label htmlFor="cash-given"> Cash Given :</label>
            <input
              type="number"
              name="cashGiven"
              id="cashGivenAmt"
              value={givenAmtState.amount}
              onChange={handleGivenAmtChange}
            />
            {givenAmtState.showProcessBtn && (
              <Button
                type="button"
                text="process"
                onClick={handleProcessOnClick}
              />
            )}
          </InputControl>
        )}
      </div>
      {error && (
        <ErrorContainer>
          <h3>{error}</h3>
        </ErrorContainer>
      )}
    </InputSectionContainer>
  );
};

export default InputSection;

/* ---------------------------- Styled Components --------------------------- */
const InputSectionContainer = styled.div`
  flex: 0.4;
  padding: 2rem 1rem;
  border-right: 0.1rem solid #aaa;
`;

const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  margin: 1rem 0rem;

  input {
    margin-top: 0.5rem;
    padding: 0.5rem;

    &:focus {
      border: 0.1rem solid lightblue;
      outline: none;
    }
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding-top: 2rem;
  color: #f25555;
`;
