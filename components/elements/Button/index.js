import React from "react";
import Link from "next/link";
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.isDefault) className.push("uk-button uk-button-default");
  if (props.isPrimary) className.push("uk-button uk-button-primary");
  if (props.isSecondary) className.push("uk-button uk-button-secondary");
  if (props.isLarge) className.push("uk-button uk-button-large");
  if (props.isSmall) className.push("uk-button uk-button-small");

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
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <Link href={props.href}>
      <button
        className={className.join(" ")}
        id={props.id}
        style={props.style}
        onClick={onClick}
        data-target={props.target}
      >
        {props.children}
      </button>
    </Link>
  );
}

Button.PropTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isDefault: propTypes.bool,
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  isLarge: propTypes.bool,
  isSmall: propTypes.bool,
  isDisabled: propTypes.bool,
  isExternal: propTypes.bool,
};
