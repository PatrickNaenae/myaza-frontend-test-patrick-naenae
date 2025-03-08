"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, MessageCircle, Loader2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import TourGuide from "@/components/tour-guide";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatIcon, setShowChatIcon] = useState(false);
  const chatIconRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [startTour, setStartTour] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour");
    if (!hasSeenTour) {
      setShowWelcomeModal(true);
    }
  }, []);

  const handleStartTour = () => {
    setShowWelcomeModal(false);
    setStartTour(true);
  };

  const handleEndTour = () => {
    setStartTour(false);
    localStorage.setItem("hasSeenTour", "true");
  };

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    reload,
    error,
  } = useChat({
    api: "/api/gemini",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowChatIcon(true);
      } else {
        setIsChatOpen(false);
        setShowChatIcon(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <AnimatePresence>
        {showWelcomeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-custom-purple-dark backdrop-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
            >
              <h2 className="text-2xl font-bold mb-4">Welcome to Uifry! 🎉</h2>
              <p className="text-black mb-6">
                Get ready to explore our universe😎! 🌌 We’re about to take you
                on a quick, fun tour of the app to show you all the cool
                features that’ll make you want to come back😁. Click{" "}
                <strong>Continue</strong> and let’s blast off! 🚀
              </p>
              <div className="flex justify-end">
                <Button
                  onClick={handleStartTour}
                  className="cursor-pointer bg-custom-purple-light hover:bg-custom-purple-dark text-black hover:text-custom-muted"
                >
                  Continue
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {startTour && (
        <TourGuide
          start={startTour}
          setStartTour={setStartTour}
          onTourEnd={handleEndTour}
        />
      )}

      <div className="w-full flex min-h-full">
        <Sidebar />
        <main className="w-screen min-h-full h-screen ml-0 md:ml-[250px]">
          {children}
          {showChatIcon && (
            <motion.button
              ref={chatIconRef}
              onClick={toggleChat}
              className="fixed bottom-8 right-8 p-3 bg-custom-purple-light text-white rounded-full shadow-lg hover:bg-custom-purple-dark transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.button>
          )}

          <AnimatePresence>
            {isChatOpen && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="fixed bottom-8 right-2 md:right-8 w-[95vw] md:w-[350px] h-[500px] bg-custom-purple-light rounded-lg shadow-lg flex flex-col"
              >
                <CardHeader className="items-center justify-between p-4 border-b">
                  <CardTitle className="text-custom-purple-dark text-lg font-semibold">
                    Chat with Uifry AI
                  </CardTitle>
                  <button
                    onClick={toggleChat}
                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="p-4 h-[370px]">
                    {messages?.length === 0 && (
                      <p className="text-base mt-36 w-full h-full flex items-center justify-center">
                        No Message yet
                      </p>
                    )}

                    {messages?.map((message, index) => (
                      <div
                        key={index}
                        className={`mb-4 ${
                          message.role === "user" ? "text-right" : "text-left"
                        }`}
                      >
                        <div
                          className={`inline-block p-2 max-w-[70%] rounded-lg ${
                            message.role === "user"
                              ? "text-custom-purple-dark bg-white"
                              : "bg-custom-purple text-custom-muted"
                          }`}
                        >
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              strong({ children }) {
                                return (
                                  <strong className="font-semibold">
                                    {children}
                                  </strong>
                                );
                              },
                              ul({ children }) {
                                return (
                                  <ul className="list-disc pl-5">{children}</ul>
                                );
                              },
                              ol({ children }) {
                                return (
                                  <ol className="list-decimal pl-5">
                                    {children}
                                  </ol>
                                );
                              },
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      </div>
                    ))}

                    {isLoading && (
                      <div className="w-full flex gap-3 items-center justify-center">
                        <Loader2 className="animate-spin size-5 text-custom-purple-dark" />
                        <button
                          className="underline"
                          type="button"
                          onClick={() => stop()}
                        >
                          abort
                        </button>
                      </div>
                    )}

                    {error && (
                      <div className="w-full flex gap-3 items-center justify-center">
                        <div>An error occurred</div>
                        <button
                          className="underline"
                          type="button"
                          onClick={() => reload()}
                        >
                          Retry
                        </button>
                      </div>
                    )}

                    <div ref={scrollRef}></div>
                  </ScrollArea>
                </CardContent>
                <CardFooter>
                  <form
                    onSubmit={handleSubmit}
                    className="flex w-full items-center space-x-2"
                  >
                    <Input
                      value={input}
                      onChange={handleInputChange}
                      placeholder="Start a chat..."
                      className="flex-1 border border-custom-purple pl-4 pr-4 py-2 md:w-[360px] rounded-lg focus:ring-2 focus:ring-custom-purple-dark placeholder:text-primary"
                    />
                    <Button
                      type="submit"
                      className="p-2 size-9"
                      disabled={isLoading}
                      size="icon"
                    >
                      <Send className="size-4" />
                    </Button>
                  </form>
                </CardFooter>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}
