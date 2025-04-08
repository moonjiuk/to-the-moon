"use client";
import { db } from "@/app/components/Firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";

// ✅ 메시지 타입 정의
interface Message {
  text: string;
  timestamp: Timestamp | null;
  alignment: "left" | "right";
}

export default function ChatRoom() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false); // 3초 쿨타임

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          text: data.text,
          timestamp: data.timestamp ?? null,
          alignment: data.alignment === "right" ? "right" : "left",
        };
      });
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || isSending) return;

    setIsSending(true); // 3초 쿨타임
    const alignment: "left" | "right" = Math.random() > 0.5 ? "left" : "right";

    await addDoc(collection(db, "messages"), {
      text: input,
      timestamp: serverTimestamp(),
      alignment,
    });

    setInput("");

    setTimeout(() => {
      setIsSending(false);
    }, 3000);
  };

  return (
    <section id="chat-room">
      <div className="chat-box">
        <ul>
          {messages.map((msg, idx) => (
            <li key={idx} className={msg.alignment}>
              {msg.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Talk with Bunnies"
          maxLength={200}
        />
        <button onClick={sendMessage} disabled={isSending}>
          {isSending ? "Sending..." : "Say it"}
        </button>
      </div>
    </section>
  );
}
