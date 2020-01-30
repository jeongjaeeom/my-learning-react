import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import Counter from "../components/Counter";
import {decrease, increase} from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch])
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch])
  return (
      <Counter
          number={number}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
      />
  )
};

export default CounterContainer;

// 내부에서 bindActionCreators 활용하게끔 객체형태로 입력 현재 가장 편한 방법.
/*
export default connect(
    state => ({
      number: state.counter.number
    }),
    {
      increase,
      decrease
    }
)(CounterContainer);
*/

/*
bindActionCreators 활용
export default connect(
    state => ({
      number: state.counter.number
    }),
    dispatch =>
        bindActionCreators(
            {
              increase,
              decrease
            },
            dispatch
        )
)(CounterContainer);
*/

/*
기본방법
export default connect(
    state => ({
      number: state.counter.number
    }),
    dispatch => ({
      increase: () => dispatch(increase()),
      decrease: () => dispatch(decrease())
    })
)(CounterContainer);
*/
