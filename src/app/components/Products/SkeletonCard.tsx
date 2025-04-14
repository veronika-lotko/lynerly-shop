import styled from "styled-components";

const SkeletonWrapper = styled.div`
  width: 250px;
  height: 350px;
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f5f5f5;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
`;

const SkeletonCard = () => {
  return <SkeletonWrapper />;
};

export default SkeletonCard;
