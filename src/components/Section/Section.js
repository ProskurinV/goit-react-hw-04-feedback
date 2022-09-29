import PropTypes from 'prop-types';
import { SectionStyle, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionStyle>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionStyle>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
