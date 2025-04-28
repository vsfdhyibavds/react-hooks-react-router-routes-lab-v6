import { Blob } from "buffer";

if (typeof global.Blob === "undefined") {
  global.Blob = Blob;
}
