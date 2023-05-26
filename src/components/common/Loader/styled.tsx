import styled from 'styled-components';

interface IComponentwithSize {
  size: string;
}

export const Box = styled.div<IComponentwithSize>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: calc(${props => props.size} * 2);
  width: calc(${props => props.size} * 2);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.Loader.bgColor};
  border-radius: 50%;
`;

export const Text = styled.div<IComponentwithSize>`
  color: ${props => props.theme.Loader.lightColor};
  margin-bottom: calc(${props => props.size} * 0.3);
  text-transform: uppercase;
  font-size: calc(${props => props.size} * 0.2);
  text-align: center;
`;

export const Cat = styled.div<IComponentwithSize>`
  position: relative;
  height: ${props => props.size};
  width: calc(${props => props.size} * 1.13);
`;

export const Ear = styled.div`
  position: absolute;
  top: -30%;
  height: 60%;
  width: 25%;
  background: ${props => props.theme.Loader.lightColor};

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 24%;
    height: 10%;
    width: 5%;
    border-radius: 50%;
    background: ${props => props.theme.Loader.bgColor};
  }

  &::after {
    transform-origin: 50% 100%;
  }
`;

export const EarLeft = styled(Ear)`
  left: -7%;
  border-radius: 70% 30% 0% 0% / 100% 100% 0% 0%;
  transform: rotate(-15deg);

  &::before,
  &::after {
    right: 10%;
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const EarRight = styled(Ear)`
  right: -7%;
  border-radius: 30% 70% 0% 0% / 100% 100% 0% 0%;
  transform: rotate(15deg);

  &::before,
  &::after {
    left: 10%;
  }

  &::after {
    transform: rotate(45deg);
  }
`;

export const Face = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.Loader.bgColor};
  border-radius: 50%;
`;

const Eye = styled.div`
  position: absolute;
  top: 35%;
  height: 30%;
  width: 31%;
  background: ${props => props.theme.Loader.lightColor};
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

  // Eyelids
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    border-radius: 0 0 50% 50% / 0 0 40% 40%;
    background: ${props => props.theme.Loader.bgColor};
    animation: blink 4s infinite ease-in;
  }

  @keyframes blink {
    0% {
      height: 0;
    }
    90% {
      height: 0;
    }
    92.5% {
      height: 100%;
    }
    95% {
      height: 0;
    }
    97.5% {
      height: 100%;
    }
    100% {
      height: 0;
    }
  }

  // Tips of the eyes
  &::before {
    content: '';
    position: absolute;
    top: 60%;
    height: 10%;
    width: 15%;
    background: ${props => props.theme.Loader.lightColor};
    border-radius: 50%;
  }
`;

export const EyeLeft = styled(Eye)`
  left: 0;

  &::before {
    right: -5%;
  }
`;

export const EyeRight = styled(Eye)`
  right: 0;

  &::before {
    left: -5%;
  }
`;

export const EyePupil = styled.div`
  position: absolute;
  top: 25%;
  height: 50%;
  width: 20%;
  background: ${props => props.theme.Loader.darkColor};
  border-radius: 50%;
  animation: look-around 4s infinite;

  @keyframes look-around {
    0% {
      transform: translate(0);
    }
    5% {
      transform: translate(50%, -25%);
    }
    10% {
      transform: translate(50%, -25%);
    }
    15% {
      transform: translate(-100%, -25%);
    }
    20% {
      transform: translate(-100%, -25%);
    }
    25% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  ${EyeLeft} & {
    right: 30%;
  }

  ${EyeRight} & {
    left: 30%;
  }

  // Glare on the pupil
  &::after {
    content: '';
    position: absolute;
    top: 30%;
    right: -5%;
    height: 20%;
    width: 35%;
    border-radius: 50%;
    background: ${props => props.theme.Loader.lightColor};
  }
`;

export const Muzzle = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  height: 6%;
  width: 10%;
  background: ${props => props.theme.Loader.lightColor};
  transform: translateX(-50%);
  border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
`;
