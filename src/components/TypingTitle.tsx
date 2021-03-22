import React, { useEffect, useState, useCallback } from "react";
import "../styles/Welcome.scss";

interface Props {
  title: string;
  minTypingSpeed?: number;
  maxTypingSpeed?: number;
  initDelay?: number;
}

const TypingTitle: React.FC<Props> = ({
  title,
  initDelay = 700,
  maxTypingSpeed = 90,
  minTypingSpeed = 60,
}) => {
  const [text, setText] = useState("");

  const type = useCallback(() => {
    let str = "";
    let typeSpeed = 0;

    title.split("").forEach((c) => {
      typeSpeed += Math.random() * (maxTypingSpeed - minTypingSpeed) + minTypingSpeed;
      setTimeout(() => {
        str += c;
        setText(str);
      }, initDelay + typeSpeed);
    });
  }, []);

  useEffect(() => {
    if (text !== title) {
      type();
    }
  }, []);

  return (
    <div className="welcome-title">
      {text}
      <span>&nbsp;</span>
    </div>
  );
};

export default TypingTitle;
