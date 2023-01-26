import { useState } from "preact/hooks";
import { MantineProvider, Button } from "@mantine/core";
import {
  NotificationsProvider,
  showNotification,
} from "@mantine/notifications";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div>
      <p>{count}</p>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <Button
            variant="outline"
            onClick={() =>
              showNotification({
                title: "Default notification",
                message: "Hey there, your code is awesome! 🤥",
              })
            }
          >
            Show notification
          </Button>
        </NotificationsProvider>
        <Button onClick={() => setCount(count - 1)}>-1</Button>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
      </MantineProvider>
    </div>
  );
}
