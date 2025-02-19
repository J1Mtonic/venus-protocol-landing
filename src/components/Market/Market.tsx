import React from 'react';
import cn from 'classnames';
import { useVenusApi } from '../../api/hooks/useVenusApi';
import Container from '../Container/Container';
import { nFormatter } from '../../api/utils';
import s from './Market.module.css';

interface IMarketProps {
  className?: string;
}

const loadingState = 'Loading...';

const Market: React.FC<IMarketProps> = ({ className }) => {
  const { marketSize, borrowedSum, liquiditySum, markets, isLoading, error, fetchData } =
    useVenusApi();

  if (error) {
    return (
      <Container className={cn(s.root, className)}>
        <p>{error.message}</p>
        <button className={s.btn} type="button" onClick={fetchData}>
          Try again
        </button>
      </Container>
    );
  }

  return (
    <Container className={cn(s.root, className)}>
      <div className={s.totalWrapper}>
        <ul className={s.totalList}>
          <li className={s.totalItem}>
            <div>
              <p className={s.totalTitle}>Market size</p>
              <p className={s.totalSum}>{isLoading ? loadingState : marketSize}</p>
            </div>
          </li>
          <span className={s.divider} />
          <li className={s.totalItem}>
            <div>
              <p className={s.totalTitle}>Total Borrowed</p>
              <p className={s.totalSum}>{isLoading ? loadingState : borrowedSum}</p>
            </div>
          </li>
          <span className={s.divider} />
          <li className={s.totalItem}>
            <div>
              <p className={s.totalTitle}>Total Liquidity</p>
              <p className={s.totalSum}>{isLoading ? loadingState : liquiditySum}</p>
            </div>
          </li>
        </ul>
      </div>

      {isLoading ? (
        <p>{loadingState}</p>
      ) : (
        <div className={s.marketsWrapper}>
          <div className={s.marketLabelsDesktop}>
            <span className={s.marketLabelDesktopItem}>Assets</span>
            <span className={s.marketLabelDesktopItem}>Market size</span>
            <span className={s.marketLabelDesktopItem}>Deposit APY</span>
            <span className={s.marketLabelDesktopItem}>Total borrowed</span>
            <span className={s.marketLabelDesktopItem}>Borrow APY</span>
          </div>

          <ul className={s.marketsList}>
            {markets.map(i => (
              <li className={s.marketItem} key={i.liquidity}>
                <div className={s.marketItemSymbol}>
                  <img className={s.icon} src={`${window.location.href}coins/${i.assetIcon.split('/').slice(-1)[0]}`} alt={i.underlyingSymbol} />
                  {i.underlyingSymbol}
                </div>
                <div className={s.marketItemValuesWrapper}>
                  <p className={s.marketItemValue}>
                    <span className={s.marketItemLabel}>Market size</span> ${' '}
                    {nFormatter(i.totalSupplyUsd)}
                  </p>
                  <p className={s.marketItemValue}>
                    <span className={s.marketItemLabel}>Deposit APY</span>
                    {nFormatter(i.depositApy)}%
                  </p>
                  <p className={s.marketItemValue}>
                    <span className={s.marketItemLabel}>Borrowed</span> ${' '}
                    {nFormatter(i.totalBorrowsUsd)}
                  </p>
                  <p className={s.marketItemValue}>
                    <span className={s.marketItemLabel}>Borrow APY</span>
                    {nFormatter(i.borrowApy)}%
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className={s.btnWrapper}>
            <a href="https://app.venus.io">All markets</a>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Market;
