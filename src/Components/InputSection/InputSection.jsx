import styled from "styled-components";
import Button from "../UI/Button/Button";

import ExchangeCal from "../../Utility";

import { motion } from "framer-motion";
import { fade, titleAnimate, genericAnimate } from "../../animate.js";

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
        showBillAmtBtn: true,

        [e.target.id]: e.target.value,
      };
    });
  };

  const handleGivenAmtChange = e => {
    setError(null);
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

  const handleProcessOnClick = e => {
    e.preventDefault();

    const processedArr = ExchangeCal(exchangeInfo, amountToReturn, setError);
    console.log(processedArr);
    setExchangeInfo(processedArr);
  };

  return (
    <InputSectionContainer
      variants={genericAnimate}
      initial="hidden"
      animate="show"
    >
      <Hide>
        <motion.h3 variants={titleAnimate}>Cash Register Manager</motion.h3>
      </Hide>
      <motion.p variants={fade}>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </motion.p>
      <div className="input_field__container">
        <form onSubmit={handleProcessOnClick}>
          <InputControl variants={fade}>
            <label htmlFor="bill-amount"> Bill Amount :</label>
            <input
              type="number"
              name="billAmount"
              id="billAmount"
              value={billState.amount}
              onChange={handleBillAmtChange}
              required
            />
            {billState.showBillAmtBtn && (
              <Button
                type="button"
                text="Next"
                onClick={handleBillAmtBtnClick}
              />
            )}
          </InputControl>
          {billState.showCashGivenInputField && (
            <InputControl variants={fade}>
              <label htmlFor="cash-given"> Cash Given :</label>
              <input
                type="number"
                name="cashGiven"
                id="cashGivenAmt"
                value={givenAmtState.amount}
                onChange={handleGivenAmtChange}
                required
              />
              {givenAmtState.showProcessBtn && (
                <Button type="submit" text="process" />
              )}
            </InputControl>
          )}
        </form>
      </div>
      {error && (
        <ErrorContainer variants={fade}>
          <h3>{error}</h3>
        </ErrorContainer>
      )}
    </InputSectionContainer>
  );
};

export default InputSection;

/* ---------------------------- Styled Components --------------------------- */
const InputSectionContainer = styled(motion.div)`
  color: #fff;
  background-color: #212227;
  flex: 0.4;
  padding: 2rem 1rem;

  p {
    color: #ccc;
  }
`;

const InputControl = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border: 1px solid #d35269;
  padding: 0.5rem 1rem;
  margin: 1rem 0rem;
  border-radius: 3px;

  input {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 3px;
    border-color: #212227;
    outline: none;

    &:focus {
      border: 0.1rem solid lightblue;
      outline: none;
    }
  }
`;

const ErrorContainer = styled(motion.div)`
  text-align: center;
  padding-top: 2rem;
  color: #f25555;
`;

const Hide = styled.div`
  overflow: hidden;
`;
