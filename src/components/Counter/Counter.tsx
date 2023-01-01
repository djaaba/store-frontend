import cn from 'classnames';

import styles from './Counter.module.css';
import { CounterProps } from './Counter.props';
import { useDispatch, useSelector } from 'react-redux';
import { selectCounter } from '../../store/counter/counter-selector';
import { decrement, increment } from '../../store/counter/counter-actions';
import { useEffect } from 'react';

export const Counter = ({ children, className, ...props }: CounterProps): JSX.Element => {
	const dispatch = useDispatch();
	const counter = useSelector(selectCounter);

	useEffect(() => {
		console.log(counter)
	}, [counter])
	
	return (
		<>
			<button onClick={() => dispatch(increment())}>+</button>
			<p>Redux Количество раз: {counter}</p>
			<button onClick={() => dispatch(decrement())}>-</button>
		</>
	);
};