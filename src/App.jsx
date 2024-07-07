import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessageSquare, Phone, Video } from "lucide-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Chats",
    to: "/",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    title: "Calls",
    to: "/calls",
    icon: <Phone className="h-4 w-4" />,
  },
  {
    title: "Video",
    to: "/video",
    icon: <Video className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;