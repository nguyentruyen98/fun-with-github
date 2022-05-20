import { EyeOutlined, EyeFilled } from "@ant-design/icons";
import { SubscriptionState } from "src/generated/github";

const getAction = (state?: SubscriptionState | null) => {
  switch (state) {
    case SubscriptionState.UNSUBSCRIBED:
      return {
        text: "Watch",
        IconComponent: EyeOutlined,
      };
    case SubscriptionState.SUBSCRIBED:
      return {
        text: "Unwatch",
        IconComponent: EyeFilled,
      };
    case SubscriptionState.IGNORED:
      return {
        text: "Stop ignoring",
        IconComponent: EyeFilled,
      };
    default:
      return {
        text: "Watch",
        IconComponent: EyeOutlined,
      };
  }
};

export default getAction;
