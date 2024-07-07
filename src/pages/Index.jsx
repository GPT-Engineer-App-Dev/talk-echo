import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Phone, Send, Video } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <img
            alt="Contact Avatar"
            className="rounded-full"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <h2 className="text-xl font-bold">Contact Name</h2>
        </div>
        <div className="flex space-x-2">
          <Button size="icon" variant="ghost">
            <Phone className="h-4 w-4" />
            <span className="sr-only">Voice call</span>
          </Button>
          <Button size="icon" variant="ghost">
            <Video className="h-4 w-4" />
            <span className="sr-only">Video call</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4 space-y-4">
        <div className="flex justify-end">
          <div className="bg-blue-500 text-white rounded-lg p-2 max-w-[70%]">
            Hello! How are you?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-gray-200 rounded-lg p-2 max-w-[70%]">
            Hi! I'm doing great, thanks for asking. How about you?
          </div>
        </div>
        {/* Add more messages here */}
      </main>
      <footer className="p-4 border-t">
        <form className="flex space-x-2">
          <Button size="icon" variant="ghost" type="button">
            <Paperclip className="h-4 w-4" />
            <span className="sr-only">Attach file</span>
          </Button>
          <Input className="flex-1" placeholder="Type a message" type="text" />
          <Button size="icon" type="submit">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </footer>
    </div>
  );
};

export default Index;