import styled from "styled-components";

const AdPoster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  height: 30vh;
  width: 70vh;
  border-radius: 20px;
`;

function AdCast() {
  return (
    <div className="flex justify-center">
      <AdPoster>War Page ADS </AdPoster>
    </div>
  );
}

export default AdCast;
