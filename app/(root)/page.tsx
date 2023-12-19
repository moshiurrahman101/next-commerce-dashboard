import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="text-center">
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}

export default SetupPage;
