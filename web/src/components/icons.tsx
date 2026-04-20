import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

export function IconPhone(props: IconProps) {
  const { title = "Phone", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M8.7 3.4l1.6 3.9a1.2 1.2 0 0 1-.3 1.3L8.6 10c.9 1.9 2.5 3.5 4.4 4.4l1.4-1.4a1.2 1.2 0 0 1 1.3-.3l3.9 1.6a1.2 1.2 0 0 1 .7 1.2c-.1 2.9-2.5 5.1-5.4 5.1C8.2 20.6 3.4 15.8 3.4 10a5.4 5.4 0 0 1 5.1-5.4 1.2 1.2 0 0 1 1.2.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  const { title = "Address", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10.5a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconFacebook(props: IconProps) {
  const { title = "Facebook", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M14 8.7V7.3c0-1.1.9-2 2-2H18V2.5h-2c-2.8 0-5 2.2-5 5v1.2H9v3h2v9h3v-9h2.6l.4-3H14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  const { title = "Instagram", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M7.5 3.8h9A3.7 3.7 0 0 1 20.2 7.5v9a3.7 3.7 0 0 1-3.7 3.7h-9a3.7 3.7 0 0 1-3.7-3.7v-9A3.7 3.7 0 0 1 7.5 3.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 16.1a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M17.3 6.7h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
