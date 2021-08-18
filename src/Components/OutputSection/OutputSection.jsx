import styled from "styled-components";

import { motion } from "framer-motion";
import { fade, genericAnimate } from "../../animate.js";

const OutputSection = ({ exchangeInfo }) => {
  return (
    <OutputSectionContainer
      variants={genericAnimate}
      initial="hidden"
      animate="show"
    >
      <TableContainer variants={fade}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Currency Note</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {exchangeInfo.map((eachItem, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{eachItem.currenyFaceValue}</th>
                  <td>{eachItem.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
    </OutputSectionContainer>
  );
};

export default OutputSection;

/* ---------------------------- Styled Components --------------------------- */
const OutputSectionContainer = styled(motion.div)`
  background-color: #d35269;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.6;
`;

const TableContainer = styled(motion.div)`
  min-height: 50vh;
  width: 80%;

  .table > tbody > tr > td,
  .table > tbody > tr > th,
  .table > thead > tr > td,
  .table > thead > tr > th {
    border-bottom: 1px solid #212227;
  }

  .table > tbody > tr > td,
  .table > thead > tr > th {
    border-top: 1px solid #212227;
    border-bottom: 1px solid #212227;
  }
`;
