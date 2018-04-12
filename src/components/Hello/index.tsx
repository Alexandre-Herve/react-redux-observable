import * as React from 'react';

interface Props {
  greeting: string;
  onSetGreeting: (greeting: string) => any;
}

export const Hello: React.SFC<Props> = ({greeting, onSetGreeting}) => {
  const handleSetGreeting = () => { onSetGreeting("tagada") };
  return (
    <div>
      <div className="greeting">
        Hello {greeting} !!
      </div>
      <button onClick={handleSetGreeting}>tagada</button>
    </div>
  );
}
