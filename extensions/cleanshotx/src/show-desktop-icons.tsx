import { closeMainWindow, open } from "@raycast/api";

export default async function Command() {
  const url = "cleanshot://show-desktop-icons";
  open(url);
  await closeMainWindow();
}
