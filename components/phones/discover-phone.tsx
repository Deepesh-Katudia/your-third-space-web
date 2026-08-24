import { PhoneFrame } from "@/components/phones/phone-frame";
import { DiscoverScreen } from "@/components/phones/screens/discover-screen";

export function DiscoverPhone({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame
      size="md"
      className={`z-[2] ${className}`}
      screenClassName="bg-sunrise"
    >
      <DiscoverScreen />
    </PhoneFrame>
  );
}
