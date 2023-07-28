import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "~/utils/firebase/initialize";
import { v4 } from "uuid";
const upload = async (file: File): Promise<string> => {
  const storage = getStorage(app);
  const path =
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    "images/" +
    Date.now().toString() +
    "" +
    v4() +
    "" +
    "." +
    file.name.split(".").at(-1);

  const imgRef = ref(storage, path);
  const uploaded = await uploadBytes(imgRef, file);
  const downloadUrl = await getDownloadURL(uploaded.ref);
  return downloadUrl;
};
export default upload;
