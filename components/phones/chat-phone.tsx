import { PhoneFrame } from "@/components/phones/phone-frame";
import { ChatScreen } from "@/components/phones/screens/chat-screen";

export function ChatPhone({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame size="sm" className={className} screenClassName="bg-apricot">
      <ChatScreen />
    </PhoneFrame>
  );
}
