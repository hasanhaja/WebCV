import React from 'react';

import './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-content">
        {`\u00A9 ${year} Hasan Ali`}
      </div>
    </footer>
  );
}

export default Footer;
