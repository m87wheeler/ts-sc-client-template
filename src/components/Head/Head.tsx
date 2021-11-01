import * as React from "react";
import { Helmet } from "react-helmet";

interface IHead {
  title: string;
  canonical?: string;
}

const Head: React.FC<IHead> = ({ title, canonical }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      {canonical ?? <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default Head;
