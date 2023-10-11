import { renderToastNotification, NotificationType } from "easy-notify-ts";
export function triggerNotif(element: HTMLButtonElement) {
  element.addEventListener("click", () => {
    if (element.id === "success") {
      renderToastNotification({
        type: NotificationType.Success,
        title: "Success!",
        content: `Task Completed Successfully.`,
      });
    }
    if (element.id === "alert") {
      renderToastNotification({
        type: NotificationType.Alert,
        title: "Alert!",
        content: `Warning Something needs attending to.`,
      });
    }
    if (element.id === "error") {
      renderToastNotification({
        type: NotificationType.Error,
        title: "Error!",
        content: `Something went wrong.`,
      });
    }
  });
}
