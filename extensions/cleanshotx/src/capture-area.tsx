import { closeMainWindow, open } from "@raycast/api";

export default async function Command() {
  const url = "cleanshot://capture-area";
  open(url);
  await closeMainWindow();
}
