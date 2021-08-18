import { GlboalStyle } from "./GlobalStyle";
import styled from "styled-components";
import InputSection from "./Components/InputSection/InputSection";
import OutputSection from "./Components/OutputSection/OutputSection";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [exchangeInfo, setExchangeInfo] = useState([
    {
      currenyFaceValue: 2000,
      quantity: 0,
    },
    {
      currenyFaceValue: 500,
      quantity: 0,
    },
    {
      currenyFaceValue: 100,
      quantity: 0,
    },
    {
      currenyFaceValue: 20,
      quantity: 0,
    },
    {
      currenyFaceValue: 10,
      quantity: 0,
    },
    {
      currenyFaceValue: 5,
      quantity: 0,
    },
    {
      currenyFaceValue: 1,
      quantity: 0,
    },
  ]);

  const [billState, setBillState] = useState({
    billAmount: "",
    showBillAmtBtn: false,
    showCashGivenInputField: false,
  });

  const [givenAmtState, setGivenAmtState] = useState({
    cashGivenAmt: "",
    showProcessBtn: true,
  });

  const [error, setError] = useState(null);

  return (
    <AppContainer>
      <GlboalStyle />
      <AppBody>
        <InputSection
          billState={billState}
          setBillState={setBillState}
          givenAmtState={givenAmtState}
          setGivenAmtState={setGivenAmtState}
          exchangeInfo={exchangeInfo}
          setExchangeInfo={setExchangeInfo}
          error={error}
          setError={setError}
        />
        <OutputSection exchangeInfo={exchangeInfo} />
      </AppBody>
    </AppContainer>
  );
}

export default App;

/* ---------------------------- Styled Components --------------------------- */
const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fefdff;
  background-color: #3c474b;
`;

const AppBody = styled.div`
  border-radius: 3px;
  height: 90vh;
  width: 90vw;
  background-color: #fff;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.9);

  display: flex;
`;
