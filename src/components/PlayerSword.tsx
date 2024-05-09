import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import swordImage from "../assets/sword.svg";

interface SwordProps {
  x?: number;
  y?: number;
}

const PlayerSword: React.FC<SwordProps> = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const blockingDivRef = useRef<HTMLDivElement>(null);
  const Sword = useRef<HTMLImageElement>(null);

  const moveSword = (event: MouseEvent) => {
    const blockRefX = blockingDivRef.current?.getBoundingClientRect().left || 0;
    const blockRefY =
      blockingDivRef.current?.getBoundingClientRect().bottom || 0;
    setPosition({
      x: event.clientX - blockRefX || 0,
      y: blockRefY - event.clientY || 0,
    });
    // after 1 second timeout, reset the position to 0, 0
    setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 1000);
  };

  const globalSwordMove = (event: MouseEvent) => {
    moveSword(event);
    document.removeEventListener("click", globalSwordMove);
    setTimeout(() => {
      if (Sword.current) {
      Sword.current.style.animation = "";
    }
    }, 2400);
  };

  const handleClick = () => {
    if (Sword.current) {
      Sword.current.style.animation = "spin 0.25s linear infinite";
    }
    setTimeout(() => {
      document.addEventListener("click", globalSwordMove);
    }, 0);
  };

  return (
    <BlockingDiv id="custom" ref={blockingDivRef}>
      <SwordImage
        ref={Sword}
        src={swordImage}
        position={position}
        alt="Sword"
        onClick={handleClick}
      />
    </BlockingDiv>
  );
};

export default PlayerSword;

const SwordImage = styled.img<{ position: { x: number; y: number } }>`
  position: relative;
  left: ${({ position }) => position.x}px;
  bottom: ${({ position }) => position.y}px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: left 1s ease, bottom 1s ease, transform 0.25s ease;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &:hover, &:active {
    transform: scale(1.2);
  }
`;

const BlockingDiv = styled.div`
  max-width: 50px;
  height: 50px;
`;
