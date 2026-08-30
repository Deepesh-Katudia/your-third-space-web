import { PhoneFrame } from "@/components/phones/phone-frame";
import { RewardScreen } from "@/components/phones/screens/reward-screen";

export function RewardPhone({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame size="md" className={className} screenClassName="bg-[#161213]">
      <RewardScreen />
    </PhoneFrame>
  );
}
