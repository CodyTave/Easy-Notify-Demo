import "./style.css";
import easyNotify from "/easyNotify.svg";
import { triggerNotif } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a class="logo href="https://vitejs.dev" target="_blank">
      <img src="${easyNotify}" class="logo" alt="Vite logo" />
    </a>
    <h1>Easy Notify Typescript</h1>
    <div class="card">
      <button id="success" type="button">Success</button>
      <button id="alert" type="button">Alert</button>
      <button id="error" type="button">Error</button>
    </div>
    <p class="read-the-docs">
      Click on the Notification type to trigger it
    </p>
    <a href="https://github.com/CodyTave/Easy-Notify" target="_blank">Github Repo</a>
  </div>
`;

triggerNotif(document.querySelector<HTMLButtonElement>("#success")!);
triggerNotif(document.querySelector<HTMLButtonElement>("#alert")!);
triggerNotif(document.querySelector<HTMLButtonElement>("#error")!);
