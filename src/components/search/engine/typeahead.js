import React from 'react';
import { Token } from 'react-bootstrap-typeahead';

import colourLibrary from '../../../nzbbtef/colours/library';

/**
  Generate an omnibus of options suitable for the typeahead
 */
const generateTypeaheadOptions = criteria => {
  const optionTypes = {
    isColour: false,
    isSymbol: false,
    isName: false,
    isPrimaryBand: false,
    isStudyArea: false,
  };

  return []
    .concat(
      criteria.colours.map(colour =>
        Object.assign(
          {},
          { colour: colour },
          optionTypes,
          { isColour: true },
          colourLibrary[colour]
        )
      )
    )
    .concat(
      criteria.symbols.map(symbol =>
        Object.assign({}, { symbol: symbol, label: symbol }, optionTypes, { isSymbol: true })
      )
    )
    .concat(
      criteria.names.map(name =>
        Object.assign({}, { name: name, label: name }, optionTypes, { isName: true })
      )
    )
    .concat(
      criteria.primaryBands.map(primaryBand =>
        Object.assign({}, { primaryBand: primaryBand, label: primaryBand }, optionTypes, {
          isPrimaryBand: true,
        })
      )
    )
    .concat(
      criteria.studyAreas.map(studyArea =>
        Object.assign({}, { studyArea: studyArea, label: studyArea }, optionTypes, {
          isStudyArea: true,
        })
      )
    );
};

/**
  Generate a visual 'colour block' for displaying the colours.
 */
const ColourBlock = ({ colour }) => (
  <>
    <div
      className="d-inline-block mr-1"
      style={{
        background: colourLibrary[colour].value,
        width: 10,
        height: 10,
        border: '1px solid #000',
      }}
    />
    {colourLibrary[colour].label}
  </>
);

/**
  Generate tokens suitable for the typeahead
 */
const generateTypeaheadToken = (option, props, index) => {
  if (option.label)
    return (
      <Token
        onRemove={props.onRemove}
        option={option}
        key={index}
        className={
          (option.isColour && 'token-colour') ||
          (option.isSymbol && 'token-symbol') ||
          (option.isName && 'token-name') ||
          (option.isPrimaryBand && 'token-primaryBand') ||
          (option.isStudyArea && 'token-studyArea')
        }
      >
        {option.isColour ? <ColourBlock colour={option.colour} /> : option.label}
      </Token>
    );
  else
    return (
      <Token onRemove={props.onRemove} option={option}>
        <>{option}</>
      </Token>
    );
};

/**
  Generate menu items suitable for the typeahead
 */
const generateTypeaheadMenuItemChildren = (option, props, index) => {
  if (option.label)
    return (
      <>
        {option.isColour ? <ColourBlock colour={option.colour} /> : option.label}
        <small className="ml-2">
          (
          {(option.isColour && 'Colour') ||
            (option.isSymbol && 'Symbol') ||
            (option.isName && 'Name') ||
            (option.isPrimaryBand && 'Primary Band') ||
            (option.isStudyArea && 'Study Area')}
          )
        </small>
      </>
    );
  else return <>{option}</>;
};

export {
  generateTypeaheadOptions,
  ColourBlock,
  generateTypeaheadToken,
  generateTypeaheadMenuItemChildren,
};
