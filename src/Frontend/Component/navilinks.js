import React from 'react';
import PropTypes from 'prop-types';

export default function NavigationalButtonComponent({
  content,
  alt,
  href,
  className,
}) {
  return (
    <a  href={href} className={className}>
      {content}
    </a>
  );
}

NavigationalButtonComponent.propTypes = {
  content: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};
