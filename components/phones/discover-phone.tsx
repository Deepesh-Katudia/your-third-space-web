import { PhoneFrame } from "@/components/phones/phone-frame";
import { DiscoverScreen } from "@/components/phones/screens/discover-screen";

export function DiscoverPhone({ className = "" }: { className?: string }) {
  return (
    // The screen paints its own ambient background, so the frame stays bare.
    <PhoneFrame size="md" className={`z-[2] ${className}`}>
      <DiscoverScreen />
    </PhoneFrame>
  );
}
