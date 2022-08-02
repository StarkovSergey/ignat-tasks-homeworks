import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreType } from './bll/store'
import { loadingAC, LoadingStateType } from './bll/loadingReducer'
import loader from './../../assets/loader.svg'

function HW10() {
  const isLoading = useSelector<AppStoreType, LoadingStateType>((state) => state.loading).isLoading;
  const dispatch = useDispatch()

  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => {
      console.log('loading...')
      dispatch(loadingAC(false))
    }, 2000)
  };

  return (
    <div>
      <h3 className="homework-title">homeworks 10</h3>
      {isLoading ? (
        <div>
          <img src={loader} alt=""/>
        </div>
      ) : (
        <div>
          <SuperButton onClick={setLoading}>set loading...</SuperButton>
        </div>
      )}
      <hr />
    </div>
  );
}

export default HW10
