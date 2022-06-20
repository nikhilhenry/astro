import { createSignal } from 'solid-js';

export default function Counter({ named, children, count: initialCount, case: id }) {
	const [count] = createSignal(0);
  return (
    <>
      <div className="counter">
        <pre>{0}</pre>
      </div>
      <div id={id} className="counter-message">
        {children || <h1>Fallback</h1>}
				{named}
      </div>
    </>
  );
}
