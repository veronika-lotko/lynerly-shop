import styled from "styled-components";

const SkeletonWrapper = styled.div`
  width: 200px;
  height: 270px;
  margin: 20px auto;
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: pulse 2.5s infinite;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;

  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    20% {
      background-color: #536d5a;
    }
    50% {
      background-color: #e0e0e0;
    }
    70% {
      background-color: #536d5a;
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
