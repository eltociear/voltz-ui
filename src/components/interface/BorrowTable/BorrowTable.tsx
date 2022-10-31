import React, { useMemo, useRef } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { SystemStyleObject, Theme } from '@theme';
import { Typography } from '@components/atomic';
import { Box } from '@mui/material';

import { data, AugmentedBorrowAMM, findCurrentBorrowPosition, getRowButtonId } from '@utilities';
import { mapAmmToAmmTableDatum } from './utilities';
import { BorrowAMMProvider, PositionProvider } from '@contexts';
import { Panel } from '@components/atomic';
import {
  FixedBorrowTableFields,
  labelsFixed,
  labelsVariable,
  VariableBorrowTableFields,
  BorrowAMMTableDatum,
} from './types';
import { BorrowTableHead } from './components';
import { DateTime } from 'luxon';
import BorrowTableRow from './components/BorrowTableRow/BorrowTableRow';
import { Position } from '@voltz-protocol/v1-sdk/dist/types/entities';

export type BorrowTableProps = {
  showVariable: boolean;
  showFixed: boolean;
  positions: Position[];
  borrowAmms: AugmentedBorrowAMM[];
  order: data.TableOrder;
  variableOrderBy: VariableBorrowTableFields;
  onSetVariableOrderBy: (orderBy: VariableBorrowTableFields) => void;
  fixedOrderBy: FixedBorrowTableFields;
  onSetFixedOrderBy: (orderBy: FixedBorrowTableFields) => void;
  page: number;
  size: number | null;
  onSelectItem: (datum: AugmentedBorrowAMM) => void;
  onLoaded: (loaded: boolean) => void;
  commonOverrides: SystemStyleObject<Theme>;
};

const BorrowTable: React.FunctionComponent<BorrowTableProps> = ({
  showVariable,
  showFixed,
  positions,
  borrowAmms,
  order,
  variableOrderBy,
  fixedOrderBy,
  page,
  size,
  onSelectItem,
  onLoaded,
  commonOverrides,
}) => {
  const countLoaded = useRef(-2);
  const counted = useRef({
    fixedRows: false,
    variableRows: false,
    noFixedRows: true,
    noVariableRows: true,
  });

  const replacementRowStyle: SystemStyleObject<Theme> = {
    fontSize: 18,
    fontWeight: '400',
    color: '#48435E',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: `#151221`,
    borderRadius: 2,
    padding: '10px',
    marginTop: (theme) => theme.spacing(-3),
    marginBottom: (theme) => theme.spacing(8),
  };

  const handleLoadedRow = () => {
    countLoaded.current++;
    if (countLoaded.current == 0) {
      onLoaded(false);
    }
  };

  const tableData = useMemo(() => {
    const unfilteredDatum = borrowAmms.map(mapAmmToAmmTableDatum);
    counted.current.noFixedRows = false;
    counted.current.noVariableRows = false;
    return unfilteredDatum;
  }, [order, page, size]);

  const renderNoFixedPositions = () => {
    if (!counted.current.noFixedRows) {
      handleLoadedRow();
      counted.current.noFixedRows = true;
    }
    return (
      <Typography variant="body2" sx={{ ...replacementRowStyle }}>
        YOU DON'T HAVE ANY FIXED DEBT
      </Typography>
    );
  };
  const renderNoVariablePositions = () => {
    if (!counted.current.noVariableRows && !showFixed) {
      handleLoadedRow();
      counted.current.noVariableRows = true;
    }
    return (
      <Typography variant="body2" sx={{ ...replacementRowStyle }}>
        YOU DON'T HAVE ANY VARIABLE DEBT
      </Typography>
    );
  };

  const renderVariableTable = () => {
    const liveMarkets = tableData.map((datum, index) => {
      if (datum && DateTime.now() < datum.endDate) {
        const position = findCurrentBorrowPosition(positions || [], borrowAmms[index]);
        return { datum: datum, borrowAmms: borrowAmms[index], position: position, index: index };
      }
    });

    const filteredMarkets = liveMarkets.filter((market) => market !== undefined);
    const showPositions = filteredMarkets.length !== 0;

    if (showPositions && showVariable && !counted.current.variableRows) {
      countLoaded.current =
        countLoaded.current + (counted.current.noVariableRows ? 0 : 1) - filteredMarkets.length;
      counted.current.variableRows = true;
    }

    return (
      <>
        <TableContainer>
          <Table
            sx={{
              borderCollapse: 'separate',
              borderSpacing: '0px 16px',
              ...commonOverrides,
            }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <BorrowTableHead
              order={order}
              orderBy={variableOrderBy}
              labels={labelsVariable}
              isFixedPositions={false}
            />
            <TableBody sx={{ position: 'relative', top: (theme) => `-${theme.spacing(3)}` }}>
              {showPositions &&
                showVariable &&
                renderVariableRows(liveMarkets.filter((market) => market !== undefined))}
            </TableBody>
          </Table>
        </TableContainer>
        {(!showPositions || !showVariable) && renderNoVariablePositions()}
      </>
    );
  };

  const renderFixedRows = (
    marketsWithPosition: (
      | {
          datum: BorrowAMMTableDatum;
          borrowAmms: AugmentedBorrowAMM;
          position: Position;
          index: number;
        }
      | undefined
    )[],
  ) => {
    return (
      <>
        {marketsWithPosition.map((info) => {
          if (info !== undefined) {
            return (
              <BorrowAMMProvider amm={info.borrowAmms}>
                <PositionProvider position={info.position}>
                  <BorrowTableRow
                    datum={info.datum}
                    index={info.index}
                    onSelect={handleSelectRow(info.index)}
                    isFixedPositions={true}
                    handleLoadedRow={handleLoadedRow}
                  />
                </PositionProvider>
              </BorrowAMMProvider>
            );
          }
        })}
      </>
    );
  };

  const renderVariableRows = (
    liveMarkets: (
      | {
          datum: BorrowAMMTableDatum;
          borrowAmms: AugmentedBorrowAMM;
          position: Position | undefined;
          index: number;
        }
      | undefined
    )[],
  ) => {
    return (
      <>
        {liveMarkets.map((info) => {
          if (info) {
            return (
              <BorrowAMMProvider amm={info.borrowAmms}>
                <PositionProvider position={info.position}>
                  <BorrowTableRow
                    datum={info.datum}
                    index={info.index}
                    onSelect={handleSelectRow(info.index)}
                    isFixedPositions={false}
                    handleLoadedRow={handleLoadedRow}
                    gaButtonId={getRowButtonId(false, info.datum.protocol, true)}
                  />
                </PositionProvider>
              </BorrowAMMProvider>
            );
          }
        })}
      </>
    );
  };

  const renderFixedTable = () => {
    const marketsWithPosition = tableData.map((datum, index) => {
      if (datum && DateTime.now() < datum.endDate) {
        const position = findCurrentBorrowPosition(positions || [], borrowAmms[index]);
        if (position) {
          return { datum: datum, borrowAmms: borrowAmms[index], position: position, index: index };
        }
      }
    });

    const filteredMarkets = marketsWithPosition.filter((market) => market !== undefined);
    const showPositions = filteredMarkets.length !== 0;

    if (showPositions && !counted.current.fixedRows) {
      countLoaded.current =
        countLoaded.current + (counted.current.noFixedRows ? 0 : 1) - filteredMarkets.length;
      counted.current.fixedRows = true;
    }

    return (
      <>
        <TableContainer>
          <Table
            sx={{
              borderCollapse: 'separate',
              borderSpacing: '0px 16px',
              ...commonOverrides,
            }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <BorrowTableHead
              order={order}
              orderBy={fixedOrderBy}
              labels={labelsFixed}
              isFixedPositions={true}
            />
            <TableBody sx={{ position: 'relative', top: (theme) => `-${theme.spacing(3)}` }}>
              {showPositions && renderFixedRows(marketsWithPosition)}
            </TableBody>
          </Table>
        </TableContainer>
        {!showPositions && renderNoFixedPositions()}
      </>
    );
  };

  const handleSelectRow = (index: number) => () => {
    onSelectItem(borrowAmms[index]);
  };

  return (
    <Panel
      variant={'dark'}
      borderRadius="large"
      padding="container"
      sx={{ paddingTop: 0, paddingBottom: 0, background: 'transparent' }}
    >
      {/* VARIABLE POSITIONS TABLE */}
      <Typography
        variant="body2"
        sx={{ fontSize: '18px', fontWeight: 700, display: 'flex', alignContent: 'center' }}
      >
        <Box
          sx={{
            backgroundColor: '#2667FF',
            borderRadius: '5px',
            width: '4px',
            height: '4px',
            marginTop: '12px',
            marginRight: '8px',
          }}
        ></Box>
        VARIABLE POSITIONS
      </Typography>
      {renderVariableTable()}

      {/* FIXED POSITIONS TABLE */}
      <Typography
        variant="body2"
        sx={{ fontSize: '18px', fontWeight: 700, display: 'flex', alignContent: 'center' }}
      >
        <Box
          sx={{
            backgroundColor: '#4DE5FF',
            borderRadius: '5px',
            width: '4px',
            height: '4px',
            marginTop: '12px',
            marginRight: '8px',
          }}
        ></Box>
        FIXED POSITIONS
      </Typography>
      {renderFixedTable()}
    </Panel>
  );
};

export default BorrowTable;
