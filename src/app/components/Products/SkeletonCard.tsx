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

const SkeletonLine = styled.div`
  height: 16px;
  background-color: #d6d6d6;
  border-radius: 4px;
  animation: pulse 2.5s infinite;

  &:nth-child(1) {
    width: 80%;
  }
  &:nth-child(2) {
    width: 60%;
  }
  &:nth-child(3) {
    width: 90%;
  }
`;

const SkeletonCard = () => {
  return (
    <SkeletonWrapper>
      <SkeletonLine />
      <SkeletonLine />
      {/* <SkeletonLine /> */}
    </SkeletonWrapper>
  );
};

export default SkeletonCard;
