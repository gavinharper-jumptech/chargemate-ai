import { useChatConfig } from "@/context/ChatConfigContext";

const WelcomeSection = () => {
  const { welcomeTitle, welcomeMessage } = useChatConfig();

  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 py-6 text-center">
      <h2 className="text-xl font-semibold text-foreground">
        {welcomeTitle}
      </h2>
      <p className="max-w-md text-muted-foreground">
        {welcomeMessage}
      </p>
    </div>
  );
};

export default WelcomeSection;
