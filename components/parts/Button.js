import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.isDefault) className.push("uk-button-default");
  if (props.isPrimary) className.push("uk-button-primary");
  if (props.isSecondary) className.push("uk-button-danger");
  if (props.isLarge) className.push("uk-button-large");
  if (props.isSmall) className.push("uk-button-small");
  if (props.isDisabled) className.push("uk-button-default");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return <div></div>;
}

Button.PropTypes;
