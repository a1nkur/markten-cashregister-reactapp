import styled from "styled-components";

const OutputSection = ({ exchangeInfo }) => {
  return (
    <OutputSectionContainer>
      <TableContainer>
        <table className="table">
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
const OutputSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.6;
`;

const TableContainer = styled.div`
  /* padding: 1rem; */
  min-height: 50vh;
  width: 80%;
`;

/* ---------------------------------- temp ---------------------------------- */

/* ---------------------------------- temp ---------------------------------- */

/* ---------------------------------- temp ---------------------------------- */
// const OutputSection = ({ exchangeInfo }) => {
//   return (
//     <OutputSectionContainer>
//       <TableContainer>
//         <table class="table">
//           <thead>
//             <tr>
//               <th scope="col">Currency Note</th>
//               <th scope="col">Quantity</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th scope="row">₹ 2000</th>
//               <td>Mark</td>
//             </tr>
//             <tr>
//               <th scope="row">₹ 500</th>
//               <td>Mark</td>
//             </tr>
//             <tr>
//               <th scope="row">₹ 100</th>
//               <td>Mark</td>
//             </tr>
//             <tr>
//               <th scope="row">₹ 20</th>
//               <td>Mark</td>
//             </tr>
//             <tr>
//               <th scope="row">₹ 10</th>
//               <td>Mark</td>
//             </tr>
//             <tr>
//               <th scope="row">₹ 5</th>
//               <td>Mark</td>
//             </tr>
//             <tr>
//               <th scope="row">₹ 1</th>
//               <td>Mark</td>
//             </tr>
//           </tbody>
//         </table>
//       </TableContainer>
//     </OutputSectionContainer>
//   );
// };

// export default OutputSection;
/* ---------------------------------- temp ---------------------------------- */
