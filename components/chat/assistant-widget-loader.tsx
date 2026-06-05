"use client"

import dynamic from "next/dynamic";

// Deferred load — chat widget is not critical for initial render.
// ssr: false is valid here because this is a Client Component.
const AssistantWidget = dynamic(
    () => import("./assistant-widget").then((m) => m.AssistantWidget),
    { ssr: false }
);

export function AssistantWidgetLoader() {
    return <AssistantWidget />;
}
