import { region } from "firebase-functions";
import { default as next } from "next";

//const isDev = process.env.NODE_ENV !== "production";

const server = next({
  dev: false, //isDev,
  //location of .next generated after running -> yarn build
  conf: { distDir: ".next" },
});

const nextjsHandle = server.getRequestHandler();

export const nextServer = region("us-central1").https.onRequest((req, res) => {
  return server.prepare().then(() => nextjsHandle(req, res));
});
export const nextServerEW3 = region("europe-west3").https.onRequest(
  (req, res) => {
    return server.prepare().then(() => nextjsHandle(req, res));
  }
);
