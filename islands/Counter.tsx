import { useState } from "preact/hooks";
import { MantineProvider, Button } from "@mantine/core";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div>
      <p>{count}</p>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Button onClick={() => setCount(count - 1)}>-1</Button>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
      </MantineProvider>
    </div>
  );
}
