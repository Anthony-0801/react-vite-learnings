import React, { useState } from "react";

export default function DisplayMessages() {
  const [messages, setMessages] = useState("This is a message");

  return [messages];
}
