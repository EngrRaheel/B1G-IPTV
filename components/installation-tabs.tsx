"use client";

import { Check, Download, KeyRound, Search, Settings, Smartphone, Tv, Monitor, Box, Apple } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Step = { title: string; text: string };

const guides: Record<string, { title: string; note: string; steps: Step[] }> = {
  android: {
    title: "Android devices",
    note: "Install from Google Play or use the official B1G Player downloader code.",
    steps: [
      { title: "Find a compatible app", text: "Search Google Play for 9Xtream IPTV, IBO Player, XCIPTV, or another compatible player." },
      { title: "Choose your login method", text: "Select Xtream Codes API when available, then enter the details from your activation message." },
      { title: "Official B1G Player", text: "Install Downloader, enter code 5637737, and follow the on-screen installation prompts." },
      { title: "Start streaming", text: "Open the player, allow the playlist to load, and select Live TV, Movies, or Series." },
    ],
  },
  firestick: {
    title: "Firestick & Fire TV",
    note: "Prepare your Fire TV, install Downloader, and use the B1G Player code.",
    steps: [
      { title: "Allow app installation", text: "Open Settings, My Fire TV, Developer Options, and allow apps from unknown sources." },
      { title: "Install Downloader", text: "Find Downloader on the Fire TV home screen and grant the requested permissions." },
      { title: "Enter the download code", text: "Open Downloader, enter 5637737, then download and install B1G Player." },
      { title: "Log in", text: "Open B1G Player and enter the account details provided after activation." },
    ],
  },
  tv: {
    title: "Smart & LG TV",
    note: "Use a compatible app from your television's app store.",
    steps: [
      { title: "Open the app store", text: "Use the LG Content Store, Samsung App Store, or Google Play on Android TV." },
      { title: "Install a player", text: "Search for IBO Player, CR7 Player, IPTV Smarters, or a compatible alternative." },
      { title: "Add your account", text: "Choose Xtream Codes or M3U and enter the login details supplied by B1G IPTV." },
      { title: "Load channels", text: "Save the profile and allow a minute for the channel list to finish loading." },
    ],
  },
  apple: {
    title: "Apple devices",
    note: "Set up your subscription on iPhone, iPad, Apple TV, or Mac.",
    steps: [
      { title: "Visit the App Store", text: "Search for Smarters Player Lite, IBO Player, or another compatible IPTV player." },
      { title: "Install the app", text: "Download the player and open it after installation." },
      { title: "Add your credentials", text: "Enter the M3U or Xtream Codes details from your activation message." },
      { title: "Start watching", text: "Wait for the playlist to load, then choose a channel or on-demand title." },
    ],
  },
  windows: {
    title: "Windows PC",
    note: "Use a compatible app on Windows or macOS.",
    steps: [
      { title: "Choose a player", text: "Install IBO Player, IPTV Smarters Expert, VLC, or another compatible desktop player." },
      { title: "Add a profile", text: "Select Xtream Codes API or M3U playlist, depending on the app." },
      { title: "Enter your details", text: "Copy the credentials provided after your subscription is activated." },
      { title: "Save and stream", text: "Save the profile and open Live TV, Movies, or Series." },
    ],
  },
  mag: {
    title: "MAG Box & STB",
    note: "Support will connect your device to the B1G IPTV portal.",
    steps: [
      { title: "Find the MAC address", text: "Open Settings and System Info. A MAG address often begins with 00:1A:79." },
      { title: "Contact support", text: "Send the MAC address to the support team through WhatsApp." },
      { title: "Enter the portal URL", text: "Add the URL supplied by support in your MAG portal settings." },
      { title: "Restart the device", text: "Reboot the box and allow the channel list to load." },
    ],
  },
};

const tabs = [
  { value: "android", label: "Android", icon: Smartphone },
  { value: "firestick", label: "Firestick", icon: Download },
  { value: "tv", label: "Smart TV", icon: Tv },
  { value: "apple", label: "Apple", icon: Apple },
  { value: "windows", label: "Windows", icon: Monitor },
  { value: "mag", label: "MAG Box", icon: Box },
];

const stepIcons = [Settings, Search, KeyRound, Check];

export function InstallationTabs() {
  return (
    <Tabs defaultValue="android" className="installation-tabs">
      <TabsList className="installation-tab-list">
        {tabs.map(({ value, label, icon: Icon }) => (
          <TabsTrigger key={value} value={value} className="installation-tab-trigger">
            <Icon aria-hidden="true" /> {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(guides).map(([value, guide]) => (
        <TabsContent key={value} value={value} className="installation-panel">
          <div className="installation-panel-head">
            <div>
              <span className="eyebrow">Device setup</span>
              <h2>{guide.title}</h2>
              <p>{guide.note}</p>
            </div>
            {value === "android" || value === "firestick" ? <div className="download-code"><span>Downloader code</span><strong>5637737</strong></div> : null}
          </div>
          <div className="guide-steps">
            {guide.steps.map((step, index) => {
              const Icon = stepIcons[index] || Check;
              return (
                <article key={step.title}>
                  <span className="guide-step-icon"><Icon aria-hidden="true" /></span>
                  <div><small>Step {index + 1}</small><h3>{step.title}</h3><p>{step.text}</p></div>
                </article>
              );
            })}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
