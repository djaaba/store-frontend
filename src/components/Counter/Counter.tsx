import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import styles from './Button.module.css';
import { CounterProps } from './Counter.props';
import store from '../../store/store';

const Counter = ({children, className, ...props} : CounterProps) : JSX.Element => {

	return (
		<div>
			<button onClick={() => store.increment()}>+</button>
			<p>Количество раз: {store.value}</p>
			<button onClick={() => store.decrement()}>-</button>
		</div>
	);
};

export const CounterHOC = observer(Counter)