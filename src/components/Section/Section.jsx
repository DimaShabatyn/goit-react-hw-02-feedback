import React from 'react';
import { SectionBlock } from './Section.styled';
import { Header } from 'components/Header/Header';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      <Header title={title} />
      {children}
    </SectionBlock>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
